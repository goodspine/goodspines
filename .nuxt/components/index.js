export const AppFooter = () => import('../../components/AppFooter.vue' /* webpackChunkName: "components/app-footer" */).then(c => wrapFunctional(c.default || c))
export const DropDown = () => import('../../components/DropDown.vue' /* webpackChunkName: "components/drop-down" */).then(c => wrapFunctional(c.default || c))
export const FAQ = () => import('../../components/FAQ.vue' /* webpackChunkName: "components/f-a-q" */).then(c => wrapFunctional(c.default || c))
export const FalamSobreAGente = () => import('../../components/FalamSobreAGente.vue' /* webpackChunkName: "components/falam-sobre-a-gente" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Hero = () => import('../../components/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const MelhoreSeuSono = () => import('../../components/MelhoreSeuSono.vue' /* webpackChunkName: "components/melhore-seu-sono" */).then(c => wrapFunctional(c.default || c))
export const Midia = () => import('../../components/Midia.vue' /* webpackChunkName: "components/midia" */).then(c => wrapFunctional(c.default || c))
export const Navigation = () => import('../../components/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const OTravesseiro = () => import('../../components/OTravesseiro.vue' /* webpackChunkName: "components/o-travesseiro" */).then(c => wrapFunctional(c.default || c))
export const OpcoesCompra = () => import('../../components/OpcoesCompra.vue' /* webpackChunkName: "components/opcoes-compra" */).then(c => wrapFunctional(c.default || c))
export const QuemSomos = () => import('../../components/QuemSomos.vue' /* webpackChunkName: "components/quem-somos" */).then(c => wrapFunctional(c.default || c))
export const ShowVideo = () => import('../../components/ShowVideo.vue' /* webpackChunkName: "components/show-video" */).then(c => wrapFunctional(c.default || c))
export const TestNights = () => import('../../components/TestNights.vue' /* webpackChunkName: "components/test-nights" */).then(c => wrapFunctional(c.default || c))
export const TestNightsModal = () => import('../../components/TestNightsModal.vue' /* webpackChunkName: "components/test-nights-modal" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const WhatsApp = () => import('../../components/WhatsApp.vue' /* webpackChunkName: "components/whats-app" */).then(c => wrapFunctional(c.default || c))

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
