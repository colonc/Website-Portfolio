<template>
  <div class="column is-4">
      <router-link :to="pageNameRouter">     
            <div class="card large">
                <div class="card-image">
                    <figure class="image is-3by2">
                        <img v-bind:src="require('@/assets/' + imgPath + '')" alt="Image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4 pb-0 has-text-centered is-family-primary ">{{cardTitle}}</p>
                            <p class="subtitle has-text-centered">{{subtitle}}</p>  
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
    </div>

</template>

<script>
export default {
    props:{
        pageNameRouter: String,
        cardTitle: String,
        subtitle: String,
        imgPath: String,
    }
}
</script>

<style>

</style>