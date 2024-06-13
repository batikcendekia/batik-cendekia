from flask import Flask, render_template, request, redirect, url_for, jsonify, flash, session
from mysql import connector
from telegram import Bot
import json
import os
import asyncio
import logging
import threading
import requests
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)

app.secret_key = 'tahutempe'
conn = connector.connect(
    host='localhost',
    user='root',
    passwd='',
    database='batik_cendekia'
)
cursor = conn.cursor()


telegram_bot_token = '6672887281:AAH3siLmGzHtMERIIlbk6jX-FppwkunKy20'
telegram_chat_id = '-4111644448'
ALLOWED_EXTENSIONS = {'jpg', 'jpeg', 'png'}
UPLOAD_FOLDER = 'static/img/data_upload'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

bot = Bot(token=telegram_bot_token)


async def send_telegram_message(chat_id, message):
    try:
        await bot.send_message(chat_id=chat_id, text=message)
        logging.info("Pesan berhasil dikirim ke Telegram")
    except Exception as e:
        logging.error(
            "Terjadi kesalahan saat mengirim pesan ke Telegram: %s", e)


def send_telegram_message_sync(chat_id, message):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    loop.run_until_complete(send_telegram_message(chat_id, message))


def insert_to_database(table, data):
    try:
        cursor = conn.cursor()
        cursor.execute(table, data)
        conn.commit()
        return True
    except connector.Error as e:
        logging.error(
            "Terjadi kesalahan saat memasukkan data ke database: %s", e)
        return False
    finally:
        cursor.close()
        conn.close()


@app.route('/')
def home():
    base_template = "base-user.html" if session.get(
        'loggedin') else "base.html"
    return render_template('index.html', active_page='home', base_template=base_template)


@app.route('/workshop')
def workshop():
    return render_template('workshop.html', active_page='workshop')


@app.route('/detail')
def detail():
    return render_template('detail.html')


@app.route('/admin')
def admin():
    return render_template('admin.html')


@app.route('/tambah_mobil')
def tambah_mobil():
    return render_template('tambah_mobil.html')

# @app.route('/biodata/')
# def biodata():
#     return render_template('biodata.html')


@app.route('/daftar/')
def daftar():
    return render_template('daftar.html')

@app.route('/modal/')
def modal():
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM workshop')
    mobil_list = cursor.fetchall()
    cursor.close()
    return render_template('coba_modal.html', mobil_list=mobil_list)

