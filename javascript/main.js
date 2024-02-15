var button = document.querySelector('.menu-button');
var navLinks = document.querySelector('.nav-links');

button.addEventListener('click', toggleMenu);

function toggleMenu() {
    button.classList.toggle('button-active');
    navLinks.classList.toggle('nav-active');
}


var nodes = document.getElementById('unorderedList');

nodes.addEventListener('click', removeMenu);

function removeMenu() {
    button.classList.remove('button-active');
    navLinks.classList.remove('nav-active');
}

window.addEventListener('scroll', function() {
    var menuBar = document.querySelector('.menu-bar');
    var navLinks = document.querySelector('.nav-links')
    var navDesktop = document.querySelector('.nav-desktop')
    if (window.scrollY > 50) {
        menuBar.classList.add('menu-bar-scroll');
        navLinks.classList.add('nav-scroll');
        navDesktop.classList.add('nav-desktop-scroll');
    } else {
        menuBar.classList.remove('menu-bar-scroll');
        navLinks.classList.remove('nav-scroll');
        navDesktop.classList.remove('nav-desktop-scroll');
    }
});