const objOfDocElements = {
 descriptionOfStylesTextItemDesktop: '',
 descriptionOfStylesTextItemPhone: '',
 collectionOfH1StylesElems: [],
 collectionOfH2StylesElems: [],
 collectionOfH3StylesElems: [],
 collectionOfH4StylesElems: [],
 collectionOfPLeadDesktop: [],
 collectionOfPBigTextDesktop: [],
 collectionOfPCommonTextDesktop: [],
 collectionOfPAuxiliaryTextDesktop: []
}
const objOfImportantVars = {
 windowW: ''
}
const elemsOfDocument = {
 burger: '',
 menuCross: '',
 arrOfInputs: []
}
function setPhoneTypographyToDocument() {
 objOfDocElements.collectionOfH1StylesElems.forEach((item) => {
  item.classList.add('h1-m');
 })
 objOfDocElements.collectionOfH2StylesElems.forEach((item) => {
  item.classList.add('h2-m');
 })
 objOfDocElements.collectionOfH3StylesElems.forEach((item) => {
  item.classList.add('h3-m');
 })
 objOfDocElements.collectionOfH4StylesElems.forEach((item) => {
  item.classList.add('h4-m');
 })
 objOfDocElements.collectionOfPLeadDesktop.forEach((item) => {
  item.classList.add('p-lead-m');
 })
 objOfDocElements.collectionOfPBigTextDesktop.forEach((item) => {
  item.classList.add('p-big-text-m');
 })
 objOfDocElements.collectionOfPCommonTextDesktop.forEach((item) => {
  item.classList.add('p-common-text-m');
 })
 objOfDocElements.collectionOfPAuxiliaryTextDesktop.forEach((item) => {
  item.classList.add('p-auxiliary-m');
 })
}
function setDesktopTypographyToDocument() {
 objOfDocElements.collectionOfH1StylesElems.forEach((item) => {
  item.classList.remove('h1-m');
 })
 objOfDocElements.collectionOfH2StylesElems.forEach((item) => {
  item.classList.remove('h2-m');
 })
 objOfDocElements.collectionOfH3StylesElems.forEach((item) => {
  item.classList.remove('h3-m');
 })
 objOfDocElements.collectionOfH4StylesElems.forEach((item) => {
  item.classList.remove('h4-m');
 })
 objOfDocElements.collectionOfPLeadDesktop.forEach((item) => {
  item.classList.remove('p-lead-m');
 })
 objOfDocElements.collectionOfPBigTextDesktop.forEach((item) => {
  item.classList.remove('p-big-text-m');
 })
 objOfDocElements.collectionOfPCommonTextDesktop.forEach((item) => {
  item.classList.remove('p-common-text-m');
 })
 objOfDocElements.collectionOfPAuxiliaryTextDesktop.forEach((item) => {
  item.classList.remove('p-auxiliary-m');
 })
}

const objOfInput = {
 inputValue: '',
 inFocus: false
}

function changeMenuClass() {
 document.querySelector('.menu').classList.add('menu-active');
}
function hideMenu() {
 document.querySelector('.menu').classList.remove('menu-active');
}
function mouseOutHandlerInput(e) {
 if (objOfInput.inputValue == '' && objOfInput.inFocus == false) {
  e.target.previousElementSibling.innerHTML = '';
  e.target.classList.remove('demonstration-input-hover');
  e.target.classList.remove('demonstration-input-typing');
 }
}
function blurHandlerInput(e) {
 if (objOfInput.inputValue !== '') {
  e.target.previousElementSibling.innerHTML = 'Ввод';
  e.target.removeEventListener('mouseenter', showPlaceholderOfHoverInput);
 }
 else if (objOfInput.inputValue == '') {
  objOfInput.inFocus = false;
  e.target.previousElementSibling.innerHTML = '';
  e.target.classList.remove('demonstration-input-hover');
  e.target.classList.remove('demonstration-input-typing');
  e.target.addEventListener("mouseenter", showPlaceholderOfHoverInput);
 }
}
function showKeyUpPlaceholderInput(e) {
 objOfInput.inputValue = e.target.value;
 objOfInput.inFocus = true;
 e.target.classList.remove('demonstration-input-hover');
 e.target.classList.add('demonstration-input-typing');
 e.target.previousElementSibling.innerHTML = 'Ввод';
}
function showPlaceholderOfHoverInput(e) {
 if (objOfInput.inFocus == true) {

 }
 else {
  e.target.classList.add('demonstration-input-hover');
  e.target.previousElementSibling.innerHTML = 'Ховер';
 }
}
function init() {
 objOfDocElements.descriptionOfStylesTextItemDesktop = document.querySelector('.description-of-styles-text__item-desktop');
 objOfDocElements.descriptionOfStylesTextItemPhone = document.querySelector('.description-of-styles-text__item-phone');
 objOfDocElements.collectionOfH1StylesElems = document.querySelectorAll('.h1-d');
 objOfDocElements.collectionOfH2StylesElems = document.querySelectorAll('.h2-d');
 objOfDocElements.collectionOfH3StylesElems = document.querySelectorAll('.h3-d');
 objOfDocElements.collectionOfH4StylesElems = document.querySelectorAll('.h4-d');
 objOfDocElements.collectionOfPLeadDesktop = document.querySelectorAll('.p-lead-d');
 objOfDocElements.collectionOfPBigTextDesktop = document.querySelectorAll('.p-big-text-d');
 objOfDocElements.collectionOfPCommonTextDesktop = document.querySelectorAll('.p-common-text-d');
 objOfDocElements.collectionOfPAuxiliaryTextDesktop = document.querySelectorAll('.p-auxiliary-d');
 objOfImportantVars.windowW = window.innerWidth;
 elemsOfDocument.burger = document.querySelector('.burger');
 elemsOfDocument.menuCross = document.querySelector('.menu-cross');
 elemsOfDocument.arrOfInputs = document.querySelectorAll('.demonstration-input');
 if (objOfImportantVars.windowW < 736) {
  setPhoneTypographyToDocument();
 }
 window.onresize = function () {
  objOfImportantVars.windowW = window.innerWidth;
  objOfImportantVars.windowW < 736 ? setPhoneTypographyToDocument() : setDesktopTypographyToDocument();
 }
 arrOfInputs.forEach(item => {
  item.addEventListener("keyup", showKeyUpPlaceholderInput);
  item.addEventListener("mouseenter", showPlaceholderOfHoverInput);
  item.addEventListener("focus", showKeyUpPlaceholderInput);
  item.addEventListener("blur", blurHandlerInput);
  item.addEventListener("mouseout", mouseOutHandlerInput);
 })
 // const btn = document.querySelector('.btn');
 // btn.addEventListener('click', (e) => {
 //  document.body.style.setProperty('--font-s', '20px');
 // })
 elemsOfDocument.burger.addEventListener('click', changeMenuClass);
 elemsOfDocument.menuCross.addEventListener('click', hideMenu);
 document.querySelectorAll("a[href^='#']").forEach(item => {
  item.addEventListener("click", function (e) {
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
window.onload = init;