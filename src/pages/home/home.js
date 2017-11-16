import './stylesheets/home.css'
import Page from '../../lib/Page'

let initFunc = function () {
  console.log('init')
}

let playFunc = function () {
  console.log('play')
}

let home = new Page('home', initFunc, playFunc)

export {home as default}
