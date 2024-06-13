window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const logo = document.getElementById('nav-logo');
  const heroHeight = document.getElementById('hero').offsetHeight;

  if (window.scrollY > heroHeight) {
    navbar.classList.add('scrolled');
    logo.src = logo.getAttribute('data-colored-src');
  } else {
    navbar.classList.remove('scrolled');
    logo.src = logo.getAttribute('data-white-src');
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
    });
  }
});

// awal nama
function validateForm() {
  var awal = document.getElementById("form3Examplev2").value;
  var akhir = document.getElementById("form3Examplev3").value;
  var errorNama = document.getElementById("error-nama");
  var errorNamaku = document.getElementById("error-namaku");
  var regexNama = /^[A-Za-z\s]+$/;
  var regexNamaku = /^[A-Za-z\s]+$/;

  if (!regexNama.test(awal)) {
    errorNama.innerHTML = "Nama awal tidak boleh mengandung angka atau simbol.";
    return false;
  } else {
    errorNama.innerHTML = "";
  }

  if (!regexNamaku.test(akhir)) {
    errorNamaku.innerHTML = "Nama akhir tidak boleh mengandung angka atau simbol.";
    return false;
  } else {
    errorNama.innerHTML = "";
  }

  return true;
}
// akhir nama