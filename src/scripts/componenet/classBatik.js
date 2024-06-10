class classBatik extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="mt-5">
        <div class="container text-center mb-5">
            <div class="row">
                <h1>Class Workshop</h1>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <div class="image-container">
                        <img
                            src="/img/class-01.png"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />
                        <div class="overlay">
                            <div class="text">Boat on Calm Water</div>
                        </div>
                    </div>
                    <div class="image-container">
                        <img
                            src="/img/class-03.png"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                        />
                        <div class="overlay">
                            <div class="text">Wintry Mountain Landscape</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4 mb-lg-0">
                    <div class="image-container">
                        <img
                            src="/img/class-04.png"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"
                        />
                        <div class="overlay">
                            <div class="text">Mountains in the Clouds</div>
                        </div>
                    </div>
                    <div class="image-container">
                        <img
                            src="/img/class-02.png"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />
                        <div class="overlay">
                            <div class="text">Boat on Calm Water</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4 mb-lg-0">
                    <div class="image-container">
                        <img
                            src="/img/class-05.png"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Waves at Sea"
                        />
                        <div class="overlay">
                            <div class="text">Waves at Sea</div>
                        </div>
                    </div>
                    <div class="image-container">
                        <img
                            src="/img/class-06.png"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park"
                        />
                        <div class="overlay">
                            <div class="text">Yosemite National Park</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
  }
}

customElements.define('class-batik', classBatik);
