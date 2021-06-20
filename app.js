const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

function playSound(soundobj) {
    var thisSound = document.getElementById(soundobj)
    thisSound.play()
}

function stopSound(soundobj) {
    var thisSound = document.getElementById(soundobj)
    thisSound.pause()
    thisSound.currentTime = 0
}