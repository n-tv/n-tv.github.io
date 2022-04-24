$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
const scrolltotopn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
  if(window.scrollY > 200) {
    scrolltotopn.style.display = "inline"
  } else {
    scrolltotopn.style.display = "none"
  }
}

scrolltotopn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})