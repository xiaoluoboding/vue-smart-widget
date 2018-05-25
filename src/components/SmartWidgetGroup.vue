<template>
  <grid-layout
    auto-size
    :layout="layout"
    :col-num="colNum"
    :row-height="rowHeight"
    :margin="margin"
    :is-draggable="draggable"
    :is-resizable="resizable"
    :is-mirrored="false"
    vertical-compact
    use-css-transforms
    @layout-updated="layoutUpdatedEvent"
  >
    <grid-item
      v-for="item in layout"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :key="item.i"
      :is-draggable="item.draggable"
      :is-resizable="item.resizable"
      dragIgnoreFrom=".widget-body"
      @move="moveEvent"
      @resize="resizeEvent"
      @moved="movedEvent"
      @resized="resizedEvent"
    >
      <slot :name="item.i"></slot>
    </grid-item>
  </grid-layout>
</template>

<script>
import { GridLayout, GridItem } from 'vue-grid-layout'

export default {
  name: 'SmartWidgetGroup',
  components: {
    GridLayout,
    GridItem
  },
  provide () {
    return {
      layout: this.layout
    }
  },
  props: {
    layout: {
      type: Array,
      required: true
    },
    draggable: {
      type: Boolean,
      default: true
    },
    resizable: {
      type: Boolean,
      default: true
    },
    colNum: {
      type: Number,
      default: 12
    },
    margin: {
      type: Array,
      default: () => [10, 10]
    },
    rowHeight: {
      type: Number,
      default: 48
    }
  },
  methods: {
    layoutUpdatedEvent (newLayout) {
      this.$emit('layout-updated', newLayout)
    },
    moveEvent (i, newX, newY) {
      this.$emit('move', { i, newX, newY })
    },
    resizeEvent (i, newH, newW, newHPx, newWPx) {
      this.$emit('resize', { i, newH, newW, newHPx, newWPx })
    },
    movedEvent (i, newX, newY) {
      this.$emit('layout-updated', { i, newX, newY })
    },
    resizedEvent (i, newH, newW, newHPx, newWPx) {
      this.$emit('layout-updated', { i, newH, newW, newHPx, newWPx })
    }
  }
}
</script>

<style lang="less">
.vue-grid-layout {
  background: transparent;
  // .vue-grid-item {}
  .smartwidget {
    height: inherit;
    width: inherit;
  }
}
</style>
