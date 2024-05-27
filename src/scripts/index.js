import 'regenerator-runtime';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
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
