import './stylesheets/memory1.css'
import Page from '../../lib/Page'

let initFunc = function () {
}

let playFunc = function () {
  let i = 0

  let text = '主考员：<br> “请同学们注意，本次考试时间为两小时，答完的同学就可以交卷了。”  ▼'

  let m1 = document.getElementsByClassName('memory1')[0]

  function show () {
    document.getElementsByClassName('dialogue')[0].innerHTML = ' '
    let str = text.substr(0, i)
    document.getElementsByClassName('dialogue')[0].innerHTML = str
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

  m1.addEventListener('animationend', function () {
    setTimeout(function () {
      document.getElementsByClassName('dialog')[0].style.visibility = 'inherit'
    }, 1000)
    setTimeout(function () {
      show()
    }, 3000)
    setTimeout(function () {
      text = '......'
      show()
    }, 12000)
    setTimeout(function () {
      text = '......'
      show()
    }, 15000)
    setTimeout(function () {
      text = '主考员：<br> “时间到了，考试结束 ！”  ▼'
      show()
    }, 19000)
    setTimeout(function () {
      m1.style.visibility = 'hidden'
    }, 30000)
  })
}

let memory1 = new Page('memory1', initFunc, playFunc)

export {memory1 as default}
