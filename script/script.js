let obj = {
 inputValue: '',
 inFocus: false
}

function changeMenuClass() {
 document.querySelector('.menu').classList.add('menu-active');
}
function hideMenu() {
 document.querySelector('.menu').classList.remove('menu-active');
}
function mouseOutHandler(e) {
 if (obj.inputValue == '' && obj.inFocus == false) {
  e.target.previousElementSibling.innerHTML = '';
  e.target.classList.remove('demonstration-input-hover');
  e.target.classList.remove('demonstration-input-typing');
 }
}
function blurHandler(e) {
 if (obj.inputValue !== '') {
  e.target.previousElementSibling.innerHTML = 'Ввод';
  e.target.removeEventListener('mouseenter', showPlaceholderOfHover);
 }
 else if (obj.inputValue == '') {
  obj.inFocus = false;
  e.target.previousElementSibling.innerHTML = '';
  e.target.classList.remove('demonstration-input-hover');
  e.target.classList.remove('demonstration-input-typing');
  e.target.addEventListener("mouseenter", showPlaceholderOfHover);
 }
}
function showKeyUpPlaceholder(e) {
 obj.inputValue = e.target.value;
 obj.inFocus = true;
 e.target.classList.remove('demonstration-input-hover');
 e.target.classList.add('demonstration-input-typing');
 e.target.previousElementSibling.innerHTML = 'Ввод';
}
function showPlaceholderOfHover(e) {
 if (obj.inFocus == true) {

 }
 else {
  console.log('зашли')
  e.target.classList.add('demonstration-input-hover');
  e.target.previousElementSibling.innerHTML = 'Ховер';
 }
}
function init() {
 const burger = document.querySelector('.burger');
 const menuCross = document.querySelector('.menu-cross');
 const windowW = window.innerWidth;
 const arrOfInputs = document.querySelectorAll('.demonstration-input');
 arrOfInputs.forEach(link => {
  link.addEventListener("keyup", showKeyUpPlaceholder);
  link.addEventListener("mouseenter", showPlaceholderOfHover);
  link.addEventListener("focus", showKeyUpPlaceholder);
  link.addEventListener("blur", blurHandler);
  link.addEventListener("mouseout", mouseOutHandler);
 })
 // const btn = document.querySelector('.btn');
 // btn.addEventListener('click', (e) => {
 //  document.body.style.setProperty('--font-s', '20px');
 // })
 burger.addEventListener('click', changeMenuClass);
 menuCross.addEventListener('click', hideMenu);
 if (windowW < 738) {
  document.body.style.setProperty('--line-h', '30px')
 }
 document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
   e.preventDefault();
   const href = this.getAttribute("href").substring(1);
   const scrollTarget = document.getElementById(href);
   const topOffset = document.querySelector(".nav").offsetHeight;
   const elementPosition = scrollTarget.getBoundingClientRect().top;
   const offsetPosition = elementPosition - topOffset - 120;
   window.scrollBy({
    top: offsetPosition,
    behavior: "smooth"
   })
  })
 })
}
window.onresize = function () {
}
window.onload = init;