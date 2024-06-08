import '../../componenet/heroSection';
import { fetchDataAll } from '../../api/config';

const Details = {
  async render() {
    return `
    <hero-section></hero-section>
    <section>
        <div class="container mt-lg-5">
          <div class="row">
            <div class="content-title">
              <h1>Batik Gallery</h1>
            </div>
          </div>
        </div>
        <div class="container mt-lg-5">
          <div class="row text-center align-items-center justify-content-center">
            <gallery-batik></gallery-batik>
          </div>
        </div>
      </section>
    `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    await fetchDataAll();
  },
};

export default Details;
