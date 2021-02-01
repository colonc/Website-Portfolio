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
        <div class="container" data-aos="fade-up">
            <h2 class="title is-2 mt-4 py-6 has-text-centered" id="PortfolioLink">Portfolio</h2>
        <div id="app" class="row columns is-multiline is-centered">

            <PortfolioCard pageName = "/German" cardTitle="Learn German/Deutsch" subtitle="Poster Design" imgPath="german.png"> </PortfolioCard>
               
            <PortfolioCard pageName = "/BM4F" cardTitle="Lead Reporting App" subtitle="Front-end App Development" imgPath="BM4F.png"> </PortfolioCard>

            <PortfolioCard pageName = "/Modura" cardTitle="Modura" subtitle="App Prototyping" imgPath="modura.png"> </PortfolioCard>

        </div>
        
        </div>
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
