let searchIcon, searchMenu, ulClose, ul, barIcons, cart, cartIcon, barIcons0, ul01, errorMessage, errorBtn, theName, theEmail, theNumber,
from, theNameDiv, theEmailDiv, theNumberDiv;

searchIcon = document.getElementById('searchIcon');
searchMenu = document.getElementById('searchMenu');
ulClose = document.getElementById('ulClose');
ul = document.getElementById('ul');
barIcons = document.getElementById('barIcons');
barIcons0 = document.getElementById('barIcons0');
ul01 = document.getElementById('ul01');
cart = document.getElementById('cart');
cartIcon = document.getElementById('cartIcon');
form = document.getElementById('form010');
errorMessage = document.getElementById('errorMessage');
errorBtn = document.getElementById('errorBtn');
theName = document.getElementById('theName');
theEmail = document.getElementById('theEmail');
theNumber = document.getElementById('theNumber');
//div
theNameDiv = document.getElementById('theNameDiv');
theEmailDiv = document.getElementById('theEmailDiv');
theNumberDiv = document.getElementById('theNumberDiv');





form.addEventListener('submit', e => {
    e.preventDefault();
});
errorBtn.addEventListener('click', e => {
    /* let name, email, number, msg, suc;
    theName.value == '' ? name = 'your name is empty.': name ='';
    theEmail.value == '' ? email = 'your email is empty.': email ='';
    theNumber.value == '' ? number = 'your number is empty.': number ='';
    if(theName.value != '',theEmail.value != '', theNumber.value != '') {
        msg = 'Successful'
        errorMessage.style.color= "green";
    }else {
        msg = `error => ${name} ${email} ${number}`;
        errorMessage.style.color= "red";
    }
    errorMessage.textContent = msg; */

    let name, email, number, msg, suc;
    theName.value == '' ? theNameDiv.style.borderColor = "red" : theNameDiv.style.borderColor = "green";
    theEmail.value == '' ? theEmailDiv.style.borderColor = "red" : theEmailDiv.style.borderColor = "green";
    theNumber.value == '' ? theNumberDiv.style.borderColor = "red" : theNumberDiv.style.borderColor = "green";

    if(theName.value != '',theEmail.value != '', theNumber.value != '') {
        theNameDiv.style.borderColor = "green";
        theEmailDiv.style.borderColor = "green";
        theNumberDiv.style.borderColor = "green";
    }
});




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







