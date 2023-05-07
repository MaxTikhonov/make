function changeFontSize() {
 // const btn = document.querySelector('.btn');
 // btn.addEventListener('click', (e) => {
 //  document.body.style.setProperty('--font-s', '20px');
 // })
 const windowW = window.innerWidth;
 if (windowW < 738) {
  document.body.style.setProperty('--line-h', '30px')
 }
}
window.onload = changeFontSize;