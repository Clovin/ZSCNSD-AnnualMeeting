/**
 * Created by Clovin on 03/11/2017.
 */
import style from './stylesheets/page1.css'
import Page from '../../lib/Page'

console.log(style)

let test = require('./stylesheets/page1.css')
console.log(test)

let page1 = new Page('page1')

export {page1 as default}
