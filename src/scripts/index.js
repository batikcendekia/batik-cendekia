import 'regenerator-runtime';
import './componenet/listGallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../styles/style.css';
import '../styles/responsif.css';
import App from './views/app';

const thecontent = document.getElementById('thecontent');
const app = new App(thecontent);

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
