/**
 * Created by Clovin on 07/11/2017.
 */
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/pie')

class Pie {
  constructor (dom, option) {
    this.dom = dom
    this.option = option
    this.chart = null
  }

  init () {
    this.chart = echarts.init(document.querySelectorAll(this.dom)[0])
  }

  draw () {
    this.chart.setOption(this.option)
  }
}

export {Pie as default}
