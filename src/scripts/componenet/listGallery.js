class listGallery extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set batik1(gallery) {
    this._gallery = gallery;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container-batik">  
          <div class="batik-img">
             <img src="${this._gallery.image}" alt="batik-img" />
          </div>
          <div class="main-batik">
              <strong tabindex="0">${this._gallery.nama_batik}</strong>
              <div class="batik-daerah">
                <p tabindex="0">${this._gallery.daerah}</p>
              </div>
              <p tabindex="0">
                ${this._gallery.makna}
              </p>
          </div>
        </div>
    `;
  }
}

customElements.define('list-gallery', listGallery);
