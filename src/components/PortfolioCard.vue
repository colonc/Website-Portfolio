<template>
  <div  class="column is-4">
                    <a href="pages/ProjectGerman.html">
                        <div class="card large">
                            <div class="card-image">
                                <figure class="image is-3by2">
                                    <img v-bind:src="imgPath" alt="Image">
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <p class="title is-4 pb-0 has-text-centered">{{cardTitle}}</p>
                                        <p class="subtitle has-text-centered">{{subtitle}}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

</template>

<script>
export default {
    props:{
        cardTitle: String,
        subtitle: String,
        imgPath: String,
        german: 'german.png'
    }


}
</script>

<style>

</style>