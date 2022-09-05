const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.menu-navbar')

menu.addEventListener('click', function () {
  console.log('Here')
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
})

var counter = 1
setInterval(function () {
  document.getElementById('radio' + counter).checked = true
  counter++
  if (counter > 4) {
    counter = 1
  }
}, 5000)
