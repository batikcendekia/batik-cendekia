class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="main-banner" data-aos="fade-down" data-aos-duration="1000" id="top" style="overflow-x: hidden !important">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-12 align-self-center">
                  <div class="left-content show-up header-text">
                    <div class="row text-center">
                      <div class="col-lg-12 hero-content">
                        <h1>Transformasikan Bisnis Anda ke Era Digital</h1>
                        <p>Solusi Terpercaya untuk Pembuatan Website yang Menarik dan Efektif <br />Pastinya, Konversi Optimal dari Iklan yang Kami Perbaiki</p>
                      </div>
                      <div class="col-lg-12">
                        <div class="hero-button first-button">
                          <a href="#feacture">Mulai Sekarang</a>
                        </div>
                        <div class="hero-button">
                          <a href="#pricing" style="background-color: #1a202c">Lihat Harga</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
