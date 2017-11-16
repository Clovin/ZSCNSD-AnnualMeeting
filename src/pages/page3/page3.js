import './stylesheets/page3.css'
import Page from '../../lib/Page'
import Charts from '../../lib/Charts'

let chartXh = new Charts('.chart-xh', {
  series: [
    {
      type: 'pie',
      radius: ['0%', '100%'],
      startAngle: 77,
      labelLine: {
        normal: {
          show: false
        }
      },
      hoverAnimation: false,
      data: [
        {value: 15, itemStyle: {normal: {color: '#4b99a5'}}},
        {value: 85, itemStyle: {normal: {color: 'transparent'}}}
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
let chartFx = new Charts('.chart-fx', {
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
        {value: 5},
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
let chartNg = new Charts('.chart-ng', {
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
        {value: 40, itemStyle: {normal: {color: '#6ab581'}}},
        {value: 20, itemStyle: {normal: {color: 'transparent'}}}
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
let chartEg = new Charts('.chart-eg', {
  series: [
    {
      type: 'pie',
      radius: ['0%', '100%'],
      startAngle: 77,
      labelLine: {
        normal: {
          show: false
        }
      },
      hoverAnimation: false,
      data: [
        {value: 15, itemStyle: {normal: {color: '#bfb466'}}},
        {value: 85, itemStyle: {normal: {color: 'transparent'}}}
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
let chartZh = new Charts('.chart-zh', {
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
        {value: 20, itemStyle: {normal: {color: '#df5a5a'}}},
        {value: 40, itemStyle: {normal: {color: 'transparent'}}}
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

let initFunc = function () {
  chartXh.init()
  chartFx.init()
  chartNg.init()
  chartEg.init()
  chartZh.init()
}

let playFunc = function () {
  chartXh.draw()
  chartFx.draw()
  chartNg.draw()
  chartEg.draw()
  chartZh.draw()
}

let page3 = new Page('page3', initFunc, playFunc)

export {page3 as default}
