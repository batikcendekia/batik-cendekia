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

// awal hidden

function change() {
  var x = document.getElementById("password").type;
  if (x == "password") {
    document.getElementById("password").type = "text";
    document.getElementById("mybutton").innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye-slash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                                                                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829z"/>
                                                                <path fill-rule="evenodd" d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z"/>
                                                                </svg>`;
  } else {
    document.getElementById("password").type = "password";
    document.getElementById("mybutton").innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                                                <path fill-rule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                                                </svg>`;
  }
}
// akhir hidden