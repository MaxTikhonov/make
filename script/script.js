const collsOfDTypography = {
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
 inFocus: false,
 inputValue: '',
 windowW: '',
 changableChoice: ''
}
const elemsOfDocument = {
 accordeonTexts: [],
 accordeonArrows: [],
 accordeonPlaceholders: [],
 arrOfButtons: [],
 arrOfButtonsExceptUnactive: [],
 arrOfInputs: [],
 burger: '',
 descriptionOfStylesTextItemDesktop: '',
 descriptionOfStylesTextItemPhone: '',
 demonstrationError: '',
 fallinglistSetOfItems: [],
 fallinglistArrow: '',
 menuCross: '',
 placeholderAndArrowOfFallingList: '',
 toShowSpecificFallinglistSetofitems: ''
}
function clickToAccordeonPlaceholder(e) {
 let check = e.target.parentNode.nextElementSibling.classList.contains('accordeon-text-block');
 if (!check) {
  e.target.nextElementSibling.classList.add('accordeon-arrow-top');
  e.target.classList.add('accordeon-placeholder-active');
  e.target.parentNode.nextElementSibling.classList.add('accordeon-text-block');
 }
 else if (check) {
  e.target.nextElementSibling.classList.remove('accordeon-arrow-top');
  e.target.classList.remove('accordeon-placeholder-active');
  e.target.parentNode.nextElementSibling.classList.remove('accordeon-text-block');
 }
}
function mouseEnterAccordeonPlaceholder(e) {
 e.target.classList.add('accordeon-placeholder-hover');
}
function mouseOutAccordeonPlaceholder(e) {
 e.target.classList.remove('accordeon-placeholder-hover');
}
function mouseEnterToButton(e) {
 e.target.previousElementSibling.innerText = 'Ховер';
 e.target.classList.add('demonstration-button-hover');
}
function mouseOutToButton(e) {
 e.target.previousElementSibling.innerText = '';
 e.target.classList.remove('demonstration-button-hover');
}
function mousedownToButton(e) {
 e.target.previousElementSibling.innerText = 'Нажатие';
 e.target.classList.add('demonstration-button-active');
}
function mouseUpToButton(e) {
 e.target.previousElementSibling.innerText = '';
 e.target.classList.remove('demonstration-button-active');
}
function mouseEnterToFallinglist(e) {
 e.target.classList.add('fallinglist-placeholder-active');
}
function mouseOutToFallinglist(e) {
 e.target.classList.remove('fallinglist-placeholder-active');
}
function changeChoiceInFallinglist(e) {
 if (objOfImportantVars.changableChoice != e.target) {
  objOfImportantVars.changableChoice = e.target;
  objOfImportantVars.changableChoice.classList.add('fallinglist-setofitems-item-blue');
  let arrOfItems = elemsOfDocument.fallinglistSetOfItems.querySelectorAll('.fallinglist-setofitems-item');
  arrOfItems.forEach((item) => {
   if (objOfImportantVars.changableChoice == item) {
   }
   else {
    item.classList.remove('fallinglist-setofitems-item-blue');
   }
  })
 }
 elemsOfDocument.placeholderAndArrowOfFallingList.querySelector('.fallinglist-placeholder').innerText = e.target.innerText;
 elemsOfDocument.fallinglistArrow.classList.remove('fallinglist-arrow-top');
 elemsOfDocument.fallinglistSetOfItems.style.display = 'none';
}
function setPhoneTypographyToDocument() {
 collsOfDTypography.collectionOfH1StylesElems.forEach((item) => {
  item.classList.add('h1-m');
 })
 collsOfDTypography.collectionOfH2StylesElems.forEach((item) => {
  item.classList.add('h2-m');
 })
 collsOfDTypography.collectionOfH3StylesElems.forEach((item) => {
  item.classList.add('h3-m');
 })
 collsOfDTypography.collectionOfH4StylesElems.forEach((item) => {
  item.classList.add('h4-m');
 })
 collsOfDTypography.collectionOfPLeadDesktop.forEach((item) => {
  item.classList.add('p-lead-m');
 })
 collsOfDTypography.collectionOfPBigTextDesktop.forEach((item) => {
  item.classList.add('p-big-text-m');
 })
 collsOfDTypography.collectionOfPCommonTextDesktop.forEach((item) => {
  item.classList.add('p-common-text-m');
 })
 collsOfDTypography.collectionOfPAuxiliaryTextDesktop.forEach((item) => {
  item.classList.add('p-auxiliary-m');
 })
}
function setDesktopTypographyToDocument() {
 collsOfDTypography.collectionOfH1StylesElems.forEach((item) => {
  item.classList.remove('h1-m');
 })
 collsOfDTypography.collectionOfH2StylesElems.forEach((item) => {
  item.classList.remove('h2-m');
 })
 collsOfDTypography.collectionOfH3StylesElems.forEach((item) => {
  item.classList.remove('h3-m');
 })
 collsOfDTypography.collectionOfH4StylesElems.forEach((item) => {
  item.classList.remove('h4-m');
 })
 collsOfDTypography.collectionOfPLeadDesktop.forEach((item) => {
  item.classList.remove('p-lead-m');
 })
 collsOfDTypography.collectionOfPBigTextDesktop.forEach((item) => {
  item.classList.remove('p-big-text-m');
 })
 collsOfDTypography.collectionOfPCommonTextDesktop.forEach((item) => {
  item.classList.remove('p-common-text-m');
 })
 collsOfDTypography.collectionOfPAuxiliaryTextDesktop.forEach((item) => {
  item.classList.remove('p-auxiliary-m');
 })
}

