import { App } from 'vue'
import hljs from 'highlight.js'

export default function (app: App) {
  app.directive('hljs', {
    mounted: function (el, binding) {
      // on first bind, highlight all targets
      const targets = el.querySelectorAll('code')
      for (let i = 0; i < targets.length; i++) {
        const target = targets[i]
        // if a value is directly assigned to the directive, use this
        // instead of the element content.
        if (binding.value) {
          target.textContent = binding.value
        }
        hljs.highlightBlock(target)
      }
    },
    updated: function (el, binding) {
      // after an update, re-fill the content and then highlight
      const targets = el.querySelectorAll('code')
      for (let i = 0; i < targets.length; i++) {
        const target = targets[i]
        if (binding.value) {
          target.textContent = binding.value
          hljs.highlightBlock(target)
        }
      }
    }
  })
}
