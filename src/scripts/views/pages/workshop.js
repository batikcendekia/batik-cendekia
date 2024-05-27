import '../../componenet/heroSection';

const Workshop = {
  async render() {
    return ` 
    <hero-section></hero-section>
    <section class="workshop">
      <h1>Kenapa Belajar Batik</h1>
      <div class="container">
        <ul class="features_list d-md-flex flex-wrap">
          <li class="features_list-item col-md-3" data-order="1" data-aos="fade-up">
            <div class="card-paket">
              <div class="content">
                <div class="card_media">
                  <i class="fa-solid fa-file icon"></i>
                </div>
                <div class="card_main">
                  <h5 class="card_main-title">gabut</h5>
                </div>
              </div>
            </div>
          </li>
          <li class="features_list-item col-md-3" data-order="1" data-aos="fade-up">
            <div class="card-paket">
              <div class="content">
                <div class="card_media">
                  <i class="fa-solid fa-file icon"></i>
                </div>
                <div class="card_main">
                  <h5 class="card_main-title">gabut</h5>
                </div>
              </div>
            </div>
          </li>
          <li class="features_list-item col-md-3" data-order="2" data-aos="fade-up">
            <div class="card-paket">
              <div class="content">
                <div class="card_media">
                  <i class="fa-solid fa-lock icon"></i>
                </div>
                <div class="card_main">
                  <h5 class="card_main-title">gabut</h5>
                </div>
              </div>
            </div>
          </li>
          <li class="features_list-item col-md-3" data-order="3" data-aos="fade-up">
            <div class="card-paket">
              <div class="content">
                <div class="card_media">
                  <i class="fa-solid fa-envelope icon"></i>
                </div>
                <div class="card_main">
                  <h5 class="card_main-title">gabut</h5>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class= "kelas-batik">
      <h1>Urutan Kelas</h1>
      <div class="container">
        <div class="row">
          <div class="col-4 text-center">
            <div class="content-batik">
            <a href="#/detail">
                <img src="logo.png" alt="">
                <h3>Kelas mewarnai</h3>
              </a>
            </div>
          </div>
          <div class="col-4 text-center">
            <div class="content-batik">
              <a href="#/detail">
                <img src="logo.png" alt="">
                <h3>Kelas mewarnai</h3>
              </a>
            </div>
          </div>
          <div class="col-4 text-center">
            <div class="content-batik">
              <a href="#/detail">
                <img src="logo.png" alt="">
                <h3>Kelas mewarnai</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Workshop;
