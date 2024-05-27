import '../../componenet/heroSection';

const Home = {
  async render() {
    return `
    <hero-section></hero-section>
    <section id="thecontent">
        <div class="container">
          <div class="row">
            <div class="col">
              <h1>Darimana asal muasal batik?</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto at dolores nostrum vel repellendus sunt reprehenderit consectetur in voluptas officiis, necessitatibus doloremque? Perferendis enim distinctio ducimus obcaecati earum quidem cupiditate.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <h1>Dari mana asal muasal batik?</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, doloremque odio! Illo libero vel numquam saepe quibusdam sed explicabo sequi, officia nesciunt cum alias eius? Fugiat suscipit error ipsam nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum similique impedit minus tempora, nemo iure voluptas excepturi quod possimus, dolorem veritatis ipsam nihil aperiam fugit eveniet repellat sint, architecto vitae.</p>
            </div>
            <div class="col-6">
              <img src="img/batik.jpg" alt="">
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

export default Home;
