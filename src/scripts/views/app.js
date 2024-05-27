import UrlParser from '../routes/urlParser';
import routes from '../routes/routes';

function setActiveNavLink(url) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.classList.remove('active');
  });

  const activeLink = document.querySelector(`.nav-link[href="#${url}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

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
