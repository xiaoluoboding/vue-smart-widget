# vue-smart-widget

<p align="left">
  <a href="https://travis-ci.org/xiaoluoboding/vue-smart-widget"><img src="https://travis-ci.org/xiaoluoboding/vue-smart-widget.svg?branch=master"></a>
  <a href="https://www.npmjs.com/package/vue-smart-widget" target="_blank"><img src="https://img.shields.io/npm/v/vue-smart-widget.svg"></a>
  <a href="https://github.com/xiaoluoboding/vue-smart-widget"><img src="https://img.shields.io/github/stars/xiaoluoboding/vue-smart-widget.svg"></a>
  <a href="https://github.com/xiaoluoboding/vue-smart-widget"><img src="https://img.shields.io/github/license/xiaoluoboding/vue-smart-widget.svg"></a>
</p>

> Smart widget is a flexible and extensible content container component.
It includes header and body part, and widget body includes <em>editbox</em>、<em>content</em>、<em>footer</em>.
If you use with grid, it also have a draggable and resizable grid layout,
base on <strong>Vue 3.x</strong> & <strong>[vue-grid-layout](https://github.com/jbaysolutions/vue-grid-layout/tree/vue3)</strong>.

## Installation

```bash
npm i vue-smart-widget@next -S
// or
yarn add vue-smart-widget@next -S
```

## Using components

### Full Import

```js
// main.ts
import { createApp } from 'vue'
import VueSmartWidget from 'vue-smart-widget'
import App from './App.vue'

const app = createApp(App)

app.use(VueSmartWidget)
app.mount('#app')
```

### Import on demand

```js
// main.ts
import { createApp } from 'vue'
import { SmartWidget, SmartWidgetGrid } from 'vue-smart-widget'
import App from './App.vue'

const app = createApp(App)
app.component(SmartWidget.name, SmartWidget)
app.component(SmartWidgetGrid.name, SmartWidgetGrid)
app.mount('#app')
```

## Usage

The SmartWidget is heavily base on [vue-grid-layout](https://github.com/jbaysolutions/vue-grid-layout), you can learn about `vue-grid-layout` first, maybe you already use in your project.

### Use widget only

**Html**

```html
<smart-widget title="Default Widget">
  <p>
    It's default widget.
  </p>
</smart-widget>
```

### Use widget with grid

**Script**

```js
<script setup>
const layout = [
  { x: 0, y: 0, w: 4, h: 4, i: '0' },
  { x: 4, y: 0, w: 4, h: 4, i: '1' },
  { x: 8, y: 0, w: 4, h: 4, i: '2' }
]
</script>
```

**Html**

```html
<smart-widget-grid :layout="layout">
  <!-- layout[$].i as slot name -->
  <template #0>
    <smart-widget simple>
      <div class="layout-center">
        <h3>Simple Widget Without Header</h3>
      </div>
    </smart-widget>
  </template>
  <template #1>
    <smart-widget title="Default Widget">
      <div class="layout-center">
        <h3>Default Widget With Header</h3>
      </div>
    </smart-widget>
  </template>
  <template #2>
    <smart-widget title="Full Screen" fullscreen>
      <div class="layout-center">
        <h3>Make any widget full screen</h3>
      </div>
    </smart-widget>
  </template>
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
|:--------|--------|
| `.smartwidget` | The main selector in SmartWidget |
| `.is-actived` | The state of widget is actived |
| `.vue-grid-item.vue-grid-placeholder` | The default css for the placeholder |

## SmartWidgetGrid Props

> It's similar with [vue-grid-layout](https://github.com/jbaysolutions/vue-grid-layout). Care about the attribute `layout`, The value of layout must be an Array of Object items. Each item must have i, x, y, w and h proprties. especially, the i proprties, it's the unique identifier of the widget item, euqal with widget slot.

| Attribute | Description | Type | Accepted values | Default |
|:--------|--------|:--------:|:--------:|:--------:|
| layout | This is the initial layout of the grid. | Array | - | `required` |
| responsiveLayouts | This is the initial layouts of the grid per breakpoint if responsive is set to true. | Object | - | `{}` |
| colNum | Says how many columns the grid has. | Number | - | `12` |
| rowHeight | Says what is a height of a single row in pixels. | Number | - | `48` |
| maxRows | Says what is a maximal number of rows in the grid. | Number | - | `Infinity` |
| margin | Says what are the margins of elements inside the grid. | Array | - | `[10, 10]` |
| draggable | Says if the grids items are draggable. | Boolean | `true` or `false` | `true` |
| resizable | Says if the grids items are resizable. | Boolean | `true` or `false` | `true` |
| isMirrored | Says if the RTL/LTR should be reversed. | Boolean | `true` or `false` | `false` |
| autoSize | Says if the container height should swells and contracts to fit contents. | Boolean | `true` or `false` | `true` |
| verticalCompact | Says if the layout should be compact vertically. | Boolean | `true` or `false` | `true` |
| preventCollision | Says if grid items will move when being dragged over. | Boolean | `true` or `false` | `false` |
| responsive | Says if the layout should be responsive to window width. | Boolean | `true` or `false` | `false` |
| breakpoints | Breakpoints defined for responsive layout. Sets widths on wich column number changes. | Object | - | `{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }` |
| cols | Defines number of columns for each breakpoint. | Object | - | `{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }` |
| isStatic | Control all widgets won't be draggable, resizable or moved | Boolean | `true` or `false` | `false` |

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
| breakpoint-changed | Every time the breakpoint value changes due to window resize | `(newBreakpoint, newLayout)` |

## License

MIT [@xiaoluoboding](https://github.com/xiaoluoboding)
