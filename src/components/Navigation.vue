<template>
  <nav class="navbar has-background-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item " to="/">
                <h2 class="title pl-6 pt-2">Cassandra A. Colón</h2>
            </router-link>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
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
                <a href="#PortfolioLink" class="navbar-item">
                    Portfolio
                </a>
                <!-- <a class="navbar-item">
                    Contact
                </a> -->
            </div>
        </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>