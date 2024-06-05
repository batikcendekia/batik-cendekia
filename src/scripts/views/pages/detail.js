const Details = {
  async render() {
    return `
    <hero-section></hero-section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col">
            <img src="logo.png" alt="">
          </div>
        </div>
      </div>
    </section>
    `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Details;
