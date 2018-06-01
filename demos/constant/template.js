const placeholder = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!'

const defaultWidget = `<smart-widget title="Widget Title">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
    A consequuntur, deserunt eaque error nulla temporibus!
  </p>
</smart-widget>
`

const advanedWidget = `// 1. With additional fullscreen button
<smart-widget title="With additional fullscreen button" fullscreen>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
    A consequuntur, deserunt eaque error nulla temporibus!
  </p>
</smart-widget>

// 2. Widget with Editbox & Footer
<smart-widget title="Widget with Editbox">
  <template slot="editbox">
    <el-alert title="I am Editbox slot" type="success"></el-alert>
  </template>
  <p>I am content</p>
  <template slot="footer">
    <el-alert title="I am Footer slot" type="success"></el-alert>
  </template>
</smart-widget>

// 3. Widget with custom toolbar
<smart-widget title="Widget with custom toolbar">
  <template slot="toolbar">
    <div style="margin: 0 12px;">
      <el-button type="primary" size="mini">Action</el-button>
    </div>
  </template>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
    A consequuntur, deserunt eaque error nulla temporibus!
  </p>
</smart-widget>
`

const widgetWithGridHTML = `
<smart-widget-grid :layout="layout">
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
`

const widgetWithGridJS = `
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
`

export {
  placeholder,
  defaultWidget,
  advanedWidget,
  widgetWithGridHTML,
  widgetWithGridJS
}
