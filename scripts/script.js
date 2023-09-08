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

menuItems.addEventListener('click', function() {
    document.body.classList.remove('menu-open');
  });

//Back to top btn
const backToTopButton = document.getElementById("backToTopBtn");

// Fonction pour afficher le bouton lorsque l'utilisateur fait défiler la page
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.remove("hidden");
    } else {
        backToTopButton.classList.add("hidden");
    }
});

// Fonction pour remonter en haut de la page lorsque le bouton est cliqué
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Animation de défilement fluide
    });
});