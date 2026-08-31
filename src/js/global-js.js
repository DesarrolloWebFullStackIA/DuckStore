document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMobile = document.getElementById('nav-mobile');

  hamburgerBtn.addEventListener('click', () => {
    navMobile.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!hamburgerBtn.contains(e.target) && !navMobile.contains(e.target)) {
      navMobile.classList.remove('active');
    }
  });
});