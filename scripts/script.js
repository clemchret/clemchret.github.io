//Initialisation des animations de scroll
AOS.init();

//Menu burger
const menuBurger = document.querySelector('.menu-burger');
const menuItems = document.querySelector('.menu-items');

menuBurger.addEventListener('click', function() {
  menuBurger.classList.toggle('active');
  menuItems.classList.toggle('active');
});

menuItems.addEventListener('click', function() {
    menuBurger.classList.toggle('active');
    menuItems.classList.toggle('active');
});

//Désactivation du scroll lorsque le menu bruger est ouvert
menuBurger.addEventListener('click', function() {
  document.body.classList.toggle('menu-open');
});