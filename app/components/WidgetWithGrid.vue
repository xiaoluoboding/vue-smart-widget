<template>
  <smart-widget-grid
    :layout="layout"
    :row-height="48"
    :margin="[15, 15]"
    :is-static="isStatic"
    @layout-updated="onLayoutUpdated"
    @moved="onMove"
    @resized="onResize"
  >
    <template #0>
      <smart-widget simple>
        <div class="layout-center">
          <h3>Simple Widget Without Header</h3>
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
    <template #3>
      <smart-widget title="Widget with Loader" :loading="true">
        <div class="layout-center">
          <h3>Widget with loading mask</h3>
        </div>
      </smart-widget>
    </template>
    <template #4>
      <smart-widget title="Editbox">
        <template #editbox>
          <el-alert title="I am Editbox slot" type="success"> </el-alert>
        </template>
        <p>Widget with Editbox</p>
      </smart-widget>
    </template>
    <template #5>
      <smart-widget title="Footer">
        <template #footer>
          <el-alert title="I am Footer slot" type="success"> </el-alert>
        </template>
        <p>Widget with Footer</p>
      </smart-widget>
    </template>
    <template #6>
      <smart-widget
        title="Mixed Line and Bar Chart"
        fullscreen
        refresh
        is-actived
        :loading="loading"
        @before-fullscreen="(val) => (isStatic = val)"
        @on-refresh="handleRefresh"
      >
        <template v-slot="{ contentH }">
          <bar-chart
            :option="barChartOptions"
            :height="contentH"
            :width="200"
          />
        </template>
      </smart-widget>
    </template>
    <template #7>
      <smart-widget title="Doughnut Chart" fullscreen collapse>
        <template v-slot="{ contentH }">
          <pie-chart
            :option="pieChartOptions"
            :height="contentH"
            :width="200"
          />
        </template>
      </smart-widget>
    </template>
    <template #8>
      <smart-widget title="Widget body content's height is fixed" fixed-height>
        <el-table :data="tableData" style="width: 100%" size="mini">
          <el-table-column prop="date" label="日期" width="150">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </smart-widget>
    </template>
    <template #9>
      <smart-widget title="Widget with custom toolbar">
        <template #toolbar>
          <div style="margin: 0 12px">
            <el-button
              type="success"
              size="mini"
              @click="$router.push('/widget-only')"
              >Index</el-button
            >
          </div>
        </template>
        <el-table style="width: 100%" :data="tableData" size="mini">
          <el-table-column prop="date" label="日期" width="150">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </smart-widget>
    </template>
  </smart-widget-grid>
</template>

<script>
import { ref } from 'vue'
import { use } from 'echarts/core'
import { LegendComponent } from 'echarts/components'
use([LegendComponent])

export default {
  name: 'WidgetWithGrid',
  data() {
    return {
      loading: false,
      isStatic: false,
      layout: [
        { x: 0, y: 0, w: 4, h: 3, i: '0' },
        { x: 4, y: 0, w: 4, h: 3, i: '1' },
        { x: 8, y: 0, w: 4, h: 3, i: '2' },
        { x: 0, y: 3, w: 4, h: 3, i: '3' },
        { x: 4, y: 3, w: 4, h: 3, i: '4' },
        { x: 8, y: 3, w: 4, h: 3, i: '5' },
        { x: 0, y: 6, w: 8, h: 6, i: '6' },
        { x: 8, y: 6, w: 4, h: 6, i: '7' },
        { x: 0, y: 12, w: 6, h: 5, i: '8' },
        { x: 6, y: 12, w: 6, h: 5, i: '9' }
      ]
    }
  },
  setup() {
    const barChartOptions = ref({
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
          data: [
            2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2
          ]
        }
      ]
    })

    const pieChartOptions = ref({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '0%',
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
    })

    const tableData = [
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }
    ]

    return {
      barChartOptions,
      pieChartOptions,
      tableData
    }
  },
  methods: {
    handleRefresh() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    onLayoutUpdated(newLayout) {
      console.log(JSON.stringify(newLayout))
    },
    onMove(params) {
      console.log(params)
    },
    onResize(params) {
      console.log(params)
    },
    onContainerResized(params) {
      console.log(params)
    }
  }
}
</script>

<style lang="scss">
.footer {
  display: flex;
  padding: 5px;
  border-top: 1px solid #ebeef1;
}
.layout-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
