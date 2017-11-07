/**
 * Created by Clovin on 03/11/2017.
 */
import './stylesheets/page1.css'
import Page from '../../lib/Page'

let initFunc = function () {
  console.log('init')
}

let playFunc = function () {
  console.log('draw')
}

let page1 = new Page('page1', initFunc, playFunc)

export {page1 as default}
