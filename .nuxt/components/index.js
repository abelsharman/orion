export { default as About } from '../../components/About.vue'
export { default as AboutPart } from '../../components/AboutPart.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Key } from '../../components/Key.vue'
export { default as Main } from '../../components/Main.vue'
export { default as ServiceBegin } from '../../components/ServiceBegin.vue'
export { default as Services } from '../../components/Services.vue'

export const LazyAbout = import('../../components/About.vue' /* webpackChunkName: "components/About" */).then(c => c.default || c)
export const LazyAboutPart = import('../../components/AboutPart.vue' /* webpackChunkName: "components/AboutPart" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header" */).then(c => c.default || c)
export const LazyKey = import('../../components/Key.vue' /* webpackChunkName: "components/Key" */).then(c => c.default || c)
export const LazyMain = import('../../components/Main.vue' /* webpackChunkName: "components/Main" */).then(c => c.default || c)
export const LazyServiceBegin = import('../../components/ServiceBegin.vue' /* webpackChunkName: "components/ServiceBegin" */).then(c => c.default || c)
export const LazyServices = import('../../components/Services.vue' /* webpackChunkName: "components/Services" */).then(c => c.default || c)
