document.addEventListener('DOMContentLoaded', () => {
  fetch('/pages/nav.html')
    .then((res) => res.text())
    .then((html) => {
      document.getElementById('nav-placeholder').innerHTML = html;
    });
});
