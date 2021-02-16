<template>
  <div>
    <div class="container">
        <!-- START ARTICLE FEED -->
        <section class="articles">
            <div class="column is-8 is-offset-2">
                <!-- START ARTICLE -->
                <div class="card article">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content has-text-centered">
                                <p class="title article-title">{{ title }}</p>
                                <p class="subtitle">{{ subtitle }}</p>
                                <div class="tags has-addons level-item">
                                    <span class="tag is-rounded">{{ date }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="content article-body">
                            <component :is="dynamicComponent"/>
                        </div>
                    </div>
                </div>
                <!-- END ARTICLE -->
            </div>
        </section>
    </div>
  </div>
</template>

<script>
  export default {
   
   props:{
      markdownFilePath: String,
   },

    data () {
      return {
        title: null,
        subtitle: null,
        date: null,
        dynamicComponent: null
      }
    },
//blog_posts/2021-02-18-buyLocalBuyBlack.md
//blog_posts/2019-6-06-tribal-knowledge.md
    created () {
      const markdown = require(`${process.env.BASE_URL}./blog_posts/2021-02-18-buyLocalBuyBlack.md`)
      this.title = markdown.attributes.title
      this.subtitle = markdown.attributes.subtitle
      this.date = markdown.attributes.date
      this.dynamicComponent = markdown.vue.component

      // Use Async Components for the benefit of code splitting
      // https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
      // this.dynamicComponent = () => import(`~/articles/${this.fileName}.md`).then(({ vue }) => vue.component
    }
  }
</script>

<style>

</style>