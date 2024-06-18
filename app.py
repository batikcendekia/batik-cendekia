from flask import Flask, render_template, request, redirect, url_for, jsonify, flash, session
from mysql import connector
from telegram import Bot
import json
import os
import asyncio
import logging
import threading

from werkzeug.utils import secure_filename
from functools import wraps
from datetime import datetime, date, time, timedelta

app = Flask(__name__)

# rooting
app.secret_key = 'tahutempe'
conn = connector.connect(
    host='localhost',
    user='root',
    passwd='',
    database='batik_cendekia'
)
cursor = conn.cursor()

ALLOWED_EXTENSIONS = {'jpg', 'jpeg', 'png'}
UPLOAD_FOLDER = 'static/img/data_upload'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


def get_telegram_settings():
    try:
        cursor = conn.cursor(dictionary=True)
        cursor.execute('SELECT bot_token, bot_id FROM admin')
        settings = cursor.fetchone()
        cursor.close()  # Tutup cursor setelah mengambil hasil query

        if settings:
            return settings['bot_token'], settings['bot_id']
        else:
            raise Exception(
                "Failed to retrieve Telegram settings from the database.")
    except Exception as e:
        logging.error(
            "Terjadi kesalahan saat mengambil pengaturan Telegram: %s", e)
        return None, None


telegram_bot_token, telegram_chat_id = get_telegram_settings()

if not telegram_bot_token or not telegram_chat_id:
    raise Exception("Failed to retrieve Telegram settings from the database.")

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


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.template_filter('thousand_separator')
def thousand_separator(number):
    return f"{number:,.0f}".replace(',', '.')


@app.template_filter('format_date')
def format_date(date_str):
    if isinstance(date_str, date):
        date_obj = datetime.combine(date_str, time.min)
    else:
        date_obj = datetime.strptime(date_str, '%Y-%m-%d')

    return date_obj.strftime('%d-%m-%Y')


@app.template_filter('format_time')
def format_time(time_str):
    if isinstance(time_str, timedelta):
        hours, remainder = divmod(time_str.seconds, 3600)
        minutes, seconds = divmod(remainder, 60)
        return '{:02}:{:02}'.format(hours, minutes)
    else:
        time_obj = datetime.strptime(time_str, '%H:%M:%S')
        return time_obj.strftime('%H:%M')

# end rooting


@app.route('/')
def home():
    base_template = "base-user.html" if session.get(
        'loggedin') else "base.html"
    return render_template('index.html', active_page='home', base_template=base_template)


@app.route('/workshop')
def workshop():
    base_template = "base-user.html" if session.get(
        'loggedin') else "base.html"
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM workshop')
    event_list = cursor.fetchall()
    return render_template('workshop.html', active_page='workshop', base_template=base_template, event_list=event_list)


@app.route('/detail')
def detail():
    return render_template('detail.html')


@app.route('/daftar/')
def daftar():
    return render_template('daftar.html')


@app.route('/modal/')
def modal():
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM workshop')
    event_list = cursor.fetchall()
    return render_template('coba_modal.html', event_list=event_list)


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
                session.pop('phone', None)
                return redirect(url_for('login'))
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
                session['username'] = username
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


@app.route('/pesan', methods=['GET', 'POST'])
def pesan():
    if 'loggedin' not in session:
        return redirect(url_for('login'))
    username = session['username']
    paket = request.form['paket']
    jumlah_tiket = int(request.form['jumlah_tiket'])
    harga_per_tiket = int(request.form['harga_per_tiket'])
    total_harga = jumlah_tiket * harga_per_tiket

    data = (username, paket, jumlah_tiket, total_harga)
    table = "INSERT INTO pesanan (username, nama_event, jumlah_tiket, total_harga) VALUES (%s, %s, %s, %s)"

    if insert_to_database(table, data):
        message = f"Ada Pesanan Baru:\nNama: {username}\nWorkshop: {
            paket}\nJumlah tiket: {jumlah_tiket}\nTotal Harga: {total_harga}"
        background_thread = threading.Thread(
            target=send_telegram_message_sync, args=(telegram_chat_id, message))
        background_thread.start()
        background_thread.join()
        return redirect(url_for('workshop'))
    else:
        return "Terjadi kesalahan saat memproses konsultasi", 500


