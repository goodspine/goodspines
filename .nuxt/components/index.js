export { default as AppFooter } from '../..\\components\\AppFooter.vue'
export { default as DropDown } from '../..\\components\\DropDown.vue'
export { default as FalamSobreAGente } from '../..\\components\\FalamSobreAGente.vue'
export { default as FAQ } from '../..\\components\\FAQ.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Hero } from '../..\\components\\Hero.vue'
export { default as MelhoreSeuSono } from '../..\\components\\MelhoreSeuSono.vue'
export { default as Midia } from '../..\\components\\Midia.vue'
export { default as Navigation } from '../..\\components\\Navigation.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as OpcoesCompra } from '../..\\components\\OpcoesCompra.vue'
export { default as OTravesseiro } from '../..\\components\\OTravesseiro.vue'
export { default as QuemSomos } from '../..\\components\\QuemSomos.vue'
export { default as ShowVideo } from '../..\\components\\ShowVideo.vue'
export { default as TestNights } from '../..\\components\\TestNights.vue'
export { default as TestNightsModal } from '../..\\components\\TestNightsModal.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as WhatsApp } from '../..\\components\\WhatsApp.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
