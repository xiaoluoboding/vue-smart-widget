const placeholder =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!'

const defaultWidget = `<smart-widget title="Widget Title">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
    A consequuntur, deserunt eaque error nulla temporibus!
  </p>
</smart-widget>
`

const advanedWidget = `<!-- // 1. With additional fullscreen button -->
<smart-widget title="With additional fullscreen button" fullscreen>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
    A consequuntur, deserunt eaque error nulla temporibus!
  </p>
</smart-widget>

<!-- 2. Widget with Editbox & Footer -->
<smart-widget title="Widget with Editbox & Footer">
  <template #editbox>
    <div class="widget-alert">
      <div class="widget-alert__content">
        <span class="el-alert__title">I am Editbox slot</span>
      </div>
    </div>
  </template>
  <p>I am content</p>
  <template #footer>
    <div class="widget-alert">
      <div class="widget-alert__content">
        <span class="el-alert__title">I am Footer slot</span>
      </div>
    </div>
  </template>
</smart-widget>

<!-- 3. Widget with custom toolbar -->
<smart-widget title="Widget with custom toolbar">
  <template #toolbar>
    <div style="margin: 0 12px;">
      <button class="widget-button">Action</button>
    </div>
  </template>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
    A consequuntur, deserunt eaque error nulla temporibus!
  </p>
</smart-widget>
`

const widgetWithGridHTML = `
<smart-widget-grid :layout="layout">
  <template #0>
    <smart-widget simple>
      <div class="layout-center">
        <h3>Simple Widget</h3>
      </div>
    </smart-widget>
  </template>
  <template #1>
    <smart-widget title="Default Widget">
      <div class="layout-center">
        <h3>Widget with Header</h3>
      </div>
    </smart-widget>
  </template>
  <template #2>
    <smart-widget title="Full Screen" fullscreen>
      <div class="layout-center">
        <h3>Make any widget full screen</h3>
      </div>
    </smart-widget>
  </template>
</smart-widget-grid>
`

const widgetWithGridJS = `
<script setup>
const layout = [
  { x: 0, y: 0, w: 4, h: 4, i: '0' },
  { x: 4, y: 0, w: 4, h: 4, i: '1' },
  { x: 8, y: 0, w: 4, h: 4, i: '2' }
]
</script>
`

const tableData = [
  {
    date: '2016-05-03',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  },
  {
    date: '2016-05-02',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  },
  {
    date: '2016-05-08',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  },
  {
    date: '2016-05-06',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  },
  {
    date: '2016-05-07',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  }
]

const barChartOptions = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  legend: {
    data: ['蒸发量', '降水量', '平均温度']
  },
  xAxis: [
    {
      type: 'category',
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月'
      ],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '水量',
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value} ml'
      }
    },
    {
      type: 'value',
      name: '温度',
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ],
  series: [
    {
      name: '蒸发量',
      type: 'bar',
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
      ]
    },
    {
      name: '降水量',
      type: 'bar',
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
      ]
    },
    {
      name: '平均温度',
      type: 'line',
      yAxisIndex: 1,
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ]
}

const pieChartOptions = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '24',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '搜索引擎' },
        { value: 735, name: '直接访问' },
        { value: 580, name: '邮件营销' },
        { value: 484, name: '联盟广告' },
        { value: 300, name: '视频广告' }
      ]
    }
  ]
}

export {
  placeholder,
  defaultWidget,
  advanedWidget,
  widgetWithGridHTML,
  widgetWithGridJS,
  tableData,
  barChartOptions,
  pieChartOptions
}
