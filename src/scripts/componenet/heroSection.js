class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
   <section id="hero" class="hero">
    <div class="container">
      <div class="row">
        <div class="col-lg-6"></div>
        <div class="col-lg-6 d-flex">
          <div data-aos="zoom-out" class="animated hero-content">
            <h3>Selamat Datang</h3>
            <h1>Batik Cendikia</h1>
            <img class="hero-img" src="img/ornamen-garis.png" alt="">
            <h2>Jaga Budaya & Harta Bangsa</h2>
            <h2 class="with-lines">Indonesia 2024</h2>
            <div class="text-center button-hero">
              <a href="https://storage.googleapis.com/batikin-bucket/BatikIn.1.1.apk" target="_blank" class="btn-get-started scrollto">Explore Now</a>
              &nbsp
              <a href="https://app.batikin.site" target="_blank" class="btn-get-started scrollto">Explore Event</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none" style>
      <defs>
        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
      </defs>
      <g class="wave1">
        <use xlink:href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)">
      </g>
      <g class="wave2">
        <use xlink:href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)">
      </g>
      <g class="wave3">
        <use xlink:href="#wave-path" x="50" y="9" fill="#fff">
      </g>
    </svg>
  </section>
      
    `;
  }
}

customElements.define('hero-section', HeroSection);
