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

        <div class="navbar-menu" v-bind:class="{ 'is-active': isBurgerActive }">
            <div class="navbar-start">
                <!--                     <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                Portfolio
                            </a>
                            <div class="navbar-dropdown">
                                <a class="navbar-item">
                                    About
                                </a>
                                <a class="navbar-item">
                                    Jobs
                                </a>
                                <a class="navbar-item">
                                    Contact
                                </a>
                                <hr class="navbar-divider">
                                <a class="navbar-item">
                                    Report an issue
                                </a>
                            </div>
                        </div> -->
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
        }
}
</script>

<style>

</style>