<template>
  <div id="app">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <Navigation>  </Navigation>
    <router-view/>
    <PageFooter>  </PageFooter>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import PageFooter from '@/components/PageFooter.vue'
import PortfolioCard from '@/components/PortfolioCard.vue'

export default {
  components: {
    Navigation,
    PageFooter,
    PortfolioCard
  }
}
</script>

<style lang="scss">
@import "../node_modules/bulma/css/bulma.css"
</style>
