import './stylesheets/memory3.css'
import Page from '../../lib/Page'

let initFunc = function () {
  console.log('init')
}

let playFunc = function () {
  console.log('draw')
}

let memory3 = new Page('memory3', initFunc, playFunc)

export {memory3 as default}