@app.route('/api/event/<int:event_id>')
def get_event(event_id):
    try:
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM workshop WHERE id = %s", (event_id,))
        event = cursor.fetchone()
        if event:
            return jsonify(event)
        else:
            return jsonify({'error': 'Event not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()



# @app.route('/login/')
# def login():
#     return render_template('login.html')


@app.route('/api/batik')
def get_batik():
    try:
        file_path = os.path.join(os.getcwd(), 'data', 'batik1.json')
        with open(file_path, encoding='utf-8') as f:
            data = json.load(f)
        return jsonify(data['batik'][:6])
    except FileNotFoundError:
        return jsonify({'error': 'File not found'}), 404
    except json.JSONDecodeError:
        return jsonify({'error': 'Error decoding JSON'}), 500
    except Exception as e:
        return jsonify({'error': 'Something went wrong'}), 500


@app.route('/all/api/batik')
def get_all_batik():
    try:
        file_path = os.path.join(os.getcwd(), 'data', 'batik.json')
        with open(file_path, encoding='utf-8') as f:
            data = json.load(f)
        return jsonify(data['batik'][:51])
    except FileNotFoundError:
        return jsonify({'error': 'File not found'}), 404
    except json.JSONDecodeError:
        return jsonify({'error': 'Error decoding JSON'}), 500
    except Exception as e:
        return jsonify({'error': 'Something went wrong'}), 500


@app.route('/api/batik/<int:batik_id>')
def get_batik_detail(batik_id):
    try:
        file_path = os.path.join(os.getcwd(), 'data', 'batik1.json')
        with open(file_path, encoding='utf-8') as f:
            data = json.load(f)
        batik = next((b for b in data['batik'] if b['id'] == batik_id), None)
        if batik:
            return jsonify(batik)
        else:
            return jsonify({'error': 'Batik not found'}), 404
    except FileNotFoundError:
        return jsonify({'error': 'File not found'}), 404
    except json.JSONDecodeError:
        return jsonify({'error': 'Error decoding JSON'}), 500
    except Exception as e:
        return jsonify({'error': 'Something went wrong'}), 500


@app.route('/biodata/', methods=['GET', 'POST'])
def biodata():
    if request.method == 'GET':
        return render_template('biodata.html')
    else:
        phone = request.form['phone']
        awal = request.form['awal']
        akhir = request.form['akhir']
        temphir = request.form['temphir']
        taghir = request.form['taghir']
        dusun = request.form['dusun']
        provinsi = request.form['provinsi']
        kota = request.form['kota']
        kecamatan = request.form['kecamatan']
        kelurahan = request.form['kelurahan']

        session['phone'] = phone

        cursor = conn.cursor()
        cursor.execute("SELECT * FROM biodata WHERE phone = %s", (phone,))
        data = cursor.fetchone()

        if data is None:
            cursor.execute("INSERT INTO biodata (phone, nama_awal, nama_akhir, tempat_lahir, tanggal_lahir, dusun, provinsi, kabupaten, kecamatan, kelurahan) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
                           (phone, awal, akhir, temphir, taghir, dusun, provinsi, kota, kecamatan, kelurahan))
            conn.commit()
        else:
            flash('No. Telp Sudah Digunakan', 'danger')
            return render_template('biodata.html')
        return redirect(url_for('pendaftaran'))


@app.route('/pendaftaran/', methods=['GET', 'POST'])
def pendaftaran():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']

        if 'phone' in session:
            phone = session['phone']
            cursor = conn.cursor()
            cursor.execute(
                'SELECT * FROM accounts WHERE username=%s OR email=%s', (username, email, ))
            akun = cursor.fetchone()
            if akun is None:
                cursor.execute('INSERT INTO accounts (username, email, password, phone) VALUES (%s, %s, %s, %s)', (
                    username, email, password, phone))
                conn.commit()
                flash('Registrasi Berhasil', 'success')
                session.pop('phone', None)  # Hanya dihapus jika berhasil
            else:
                flash('Username atau Email sudah digunakan', 'danger')
        else:
            flash('Data No.Telp tidak sama dengan biodata', 'danger')
    return render_template('daftar.html')


@app.route('/login/', methods=['GET', 'POST'])
def login():
    msg = ''
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form:
        username = request.form['username']
        password = request.form['password']
        cursor = conn.cursor()
        cursor.execute(
            'SELECT * FROM accounts WHERE username = %s AND password = %s', (username, password,))
        account = cursor.fetchone()
        if account:
            session['username'] = username
            session['password'] = password
            cursor.execute('SELECT accounts.phone, biodata.nama_awal FROM accounts INNER JOIN biodata ON accounts.phone=biodata.phone where accounts.username = %s and accounts.password = %s', (username, password,))
            biodata = cursor.fetchone()
            if biodata:
                session['username'] = biodata[1]
                session['phone'] = biodata[0]
                session['loggedin'] = True
            return redirect(url_for('home'))
        else:
            msg = 'Username/password salah!'
    return render_template('login.html', msg=msg)


@app.route('/logout_user')
def logout_user():
    session.pop('username', None)
    session.pop('password', None)
    session.pop('loggedin', None)
    return redirect(url_for('login'))


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/add_workshop', methods=['GET', 'POST'])
def add_workshop():
    if request.method == "POST":
        event = request.form['event']
        harga = request.form['harga']
        tgl_mulai = request.form['tgl_mulai']
        tgl_akhir = request.form['tgl_akhir']
        jam_mulai = request.form['jam_mulai']
        jam_akhir = request.form['jam_akhir']
        lokasi = request.form['lokasi']
        stock = request.form['stock']
        deskripsi = request.form['deskripsi']
        gambar = request.files['gambar']

        if gambar and allowed_file(gambar.filename):
            filename = secure_filename(gambar.filename)
            gambar_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            gambar.save(gambar_path)
            cursor.execute("INSERT INTO workshop (nama_event, tanggal_mulai, tanggal_berakhir, harga, lokasi, jam_mulai, jam_berakhir, deskripsi, stock, gambar) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
                           (event, tgl_mulai, tgl_akhir, harga, lokasi, jam_mulai, jam_akhir, deskripsi, stock, filename))
            conn.commit()
            return redirect('/admin')
    return render_template('tambah_mobil.html')


if __name__ == '__main__':
    app.run(debug=True)
