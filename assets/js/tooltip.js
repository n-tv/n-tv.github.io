$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
const scrolltop = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', checkHeight)
function checkHeight(){
  if(window.scrollY > 200) {
    scrolltop.style.display = "inline"
  } else {
    scrolltop.style.display = "none"
  }
}
scrolltop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})