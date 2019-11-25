<template>
  <div style="padding: 15px;">
    <el-row type="flex" :gutter="32">
      <el-col :span="8">
        <smart-widget simple>
          <h3>Simple Widget Without Header</h3>
          <p>
            {{placeholder}}
          </p>
        </smart-widget>
      </el-col>
      <el-col :span="8">
        <smart-widget
          title="Default Widget"
          shadow="hover"
          :translate-y="10"
        >
          <p>
            {{placeholder}}
          </p>
        </smart-widget>
      </el-col>
      <el-col :span="8">
        <smart-widget title="With additional fullscreen button" fullscreen shadow="never">
          <p>
            {{placeholder}}
          </p>
        </smart-widget>
      </el-col>
    </el-row>
    <br>
    <el-row type="flex" :gutter="32">
      <el-col :span="16">
        <smart-widget title="2017 Hotest Frontend Project" sub-title="Use ve-charts components."
          fullscreen
          collapse
          refresh
          is-actived
          actived-color="#f4a"
          :loading="loading"
          @on-refresh="handleRefresh"
          @on-fullscreen="handleFullscreen">
          <ve-bar-chart :data="barData" :height="contentH" slot-scope="{contentH}" />
        </smart-widget>
      </el-col>
      <el-col :span="8">
        <smart-widget title="Diffrent Platforms PV" fullscreen collapse>
          <ve-donut-chart :data="donutData" :settings="donutSetting" :height="contentH" slot-scope="{contentH}" />
        </smart-widget>
      </el-col>
    </el-row>
    <br>
    <el-row type="flex" :gutter="32">
      <el-col :span="8">
        <smart-widget title="Widget with Editbox">
          <template slot="editbox">
            <el-alert
              title="I am Editbox slot"
              type="success">
            </el-alert>
          </template>
          <p>
            {{placeholder}}
          </p>
        </smart-widget>
      </el-col>
      <el-col :span="8">
        <smart-widget title="Widget with Footer">
          <p>
            {{placeholder}}
          </p>
          <template slot="footer">
            <el-alert
              title="I am Footer slot"
              type="success">
            </el-alert>
          </template>
        </smart-widget>
      </el-col>
      <el-col :span="8">
        <smart-widget title="Widget with custom toolbar">
          <template slot="toolbar">
            <div style="margin: 0 12px;">
              <el-button type="primary" size="mini" @click="$router.push('/widget-with-grid')">Grid</el-button>
            </div>
          </template>
          <p>
            {{placeholder}}
          </p>
        </smart-widget>
      </el-col>
    </el-row>
    <br>
    <el-row type="flex" :gutter="32">
      <el-col>
        <smart-widget title="Wiget with Table" collapse>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column fixed prop="date" label="日期">
            </el-table-column>
            <el-table-column prop="name" label="姓名">
            </el-table-column>
            <el-table-column prop="province" label="省份">
            </el-table-column>
            <el-table-column prop="city" label="市区">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
            <el-table-column prop="zip" label="邮编">
            </el-table-column>
          </el-table>
        </smart-widget>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      placeholder: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  methods: {
    handleRefresh () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    handleFullscreen (val) {
      if (val) {
        console.log(val)
      }
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
    this.donutSetting = {
      offsetY: '60%'
    }
  }
}
</script>

<style lang="less">
</style>