function changeMenuClass() {
 document.querySelector('.menu').classList.add('menu-active');
}
function hideMenu() {
 document.querySelector('.menu').classList.remove('menu-active');
}
function mouseOutHandlerInput(e) {
 if (objOfImportantVars.inputValue == '' && objOfImportantVars.inFocus == false) {
  e.target.previousElementSibling.innerHTML = '';
  e.target.classList.remove('demonstration-input-hover');
  e.target.classList.remove('demonstration-input-typing');
 }
}
function blurHandlerInput(e) {
 if (objOfImportantVars.inputValue !== '') {
  e.target.previousElementSibling.innerHTML = 'Ошибка';
  e.target.removeEventListener('mouseenter', showPlaceholderOfHoverInput);
 }
 else if (objOfImportantVars.inputValue == '') {
  objOfImportantVars.inFocus = false;
  e.target.previousElementSibling.innerHTML = '';
  e.target.classList.remove('demonstration-input-hover');
  e.target.classList.remove('demonstration-input-typing');
  e.target.addEventListener("mouseenter", showPlaceholderOfHoverInput);
 }
}
function showKeyUpPlaceholderInput(e) {
 objOfImportantVars.inputValue = e.target.value;
 objOfImportantVars.inFocus = true;
 e.target.classList.remove('demonstration-input-hover');
 e.target.classList.add('demonstration-input-typing');
 e.target.previousElementSibling.innerHTML = 'Ввод';
 let valueOfInput = elemsOfDocument.arrOfInputs[0].value;
 const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
 if (!EMAIL_REGEXP.test(valueOfInput) && !valueOfInput == '') {
  e.target.previousElementSibling.classList.add('demonstration-placeholder-error');
  e.target.previousElementSibling.innerHTML = 'Ошибка';
  e.target.classList.add('demonstration-input-error');
  elemsOfDocument.demonstrationError.innerText = 'Введите корректный e-mail';
 }
 else {
  e.target.previousElementSibling.classList.remove('demonstration-placeholder-error');
  e.target.classList.remove('demonstration-input-error');
  elemsOfDocument.demonstrationError.innerText = '';
 }

}
function showPlaceholderOfHoverInput(e) {
 if (objOfImportantVars.inFocus == true) {

 }
 else {
  e.target.classList.add('demonstration-input-hover');
  e.target.previousElementSibling.innerHTML = 'Ховер';
 }
}
function init() {
 collsOfDTypography.collectionOfH1StylesElems = document.querySelectorAll('.h1-d');
 collsOfDTypography.collectionOfH2StylesElems = document.querySelectorAll('.h2-d');
 collsOfDTypography.collectionOfH3StylesElems = document.querySelectorAll('.h3-d');
 collsOfDTypography.collectionOfH4StylesElems = document.querySelectorAll('.h4-d');
 collsOfDTypography.collectionOfPLeadDesktop = document.querySelectorAll('.p-lead-d');
 collsOfDTypography.collectionOfPBigTextDesktop = document.querySelectorAll('.p-big-text-d');
 collsOfDTypography.collectionOfPCommonTextDesktop = document.querySelectorAll('.p-common-text-d');
 collsOfDTypography.collectionOfPAuxiliaryTextDesktop = document.querySelectorAll('.p-auxiliary-d');
 elemsOfDocument.accordeonArrows = document.querySelectorAll('.accordeon-arrow');
 elemsOfDocument.accordeonPlaceholders = document.querySelectorAll('.accordeon-placeholder');
 elemsOfDocument.accordeonTexts = document.querySelectorAll('.accordeon-text');
 elemsOfDocument.arrOfButtons = document.querySelectorAll('.demonstration-button');
 elemsOfDocument.placeholderAndArrowOfFallingList = document.querySelector('.fallinglist-wrapper-placeholder-and-arrow');
 elemsOfDocument.fallinglistArrow = elemsOfDocument.placeholderAndArrowOfFallingList.querySelector('.fallinglist-arrow');
 elemsOfDocument.fallinglistSetOfItems = document.querySelector('.fallinglist-setofitems');
 elemsOfDocument.descriptionOfStylesTextItemDesktop = document.querySelector('.description-of-styles-text__item-desktop');
 elemsOfDocument.descriptionOfStylesTextItemPhone = document.querySelector('.description-of-styles-text__item-phone');
 objOfImportantVars.windowW = window.innerWidth;
 elemsOfDocument.burger = document.querySelector('.burger');
 elemsOfDocument.menuCross = document.querySelector('.menu-cross');
 elemsOfDocument.arrOfInputs = document.querySelectorAll('.demonstration-input');
 elemsOfDocument.demonstrationError = elemsOfDocument.arrOfInputs[0].nextElementSibling;
 elemsOfDocument.placeholderAndArrowOfFallingList.querySelector('.fallinglist-placeholder').addEventListener('mouseenter', mouseEnterToFallinglist);
 elemsOfDocument.placeholderAndArrowOfFallingList.querySelector('.fallinglist-placeholder').addEventListener('mouseout', mouseOutToFallinglist);
 elemsOfDocument.accordeonPlaceholders.forEach((item) => {
  item.addEventListener('mouseenter', mouseEnterAccordeonPlaceholder);
  item.addEventListener('mouseout', mouseOutAccordeonPlaceholder);
  item.addEventListener('click', clickToAccordeonPlaceholder);
 })
 elemsOfDocument.arrOfButtons.forEach((item) => {
  if (item.classList.contains('demonstration-button-unactive')) {

  }
  else {
   elemsOfDocument.arrOfButtonsExceptUnactive.push(item);
  }
 })
 elemsOfDocument.arrOfButtonsExceptUnactive.forEach((item) => {
  item.addEventListener('mouseenter', mouseEnterToButton);
  item.addEventListener('mouseout', mouseOutToButton);
  item.addEventListener('mousedown', mousedownToButton);
  item.addEventListener('mouseup', mouseUpToButton);
 })
 elemsOfDocument.placeholderAndArrowOfFallingList.querySelector('.fallinglist-placeholder').addEventListener('click', function (e) {
  elemsOfDocument.fallinglistArrow.classList.add('fallinglist-arrow-top');
  this.parentNode.nextElementSibling.style.display = 'block';
 })
 elemsOfDocument.fallinglistSetOfItems.addEventListener('click', changeChoiceInFallinglist);
 document.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(elemsOfDocument.fallinglistSetOfItems.parentNode);
  if (!withinBoundaries) {
   elemsOfDocument.fallinglistArrow.classList.remove('fallinglist-arrow-top');
   elemsOfDocument.fallinglistSetOfItems.style.display = 'none';
  }
 })
 if (objOfImportantVars.windowW < 736) {
  setPhoneTypographyToDocument();
 }
 window.onresize = function () {
  objOfImportantVars.windowW = window.innerWidth;
  objOfImportantVars.windowW < 736 ? setPhoneTypographyToDocument() : setDesktopTypographyToDocument();
 }
 elemsOfDocument.arrOfInputs.forEach(item => {
  item.addEventListener("keyup", showKeyUpPlaceholderInput);
  item.addEventListener("mouseenter", showPlaceholderOfHoverInput);
  item.addEventListener("focus", showKeyUpPlaceholderInput);
  item.addEventListener("blur", blurHandlerInput);
  item.addEventListener("mouseout", mouseOutHandlerInput);
 })
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