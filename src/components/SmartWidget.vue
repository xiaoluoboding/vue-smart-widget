<template>
  <div
    class="smartwidget"
    :class="smartWidgetClass"
    :id="smartWidgetId"
    :draggable="sortable"
  >
    <div class="widget-header">
      <h2>
        <i class="widget-header__prefix"></i>
        <span class="widget-header__title" v-text="title"></span>
      </h2>
      <h4 v-if="subTitle!==''">
        <span class="widget-header__subtitle" v-text="subTitle"></span>
      </h4>
      <div class="widget-header__toolbar">
        <!-- collapse icon -->
        <a href="#" v-if="collapse && !isFullScreen" @click="isCollapsed = !isCollapsed"><i :class="isCollapsed ? 'el-icon-plus' : 'el-icon-minus'"></i></a>
        <!-- fullscreen icon -->
        <a href="#" v-if="fullscreen" @click="handleScreenfull"><i class="el-icon-rank"></i></a>
        <!-- refresh icon -->
        <a href="#" v-if="refresh && !isFullScreen" @click="$emit('on-refresh')"><i class="el-icon-refresh"></i></a>
        <slot name="toolbar"></slot>
      </div>
    </div>
    <!-- widget body -->
    <div
      class="widget-body"
      :style="{'height': isCollapsed ? '0px' : widgetBodyHeight}"
      ref="widgetBody"
    >
      <!-- widget edit box -->
      <div class="widget-body__editbox">
        <slot name="toolbox"></slot>
      </div>
      <!-- end widget edit box -->
      <!-- widget content -->
      <div class="widget-body__content" :class="{'no-padding': noPadding}">
        <slot></slot>
      </div>
      <!-- end widget content -->
      <!-- widget footer -->
      <div class="widget-body__footer">
        <slot name="footer"></slot>
      </div>
      <!-- end widget footer -->
      <loading-mask v-if="loading" />
    </div>
    <!-- end widget body -->
  </div>
  <!-- end widget -->
</template>

<script>
import screenfull from 'screenfull'

import { generateUUID } from '@/public/utils'

import LoadingMask from './LoadingMask'

export default {
  name: 'SmartWidget',
  components: {
    LoadingMask
  },
  props: {
    title: { type: String, required: true },
    subTitle: { type: String, default: '' },
    // toggle `widget-body__content` no-padding style
    noPadding: { type: Boolean, default: false },
    // toggle loading mask
    loading: { type: Boolean, default: false },
    // toogle fullscreen button
    fullscreen: { type: Boolean, default: false },
    // toogle collapse button
    collapse: { type: Boolean, default: false },
    // toogle refresh button
    refresh: { type: Boolean, default: false },
    // toogle refresh button
    sortable: { type: Boolean, default: false }
  },
  data () {
    return {
      isFullScreen: false,
      isCollapsed: false,
      isFullScreenCollapsed: false, // control collapsed state when click fullscreen button
      widgetBodyHeight: 'auto'
    }
  },
  computed: {
    smartWidgetClass () {
      return {
        'smartwidget-fullscreen': this.isFullScreen,
        'smartwidget-collapsed': this.isCollapsed,
        'smartwidget-sortable': this.sortable
      }
    },
    smartWidgetId () {
      return `smart-widget-${generateUUID()}`
    }
  },
  methods: {
    handleScreenfull () {
      if (this.isCollapsed) {
        this.isFullScreenCollapsed = this.isCollapsed
        this.isCollapsed = !this.isCollapsed
      }
      if (this.isFullScreen && this.isFullScreenCollapsed) {
        this.isCollapsed = this.isFullScreenCollapsed
      }
      screenfull.enabled && screenfull.toggle(this.$el)
    }
  },
  created () {
    if (screenfull.enabled) {
      screenfull.on('change', () => {
        this.isFullScreen = screenfull.isFullscreen
        if (!this.isFullScreen) {
          this.isFullScreenCollapsed = this.isFullScreen
        }
      })
    }
  },
  mounted () {
    this.widgetBodyHeight = `${this.$refs.widgetBody.offsetHeight}px`
  }
}
</script>

<style lang="less">
// vue-smartwidget styles
.smartwidget {
  background: #fff;
  box-shadow: 0 0 10px 0 #e9e9e9;
  border: 1px solid #ebeef5;
  width: 100%;
  .widget-header {
    cursor: move;
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #ebeef5;
    h2,
    h4 {
      display: inline-block;
      position: relative;
      width: auto;
      margin: 0;
      font-weight: normal;
      letter-spacing: 0;
    }
    h2 {
      font-size: 16px;
    }
    h4 {
      font-size: 12px;
      color: #777;
    }
    .widget-header__prefix {
      background: #0076db;
      width: 2px;
      height: 16px;
      margin: 16px 12px;
      float: left;
    }
    .widget-header__toolbar {
      width: auto;
      float: right;
      padding: 0;
      padding-right: 12px;
      margin: 0;
      a {
        text-decoration: none;
        text-align: center;
        display: inline-block;
        height: 24px;
        line-height: 24px;
        padding: 0;
        margin: 0;
        color: #333;
        min-width: 35px;
        position: relative;
        font-family: Arial,Helvetica,sans-serif;
        border-left: 1px solid rgba(0,0,0,.09);
      }
    }
  }
  .widget-body {
    position: relative;
    overflow: hidden;
    transition: height .3s;
    .widget-body__content {
      padding: 12px 20px;
      &.no-padding {
        padding: 0;
      }
    }
  }
  &.smartwidget-fullscreen {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    .widget-header {
      cursor: default;
    }
  }
}
</style>
