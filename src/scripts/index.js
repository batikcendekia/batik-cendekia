import 'regenerator-runtime';
import './componenet/listGallery';
import './views/pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../styles/style.css';
import '../styles/responsif.css';
import App from './views/app';

const thecontent = document.getElementById('thecontent');
const app = new App(thecontent);

async function fetchDataAndDisplay() {
  try {
    const response = await fetch('./data/batik1.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Data fetched successfully:', data); // Debug log

    const batik = data.batik.slice(0, 6); // Ambil hanya 6 data pertama
    const galleryContainer = document.createElement('div');
    galleryContainer.className = 'row';

    batik.forEach((gallery) => {
      const listBatik = document.createElement('list-gallery');
      listBatik.batik1 = gallery;
      galleryContainer.appendChild(listBatik);
    });

    const galleryBatik = document.querySelector('gallery-batik');
    if (galleryBatik) {
      galleryBatik.appendChild(galleryContainer);
    } else {
      console.error('Element <gallery-batik> not found in the document.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const logo = document.getElementById('nav-logo');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
    logo.src = 'logo.png';
  } else {
    navbar.classList.remove('scrolled');
    logo.src = 'logo-white.png';
  }
});

window.addEventListener('load', () => {
  const loader = document.querySelector('.se-pre-con');
  const content = document.querySelector('.hero');

  if (loader && content) {
    loader.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      loader.style.opacity = '0';
    }, 500);
    loader.addEventListener('transitionend', () => {
      loader.parentNode.removeChild(loader);
      content.style.opacity = '0';
      setTimeout(() => {
        content.style.transition = 'opacity 1s ease';
        content.style.opacity = '1';
      }, 100);
    });
  }
});

export default fetchDataAndDisplay;
