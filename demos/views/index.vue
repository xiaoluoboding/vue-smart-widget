<template>
  <div class="document">
    <div class="document-header">
      <h2 style="padding: 0;">Document</h2>
      <blockquote>
        <p>
          Smart widget is a flexible and extensible content container component.
          It includes header and body part, and widget body includes <em>editbox</em>、<em>content</em>、<em>footer</em>.
          If you use with grid, it also have a draggable and resizable grid layout,
          base on <strong>Vue2.5.+</strong> & <strong>vue-grid-layout</strong>.
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
                <div class="widget-alert">
                  <div class="widget-alert__content">
                    <span class="el-alert__title">I am Editbox slot</span>
                  </div>
                </div>
              </template>
              <p>I am content</p>
              <template slot="footer">
                <div class="widget-alert">
                  <div class="widget-alert__content">
                    <span class="el-alert__title">I am Footer slot</span>
                  </div>
                </div>
              </template>
            </smart-widget>
          </el-col>
          <el-col :span="8">
            <smart-widget title="Widget with custom toolbar">
              <template slot="toolbar">
                <div style="margin: 0 12px;">
                  <button class="widget-button">Action</button>
                </div>
              </template>
              <p>{{placeholder}}</p>
            </smart-widget>
          </el-col>
        </el-row>
      </div>
      <div class="example-code">
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
          <smart-widget slot="1" title="Default Widget">
            <div class="layout-center">
              <h3>Default Widget With Header</h3>
            </div>
          </smart-widget>
          <smart-widget slot="2" title="Full Screen" fullscreen>
            <div class="layout-center">
              <h3>Make any widget full screen</h3>
            </div>
          </smart-widget>
        </smart-widget-grid>
      </div>
      <div class="example-code">
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
  </div>
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
      ]
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
  padding: 20px;
  border: 1px solid #ebeef5;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
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
    }
  }
}

// widget alert
.widget-alert {
  background-color: #f0f9eb;
  color: #67c23a;
  padding: 8px 16px;
}

.widget-button {
  font-size: 12px;
  border-radius: 3px;
  color: #fff;
  background-color: #409EFF;
  border-color: #409EFF;
  padding: 7px 15px;
}
</style>
