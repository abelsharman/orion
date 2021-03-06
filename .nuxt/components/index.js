export { default as About } from '../../components/About.vue'
export { default as AboutPart } from '../../components/AboutPart.vue'
export { default as Advantage } from '../../components/Advantage.vue'
export { default as Consultation } from '../../components/Consultation.vue'
export { default as Contacts } from '../../components/Contacts.vue'
export { default as Fixed } from '../../components/Fixed.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Key } from '../../components/Key.vue'
export { default as Main } from '../../components/Main.vue'
export { default as Partners } from '../../components/Partners.vue'
export { default as Partners2 } from '../../components/Partners2.vue'
export { default as Projects } from '../../components/Projects.vue'
export { default as ServiceBegin } from '../../components/ServiceBegin.vue'
export { default as Services } from '../../components/Services.vue'

export const LazyAbout = import('../../components/About.vue' /* webpackChunkName: "components/About" */).then(c => c.default || c)
export const LazyAboutPart = import('../../components/AboutPart.vue' /* webpackChunkName: "components/AboutPart" */).then(c => c.default || c)
export const LazyAdvantage = import('../../components/Advantage.vue' /* webpackChunkName: "components/Advantage" */).then(c => c.default || c)
export const LazyConsultation = import('../../components/Consultation.vue' /* webpackChunkName: "components/Consultation" */).then(c => c.default || c)
export const LazyContacts = import('../../components/Contacts.vue' /* webpackChunkName: "components/Contacts" */).then(c => c.default || c)
export const LazyFixed = import('../../components/Fixed.vue' /* webpackChunkName: "components/Fixed" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header" */).then(c => c.default || c)
export const LazyKey = import('../../components/Key.vue' /* webpackChunkName: "components/Key" */).then(c => c.default || c)
export const LazyMain = import('../../components/Main.vue' /* webpackChunkName: "components/Main" */).then(c => c.default || c)
export const LazyPartners = import('../../components/Partners.vue' /* webpackChunkName: "components/Partners" */).then(c => c.default || c)
export const LazyPartners2 = import('../../components/Partners2.vue' /* webpackChunkName: "components/Partners2" */).then(c => c.default || c)
export const LazyProjects = import('../../components/Projects.vue' /* webpackChunkName: "components/Projects" */).then(c => c.default || c)
export const LazyServiceBegin = import('../../components/ServiceBegin.vue' /* webpackChunkName: "components/ServiceBegin" */).then(c => c.default || c)
export const LazyServices = import('../../components/Services.vue' /* webpackChunkName: "components/Services" */).then(c => c.default || c)
