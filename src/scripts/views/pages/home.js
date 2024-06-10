import '../../componenet/heroSection';
import '../../componenet/listGallery';
import '../../componenet/modalBatik';
import fetchDataAndDisplay from '../../api/config';

const Home = {
  async render() {
    return `
      <hero-section></hero-section>
      <section id="thecontent" class="about-batik">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-6">
                <h1>Dari mana asal muasal batik?</h1>
                <p>Batik adalah seni tradisional Indonesia yang berkembang pesat pada masa Kerajaan Majapahit dan penyebaran Islam di Jawa. Seni ini berkembang lebih lanjut pada masa Kesultanan Mataram, Kasunanan Surakarta, dan Kesultanan Yogyakarta. Bukti tertua batik berasal dari Ponorogo, yang kemudian menyebar ke Jawa Tengah. Teknik batik dikenal lebih dari 1.000 tahun, kemungkinan berasal dari Mesir kuno atau Sumeria, dan meluas di Afrika Barat serta Asia. Pada 2009, UNESCO mengakui batik sebagai Warisan Budaya Takbenda Kemanusiaan.</p>
              </div>
              <div class="col-12 col-md-6">
                <img src="img/batik.jpg" alt="">
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container mt-5">
            <div class="row">
              <div class="content-title">
                <h1>Batik Gallery</h1>
              </div>
            </div>
          </div>
          <div class="container mt-5">
            <div class="row text-center align-items-center justify-items-center">
              <gallery-batik></gallery-batik>
            </div>
          </div>
          <div class="container mb-5">
            <div class="row">
              <div class="col text-center">
                <a href="#/detail"><button class="btn btn-danger">Hallo guys</button></a>
              </div>
            </div>
          </div>
        </section>
        <modal-hero></modal-hero>
    `;
  },
  async afterRender() {
    // Panggil fetchDataAndDisplay setelah render selesai
    await fetchDataAndDisplay();
  },
};

export default Home;
