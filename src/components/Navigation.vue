<template>
  <nav class="navbar has-background-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item " href="index.html">
                <h2 class="title pl-6 pt-2">Cassandra A. Colón</h2>
            </a>

            <a role="button" class="navbar-burger" v-on:click="isBurgerActive =! isBurgerActive" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu" v-bind:class="{'is-active': isBurgerActive }">
            <div class="navbar-start">
                
            </div>

            <div class="navbar-end is-align-content-space-between pr-6 is-size-4 ">
               <router-link to="/About" class="navbar-item">
                    About
                </router-link>
                <router-link to="/#PortfolioLink" class="navbar-item">
                    Portfolio
                </router-link>
                <!-- <a class="navbar-item">
                    Contact
                </a> -->
            </div>
        </div>
    </nav>
</template>

<script>
export default {

        data: function( ) { return {
            isBurgerActive: false
        }},
        methods: {
            toggle() {
                this.isBurgerActive = !this.isBurgerActive
            }
        },
        watch: {
            '$route' () {
                this.isBurgerActive = false
            }
        }
}
</script>

<style>

</style>