export { default as CardImg } from '../..\\components\\Card-img.vue'
export { default as Logo } from '../..\\components\\Logo.vue'

export const LazyCardImg = import('../..\\components\\Card-img.vue' /* webpackChunkName: "components_Card-img" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
