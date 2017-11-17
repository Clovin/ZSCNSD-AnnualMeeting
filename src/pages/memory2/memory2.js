import './stylesheets/memory2.css'
import Page from '../../lib/Page'

let initFunc = function () {
  console.log('init')
}

let playFunc = function () {
  console.log('draw')
}

let memory2 = new Page('memory2', initFunc, playFunc)

export {memory2 as default}
