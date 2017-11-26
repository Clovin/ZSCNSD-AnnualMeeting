/**
 *
 * Created by Clovin on 03/11/2017.
 */
import './assets/stylesheets/cssreset.css'
import './assets/stylesheets/common.css'

import controller from './controller'

controller.initAnimation()

controller.playAnimation()

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

function StartAnimation (obj) {
  obj.style.animationPlayState = 'running'
}

let btn = document.getElementsByClassName('btn')[0]
btn.onclick = function () {
  cover.style.animationPlayState = 'running'
  StartAnimation(index[0])
}
