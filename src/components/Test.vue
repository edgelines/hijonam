<template>


    <swiper :direction="'vertical'" :pagination="{
        clickable: true,
    }" :modules="modules" class="mySwiper">

        <div class="row">
            <swiper-slide v-for="(item, i) in sliderImg" :key="item" style="width: 200px;">
                <img class="col-1" :src="'/img/Main/' + item" />
            </swiper-slide>
        </div>
        <div class="row">
            <div class="col">
                <swiper-slide>Slide 1</swiper-slide>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <swiper-slide>Slide 2</swiper-slide>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <swiper-slide>Slide 3</swiper-slide>
            </div>
        </div>
    </swiper>


</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/grid';
import 'swiper/css/pagination';

// import required modules
import { Grid, Pagination } from 'swiper';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            sliderImg: ['Spirit 1-2022.jpg', 'Spring Sonata 1-2022.jpg', 'Spain Ronda 2-2022.jpg'],
        }
    },
    setup() {
        return {
            modules: [Grid, Pagination],
        };
    },
};
</script>
<style>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>