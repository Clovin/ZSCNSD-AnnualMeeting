import './stylesheets/page4.css'
import Page from '../../lib/Page'

let initFunc = function () {
  console.log('init')
}

let playFunc = function () {
  let page = document.getElementsByClassName('page4')[0]
  let cvr = document.getElementsByClassName('P4cover')[0]
  let txt = []
  for (let i = 0; i < 8; i++) {
    txt[i] = document.getElementsByClassName('T' + i)[0]
  }
  page.addEventListener('animationend', function () {
    cvr.style.animation = 'Gradient 1s linear 500ms forwards'
    cvr.addEventListener('animationend', function () {
      txt[0].style.animation = 'BlurIn 1s linear 500ms forwards'
      for (let j = 0; j < 7; j++) {
        txt[j].addEventListener('animationstart', function () {
          txt[j + 1].style.animation = 'BlurIn 1s linear 4500ms forwards'
        })
        txt[j].addEventListener('animationend', function () {
          txt[j].className = txt[j].className + ' BlOt'
          txt[j].style.animation = 'BlurOut 1s linear 3000ms forwards'
        })
      }
    })
  })
}

let page4 = new Page('page4', initFunc, playFunc)

export {page4 as default}
