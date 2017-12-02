import './stylesheets/home.css'
import Page from '../../lib/Page'

let initFunc = function () {
  console.log('init')
}

let playFunc = function () {
  console.log('play')
  document.getElementsByClassName('home')[0].addEventListener('animationend', function () {
    document.getElementsByClassName('text_h')[0].style.animation = 'FadeIn linear 500ms forwards'
  })
}

let home = new Page('home', initFunc, playFunc)

export {home as default}
