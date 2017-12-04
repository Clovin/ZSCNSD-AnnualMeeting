import './stylesheets/memory3.css'
import Page from '../../lib/Page'

let initFunc = function () {
  console.log('init')
}

let playFunc = function () {
  console.log('m3')
  let i = 0

  let text = '从那一年的夏天开始， 懵懂无知的稚嫩少女， 每周一天地越过下课的人群， 准时准点地值班。▼'

  let m3 = document.getElementsByClassName('memory3')[0]

  function show () {
    document.getElementsByClassName('dialogue')[2].innerHTML = ' '
    let str = text.substr(0, i)
    document.getElementsByClassName('dialogue')[2].innerHTML = str
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

  m3.addEventListener('animationend', function () {
    setTimeout(function () {
      document.getElementsByClassName('dialog')[2].style.visibility = 'inherit'
    }, 1000)
    setTimeout(function () {
      show()
    }, 2500)
    setTimeout(function () {
      text = '师妹：<br>“师兄，我到了，你在哪？” ▼'
      show()
    }, 12000)
    setTimeout(function () {
      text = '跟着师兄的脚步，慢慢地， 操作熟练起来，然后开始了单刷之旅。 ▼'
      show()
    }, 18000)
    setTimeout(function () {
      text = '嘿，你知道吗？那时候自信满满的你 看起来好帅。▼'
      show()
    }, 24000)
    setTimeout(function () {
      m3.className = m3.className + ' ' + 'Me3Out'
      document.getElementsByClassName('Me3Out')[0].style.animation = 'M3Out 2s ease-in 1s forwards'
    }, 32000)
  })
}

let memory3 = new Page('memory3', initFunc, playFunc)

export {memory3 as default}
