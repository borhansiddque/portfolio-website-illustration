const mobileMenu = document.querySelector('.mobile-menu');
const navbar = document.querySelector('.navbar');
document.getElementById('mobile-menu-open-btn').addEventListener('click', () => {
  mobileMenu.style.display = 'block';
  navbar.style.marginTop = '0px';
})

document.getElementById('mobile-menu-close-btn').addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  navbar.style.marginTop = '10px';
})