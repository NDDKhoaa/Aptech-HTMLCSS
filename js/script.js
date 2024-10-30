let btnHamburger = document.querySelector('.btn-hamburger');
let menu_outside = document.querySelector('.menu-outside');
let menu = document.querySelector('.menu');
let btnClose = document.querySelector('.btn-close');

btnHamburger.addEventListener('click', function(){
  btnHamburger.className = 'btn-hamburger hide';
  menu_outside.className = 'menu-outside show';
  menu.className = 'menu show';
})

btnClose.addEventListener('click', function(){
  btnHamburger.className = 'btn-hamburger show';
  menu_outside.className = 'menu-outside hide';
  menu.className = 'menu hide';
})

menu_outside.addEventListener('click', function(){
  btnHamburger.className = 'btn-hamburger show';
  menu_outside.className = 'menu-outside hide';
  menu.className = 'menu hide';
})