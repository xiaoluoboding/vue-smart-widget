<template>
  <div class="smartwidget"
    :class="smartWidgetClass"
    :style="[smartWidgetStyle, dynamicStyle]"
    :id="smartWidgetId"
    @mouseover="handleMouseover"
    @mouseout="handleMouseout">
    <div class="widget-header" :style="widgetHeaderHeight" v-if="!simple">
      <slot v-if="$slots.title" name="title"></slot>
      <div v-else class="widget-header__title ellis" :style="widgetTitleStyle" >
        <span v-text="title"></span>
        <span v-if="subTitle!==''" class="widget-header__subtitle" v-text="subTitle"></span>
      </div>
      <div class="widget-header__toolbar">
        <!-- collapse icon -->
        <a href="javascript:;" v-if="!isHasGroup && collapse && !isFullScreen" @click="isCollapsed=!isCollapsed">
          <svg-icon :icon-name="isCollapsed ? 'expand' : 'collapse'" />
        </a>
        <!-- fullscreen icon -->
        <a href="javascript:;" v-if="fullscreen" @click="onChooseAction">
          <svg-icon :icon-name="isFullScreen ? 'unfullscreen' : 'fullscreen'" />
        </a>
        <!-- refresh icon -->
        <a href="javascript:;" v-if="refresh && !isFullScreen">
          <svg-icon icon-name="loading" class="sw-loading" v-if="loading" />
          <svg-icon icon-name="refresh" v-else @click="$emit('on-refresh')" />
        </a>
        <slot v-if="$slots.toolbar" name="toolbar"></slot>
      </div>
    </div>
    <!-- widget body -->
    <collapse-transition>
      <div
        v-show="!isCollapsed"
        :class="[
          simple ? 'widget-body-simple': 'widget-body',
          { 'is-collapse': isCollapsed }
        ]"
        ref="widgetBody"
      >
        <!-- widget edit box -->
        <div class="widget-body__editbox" ref="widgetBodyEditbox">
          <slot name="editbox"></slot>
        </div>
        <!-- end widget edit box -->
        <!-- widget content -->
        <div
          class="widget-body__content"
          :class="{'fixed-height': fixedHeight}"
          :style="widgetBodyContentStyle"
          ref="widgetBodyContent">
          <slot :content-h="contentH"></slot>
        </div>
        <!-- end widget content -->
        <!-- widget footer -->
        <div class="widget-body__footer" :class="{'has-group': isHasGroup}" ref="widgetBodyFooter">
          <slot v-if="$slots.footer" name="footer"></slot>
        </div>
        <!-- end widget footer -->
        <loading-mask v-if="loading" />
      </div>
    </collapse-transition>
    <!-- end widget body -->
  </div>
  <!-- end widget -->
</template>

<script>
import { generateUUID } from '../utils'

// loading mask
import LoadingMask from '../components/LoadingMask'
// collapse transition
import CollapseTransition from '../components/collapse-transition'
// svg icon
import SvgIcon from '../components/SvgIcon'

