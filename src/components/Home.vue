<template>

    <div class="row mt-5">
        <Carousel :autoplay="4000" :wrap-around="true" :transition="20000">
            <Slide v-for="(item, i) in sliderImg" :key="item">
                <div class="d-flex align-self-center flex-wrap mt-2">
                    <img class="d-flex align-self-center flex-wrap" :src="'/img/Main/' + item" />
                </div>
            </Slide>
        </Carousel>
    </div>
    <!-- class="d-flex justify-content-center" -->

</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Pagination, Slide } from 'vue3-carousel'


import axios from 'axios'
export default {
    components: { Carousel, Slide, },
    props: {

    },
    methods: {

    },
    data() {
        return {

            sliderImg: ['Spirit 1-2022.jpg', 'Spring Sonata 1-2022.jpg', 'Spain Ronda 2-2022.jpg'],

        }
    },
    setup() {
        return {

        }
    }
}
</script>

<style>
.swiper {
    width: 100%;
    height: 100%;
}

.mainSwiper {
    width: 80% !important;
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

/* .swiper {
    width: 100%;
    height: 260px;
} */

.append-buttons {
    text-align: center;
    margin-top: 20px;
}

.append-buttons button {
    display: inline-block;
    cursor: pointer;
    border: 1px solid #007aff;
    color: #007aff;
    text-decoration: none;
    padding: 4px 10px;
    border-radius: 4px;
    margin: 0 10px;
    font-size: 13px;
}
</style>
