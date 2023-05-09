function changeMenuClass() {
 document.querySelector('.menu').classList.add('menu-active');
}
function hideMenu() {
 document.querySelector('.menu').classList.remove('menu-active');
}
function changeFontSize() {
 // const btn = document.querySelector('.btn');
 // btn.addEventListener('click', (e) => {
 //  document.body.style.setProperty('--font-s', '20px');
 // })
 const burger = document.querySelector('.burger');
 const menuCross = document.querySelector('.menu-cross');
 burger.addEventListener('click', changeMenuClass);
 menuCross.addEventListener('click', hideMenu);
 const windowW = window.innerWidth;
 if (windowW < 738) {
  document.body.style.setProperty('--line-h', '30px')
 }
}
window.onload = changeFontSize;