export default {
  name: 'SmartWidget',
  components: {
    LoadingMask,
    CollapseTransition,
    SvgIcon
  },
  props: {
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
    // set `widget-body__content` padding style
    padding: { type: [Number, Array], default: () => [12, 20] },
    // toggle widget mode
    simple: { type: Boolean, default: false },
    // toggle loading mask
    loading: { type: Boolean, default: false },
    // toggle fullscreen button
    fullscreen: { type: Boolean, default: false },
    // toggle collapse button
    collapse: { type: Boolean, default: false },
    // toggle refresh button
    refresh: { type: Boolean, default: false },
    // toggle `widget-body__content` fixed height
    fixedHeight: { type: Boolean, default: false },
    // when to show card shadows
    shadow: { type: String, default: 'always' },
    // the card translateY style
    translateY: { type: Number, default: 0 },
    // widget actived true/false
    isActived: { type: Boolean, default: false },
    // widget actived color
    activedColor: { type: String, default: '#0076db' }
  },
  data () {
    return {
      isFullScreen: false,
      isCollapsed: false,
      isFullScreenCollapsed: false, // control collapsed state when click fullscreen button
      widgetBodyOffsetHeight: 'auto',
      widgetBodyOldHeight: 0,
      widgetBodyEditBoxH: 0,
      widgetBodyFooterH: 0,
      smartWidgetStyle: {}
    }
  },
  computed: {
    smartWidgetClass () {
      return {
        'smartwidget-fullscreen': this.isFullScreen,
        'smartwidget-collapsed': this.isCollapsed,
        'is-always-shadow': this.shadow === 'always',
        'is-hover-shadow': this.shadow === 'hover',
        'is-never-shadow': this.shadow === 'never',
        'is-actived': this.isActived
      }
    },
    bodyContentPadding () {
      const padding = typeof (this.padding) === 'number' ? Array.of(this.padding) : this.padding
      const joinPadding = padding.join('px ')
      return joinPadding.padEnd(joinPadding.length + 2, 'px')
    },
    dynamicStyle () {
      return this.isActived
        ? { 'box-shadow': `0 0 0 2px ${this.activedColor}` }
        : {}
    },
    widgetHeaderHeight () {
      return {
        'height': `${this.rowHeight}px`,
        'line-height': `${this.rowHeight}px`
      }
    },
    widgetBodyContentStyle () {
      return {
        padding: this.bodyContentPadding,
        height: this.isHasGroup ? `${this.contentH}px` : ''
      }
    },
    widgetTitleStyle () {
      const padding = typeof (this.padding) === 'number' ? Array.of(this.padding) : this.padding
      const offset = padding[padding.length - 1]
      return {
        padding: `0 ${offset}px 0 ${offset}px`
      }
    },
    rowHeight () {
      return this.isHasGroup ? this.$parent.rowHeight : 48
    },
    smartWidgetId: _ => `smart-widget-${generateUUID()}`,
    childLayout: vm => vm.layout.find(v => v.i === vm.$parent.i),
    isHasGroup: vm => Boolean(vm.$parent.i),
    contentH: vm => vm.getContentH()
  },
  mounted () {
    this.$nextTick(_ => {
      this.widgetBodyOffsetHeight = this.$refs.widgetBody.offsetHeight
      this.widgetBodyEditBoxH = this.$slots.editbox ? this.$refs.widgetBodyEditbox.offsetHeight : 0
      this.widgetBodyFooterH = this.$slots.footer ? this.$refs.widgetBodyFooter.offsetHeight : 0
    })
  },
  methods: {
    onChooseAction () {
      // if (this.isHasGroup) {
      //   this.handleScreenfull()
      // } else {
      //   this.handlefullScreen()
      // }
      this.handlefullScreen()
    },
    handlefullScreen () {
      // control collapsed state
      if (this.isCollapsed) {
        this.isFullScreenCollapsed = this.isCollapsed
        this.isCollapsed = !this.isCollapsed
      }
      if (this.isFullScreen && this.isFullScreenCollapsed) {
        this.isCollapsed = this.isFullScreenCollapsed
      }
      this.isFullScreen = !this.isFullScreen

      // grid-layout useCssTransforms
      if (this.isHasGroup) {
        this.$parent.useCssTransforms = !this.$parent.useCssTransforms
      }

      // calculate widge-body height
      if (this.isFullScreen) {
        this.$nextTick(_ => {
          this.widgetBodyOldHeight = this.widgetBodyOffsetHeight
          // console.log(document.body.offsetHeight)
          const widgetBodyOffsetHeight = document.body.offsetHeight - this.rowHeight
          this.widgetBodyOffsetHeight = widgetBodyOffsetHeight
        })
        document.body.classList.add('no-overflow')
      } else {
        // restore widget-body height
        this.widgetBodyOffsetHeight = this.widgetBodyOldHeight
        // restore collapsed state
        this.isFullScreenCollapsed = this.isFullScreen
        document.body.removeAttribute('class', 'no-overflow')
      }
      this.$emit('on-fullscreen', this.isFullScreen)
    },
    handleScreenfull () {
      if (this.isCollapsed) {
        this.isFullScreenCollapsed = this.isCollapsed
        this.isCollapsed = !this.isCollapsed
      }
      if (this.isFullScreen && this.isFullScreenCollapsed) {
        this.isCollapsed = this.isFullScreenCollapsed
      }
    },
    getPaddingH () {
      let paddingH = 0
      const padding = typeof (this.padding) === 'number' ? Array.of(this.padding) : this.padding
      switch (padding.length) {
        case 1:
        case 2:
          paddingH = padding[0] * 2
          break
        case 3:
        case 4:
          paddingH = padding[0] + padding[2]
          break
      }
      return paddingH
    },
    getWidgetBodyH () {
      let widgetBodyH = 0
      if (this.isHasGroup) {
        const { innerH, margin, rowHeight } = this.$parent
        const [firstMargin] = margin
        // calculate widget height, grid row default height = (rowHeight + firstMargin) * innerH - firstMargin
        const widgetH = (rowHeight + firstMargin) * innerH - firstMargin
        widgetBodyH = widgetH - rowHeight
      } else {
        widgetBodyH = this.widgetBodyOffsetHeight
      }
      return widgetBodyH
    },
    getContentH () {
      const contentH = this.getWidgetBodyH() - this.getPaddingH() - this.widgetBodyEditBoxH - this.widgetBodyFooterH - 1
      return contentH > 0 ? contentH : this.$parent.rowHeight
    },
    handleMouseover () {
      const smartWidgetStyle = this.smartWidgetStyle
      this.smartWidgetStyle = {
        ...smartWidgetStyle,
        'transform': `translateY(${-this.translateY}px)`
      }
    },
    handleMouseout () {
      const smartWidgetStyle = this.smartWidgetStyle
      this.smartWidgetStyle = {
        ...smartWidgetStyle,
        'transform': `translateY(0px)`
      }
    }
  }
}
</script>

