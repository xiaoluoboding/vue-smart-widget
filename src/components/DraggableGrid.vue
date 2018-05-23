<template>
  <grid-layout
    :layout="testLayout"
    :col-num="12"
    :row-height="30"
    :margin="[10, 10]"
    is-draggable
    is-resizable
    is-mirrored
    vertical-compact
    use-css-transforms
  >
    <grid-item
      v-for="item in testLayout"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :key="item.i"
    >
      {{item.i}}
    </grid-item>
  </grid-layout>
</template>

<script>
import { GridLayout, GridItem } from 'vue-grid-layout'

export default {
  name: 'DraggableGrid',
  components: {
    GridLayout,
    GridItem
  },
  data () {
    return {
      testLayout: [
        { x: 0, y: 0, w: 2, h: 2, i: '0' },
        { x: 2, y: 0, w: 2, h: 4, i: '1' },
        { x: 4, y: 0, w: 2, h: 5, i: '2' },
        { x: 6, y: 0, w: 2, h: 3, i: '3' },
        { x: 8, y: 0, w: 2, h: 3, i: '4' },
        { x: 10, y: 0, w: 2, h: 3, i: '5' },
        { x: 0, y: 5, w: 2, h: 5, i: '6' },
        { x: 2, y: 5, w: 2, h: 5, i: '7' },
        { x: 4, y: 5, w: 2, h: 5, i: '8' },
        { x: 6, y: 4, w: 2, h: 4, i: '9' },
        { x: 8, y: 4, w: 2, h: 4, i: '10' },
        { x: 10, y: 4, w: 2, h: 4, i: '11' },
        { x: 0, y: 10, w: 2, h: 5, i: '12' },
        { x: 2, y: 10, w: 2, h: 5, i: '13' },
        { x: 4, y: 8, w: 2, h: 4, i: '14' },
        { x: 6, y: 8, w: 2, h: 4, i: '15' },
        { x: 8, y: 10, w: 2, h: 5, i: '16' },
        { x: 10, y: 4, w: 2, h: 2, i: '17' },
        { x: 0, y: 9, w: 2, h: 3, i: '18' },
        { x: 2, y: 6, w: 2, h: 2, i: '19' }
      ]
    }
  }
}
</script>

<style lang="less">
.vue-grid-layout {
  background: #dddee1;
  .vue-grid-item {
    border: 1px solid #000;
  }
}
</style>
