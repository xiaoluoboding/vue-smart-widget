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
          <bar-chart :option="barChartOptions" :height="contentH" />
        </template>
      </smart-widget>
    </template>
    <template #7>
      <smart-widget title="Doughnut Chart" fullscreen collapse>
        <template v-slot="{ contentH }">
          <pie-chart :option="pieChartOptions" :height="contentH" />
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

<script setup lang="ts">
import { ref } from 'vue'

import { use } from 'echarts'
import { LegendComponent, TooltipComponent } from 'echarts/components'
use([LegendComponent, TooltipComponent])

import {
  placeholder,
  tableData,
  barChartOptions,
  pieChartOptions
} from '@/constants/template'

const loading = ref(false)
const isStatic = ref(false)
const height = ref(360)

const layout = [
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

const handleRefresh = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
const handleFullscreen = (val: any) => {
  if (val) {
    console.log(val)
  }
}
function onLayoutUpdated(newLayout: any) {
  console.log(JSON.stringify(newLayout))
}
function onMove(params: any) {
  console.log(params)
}
function onResize(params: any) {
  console.log(params)
}
function onContainerResized(params: any) {
  console.log(params)
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
