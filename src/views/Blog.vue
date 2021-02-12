<template>
<div>
    <section class = "hero hero-gradient is-bold">
               <div class = "hero-body is-3by1">
                  <div class = "container">
                     <h1 class = "title">(Main title)</h1>
                     <h2 class = "subtitle">(Subtitle)</h2>
                  </div>
               </div>
            </section>
    <div class= "columns px-4">
        <div class = "column is-one-third">
          <BlogCard blogTitle="Hidden Pockets of Knowledge" 
                    blogSubtitle="Learning to Navigate The Tribal Knowledge Trap"
                    date="Jun 1 2019"
                    imgPath="blogImages/questions.jpg"
                    pageName="./views/Blog/TribalKnowledge.vue"
                    blurb="As I approach the 11 month mark at my first full time job post-graduation, I am amassing my own wealth of knowledge. 
            I’m gaining technical development skills"></BlogCard>

        </div>
    </div> <!-- columns-->
</div>

</template>

<script>

import BlogCard from '@/components/BlogCard.vue'

export default {
components: {
   BlogCard,
  }
}
</script>

<style>

</style>