<template>
  <div
    class="smartwidget"
    :class="smartWidgetClass"
    :style="[smartWidgetStyle, dynamicStyle]"
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
          <template v-if="isCollapsed">
            <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M917.333 364.8L851.2 298.667 512 637.867l-339.2-339.2-66.133 66.133L512 768z" fill="#666"/>
            </svg>
          </template>
          <template v-else>
            <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M106.667 659.2l66.133 66.133 339.2-339.2 339.2 339.2 66.133-66.133L512 256z" fill="#666"/>
            </svg>
          </template>
        </a>
        <!-- fullscreen icon -->
        <a href="javascript:;" v-if="fullscreen" @click="handlefullScreen">
          <template v-if="isFullScreen">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 10.704V13.5a.5.5 0 1 0 1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h2.79l-3.144 3.147a.5.5 0 1 0 .708.706L6 10.703zm4-5.411V2.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5h4a.5.5 0 1 0 0-1h-2.793l3.147-3.146a.5.5 0 0 0-.708-.708L10 5.293zM13 9.5a.5.5 0 1 1 1 0v4a.5.5 0 0 1-.5.5h-4a.5.5 0 1 1 0-1H13V9.5zm-10-3a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H3v3.5z" fill="#666" fill-rule="evenodd"/>
            </svg>
          </template>
          <template v-else>
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12.293V9.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5h4a.5.5 0 1 0 0-1H3.707l3.147-3.146a.5.5 0 1 0-.708-.708L3 12.293zm10-8.586V6.5a.5.5 0 1 0 1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h2.793L9.147 6.146a.5.5 0 1 0 .707.708L13 3.707zM13 9.5a.5.5 0 1 1 1 0v4a.5.5 0 0 1-.5.5h-4a.5.5 0 1 1 0-1H13V9.5zm-10-3a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H3v3.5z" fill="#666" fill-rule="evenodd"/>
            </svg>
          </template>
        </a>
        <!-- refresh icon -->
        <a href="javascript:;" v-if="refresh && !isFullScreen">
          <template v-if="loading">
            <svg class="icon sw-loading" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path d="M910.222 455.111V512H682.667v-56.889h227.555zm-625.778 0V512H56.89v-56.889h227.555zm170.667 227.556H512v227.555h-56.889V682.667zm0-625.778H512v227.555h-56.889V56.89zm341.333 699.733l-39.822 39.822-159.289-159.288 39.823-39.823 159.288 159.29zM369.778 329.956l-39.822 39.822-159.29-159.29 39.823-39.821 159.289 159.289zm-39.822 267.377l39.822 39.823-159.29 159.288-39.821-39.822 159.289-159.289zm426.666-426.666l39.822 39.822-159.288 159.289-39.823-39.822 159.29-159.29z" fill="#666"/>
            </svg>
          </template>
          <template v-else>
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" @click="$emit('on-refresh')">
              <g fill="#666">
                <path d="M14 8A6 6 0 0 0 3.372 4.18a.5.5 0 1 0 .771.638A5 5 0 0 1 13 8a.5.5 0 1 0 1 0zM2 8a6 6 0 0 0 10.549 3.912.5.5 0 1 0-.758-.652A5 5 0 0 1 3 8a.5.5 0 0 0-1 0z"/>
                <path d="M4 1.5V4h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0zm8 13v-2.502H9.5a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5V14.5a.5.5 0 1 1-1 0z"/>
              </g>
            </svg>
          </template>
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
        :style="!simple ? widgetBodyStyle : {}"
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
// loading mask
import LoadingMask from '../components/LoadingMask'
// collapse transition
import CollapseTransition from '../components/collapse-transition'

export default {
  name: 'SmartWidget',
  components: {
    LoadingMask,
    CollapseTransition
  },
  props: {
    // set the widget main title
    title: { type: String, default: '' },
    // set the widget secondary title
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
    activedColor: { type: String, default: '#0076db' },
    // widget header height
    headerHeight: { type: Number, default: 48 }
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
        height: `${this.rowHeight}px`,
        'line-height': `${this.rowHeight}px`
      }
    },
    widgetBodyStyle () {
      return {
        height: `calc(100% - ${this.rowHeight}px)`
      }
    },
    widgetBodyContentStyle () {
      return {
        padding: this.bodyContentPadding
        // height: this.isHasGroup ? `${this.contentH}px` : ''
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
      return this.isHasGroup ? this.$parent.rowHeight : this.headerHeight
    },
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

      // widget before fullscreen, change the widget to static, so it won't be draggable, resizable or moved
      if (this.isHasGroup) {
        this.$emit('before-fullscreen', this.isFullScreen)
      }

      // calculate widge-body height
      if (this.isFullScreen) {
        this.$nextTick(_ => {
          this.widgetBodyOldHeight = this.widgetBodyOffsetHeight
          const widgetBodyOffsetHeight = document.body.offsetHeight - this.rowHeight
          this.widgetBodyOffsetHeight = widgetBodyOffsetHeight
        })
        document.body.classList.add('no-overflow')
      } else {
        // restore widget-body height
        this.widgetBodyOffsetHeight = this.widgetBodyOldHeight
        // restore collapsed state
        this.isFullScreenCollapsed = this.isFullScreen
        document.body.classList.remove('no-overflow')
      }
      this.$emit('on-fullscreen', this.isFullScreen)
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
      // recalculate the widgetBodyH
      const widgetBodyH = this.isFullScreen
        ? this.widgetBodyOffsetHeight
        : this.getWidgetBodyH()
      const paddingH = this.getPaddingH()
      const widgetBodyEditBoxH = this.widgetBodyEditBoxH
      const widgetBodyFooterH = this.widgetBodyFooterH
      const contentH = widgetBodyH - paddingH - widgetBodyEditBoxH - widgetBodyFooterH - 1
      return contentH > 0 ? contentH : this.$parent.rowHeight
    },
    handleMouseover () {
      const smartWidgetStyle = this.smartWidgetStyle
      this.smartWidgetStyle = {
        ...smartWidgetStyle,
        transform: `translateY(${-this.translateY}px)`
      }
    },
    handleMouseout () {
      const smartWidgetStyle = this.smartWidgetStyle
      this.smartWidgetStyle = {
        ...smartWidgetStyle,
        transform: 'translateY(0px)'
      }
    }
  }
}
</script>

<style lang="less">
// overwirte vue-grid-layout styles
.vue-grid-item {
  touch-action: none;
  box-sizing: border-box;
}
.vue-grid-item.vue-grid-placeholder {
  background: #7CBEFF;
  opacity: .2;
  transition-duration: .1s;
  z-index: 2;
  user-select: none;
}
</style>

<style lang="less" scoped>
// vue-smartwidget styles
body.no-overflow {
  overflow: hidden;
  position: fixed;
  width: 100%;
}
.smartwidget {
  box-sizing: border-box;
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
  .widget-body-simple {
    display: flex;
    height: inherit;
    width: inherit;
    .widget-body__content {
      width: 100%;
    }
  }
  .widget-body {
    display: flex;
    flex-direction: column;
    will-change: height;
    position: relative;
    overflow: hidden;
    .widget-body__content {
      flex: 1;
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
    z-index: 6666;
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
