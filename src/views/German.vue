<template>
  <div class= "container">
       <h2 class="title is-2 mt-4 pt-6 has-text-centered">Rethink Your Assumptions - Learn German/Deutsch </h2>
        <h4 class="subtitle is-4 pb-6 px-4 is-family-secondary has-text-centered">
            Built 6 bi-lingual posters surrounding the topic of questioning one’s assumption/preconceived notions
            regarding the German culture and identity.
            Designed to be hung either “right side up” or “upside down”, the posters invited viewers to flip one’s
            assumptions on their head, and brought to light the richness and diversity of German culture.
        </h4>
        <!-- Beginning of 1st row of poster items -->
        <div class="columns is-vcentered mx-3 pb-6">
            <div class="column is-one-third">
                <figure class="image">
                    <img src="@/assets/german/German2.png" alt="German Politician">
                </figure>
            </div>
            <div class="column is-two-thirds">
                <h4 class="subtitle is-4 pl-6 is-family-secondary has-text-left">
                    Each poster explores a juxtapostion between what is ‘traditionally’ assumed German and an example of
                    the diversity of German culture.
                    Aminata Toure is an Afro-German politician paired with Angela Merkel, the Chancellor of Germany
                </h4>
            </div>
        </div>
        <!-- Beginning of 2nd row of poster items -->
        <div class="columns is-vcentered mx-3 pb-6">
            <div class="column is-two-thirds">
                <h4 class="subtitle is-4 pr-6 is-family-secondary has-text-right">
                    However, people are multlifaceted. Angela Merkel is a female Quantum Chemist.
                    She is contrasted with theoretical physicist Albert Einstein.</h4>
            </div>
            <div class="column is-one-third">
                <figure class="image">
                    <img v-bind:src="require('@/assets/german/German1.png')" alt="German Scientists">
                </figure>
            </div>
        </div>
<!-- Beginning of 3rd row of poster items -->
        <div class="columns is-vcentered mx-3 pb-6">
            <div class="column is-one-third">
                <figure class="image">
                    <img v-bind:src="require('@/assets/german/German4.png')" alt="German Architecture">
                </figure>
            </div>
            <div class="column is-two-thirds">
                <h4 class="subtitle is-4 pl-6 is-family-secondary has-text-left">
                    Cultural richness comes in many forms. 
                    Included amongst the people of Germany is a reflection of not only architectural, but religious diversity as well.
                </h4>
            </div>
        </div>
<!-- Beginning of nth row of poster items -->
        <div class="columns is-vcentered mx-3 pb-6">
            <div class="column">
                <figure class="image">
                    <img v-bind:src="require('@/assets/german/German5.png')" alt="German Philosopoher">
                </figure>
            </div>
            <div class="column ">
                <figure class="image">
                    <img v-bind:src="require('@/assets/german/German3.png')" alt="German">
                </figure>
            </div>
            <div class="column">
                <figure class="image">
                    <img v-bind:src="require('@/assets/german/German6.png')" alt="German Singer">
                </figure>
            </div>
        </div>

  </div>
</template>

<script>
props:{
    }
</script>

<style>

</style>