<template>
    <a href="">
        <div class="grid content-center justify-center rounded-xl bg-moduranavy">
            <div class="m-7">
                <!-- <img class="" :src="require(`../static/imgs/portfolioImgs/${props.imgPath}`)" alt=""> -->
                <img :src="'../static/imgs/portfolioImgs/${props.imgPath}'">
            </div>
        </div>
    </a>
</template>

<script>
export default {
props:{
        imgPath: String,
        bgColor: String,
        portfolioPage: String,
    }
}
</script>