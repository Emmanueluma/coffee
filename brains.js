let searchIcon, searchMenu, ulClose, ul, barIcons, cart, cartIcon, barIcons0, ul01;

searchIcon = document.getElementById('searchIcon');
searchMenu = document.getElementById('searchMenu');
ulClose = document.getElementById('ulClose');
ul = document.getElementById('ul');
barIcons = document.getElementById('barIcons');
barIcons0 = document.getElementById('barIcons0');
ul01 = document.getElementById('ul01');
cart = document.getElementById('cart');
cartIcon = document.getElementById('cartIcon');


searchIcon.addEventListener('click', e => {
    searchMenu.classList.toggle('active');
    searchIcon.classList.toggle('fa-close');

});

cartIcon.addEventListener('click', e => {
    cart.classList.toggle('active');
    cartIcon.classList.toggle('fa-close');

});

barIcons.addEventListener('click', e => {
    ul.classList.toggle('active');
    barIcons.classList.toggle('fa-close');
});

barIcons0.addEventListener('click', e => {
    ul01.classList.toggle('active');
    barIcons0.classList.toggle('fa-close');
});


ulClose.addEventListener('click', e => {
    ul.classList.toggle('active');
});

window.addEventListener('scroll', e => {
    ul.classList.remove('active');
    ul01.classList.remove('active');
    barIcons.classList.remove('fa-close');
    barIcons0.classList.remove('fa-close');
    cart.classList.remove('active');
    cartIcon.classList.remove('fa-close');
    searchMenu.classList.remove('active');
    searchIcon.classList.remove('fa-close');
});