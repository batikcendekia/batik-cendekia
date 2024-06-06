class modalBatik extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style="z-index: 9999999;">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content rounded-0">
          <div class="modal-body py-0">
            <div class="d-block main-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <img src="img/batik.jpg" alt="Image" class="img-fluid" style="background-color: #b2fcff" />
              <div class="content-text p-4">
                <h3 class="mb-4">Introducing Work from Anywhere</h3>
                <p class="mb-4">All their equipment and instruments are alive. The sky was this is cloudless and of a deep dark blue. A shining crescent far beneath the flying vessel.</p>
                <div class="d-flex">
                  <div class="ml-auto">
                    <a href="#" class="btn btn-primary px-4" data-bs-dismiss="modal">No thanks</a>
                    <a href="#" class="btn btn-primary px-4">Get the app</a>
                  </div>
                </div>
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
