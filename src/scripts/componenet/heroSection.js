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
            <div class="col-lg-6 justify-items-center align-items-center">
              <div class="animated hero-content text-center">
                <h3>Selamat Datang</h3>
                <h1>Batik Cendikia</h1>
                <img class="hero-img" src="img/ornamen-garis.png" alt="">
                <h2>Jaga Budaya & Harta Bangsa</h2>
                <h2 class="with-lines">Indonesia 2024</h2>
                <div class="text-center button-hero">
                  <a href="#" class="btn-get-started scrollto">Explore Now</a>
                  &nbsp;
                  <a href="#/workshop" class="btn-get-started scrollto">Explore Event</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
          <defs>
            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
          </defs>
          <g class="wave1">
            <use xlink:href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)"></use>
          </g>
          <g class="wave2">
            <use xlink:href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)"></use>
          </g>
          <g class="wave3">
            <use xlink:href="#wave-path" x="50" y="9" fill="#fff"></use>
          </g>
        </svg>
      </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
