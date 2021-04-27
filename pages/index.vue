<template>
  <div class="">
    <NavBar />
    <div>
      <div class="grid grid-cols-2 gap-40 px-20">
        <div class="grid content-center justify-start ">
          <h1 class="font-display text-5xl"> 
            Welcome. I’m <p class="text-accentpurp inline">Cassandra</p>  and I have a passion for the intersection of design and technology.
          </h1>
        </div>
        <div class="grid content-center justify-center">
          <div class= "my-20 " >
            <img class="" src="../static/imgs/undrawicons/undraw_designer_life_w96d.svg" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="grid content-center justify-center p-16">
      <h2 class="font-display  text-4xl"> 
        Portfolio
      </h2>
    </div>

    <div class="">
      <div class="grid gap-20 grid-cols-2 h-80 p-20">
        <div class="grid content-center justify-center rounded-xl bg-moduranavy">
          <div class="m-7">
            <img class="" src="../static/imgs/portfolioImgs/M-ModuraWhite.svg" alt="">
          </div>
        </div>

        <PortfolioCard imgPath="M-ModuraWhite.svg"> </PortfolioCard>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>


