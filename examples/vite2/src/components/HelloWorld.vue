<template>
  <smart-widget-grid :layout="layout" :row-height="48" :margin="[15, 15]">
    <template #0>
      <smart-widget title="Default Widget">
        <div class="layout-center"></div>
      </smart-widget>
    </template>
    <template #1>
      <smart-widget title="Default Widget">
        <div class="layout-center"></div>
      </smart-widget>
    </template>
    <template #2>
      <smart-widget title="Default Widget">
        <div class="layout-center"></div>
      </smart-widget>
    </template>
    <template #3>
      <smart-widget title="Default Widget">
        <div class="layout-center"></div>
      </smart-widget>
    </template>
    <template #4>
      <smart-widget title="Default Widget">
        <div class="layout-center"></div>
      </smart-widget>
    </template>
    <template #5>
      <smart-widget title="Default Widget">
        <div class="layout-center"></div>
      </smart-widget>
    </template>
    <template #6>
      <smart-widget title="Default Widget">
        <div class="layout-center"></div>
      </smart-widget>
    </template>
    <template #7>
      <smart-widget title="Default Widget">
        <div class="layout-center"></div>
      </smart-widget>
    </template>
    <template #8>
      <smart-widget title="Default Widget">
        <div class="layout-center"></div>
      </smart-widget>
    </template>
    <template #9>
      <smart-widget title="Default Widget">
        <div class="layout-center"></div>
      </smart-widget>
    </template>
  </smart-widget-grid>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

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
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
