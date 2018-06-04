<template>
  <smart-widget title="Document" simple class="document">
    <div class="document-header">
      <h2 style="padding: 0;">Document</h2>
      <blockquote>
        <p>
          Smart widget is a flexible and extensible content container component.
          It includes options for headers and footers, a wide variety of content.
          If you use with grid, it also have a draggable and resizable grid layout,
          base on <strong>vue-grid-layout</strong> & <strong>Vue2.5.+</strong>.
        </p>
      </blockquote>
    </div>
    <section class="example-wrap">
      <h3>Default Widget</h3>
      <div class="example-bg">
        <el-row type="flex" :gutter="32">
          <el-col :offset="8" :span="8">
            <smart-widget title="Widget Title">
              <p>{{placeholder}}</p>
            </smart-widget>
          </el-col>
        </el-row>
      </div>
      <div class="example-code">
        <div class="example-link">
          <a href="https://jsfiddle.net/xiaoluoboding/u8yy1s5w/" target="_blank">
            <img :src="require('@/assets/img/jsfiddle.svg')" alt="View On Jsfiddle" v-tooltip="tooltipOptions">
          </a>
        </div>
        <code-block lang="html" :sourcecode="defaultWidget" />
      </div>
    </section>
    <section class="example-wrap">
      <h3>Advanced Widget</h3>
      <blockquote>
        <p>
          The widget extend useful display options.
        </p>
      </blockquote>
      <div class="example-bg">
        <el-row type="flex" :gutter="32">
          <el-col :span="8">
            <smart-widget title="With additional fullscreen button" fullscreen>
              <p>{{placeholder}}</p>
            </smart-widget>
          </el-col>
          <el-col :span="8">
            <smart-widget title="Widget with Editbox & Footer">
              <template slot="editbox">
                <el-alert
                  title="I am Editbox slot"
                  type="success">
                </el-alert>
              </template>
              <p>I am content</p>
              <template slot="footer">
                <el-alert
                  title="I am Footer slot"
                  type="success">
                </el-alert>
              </template>
            </smart-widget>
          </el-col>
          <el-col :span="8">
            <smart-widget title="Widget with custom toolbar">
              <template slot="toolbar">
                <div style="margin: 0 12px;">
                  <el-button type="primary" size="mini">Action</el-button>
                </div>
              </template>
              <p>{{placeholder}}</p>
            </smart-widget>
          </el-col>
        </el-row>
      </div>
      <div class="example-code">
        <div class="example-link">
          <a href="https://jsfiddle.net/xiaoluoboding/g87pkf3s/" target="_blank">
            <img :src="require('@/assets/img/jsfiddle.svg')" alt="View On Jsfiddle" v-tooltip="tooltipOptions">
          </a>
        </div>
        <code-block lang="html" :sourcecode="advanedWidget" />
      </div>
    </section>
    <section class="example-wrap">
      <h3>Widget With Grid</h3>
      <blockquote>
        <p>
          The widget is draggable & resizable. work with [vue-grid-layout].
        </p>
      </blockquote>
      <div class="example-bg">
        <smart-widget-grid :layout="layout">
          <smart-widget slot="0" simple>
            <div class="layout-center">
              <h3>Simple Widget Without Header</h3>
            </div>
          </smart-widget>
          <smart-widget slot="1" title="Default Widget" sub-title="Drag on me">
            <div class="layout-center">
              <h3>Default Widget With Header</h3>
            </div>
          </smart-widget>
          <smart-widget slot="2" title="Full Screen" sub-title="Drag on me" fullscreen>
            <div class="layout-center">
              <h3>Make any widget full screen</h3>
            </div>
          </smart-widget>
        </smart-widget-grid>
      </div>
      <div class="example-code">
        <div class="example-link">
          <a href="https://jsfiddle.net/xiaoluoboding/kuxq1fb8/" target="_blank">
            <img :src="require('@/assets/img/jsfiddle.svg')" alt="View On Jsfiddle" v-tooltip="tooltipOptions">
          </a>
        </div>
        <el-row>
          <el-col :span="12">
            <code-block lang="js" :sourcecode="widgetWithGridJS" />
          </el-col>
          <div class="line"></div>
          <el-col :span="12">
            <code-block lang="html" :sourcecode="widgetWithGridHTML" />
          </el-col>
        </el-row>
      </div>
    </section>
    <section class="much-more">
      For <a href="https://github.com/xiaoluoboding/vue-smart-widget#usage" target="_black">More</a> Details.
    </section>
  </smart-widget>
</template>

<script>
import CodeBlock from '@/components/CodeBlock'

import {
  placeholder,
  defaultWidget,
  advanedWidget,
  widgetWithGridHTML,
  widgetWithGridJS
} from '@/constant/template'

export default {
  components: {
    CodeBlock
  },
  data () {
    return {
      layout: [
        { x: 0, y: 0, w: 4, h: 4, i: '0' },
        { x: 4, y: 0, w: 4, h: 4, i: '1' },
        { x: 8, y: 0, w: 4, h: 4, i: '2' }
      ],
      tooltipOptions: {
        content: 'View On Jsfiddle',
        placement: 'left-start',
        classes: ['stand'],
        offset: 6,
        delay: {
          show: 300,
          hide: 300
        }
      }
    }
  },
  created () {
    this.placeholder = placeholder
    this.defaultWidget = defaultWidget
    this.advanedWidget = advanedWidget
    this.widgetWithGridHTML = widgetWithGridHTML
    this.widgetWithGridJS = widgetWithGridJS
  }
}
</script>

<style lang="less">
.document {
  margin: 1.25rem 0;
  .document-header {
    padding: 0 20px;
  }
  blockquote {
    margin: 0;
    padding: 0 1rem;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }
  .example-wrap {
    padding: .5rem 1.5rem;
    .example-bg {
      padding: 1.5rem;
      background: #f5f7fb;
      border: 1px solid rgba(0, 40, 100, 0.12);
      border-radius: 3px 3px 0 0;
    }
    .example-code {
      position: relative;
      background: #f8f8f8;
      border: 1px solid rgba(0, 40, 100, 0.12);
      border-top: none;
      pre {
        padding: 0 20px;
      }
      .line {
        position: absolute;
        left: 50%;
        height: 100%;
        width: 1px;
        background: rgba(0, 40, 100, 0.12);
      }
      .example-link {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 14px;
        padding: 4px 8px;
        z-index: 2;
        a {
          text-decoration: none;
        }
        img {
          height: 24px;
          width: 24px;
        }
      }
    }
  }
  .much-more {
    background: #f5f7fb;
    margin: 20px;
    padding: 1.5rem 2.5rem;
    text-align: center;
  }
}

.tooltip {
  display: block !important;
  z-index: 10000;

  .tooltip-inner {
    background: #616161;
    opacity: .9;
    color: white;
    font-size: 12px;
    border-radius: 3px;
    padding: 4px 10px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 6px;
    border-color: #616161;
    opacity: .9;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}
</style>
