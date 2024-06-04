import 'regenerator-runtime';
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
