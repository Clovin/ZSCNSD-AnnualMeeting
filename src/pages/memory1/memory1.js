import './stylesheets/memory1.css'
import Page from '../../lib/Page'

let initFunc = function () {
  console.log('init')
}

let playFunc = function () {
  console.log('draw')
}

let memory1 = new Page('memory1', initFunc, playFunc)

export {memory1 as default}
