import './stylesheets/page3.css'
import Page from '../../lib/Page'
import Charts from '../../lib/Charts'

let initFunc = function () {
  this.chart = new Charts('.chart-xh', {
    series: [
      {
        type: 'pie',
        radius: ['0%', '100%'],
        labelLine: {
          normal: {
            show: false
          }
        },
        hoverAnimation: false,
        data: [
          {value: 2},
          {value: 10, itemStyle: {normal: {color: 'transparent'}}}
        ],
        itemStyle: {
          normal: {
            borderColor: '#000',
            borderWidth: 2
          }
        }
      }
    ]
  })
  this.chart.init()
}

let playFunc = function () {
  this.chart.draw()
}

let page3 = new Page('page3', initFunc, playFunc)

export {page3 as default}
