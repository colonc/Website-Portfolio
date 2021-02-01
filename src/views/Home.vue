<template>
<div class="" >
    <section class="hero is-small pb-5 ">
        <div class="hero-body">
            <div class="columns is-vcentered is-gapless px-5">
                <div class="column" data-aos="fade-right">
                    <figure class="image px-5">
                        <img style="max-height: 99vh; width:auto;" src="@/assets/me1.png">
                    </figure>
                </div>
                <div class="column has-text-centered pt-6 mt-6" data-aos="fade-up">
                    <h2 class="title is-2 is-family-primary">Flex Your Love of Learning</h2>
                    <h4 class="subtitle is-4 is-family-secondary">The learning begins when the knowledge ends</h4>
                </div>
            </div>
        </div>
    </section>
    <section class="is-two-thirds"> 
        <!-- light-gradient -->
        <div class="container " data-aos="fade-up">
            <h2 class="title is-2 pt-6 has-text-centered ">I'm a Dabbler</h2>
            <h4 class="subtitle is-4 pb-6 px-2 is-family-secondary has-text-centered ">My professional interests range from
                UX/UI design to data science to development. In my personal time I rock climb, read, illustrate and am
                constantly flexing my love of learning.</h4>
        </div>
    </section>

    <section>
      
    </section>
    
</div>  

</template>

<script>
// @ is an alias to /src
import PortfolioCard from '@/components/PortfolioCard.vue'

export default {

  components: {
   PortfolioCard,
  }
}
</script>
