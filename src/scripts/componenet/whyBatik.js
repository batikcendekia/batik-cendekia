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
                  <h3><a href="#">Melestarikan Warisan Budaya</a></h3>
                  <div class="dis">Batik adalah salah satu warisan budaya Indonesia yang diakui oleh UNESCO sebagai Warisan Budaya Takbenda. Dengan mempelajari batik, kita turut berperan dalam melestarikan dan mempertahankan tradisi ini agar tidak punah. Ini adalah bentuk penghormatan kepada nenek moyang kita dan upaya menjaga identitas budaya bangsa.</div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="fizo-icon-box layout-5">
                  <div class="icon"><img src="img/batik-02.png" alt="" /></div>
                  <h3><a href="#">Menghargai Kesenian Lokal</a></h3>
                  <div class="dis">Batik adalah bentuk seni yang kaya akan makna dan simbolisme. Dengan mempelajari batik, kita dapat lebih menghargai keindahan dan kompleksitas seni lokal. Ini membantu kita memahami lebih dalam tentang simbol-simbol yang digunakan dalam motif batik, yang seringkali mencerminkan filosofi hidup, cerita rakyat, dan kepercayaan masyarakat.</div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="fizo-icon-box layout-5">
                  <div class="icon"><img src="img/batik-03.png" alt="" /></div>
                  <h3><a href="#">Meningkatkan Kreativitas dan Keterampilan</a></h3>
                  <div class="dis">Proses pembuatan batik, mulai dari mendesain pola hingga mengeksekusi teknik pewarnaan, memerlukan kreativitas dan keterampilan tangan yang tinggi. Belajar batik dapat mengasah kemampuan artistik, keterampilan motorik halus, dan ketelitian. Ini juga mendorong inovasi, karena Anda bisa bereksperimen dengan desain dan teknik baru sambil tetap menghormati tradisi.</div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="fizo-icon-box layout-5">
                  <div class="icon"><img src="img/batik-04.png" alt="" /></div>
                  <h3><a href="#">Mendorong Ekonomi Kreatif</a></h3>
                  <div class="dis">Batik memiliki nilai ekonomi yang tinggi, baik di pasar domestik maupun internasional. Dengan mempelajari batik, kita dapat berkontribusi pada pengembangan ekonomi kreatif dan membuka peluang usaha. Industri batik dapat menciptakan lapangan kerja dan mendorong perekonomian lokal, terutama di daerah-daerah penghasil batik.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
    `;
  }
}

customElements.define('why-batik', whyBatik);
