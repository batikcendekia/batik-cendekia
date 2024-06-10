class modalBatik extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set data(batik) {
    this._batik = batik;
    this.updateModalContent();
  }

  render() {
    this.innerHTML = `
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style="z-index: 9999999;">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-fullscreen" role="document">
          <div class="modal-content rounded-0">
            <div class="modal-header bg-dark text-bg-dark">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">nama batik</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body py-0" style="margin-top:-5px;">
              <div class="d-block main-content">
                <img src="" alt="Image" class="img-fluid" id="batik-img"/>
                <div class="content-text p-4">
                  <h3 class="mb-4" id="batik-daerah">Kota Asal</h3>
                  <p class="mb-4" id="batik-makna">All their equipment and instruments are alive. The sky was this is cloudless and of a deep dark blue. A shining crescent far beneath the flying vessel.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  updateModalContent() {
    if (this._batik) {
      this.querySelector('#staticBackdropLabel').textContent = this._batik.nama_batik;
      this.querySelector('#batik-img').src = this._batik.image;
      this.querySelector('#batik-daerah').textContent = this._batik.daerah;
      this.querySelector('#batik-makna').textContent = this._batik.makna;
    }
  }
}

customElements.define('modal-hero', modalBatik);
