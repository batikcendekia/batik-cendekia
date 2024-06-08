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
            <div class="col-6">
              <h1>Dari mana asal muasal batik?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, doloremque odio! Illo libero vel numquam saepe quibusdam sed explicabo sequi, officia nesciunt cum alias eius? Fugiat suscipit error ipsam nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum similique impedit minus tempora, nemo iure voluptas excepturi quod possimus, dolorem veritatis ipsam nihil aperiam fugit eveniet repellat sint, architecto vitae.</p>
            </div>
            <div class="col-6">
              <img src="img/batik.jpg" alt="">
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container mt-lg-5">
          <div class="row">
            <div class="content-title">
              <h1>Batik Gallery</h1>
            </div>
          </div>
        </div>
        <div class="container mt-lg-5">
          <div class="row text-center align-items-center justify-content-center">
            <gallery-batik></gallery-batik>
          </div>
        </div>
        <div class="container mb-lg-5">
          <div class="row">
            <div class="col ">
              <center><a href="#/detail"><button class="btn btn-danger">Hallo guys</button></a></center>
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
