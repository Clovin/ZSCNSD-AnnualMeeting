import './stylesheets/memory2.css'
import Page from '../../lib/Page'

let initFunc = function () {
}

let playFunc = function () {
  let i = 0

  let text = '主持人：<br>以下是一轮通过名单  ▼'

  let m2 = document.getElementsByClassName('memory2')[0]

  function show () {
    document.getElementsByClassName('dialogue')[1].innerHTML = ' '
    let str = text.substr(0, i)
    document.getElementsByClassName('dialogue')[1].innerHTML = str
    i++
    setTimeout(function () {
      if (i <= text.length) {
        show()
      } else {
        i = 0
        return true
      }
    }, 150)
  }

  document.getElementsByClassName('memory2')[0].addEventListener('animationend', function () {
    setTimeout(function () {
      document.getElementsByClassName('dialog')[1].style.visibility = 'inherit'
    }, 1000)
    setTimeout(function () {
      show()
    }, 2500)
    setTimeout(function () {
      text = '......'
      show()
    }, 9000)
    setTimeout(function () {
      text = '......'
      show()
    }, 13000)
    setTimeout(function () {
      text = '主人公：<br>      “哇 ！ 我进去了”  ▼'
      show()
    }, 16000)
    setTimeout(function () {
      m2.style.visibility = 'hidden'
    }, 30000)
  })
}

let memory2 = new Page('memory2', initFunc, playFunc)

export {memory2 as default}
