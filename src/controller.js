/**
 * Created by Clovin on 03/11/2017.
 */

import Controller from './lib/Controller'

import home from './pages/home/home'
import page1 from './pages/page1/page1'
import page2 from './pages/page2/page2'
import page3 from './pages/page3/page3'
import page4 from './pages/page4/page4'
import memory1 from './pages/memory1/memory1'
import memory2 from './pages/memory2/memory2'
import memory3 from './pages/memory3/memory3'

let controller = new Controller()

controller.pushAnimation(home)
controller.pushAnimation(page1)
controller.pushAnimation(memory1)
controller.pushAnimation(memory2)
controller.pushAnimation(memory3)
controller.pushAnimation(page2)
controller.pushAnimation(page3)
controller.pushAnimation(page4)

let index = []
let btn = document.getElementsByClassName('btn')[0]
let cover = document.getElementsByClassName('cover')[0]
index[0] = document.getElementsByClassName('home')[0]
index[1] = document.getElementsByClassName('page1')[0]
index[2] = document.getElementsByClassName('memory1')[0]
index[3] = document.getElementsByClassName('memory2')[0]
index[4] = document.getElementsByClassName('memory3')[0]
index[5] = document.getElementsByClassName('page2')[0]
index[6] = document.getElementsByClassName('page3')[0]
index[7] = document.getElementsByClassName('page4')[0]

btn.onclick = function () {
  cover.style.animation = 'Rotate 10s linear infinite'
  index[0].style.animation = 'SclOut 2s ease-out 3s forwards'
  index[0].addEventListener('animationend', function () {
    index[1].style.animation = 'P1In 2s ease-out 500ms forwards'
  })
  index[1].addEventListener('animationend', function () {
    index[2].style.animation = 'M1In 2s ease-out 4s forwards'
  })
  index[2].addEventListener('animationend', function () {
    index[3].style.animation = 'M2In 2s ease-out 26s forwards'
  })
  index[3].addEventListener('animationend', function () {
    index[4].style.animation = 'M3In 2s ease-out 26s forwards'
  })
  index[4].addEventListener('animationend', function () {
    index[5].style.animation = 'P2In 2s ease-out 30s forwards'
  })
  index[5].addEventListener('animationstart', function () {
    for (let j = 0; j < 4; j++) {
      index[j].style.visibility = 'hidden'
    }
    index[4].className = index[4].className + ' Me3Out'
    index[4].style.animation = 'M3Out 2s ease-in 1s forwards'
  })
  index[5].addEventListener('animationend', function () {
    index[5].className = index[5].className + ' Pg2Out'
    index[5].style.animation = 'P2Out 2s ease-in 4s forwards'
    index[6].style.animation = 'P3In 2s ease-out 6500ms forwards'
  })
  index[6].addEventListener('animationend', function () {
    index[7].style.animation = 'P4In 2s ease-out 6500ms forwards'
  })
}

export {controller as default}