<style lang="less">
// overwirte vue-grid-layout styles
.vue-grid-item.vue-grid-placeholder {
  background: #7CBEFF !important;
  opacity: .2;
  transition-duration: .1s;
  z-index: 2;
  user-select: none;
}
// vue-smartwidget styles
body.no-overflow {
  overflow: hidden;
  position: fixed;
  width: 100%;
}
.smartwidget {
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #ebeef5;
  width: 100%;
  transition: .3s;
  &.is-always-shadow {
    box-shadow: 0 0 10px 0 #e9e9e9;
  }
  &.is-hover-shadow:hover {
    box-shadow: 0 0 10px 0 #e9e9e9;
  }
  &.is-never-shadow {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
  .widget-header {
    display: flex;
    line-height: 48px;
    border-bottom: 1px solid #ebeef5;
    .widget-header__title {
      display: inline-block;
      position: relative;
      width: auto;
      margin: 0;
      font-weight: normal;
      letter-spacing: 0;
      align-items: center;
      font-size: 16px;
    }
    .widget-header__subtitle {
      font-size: 12px;
      color: #777;
      margin-left: 10px;
    }
    .ellis {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .widget-header__prefix {
      background: #0076db;
      width: 2px;
      height: 16px;
      margin-left: 10px;
    }
    .widget-header__toolbar {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex: 1;
      padding: 0;
      margin: 0;
      // margin-left: auto;
      a {
        display: inline-block;
        text-decoration: none;
        text-align: center;
        height: 24px;
        line-height: 28px;
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
    // display: flex;
    // flex-direction: column;
    will-change: height;
    position: relative;
    overflow: hidden;
    height: calc(100% - 48px);
    .widget-body__content {
      // display: flex;
      // flex: 1;
      &.fixed-height {
        overflow-y: scroll;
      }
    }
    .widget-body__footer {
      position: relative;
      &.has-group {
        left: 0;
        bottom: 0;
        width: 100%;
      }
    }
    &.is-collapse {
      transition: .3s height ease-in-out, .3s padding-top ease-in-out, .3s padding-bottom ease-in-out;
    }
  }
  // fullscreen
  &.smartwidget-fullscreen {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1050;
    .widget-header {
      cursor: default;
    }
  }
  svg.sw-loading {
    animation: rotating 2s linear infinite;
    cursor: not-allowed;
  }
}
</style>
