<template>
  <div>
    <el-row type="flex" :gutter="32">
      <el-col :span="12">
        <smart-widget title="Default Widget">
          <p>
            Widget comes with a default 10 padding to the body which can be removed by adding the class <code>.no-padding</code>
            to the <code>.widget-body</code> class. The default widget also comes with 5 widget buttons as displayed on top right
            corner of the widget header.
          </p>
        </smart-widget>
      </el-col>
      <el-col :span="12">
        <smart-widget title="2017前端热门框架对比" fullscreen collapse>
          <ve-bar-chart :data="chartData" />
        </smart-widget>
      </el-col>
    </el-row>
    <br>
    <el-row type="flex" :gutter="32">
      <el-col :span="12">
        <smart-widget
          title="Default Widget"
          :loading="loading"
          refresh
          @on-refresh="handleRefresh"
        >
          <template slot="toolbox">
            <el-alert
              title="成功提示的文案"
              type="success">
            </el-alert>
          </template>
          <p>
            Widget comes with a default 10 padding to the body which can be removed by adding the class <code>.no-padding</code>
            to the <code>.widget-body</code> class. The default widget also comes with 5 widget buttons as displayed on top right
            corner of the widget header.
          </p>
          <template slot="footer">
            <el-button>Footer</el-button>
          </template>
        </smart-widget>
      </el-col>
      <el-col :span="12">
        <smart-widget title="自定义ToolBar">
          <template slot="toolbar">
            <el-button type="primary" size="mini" @click="handleRoute">跳转</el-button>
          </template>
          <p>
            Widget comes with a default 10 padding to the body which can be removed by adding the class <code>.no-padding</code>
            to the <code>.widget-body</code> class. The default widget also comes with 5 widget buttons as displayed on top right
            corner of the widget header.
          </p>
        </smart-widget>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SmartWidget from '@/components/SmartWidget'

export default {
  components: {
    SmartWidget
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    handleRefresh () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    handleRoute () {
      this.$router.push('/shopify-draggable')
    }
  },
  created () {
    this.chartData = {
      dimensions: {
        name: 'Year',
        data: [
          'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.',
          'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
        ]
      },
      measures: [{
        name: 'Vue',
        data: [3000, 3500, 3900, 3100, 3200, 3100, 3600, 3300, 3600, 3400, 3100, 3000]
      }, {
        name: 'React',
        data: [2000, 2000, 2600, 2300, 2300, 2000, 2600, 2200, 2500, 2800, 2500, 2200]
      }, {
        name: 'Angular',
        data: [827, 949, 1400, 1000, 884, 911, 983, 989, 925, 1100, 1200, 930]
      }]
    }
  }
}
</script>

<style>

</style>
