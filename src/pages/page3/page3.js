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
  let p3 = document.getElementsByClassName('page3')[0]
  let CT = []
  CT[0] = document.getElementsByClassName('chart_title')[0]
  CT[1] = document.getElementsByClassName('chart_title')[1]
  CT[2] = document.getElementsByClassName('chart_title')[2]
  CT[3] = document.getElementsByClassName('chart_title')[3]
  CT[4] = document.getElementsByClassName('chart_title')[4]
  p3.addEventListener('animationstart', function () {
    document.getElementsByClassName('text_3')[0].style.animation = 'FadeIn 1500ms linear 2500ms forwards'
    document.getElementsByClassName('text_3')[0].addEventListener('animationend', function () {
      for (let i = 0; i <= 4; i++) {
        CT[i].style.animation = 'FadeIn 1s linear 250ms forwards'
      }
      chartXh.draw()
      chartFx.draw()
      chartNg.draw()
      chartEg.draw()
      chartZh.draw()
    })
    document.getElementsByClassName('text_3_1')[0].style.animation = 'FadeIn 1s linear 4000ms forwards'
  })
}
let page3 = new Page('page3', initFunc, playFunc)

export {page3 as default}
