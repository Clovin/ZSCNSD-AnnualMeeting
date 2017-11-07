/**
 * Created by Clovin on 03/11/2017.
 */
class Page {
  constructor (dom, initFunc, playFunc) {
    this.dom = dom
    this.initFunc = initFunc
    this.playFunc = playFunc
  }

  initPage () {
    // init
    this.initFunc()
  }

  play () {
    // play
    this.playFunc()
  }
}

export {Page as default}
