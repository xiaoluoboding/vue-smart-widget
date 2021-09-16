<template>
  <div style="padding: 15px">
    <el-row type="flex" :gutter="32">
      <el-col :span="8">
        <smart-widget simple>
          <h3>Simple Widget Without Header</h3>
          <p>
            {{ placeholder }}
          </p>
        </smart-widget>
      </el-col>
      <el-col :span="8">
        <smart-widget title="Default Widget" shadow="hover" :translate-y="10">
          <p>
            {{ placeholder }}
          </p>
        </smart-widget>
      </el-col>
      <el-col :span="8">
        <smart-widget
          title="With additional fullscreen button"
          fullscreen
          shadow="never"
        >
          <p>
            {{ placeholder }}
          </p>
        </smart-widget>
      </el-col>
    </el-row>
    <br />
    <el-row type="flex" :gutter="32">
      <el-col :span="16">
        <smart-widget
          title="Mixed Line and Bar Chart"
          sub-title="Use ve-charts components."
          fullscreen
          collapse
          refresh
          is-actived
          actived-color="#40b883"
          :loading="loading"
          @on-refresh="handleRefresh"
          @on-fullscreen="handleFullscreen"
        >
          <template v-slot="{ contentH }">
            <bar-chart
              :option="barChartOptions"
              :height="contentH"
              :width="200"
            />
          </template>
        </smart-widget>
      </el-col>
      <el-col :span="8">
        <smart-widget
          title="Doughnut Chart"
          fullscreen
          collapse
          v-slot="{ contentH }"
        >
          <pie-chart :option="pieChartOptions" :height="contentH" />
        </smart-widget>
      </el-col>
    </el-row>
    <br />
    <el-row type="flex" :gutter="32">
      <el-col :span="8">
        <smart-widget title="Widget with Editbox">
          <template #editbox>
            <el-alert title="I am Editbox slot" type="success"> </el-alert>
          </template>
          <p>
            {{ placeholder }}
          </p>
        </smart-widget>
      </el-col>
      <el-col :span="8">
        <smart-widget title="Widget with Footer">
          <p>
            {{ placeholder }}
          </p>
          <template #footer>
            <el-alert title="I am Footer slot" type="success"> </el-alert>
          </template>
        </smart-widget>
      </el-col>
      <el-col :span="8">
        <smart-widget title="Widget with custom toolbar" :header-height="36">
          <template #toolbar>
            <div style="margin: 0 12px">
              <el-button
                type="primary"
                size="mini"
                @click="$router.push('/widget-with-grid')"
                >Grid</el-button
              >
            </div>
          </template>
          <p>
            {{ placeholder }}
          </p>
        </smart-widget>
      </el-col>
    </el-row>
    <br />
    <el-row type="flex" :gutter="32">
      <el-col>
        <smart-widget title="Wiget with Table" collapse>
          <el-table :data="tableData" style="width: 100%" size="mini">
            <el-table-column fixed prop="date" label="日期"> </el-table-column>
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="province" label="省份"> </el-table-column>
            <el-table-column prop="city" label="市区"> </el-table-column>
            <el-table-column prop="address" label="地址" width="200">
            </el-table-column>
            <el-table-column prop="zip" label="邮编"> </el-table-column>
          </el-table>
        </smart-widget>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref } from 'vue'

import { use } from 'echarts'
import { LegendComponent, TooltipComponent } from 'echarts/components'
use([LegendComponent, TooltipComponent])

export default {
  name: 'WidgetOnly',
  data() {
    return {
      loading: false,
      placeholder:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!',
      tableData: [
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
    })

    return {
      barChartOptions,
      pieChartOptions
    }
  },
  methods: {
    handleRefresh() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    handleFullscreen(val) {
      if (val) {
        console.log(val)
      }
    }
  }
}
</script>

<style lang="scss"></style>
