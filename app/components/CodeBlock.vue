<template>
  <pre v-hljs>
    <code :class="lang" v-text="sourcecode"></code>
  </pre>
</template>

<script lang="ts">
import 'highlight.js/styles/github.css'

export default {
  name: 'CodeBlock',
  props: {
    lang: String,
    sourcecode: [String, Array, Object]
  }
}
</script>

<style lang="scss">
pre {
  margin: 0;
}
code {
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 0.8em;
}
.hljs {
  overflow: auto;
  background: transparent;
}
</style>
