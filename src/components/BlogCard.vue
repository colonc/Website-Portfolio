<template>
<div>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img v-bind:src="require('@/assets/' + imgPath + '')" alt="Blog Image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-family-primary is-4">{{blogTitle}}</p>
                    <p class="subtitle is-family-primary is-6">{{blogSubtitle}}</p>
                </div>
            </div>
            <div class="content is-family-secondary">
            {{blurb}}... <router-link :to="pageName">[Read More]</router-link>
            <br>
            <time datetime=" ">{{date}}</time>
            </div>
        </div>
    </div>
    
</div>
  
</template>

<script>
export default {
props:{
        imgPath: String,
        blogTitle: String,
        blogSubtitle: String,
        blurb: String,
        date: String,
        pageName: String,
    }
}
</script>

<style>

</style>