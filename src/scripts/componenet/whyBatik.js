class whyBatik extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="mt-lg-5" id="why-batik">
        <div class="container text-center mb-5">
          <div class="row">
            <h1>Kenapa Belajar Batik</h1>
          </div>
        </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="fizo-icon-box layout-5">
                  <div class="icon"><img src="img/batik-01.png" alt="" /></div>
                  <h3><a href="#">Lorem, ipsum.</a></h3>
                  <div class="dis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi placeat saepe, suscipit nemo, odio cupiditate est consequuntur perferendis atque praesentium nam, odit omnis delectus repellendus corporis dolorem eum sit voluptates.</div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="fizo-icon-box layout-5">
                  <div class="icon"><img src="img/batik-02.png" alt="" /></div>
                  <h3><a href="#">Lorem, ipsum.</a></h3>
                  <div class="dis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro distinctio quia, assumenda consequuntur molestiae non, fugit officia ducimus quis impedit ratione voluptates expedita dolores blanditiis aut quibusdam culpa nam nostrum?</div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="fizo-icon-box layout-5">
                  <div class="icon"><img src="img/batik-03.png" alt="" /></div>
                  <h3><a href="#">Lorem, ipsum.</a></h3>
                  <div class="dis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorem odio quas. Molestiae harum totam incidunt ea, perspiciatis enim sit nam quis adipisci quaerat expedita iste libero! Odit, reiciendis eum!</div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="fizo-icon-box layout-5">
                  <div class="icon"><img src="img/batik-04.png" alt="" /></div>
                  <h3><a href="#">Lorem, ipsum.</a></h3>
                  <div class="dis">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni possimus nemo nesciunt quae consequuntur dolor vel ea tempore, rem officiis perspiciatis quaerat quia voluptas molestias, maxime similique aperiam earum illum.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
    `;
  }
}

customElements.define('why-batik', whyBatik);
