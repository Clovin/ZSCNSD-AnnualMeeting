/**
 * Created by Clovin on 03/11/2017.
 */
class Page {
  constructor (domClass) {
    this.domClass = domClass
  }

  init () {
    // init
    console.log('init:', this.domClass)
  }

  play () {
    // play
    console.log('play:', this.domClass)
  }
}

export {Page as default}
