import './stylesheets/page4.css'
import Page from '../../lib/Page'

let initFunc = function () {
}

let playFunc = function () {
  let page = document.getElementsByClassName('page4')[0]
  let cvr = document.getElementsByClassName('P4cover')[0]
  let txt = []
  for (let i = 0; i < 9; i++) {
    txt[i] = document.getElementsByClassName('T' + i)[0]
  }
  page.addEventListener('animationend', function () {
    cvr.style.animation = 'Gradient 1s linear 1s forwards'
    cvr.addEventListener('animationend', function () {
      txt[0].style.animation = 'BlurIn 100ms linear forwards'
      txt[0].addEventListener('animationstart', function () {
        txt[1].style.animation = 'BlurIn 1s linear 2s forwards'
      })
      txt[1].addEventListener('animationstart', function () {
        txt[2].style.animation = 'BlurIn 1s linear 7s forwards'
      })
      txt[1].addEventListener('animationend', function () {
        txt[1].className = txt[1].className + ' ' + 'BlOt'
        document.getElementsByClassName('BlOt')[0].style.animation = 'BlurOut 1s linear 6s forwards'
      })
      txt[2].addEventListener('animationstart', function () {
        txt[3].style.animation = 'BlurIn 1s linear 7s forwards'
      })
      txt[2].addEventListener('animationend', function () {
        txt[2].className = txt[2].className + ' ' + 'BlOt'
        document.getElementsByClassName('BlOt')[1].style.animation = 'BlurOut 1s linear 6s forwards'
      })
      txt[3].addEventListener('animationstart', function () {
        txt[4].style.animation = 'BlurIn 1s linear 7s forwards'
      })
      txt[3].addEventListener('animationend', function () {
        txt[3].className = txt[3].className + ' ' + 'BlOt'
        document.getElementsByClassName('BlOt')[2].style.animation = 'BlurOut 1s linear 6s forwards'
      })
      txt[4].addEventListener('animationstart', function () {
        txt[5].style.animation = 'BlurIn 1s linear 7s forwards'
      })
      txt[4].addEventListener('animationend', function () {
        txt[4].className = txt[4].className + ' ' + 'BlOt'
        document.getElementsByClassName('BlOt')[3].style.animation = 'BlurOut 1s linear 6s forwards'
      })
      txt[5].addEventListener('animationstart', function () {
        txt[6].style.animation = 'BlurIn 1s linear 7s forwards'
      })
      txt[5].addEventListener('animationend', function () {
        txt[5].className = txt[5].className + ' ' + 'BlOt'
        document.getElementsByClassName('BlOt')[4].style.animation = 'BlurOut 1s linear 6s forwards'
      })
      txt[6].addEventListener('animationstart', function () {
        txt[7].style.animation = 'BlurIn 1s linear 7s forwards'
      })
      txt[6].addEventListener('animationend', function () {
        txt[6].className = txt[6].className + ' ' + 'BlOt'
        document.getElementsByClassName('BlOt')[5].style.animation = 'BlurOut 1s linear 6s forwards'
      })
      txt[7].addEventListener('animationend', function () {
        txt[7].className = txt[7].className + ' ' + 'BlOt'
        document.getElementsByClassName('BlOt')[6].style.animation = 'BlurOut 1s linear 9s forwards'
        txt[8].style.animation = 'BlurIn 1s linear 12s forwards'
      })
    })
  })
}

let page4 = new Page('page4', initFunc, playFunc)

export {page4 as default}
