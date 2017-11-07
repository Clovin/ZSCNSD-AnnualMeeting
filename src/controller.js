/**
 * Created by Clovin on 03/11/2017.
 */

import Controller from './lib/Controller'

import page1 from './pages/page1/page1'
import page2 from './pages/page2/page2'

let controller = new Controller()

controller.pushAnimation(page1)
controller.pushAnimation(page2)

export {controller as default}
