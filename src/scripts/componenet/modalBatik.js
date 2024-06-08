class modalBatik extends HTMLElement {
  connectedCallback() {
    this.render();
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
              <img src="img/batik.jpg" alt="Image" class="img-fluid"/>
              <div class="content-text p-4">
                <h3 class="mb-4">Kota Asal</h3>
                <p class="mb-4">All their equipment and instruments are alive. The sky was this is cloudless and of a deep dark blue. A shining crescent far beneath the flying vessel.</p>
                <!-- <div class="d-flex">
                  <div class="ml-auto">
                    <a href="#" class="btn btn-primary px-4" data-bs-dismiss="modal">No thanks</a>
                    <a href="#" class="btn btn-primary px-4">Get the app</a>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('modal-hero', modalBatik);
