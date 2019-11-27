# vue-smart-widget

<p align="left">
  <a href="https://travis-ci.org/xiaoluoboding/vue-smart-widget"><img src="https://travis-ci.org/xiaoluoboding/vue-smart-widget.svg?branch=dev"></a>
  <a href="https://www.npmjs.com/package/vue-smart-widget" target="_blank"><img src="https://img.shields.io/npm/v/vue-smart-widget.svg"></a>
  <a href="https://github.com/xiaoluoboding/vue-smart-widget"><img src="https://img.shields.io/github/stars/xiaoluoboding/vue-smart-widget.svg"></a>
  <a href="https://github.com/xiaoluoboding/vue-smart-widget"><img src="https://img.shields.io/github/license/xiaoluoboding/vue-smart-widget.svg"></a>
</p>

> Smart widget is a flexible and extensible content container component.
It includes header and body part, and widget body includes <em>editbox</em>、<em>content</em>、<em>footer</em>.
If you use with grid, it also have a draggable and resizable grid layout,
base on <strong>Vue2.5.+</strong> & <strong>[vue-grid-layout](https://github.com/jbaysolutions/vue-grid-layout)</strong>.

## Installation

```bash
npm i vue-smart-widget -S
```

## Import

Install all the components:

```bash
import Vue from 'vue'
import VueSmartWidget from 'vue-smart-widget'

Vue.use(VueSmartWidget)
```

Use widget only:

```bash
import Vue from 'vue'
import { SmartWidget } from 'vue-smart-widget'

Vue.component('SmartWidget', SmartWidget)
```

## Usage

The SmartWidget is heavily base on [vue-grid-layout](https://github.com/jbaysolutions/vue-grid-layout), you can know about `vue-grid-layout` first, maybe you already use in your project.

### Use widget only

**Html**

```html
<smart-widget title="Default Widget">
  <p>
    It's defalut widget.
  </p>
</smart-widget>
```

### Use widget with grid

```bash
import Vue from 'vue'
import { SmartWidgetGrid } from 'vue-smart-widget'

Vue.component('SmartWidgetGrid', SmartWidgetGrid)
```

**Script**

```js
new Vue({
  data () {
    return {
      layout: [
        { x: 0, y: 0, w: 4, h: 4, i: '0' },
        { x: 4, y: 0, w: 4, h: 4, i: '1' },
        { x: 8, y: 0, w: 4, h: 4, i: '2' }
      ]
    }
  }
})
```

**Html**

```html
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
```

## SmartWidget Props

| Attribute | Description | Type | Accepted values | Default |
|:--------:|--------|--------|:--------:|:--------:|
| slot | Widget slot, the unique identifier of the widget. refer to `SmartWidgetGrid Props` | String | - | - |
| title | Widget Header Title | String | - | - |
| subTitle | Widget Header Sub Title | String | - | - |
| padding | padding in Widget Body | [Number, Array] | - | `[12, 20]` |
| simple | Widget without Header | Boolean | `true` or `false` | `false` |
| loading | determine whether it's loading | Boolean | `true` or `false` | `false` |
| fullscreen | determine whether have fullscreen button | Boolean | `true` or `false` | `false` |
| collapse | determine whether have collapse button, only support `smart-widget` | Boolean | `true` or `false` | `false` |
| refresh | determine whether have refresh button | Boolean | `true` or `false` | `false` |
| fixedHeight | determine whether widget body's height is fixed, only support `smart-widget` | Boolean | `true` or `false` | `false` |
| shadow | when to show card shadows | String | `always`、`hover`、`never` | `always` |
| translateY | the length of vertically transform | Number | - | 0 |
| isActived | determine whether widget is actived | Boolean | `true` or `false` | `false` |
| activedColor | the actived widget `box-shadow` color, usually used with `isActived` attribute | String | hex color | #0076db |
| headerHeight | Widget Header Height(px) | Number | - | 48 |

## SmartWidget Methods

| Name | Description | Parameters |
|:--------:|--------|:--------|
| move | Every time an item is being moved and changes position | `(i, newX, newY)` |
| moved | Every time an item is finished being moved and changes position | `(i, newX, newY)` |
| resize | Every time an item is being resized and changes size | `(i, newH, newW, newHPx, newWPx)` |
| resized | Every time an item is finished being moved and changes position | `(i, newH, newW, newHPx, newWPx)` |
| container-resized | Every time the grid item/layout container changes size (browser window or other) | `(i, newH, newW, newHPx, newWPx)` |
| on-refresh | Used when the widget need fetching data from ajax methods, usually used with `loading` attribute | - |
| before-fullscreen | Used when the widget before fullscreen, usually used with `fullscreen` attribute | `true` or `false` |
| on-fullscreen | Used when the widget is already fullscreen, usually used with `fullscreen` attribute | `true` or `false` |

## CSS Selector in SmartWidget

| Name | Description |
|:--------:|--------|
| `.smartwidget` | The main selector in SmartWidget |
| `.is-actived` | The state of widget is actived |

## SmartWidgetGrid Props

> it's similar with [vue-grid-layout](https://github.com/jbaysolutions/vue-grid-layout). Care about the attribute `layout`, The value of layout must be an Array of Object items. Each item must have i, x, y, w and h proprties. especially, the i proprties, it's the unique identifier of the widget item, euqal with widget slot.

| Attribute | Description | Type | Accepted values | Default |
|:--------:|--------|:--------:|:--------:|:--------:|
| layout | This is the initial layout of the grid. | Array | - | `required` |
| colNum | Says how many columns the grid has. | Number | - | `12` |
| rowHeight | Says what is a height of a single row in pixels. | Number | - | `48` |
| margin | Says what are the margins of elements inside the grid. | Array | - | `[10, 10]` |
| isDraggable | Says if the grids items are draggable. | Boolean | `true` or `false` | `true` |
| isResizable | Says if the grids items are resizable. | Boolean | `true` or `false` | `true` |
| static | control all widgets won't be draggable, resizable or moved | Boolean | `true` or `false` | `false` |

## Slot scopes

> Each widget in the grid is resizable, `slot-scope` provide the widget attribute to the children component.

| Name | Description | Type |
|:--------|:--------|:--------:|
| contentH | Provide the widget body content(`widget-body__content`) height | Number |

## SmartWidgetGrid Methods

| Name | Description | Parameters |
|:--------|:--------|:--------:|
| layout-created | Emited on the component created lifecycle hook | `newLayout` |
| layout-before-mount | Emited on the component beforeMount lifecycle hook | `newLayout` |
| layout-mounted | Emited on the component mounted lifecycle hook | `newLayout` |
| layout-ready | Emited when all the operations on the mount hook finish | `newLayout` |
| layout-updated | Every time the layout has finished updating and positions of all grid-items are recalculated | `newLayout` |

## License

MIT