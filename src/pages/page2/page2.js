/**
 * Created by Clovin on 03/11/2017.
 */
import './stylesheets/page2.css'
import Page from '../../lib/Page'
import Charts from '../../lib/Charts'

var initFunc = function () {
  this.chart = new Charts('.js-page2-chart', {
    series: [
      {
        name: 'xxx',
        type: 'pie',
        radius: ['50%', '70%'],
        data: [
          {value: 2, name: '1'},
          {value: 3, name: '2'},
          {value: 3, name: '3'},
          {value: 3, name: '4'},
          {value: 3, name: '5'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  })
  this.chart.init()
}

var playFunc = function () {
  this.chart.draw()
}

let page2 = new Page('.page2', initFunc, playFunc)

export {page2 as default}
