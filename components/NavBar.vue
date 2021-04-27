<template>
        <div class="grid grid-rows-1 grid-cols-7 justify-center py-6 px-20">
            <div class=" col-start-1 col-span-1 ">
                <img class="w-12 fill-current text-white" src="../static/imgs/cc.svg" alt="">
            </div>
            <div class="grid gap-10 grid-rows-1 grid-cols-2 col-span-2 col-start-6">
                <div class="grid font-display text-2xl content-center text-right ">
                    <h3> Portfolio </h3>
                </div>
                <div class="grid font-display text-2xl content-center text-right">
                    <h3>About</h3> 
                </div>
            </div>
        </div>
    
</template>

<script>
export default {
props:{
        logoImage: String,
    }
}
</script>