# vue-smart-widget

> Smart widget is a flexible and extensible content container component. It includes options for headers and footers, a wide variety of content. If you use with grid, it also have a draggable and resizable grid layout, base on [vue-grid-layout](https://github.com/jbaysolutions/vue-grid-layout). 

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

A css file is included when importing the package:

```js
import 'vue-smart-widget/lib/vue-smart-widget.css'
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

**Script**

```js
new Vue({
  data () {
    return {
      layout: [
        { x: 0, y: 0, w: 4, h: 6, i: '0' },
        { x: 4, y: 0, w: 4, h: 6, i: '1' },
        { x: 8, y: 0, w: 4, h: 6, i: '2' }
      ]
    }
  }
})
```

**Html**

```html
<smart-widget-grid :layout="layout" >
  <smart-widget slot="0" simple>
    <div class="layout-center">
      <h3>Simple Widget</h3>
    </div>
  </smart-widget>
  <smart-widget slot="1" title="Default Widget">
    <div class="layout-center">
      <h3>Widget with Header</h3>
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

## SmartWidget Methods

| Name | Description | Parameters |
|:--------:|--------|:--------|
| on-refresh | Used when the widget need fetching data from ajax methods, usually used with `loading` attribute | - |
| move | Every time an item is being moved and changes position | `(i, newX, newY)` |
| moved | Every time an item is finished being moved and changes position | `(i, newX, newY)` |
| resize | Every time an item is being resized and changes size | `(i, newH, newW, newHPx, newWPx)` |
| resized | Every time an item is finished being moved and changes position | `(i, newH, newW, newHPx, newWPx)` |

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

## Slot scope

> Each widget in the grid is resizable, `slot-scope` provide the widget attribute to the children component.

| Name | Description | Type |
|:--------|:--------|:--------:|
| contentH | Provide the widget body content(`widget-body__content`) height | Number |

## SmartWidgetGrid Methods

| Name | Description | Parameters |
|:--------|:--------|:--------:|
| layout-updated | Every time the layout has finished updating and positions of all grid-items are recalculated | `newLayout` |

## License

MIT