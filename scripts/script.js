AOS.init();

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
