<template>
  <smart-widget-grid
    :layout="layout"
    :row-height="48"
    :margin="[15, 15]"
    :is-static="isStatic"
    @layout-updated="onLayoutUpdated">
    <smart-widget slot="0" simple>
      <div class="layout-center">
        <h3>Simple Widget Without Header</h3>
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
    <smart-widget slot="3" title="Widget with Loader" :loading="true">
      <div class="layout-center">
        <h3>Widget with loading mask</h3>
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
    <smart-widget slot="6" title="2017 Hotest Frontend Project"
      fullscreen
      refresh
      is-actived
      :loading="loading"
      @before-fullscreen="val => isStatic = val"
      @on-refresh="handleRefresh">
      <template v-slot="{contentH}">
        <ve-bar-chart :data="barData" :height="contentH" />
      </template>
    </smart-widget>
    <smart-widget slot="7" title="Diffrent Platforms PV" fullscreen collapse>
      <template v-slot="{contentH}">
        <ve-donut-chart
          :data="donutData"
          :settings="donutSetting"
          :height="contentH"
        />
      </template>
    </smart-widget>
    <smart-widget slot="8" title="Widget body content's height is fixed" fixed-height>
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
    <smart-widget slot="9" title="Widget with custom toolbar">
      <template slot="toolbar">
        <div style="margin: 0 12px;">
          <el-button type="success" size="mini" @click="$router.push('/widget-only')">Index</el-button>
        </div>
      </template>
      <el-table style="width: 100%" :data="tableData">
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
  </smart-widget-grid>
</template>

<script>
export default {
  data () {
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
        data: ['APP', 'PC', 'M端', '微信', '小程序']
      },
      measures: [{
        name: 'PV',
        data: [40000, 27800, 22000, 20200, 13600]
      }]
    }
    this.tableData = [
      {
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
      }
    ]
    this.donutSetting = {
      offsetY: '60%'
    }
  },
  methods: {
    handleRefresh () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    onLayoutUpdated (newLayout) {
      console.log(JSON.stringify(newLayout))
    },
    onMove (params) {
      console.log(params)
    },
    onResize (params) {
      console.log(params)
    },
    onContainerResized (params) {
      console.log(params)
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
