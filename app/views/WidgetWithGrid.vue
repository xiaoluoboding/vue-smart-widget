<template>
  <smart-widget-grid :layout="layout" :row-height="48" :colNum="4">
    <smart-widget simple v-for="item in layout" :key="item.i" :slot="item.i">
      <div class="layout-center">
        <smart-widget-grid v-if="item.child" :layout="item.child" :resizable="false" :colNum="item.w">
          <smart-widget v-for="child in item.child" :key="child.id" :slot="child.i" :title="child.i">
            {{ item.i }}
          </smart-widget>
        </smart-widget-grid>
      </div>
    </smart-widget>
  </smart-widget-grid>
</template>

<script>
import SmartWidget from '../../src/packages/SmartWidget.vue'
export default {
  components: { SmartWidget },
  data () {
    return {
      loading: false,
      isStatic: false,
      layout: [
        { x: 0, y: 0, w: 2, h: 3, i: '0', child: [{ x: 0, y: 0, w: 4, h: 2, i: 'A01' }, { x: 5, y: 0, w: 4, h: 2, i: 'A02' }] },
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
