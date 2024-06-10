import UrlParser from '../routes/urlParser';
import routes from '../routes/routes';

function setActiveNavLink(url) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.classList.remove('active');
  });

  const adjustedUrl = url === '/' ? '#/home' : `#${url}`;
  const activeLink = document.querySelector(`.nav-link[href="${adjustedUrl}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const currentHash = window.location.hash || '/';
  setActiveNavLink(currentHash.substring(1));
});

window.addEventListener('hashchange', () => {
  setActiveNavLink(window.location.hash.substring(1));
});

class App {
  constructor(content) {
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    setActiveNavLink(url);
  }
}

export default App;
