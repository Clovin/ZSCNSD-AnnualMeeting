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
let cover = document.getElementsByClassName('cover')[0]
index[0] = document.getElementsByClassName('home')[0]
index[1] = document.getElementsByClassName('page1')[0]
index[2] = document.getElementsByClassName('memory1')[0]
index[3] = document.getElementsByClassName('memory2')[0]
index[4] = document.getElementsByClassName('memory3')[0]
index[5] = document.getElementsByClassName('page2')[0]
index[6] = document.getElementsByClassName('page3')[0]
index[7] = document.getElementsByClassName('page4')[0]
let btn = document.getElementsByClassName('btn')[0]

function Start (ele) {
  ele.style.animationPlayState = 'running'
}

btn.onclick = function () {
  cover.style.animationPlayState = 'running'
  for (let i = 0; i <= 7; i++) {
    Start(index[i])
  }
}

export {controller as default}
