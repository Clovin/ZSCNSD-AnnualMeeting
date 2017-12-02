/**
 * Created by Clovin on 03/11/2017.
 */
import './stylesheets/page1.css'
import Page from '../../lib/Page'

let initFunc = function () {
  console.log('init')
}

let playFunc = function () {
  let pg1 = document.getElementsByClassName('page1')[0]
  let txt1 = document.getElementsByClassName('text_1')[0]
  pg1.addEventListener('animationstart', function () {
    txt1.style.animation = 'FadeIn 1000ms linear forwards'
  })
}

let page1 = new Page('page1', initFunc, playFunc)

export {page1 as default}
