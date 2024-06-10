import '../../componenet/heroSection';
import '../../componenet/whyBatik';
import '../../componenet/classBatik';

const Workshop = {
  async render() {
    return ` 
    <hero-section></hero-section>
    <why-batik></why-batik>
    <class-batik></class-batik>
  `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Workshop;
