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
              v-if="isRendered"
            />
          </template>
        </smart-widget>
      </el-col>
      <el-col :span="8">
        <smart-widget title="Doughnut Chart" fullscreen collapse>
          <template v-slot="{ contentH }">
            <pie-chart
              :option="pieChartOptions"
              :height="contentH"
              v-if="isRendered"
            />
          </template>
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
const isRendered = ref(true)
const height = ref(360)

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
  isRendered.value = false
  setTimeout(() => {
    isRendered.value = true
  }, 100)
}
</script>

<style lang="scss"></style>
