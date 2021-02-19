<template>
  <div class="container" data-aos="zoom-in">
    <h2 class="title is-2 mt-4 pt-6 has-text-centered">
      What's Wrong with my Mommy?
    </h2>
    <p class="subtitle is-4 pb-6 px-4 is-family-secondary has-text-centered">
      Given a manuscript, I illustrated 56-page children's book that depicts the emotional aftermath
      of 9/11 on a mother and her daughter. This book was printed in both English and Spanish.
    </p>
    

    <p class= "is-size-5 px-4 has-text-centered"> <b>"What's Wrong with my Mommy?"</b> can be found on <a href="https://amzn.to/3drUlAk">Amazon.</a></p>

    <carousel-3d :width="400" :height="533" :controls-visible="true">
      <slide :index="0"> <img src="../assets/wrongwithmommy/MominHands.png" alt="Mom in hands"> </slide>
      <slide :index="1"> <img src="../assets/wrongwithmommy/why.png" alt="Why Why Why"> </slide>
      <slide :index="2"> <img src="../assets/wrongwithmommy/crowd_Stress.png" alt="Crowd Stress" style="height: 100%"> </slide>
      <slide :index="3"> <img src="../assets/wrongwithmommy/MommysBrain.png" alt="Mommy's Brain"> </slide>
      <slide :index="4"> <img src="../assets/wrongwithmommy/alone.png" alt="Daughter Alone"> </slide>
      <slide :index="5"> <img src="../assets/wrongwithmommy/Angel.png" alt="Angel"> </slide>

    </carousel-3d>
  </div>
</template>

<script>
props: {
}
</script>

<style>
</style>