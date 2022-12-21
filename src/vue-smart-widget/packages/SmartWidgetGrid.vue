<template>
  <grid-layout
    v-model:layout="layout"
    v-model:col-num="colNum"
    v-bind="layoutAttrs"
    v-on="gridLayoutEvents"
  >
    <grid-item
      v-for="item in layout"
      drag-ignore-from=".widget-body"
      :key="item.i"
      :static="isStatic"
      v-bind="item"
      v-on="gridLayoutItemEvents"
    >
      <slot :name="item.i"></slot>
    </grid-item>
  </grid-layout>
</template>

<script>
import { GridLayout, GridItem } from '../../vue-grid-layout/index'
import { pick, mapObject } from '../utils/index'

export default {
  name: 'SmartWidgetGrid',
  components: {
    GridLayout,
    GridItem
  },
  provide() {
    return {
      layout: this.layout
    }
  },
  props: {
    layout: {
      type: Array,
      required: true
    },
    colNum: {
      type: Number,
      default: 12
    },
    maxRows: {
      type: Number
    },
    rowHeight: {
      type: Number,
      default: 48
    },
    margin: {
      type: Array,
      default: () => [10, 10]
    },
    draggable: {
      type: Boolean,
      default: true
    },
    resizable: {
      type: Boolean,
      default: true
    },
    isStatic: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      layoutAttrs: {
        // layout: this.layout,
        colNum: this.colNum,
        rowHeight: this.rowHeight,
        maxRows: this.maxRows,
        margin: this.margin,
        isDraggable: this.draggable,
        isResizable: this.resizable,
        useCssTransforms: false,
        // isMirrored: false,
        // autoSize: true,
        // verticalCompact: true,
        // responsive: false,
        // preventCollision: false,
        // responsiveLayouts: {},
        // breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
        ...this.$attrs
      },
      gridLayoutItemEvents: {}
    }
  },
  created() {
    const listeners = this.$attrs
    this.gridLayoutItemEvents = {}

    const layoutEventList = [
      'layout-created',
      'layout-before-mount',
      'layout-mounted',
      'layout-ready',
      'layout-updated',
      'breakpoint-changed'
    ]

    const layoutItemEventMap = {
      move: ['i', 'newX', 'newY'],
      resize: ['i', 'newH', 'newW', 'newHPx', 'newWPx'],
      moved: ['i', 'newX', 'newY'],
      resized: ['i', 'newH', 'newW', 'newHPx', 'newWPx'],
      'container-resized': ['i', 'newH', 'newW', 'newHPx', 'newWPx']
    }

    this.gridLayoutEvents = pick(listeners, layoutEventList)

    Object.keys(layoutItemEventMap).forEach((event) => {
      const eventParams = layoutItemEventMap[event]
      this.gridLayoutItemEvents = Object.assign(this.gridLayoutItemEvents, {
        [event]: (...args) => {
          const params = mapObject(eventParams, (key, idx) => args[idx])
          this.$emit(event, params)
        }
      })
    })
  }
}
</script>

<style lang="scss">
.vue-grid-layout {
  background: transparent;
  .smartwidget {
    height: inherit;
    width: inherit;
    &.smartwidget-fullscreen {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
