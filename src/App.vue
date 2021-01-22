<template>
  <div id="app">
    <Navigation>  </Navigation>

    <PageFooter>  </PageFooter>
    <div id="nav">
       
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  components: {
    Navigation,
    PageFooter,
    
  }
}
</script>
<style lang="scss">
@import "../node_modules/bulma/css/bulma.css"
</style>
