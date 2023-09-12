//Animation Nom
anime.timeline({loop: false})
  .add({
    targets: '.presentation .fullname',
    scale: [16,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 900,
    delay: (el, i) => 900 * i
  }).add({
    targets: '.presentation',
    opacity: 1
  });

//Animation intro secondaire
// Wrap every letter in a span
var textWrapper = document.querySelector('.intro-main-description');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.intro-main-description .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 30 * (i+1)
  }).add({
    targets: '.intro-main-description',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

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