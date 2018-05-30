<template>
  <div style="padding: 15px;">
    <el-row type="flex" :gutter="32">
      <el-col :span="12">
        <smart-widget title="Default Widget">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
          </p>
        </smart-widget>
      </el-col>
      <el-col :span="12">
        <smart-widget title="2017 Hotest Frontend Project" fullscreen collapse>
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
          collapse
          @on-refresh="handleRefresh"
        >
          <template slot="editbox">
            <el-alert
              title="I am Editbox slot"
              type="success">
            </el-alert>
          </template>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
          </p>
          <template slot="footer">
            <el-alert
              title="I am Footer slot"
              type="success">
            </el-alert>
          </template>
        </smart-widget>
      </el-col>
      <el-col :span="12">
        <smart-widget title="Custom ToolBar">
          <template slot="toolbar">
            <div style="margin: 0 12px;">
              <el-button type="primary" size="mini" @click="$router.push('/smart-group')">Grid</el-button>
            </div>
          </template>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
          </p>
        </smart-widget>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
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