# admin
def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'admin' not in session:
            return redirect('/admin_login')
        return f(*args, **kwargs)
    return decorated_function


@app.route('/admin_login', methods=['GET', 'POST'])
def admin_login():
    if 'admin' in session:
        return redirect('/admin')
    error = None
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        cursor = conn.cursor()
        cursor.execute(
            "SELECT * FROM admin WHERE username = %s AND password = %s", (username, password))
        admin = cursor.fetchone()
        cursor.close()
        if admin:
            session['admin'] = admin
            return redirect('/admin')
        else:
            error = 'Username atau password salah'
    return render_template('login-admin.html', error=error)

# Logout admin


@app.route('/logout-admin')
def logout_admin():
    # Hapus admin dari session
    session.pop('admin', None)
    return redirect('/admin_login')
# end admin


@app.route('/admin')
@login_required
def dashboard():
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM workshop')
    event_list = cursor.fetchall()

    cursor.execute('SELECT COUNT(*) FROM workshop')
    jml_workshop = cursor.fetchone()[0]

    cursor.execute('SELECT COUNT(*) FROM pesanan')
    jml_pesanan = cursor.fetchone()[0]

    cursor.execute('SELECT SUM(total_harga) FROM pesanan')
    pendapatan = cursor.fetchone()[0]

    if pendapatan is None:
        pendapatan = 0

    cursor.execute("""
        SELECT pesanan.username, pesanan.nama_event, pesanan.jumlah_tiket, pesanan.total_harga, biodata.nama_awal, biodata.nama_akhir
        FROM pesanan
        INNER JOIN accounts ON pesanan.username = accounts.username
        INNER JOIN biodata ON accounts.phone = biodata.phone; 
    """)
    pesanan_workshop = cursor.fetchall()
    cursor.close()
    return render_template('dashboard.html', event_list=event_list, jml_workshop=jml_workshop, telegram_bot_token=telegram_bot_token, telegram_chat_id=telegram_chat_id, pesanan_workshop=pesanan_workshop, jml_pesanan=jml_pesanan, pendapatan=pendapatan)


@app.route('/hapus_event/<int:id>', methods=['GET', 'POST'])
@login_required
def hapus_event(id):
    cursor.execute('DELETE FROM workshop WHERE id = %s', (id,))
    conn.commit()
    return redirect('/admin')


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
    return render_template('dashboard.html')


@app.route('/update_workshop', methods=['POST'])
@login_required
def update_workshop():
    id = request.form['id']
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
        cursor.execute("UPDATE workshop SET nama_event=%s, tanggal_mulai=%s, tanggal_berakhir=%s, harga=%s, lokasi=%s, jam_mulai=%s, jam_berakhir=%s, deskripsi=%s, stock=%s, gambar=%s WHERE id=%s",
                       (event, tgl_mulai, tgl_akhir, harga, lokasi, jam_mulai, jam_akhir, deskripsi, stock, filename, id))
    else:
        cursor.execute("UPDATE workshop SET nama_event=%s, tanggal_mulai=%s, tanggal_berakhir=%s, harga=%s, lokasi=%s, jam_mulai=%s, jam_berakhir=%s, deskripsi=%s, stock=%s WHERE id=%s",
                       (event, tgl_mulai, tgl_akhir, harga, lokasi, jam_mulai, jam_akhir, deskripsi, stock, id))

    conn.commit()
    return redirect('/admin')


@app.route('/update_telegram_api', methods=['POST'])
@login_required
def update_telegram_api():
    global telegram_bot_token, telegram_chat_id
    telegram_bot_token = request.form['telegram_bot_token']
    telegram_chat_id = request.form['telegram_chat_id']

    cursor = conn.cursor()
    cursor.execute('UPDATE admin SET bot_token = %s, bot_id = %s',
                   (telegram_bot_token, telegram_chat_id))
    conn.commit()
    cursor.close()

    flash('Telegram API settings updated successfully', 'success')
    return redirect('/admin')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
