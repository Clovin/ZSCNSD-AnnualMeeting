/**
 * Created by Clovin on 03/11/2017.
 */

import Controller from './lib/Controller'

import home from './pages/home/home'
import page1 from './pages/page1/page1'
import page2 from './pages/page2/page2'
import page3 from './pages/page3/page3'
import page4 from './pages/page4/page4'
import memory1 from './pages/memory1/memory1'
import memory2 from './pages/memory2/memory2'
import memory3 from './pages/memory3/memory3'

let controller = new Controller()

controller.pushAnimation(home)
controller.pushAnimation(page1)
controller.pushAnimation(memory1)
controller.pushAnimation(memory2)
controller.pushAnimation(memory3)
controller.pushAnimation(page2)
controller.pushAnimation(page3)
controller.pushAnimation(page4)

export {controller as default}
