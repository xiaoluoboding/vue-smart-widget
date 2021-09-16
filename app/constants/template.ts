const placeholder =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!'

const defaultWidget = `<smart-widget title="Widget Title">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
    A consequuntur, deserunt eaque error nulla temporibus!
  </p>
</smart-widget>
`

const advanedWidget = `<!-- // 1. With additional fullscreen button -->
<smart-widget title="With additional fullscreen button" fullscreen>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
    A consequuntur, deserunt eaque error nulla temporibus!
  </p>
</smart-widget>

<!-- 2. Widget with Editbox & Footer -->
<smart-widget title="Widget with Editbox & Footer">
  <template #editbox>
    <div class="widget-alert">
      <div class="widget-alert__content">
        <span class="el-alert__title">I am Editbox slot</span>
      </div>
    </div>
  </template>
  <p>I am content</p>
  <template #footer>
    <div class="widget-alert">
      <div class="widget-alert__content">
        <span class="el-alert__title">I am Footer slot</span>
      </div>
    </div>
  </template>
</smart-widget>

<!-- 3. Widget with custom toolbar -->
<smart-widget title="Widget with custom toolbar">
  <template #toolbar>
    <div style="margin: 0 12px;">
      <button class="widget-button">Action</button>
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
  <template #0>
    <smart-widget simple>
      <div class="layout-center">
        <h3>Simple Widget</h3>
      </div>
    </smart-widget>
  </template>
  <template #1>
    <smart-widget title="Default Widget">
      <div class="layout-center">
        <h3>Widget with Header</h3>
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
`

const widgetWithGridJS = `
<script setup>
const layout = [
  { x: 0, y: 0, w: 4, h: 4, i: '0' },
  { x: 4, y: 0, w: 4, h: 4, i: '1' },
  { x: 8, y: 0, w: 4, h: 4, i: '2' }
]
</script>
`

export {
  placeholder,
  defaultWidget,
  advanedWidget,
  widgetWithGridHTML,
  widgetWithGridJS
}
