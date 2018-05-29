<template>
  <div>
    <smart-widget-group :layout="layout" :row-height="48" :margin="[15, 15]" @layout-updated="handleLayoutUpdated">
      <smart-widget slot="0" simple>
        <div class="layout-center">
          <h3>Simple Widget</h3>
        </div>
      </smart-widget>
      <smart-widget slot="1" title="Default Widget">
        <div class="layout-center">
          <h3>Widget with Header</h3>
        </div>
      </smart-widget>
      <smart-widget slot="2" title="Full Screen" fullscreen>
        <div class="layout-center">
          <h3>Make any widget full screen</h3>
        </div>
      </smart-widget>
      <smart-widget slot="3" title="Refresh & Loading" refresh :loading="loading" @on-refresh="handleRefresh">
        <div class="layout-center">
          <h3>Widget with Refresh button and loading mask</h3>
        </div>
      </smart-widget>
      <smart-widget slot="4" title="Editbox">
        <template slot="editbox">
          <el-alert
            title="I am Editbox slot"
            type="success">
          </el-alert>
        </template>
        <p>Widget with Editbox</p>
      </smart-widget>
      <smart-widget slot="5" title="Footer">
        <template slot="footer">
          <el-alert
            title="I am Footer slot"
            type="success">
          </el-alert>
        </template>
        <p>Widget with Footer</p>
      </smart-widget>
      <smart-widget slot="6" title="Table" fixed-height>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="150">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </smart-widget>
      <smart-widget slot="7" title="Custom ToolBar">
        <template slot="toolbar">
          <div style="margin: 0 12px;">
            <el-button type="primary" size="mini" @click="$router.push('/shopify-draggable')">Shopify</el-button>
            <el-button type="success" size="mini" @click="$router.push('/draggable-grid')">Grid</el-button>
            <el-button type="danger" size="mini" @click="$router.push('/home')">Index</el-button>
          </div>
        </template>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="150">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </smart-widget>
      <smart-widget slot="8" title="2017前端热门框架对比"
        fullscreen
        :loading="loading"
        refresh
        @on-refresh="handleRefresh">
        <ve-bar-chart :data="barData" :height="contentH" slot-scope="{contentH}" />
      </smart-widget>
      <smart-widget slot="9" title="各平台PV占比" fullscreen collapse>
        <ve-donut-chart :data="donutData" :settings="donutSetting" :height="contentH" slot-scope="{contentH}" />
      </smart-widget>
    </smart-widget-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      layout: [
        { x: 0, y: 0, w: 2, h: 3, i: '0' },
        { x: 2, y: 0, w: 2, h: 3, i: '1' },
        { x: 4, y: 0, w: 2, h: 3, i: '2' },
        { x: 6, y: 0, w: 2, h: 3, i: '3' },
        { x: 8, y: 0, w: 2, h: 3, i: '4' },
        { x: 10, y: 0, w: 2, h: 3, i: '5' },
        { x: 0, y: 10, w: 6, h: 5, i: '6' },
        { x: 6, y: 10, w: 6, h: 5, i: '7' },
        { x: 0, y: 3, w: 7, h: 7, i: '8' },
        { x: 7, y: 3, w: 5, h: 7, i: '9' }
      ]
    }
  },
  methods: {
    handleRefresh () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    handleLayoutUpdated (newLayout) {
      console.log(JSON.stringify(newLayout))
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
    this.tableData = [{
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-08',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-06',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-07',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }]
    this.donutSetting = {
      offsetY: '60%'
    }
  }
}
</script>

<style lang="less">
.footer {
  display: flex;
  padding: 5px;
  border-top: 1px solid #ebeef1;
}
.layout-center {
  text-align: center;
}
</style>
