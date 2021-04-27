import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/Logo.vue'
export { default as NavBar } from '../../components/NavBar.vue'
export { default as PortfolioCard } from '../../components/PortfolioCard.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyNavBar = import('../../components/NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyPortfolioCard = import('../../components/PortfolioCard.vue' /* webpackChunkName: "components/portfolio-card" */).then(c => wrapFunctional(c.default || c))
