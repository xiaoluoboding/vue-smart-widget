<template>
  <div>
    <smart-widget-group :layout="layout" :margin="[15, 15]">
      <smart-widget slot="0" title="Default Widget">
        <p>
          Widget comes with a default 10 padding to the body which can be removed by adding the class <code>.no-padding</code>
          to the <code>.widget-body</code> class. The default widget also comes with 5 widget buttons as displayed on top right
          corner of the widget header.
        </p>
      </smart-widget>
      <smart-widget slot="1" title="Default Widget">
        <template slot="editbox">
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
      <smart-widget slot="2" title="自定义ToolBar">
        <template slot="toolbar">
          <el-button type="primary" size="mini" @click="$router.push('/shopify-draggable')">Shopify</el-button>
          <el-button type="success" size="mini" @click="$router.push('/draggable-grid')">Grid</el-button>
          <el-button type="danger" size="mini" @click="$router.push('/home')">Index</el-button>
        </template>
        <p>
          Widget comes with a default 10 padding to the body which can be removed by adding the class <code>.no-padding</code>
          to the <code>.widget-body</code> class. The default widget also comes with 5 widget buttons as displayed on top right
          corner of the widget header.
        </p>
      </smart-widget>
      <smart-widget slot="3"
        title="2017前端热门框架对比"
        fullscreen
        :loading="loading"
        refresh
        @on-refresh="handleRefresh">
        <ve-bar-chart :data="barData" :height="widgetH-72" slot-scope="{widgetH}" />
      </smart-widget>
      <smart-widget slot="4" title="各平台PV占比" fullscreen>
        <ve-donut-chart :data="donutData" :height="widgetH-72" slot-scope="{widgetH}" />
      </smart-widget>
    </smart-widget-group>
  </div>
</template>

<script>
import SmartWidgetGroup from '@/components/SmartWidgetGroup'
import SmartWidget from '@/components/SmartWidget'

export default {
  components: {
    SmartWidgetGroup,
    SmartWidget
  },
  data () {
    return {
      loading: false,
      layout: [
        { x: 0, y: 0, w: 4, h: 6, i: '0' },
        { x: 4, y: 0, w: 4, h: 6, i: '1' },
        { x: 8, y: 0, w: 4, h: 6, i: '2' },
        { x: 0, y: 0, w: 8, h: 8, i: '3' },
        { x: 8, y: 0, w: 4, h: 8, i: '4' }
      ]
    }
  },
  watch: {
    layout (val) {
      console.log(val)
    }
  },
  methods: {
    handleRefresh () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    layoutUpdatedEvent (newLayout) {
      console.log(newLayout)
    },
    handleMove (params) {
      console.log(params)
    }
  },
  created () {
    this.barData = {
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
    this.donutData = {
      dimensions: {
        name: '渠道',
        data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
      },
      measures: [{
        name: 'PV',
        data: [40000, 27800, 22000, 20200, 15600, 13600]
      }]
    }
  }
}
</script>

<style>

</style>
