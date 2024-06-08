class classBatik extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="row">
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <div class="image-container">
            <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
            />
            <div class="overlay">
                <div class="text">Boat on Calm Water</div>
            </div>
        </div>

        <div class="image-container">
            <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
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
                src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
            />
            <div class="overlay">
                <div class="text">Mountains in the Clouds</div>
            </div>
        </div>

        <div class="image-container">
            <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
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
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
            />
            <div class="overlay">
                <div class="text">Waves at Sea</div>
            </div>
        </div>

        <div class="image-container">
            <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
            />
            <div class="overlay">
                <div class="text">Yosemite National Park</div>
            </div>
        </div>
    </div>
</div>
      
    `;
  }
}

customElements.define('class-batik', classBatik);
