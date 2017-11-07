let echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/pie');

let chart = echarts.init(document.getElementById('chart'));

option = {
  series : [
    {
      name: 'xxx',
      type: 'pie',
      radius: ['50%', '70%'],
      data:[
        {value:2, name:'1'},
        {value:3, name:'2'},
        {value:3, name:'3'},
        {value:3, name:'4'},
        {value:3, name:'5'}
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
};

chart.setOption(option);
