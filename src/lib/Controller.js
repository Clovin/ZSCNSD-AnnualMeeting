/**
 * Created by Clovin on 03/11/2017.
 */

class Controller {
  constructor () {
    this.animationQueue = []
  }

  initAnimation () {
    this.animationQueue.forEach(animation => {
      animation.initPage()
    })
  }

  pushAnimation (animation) {
    this.animationQueue.push(animation)
  }

  playAnimation () {
    this.animationQueue.forEach(animation => {
      animation.play()
    })
  }
}

export {Controller as default}
