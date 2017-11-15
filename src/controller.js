/**
 * Created by Clovin on 03/11/2017.
 */

import Controller from './lib/Controller'

import page1 from './pages/page1/page1'
import page2 from './pages/page2/page2'
import page3 from './pages/page3/page3'

let controller = new Controller()

controller.pushAnimation(page1)
controller.pushAnimation(page2)
controller.pushAnimation(page3)

export {controller as default}
