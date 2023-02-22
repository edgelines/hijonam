<template>
    <div id="Home-Div" class="row mt-5">
        <Carousel :autoplay="3500" :wrap-around="true" :transition="15000">
            <Slide v-for="(item, i) in sliderImg" :key="item">
                <div class="d-flex align-self-center flex-wrap mt-2">
                    <img class="d-flex align-self-center flex-wrap Main-Mobile" :src="'/img/Main/' + item" />
                </div>
            </Slide>
        </Carousel>
    </div>
<!-- class="d-flex justify-content-center" --></template>

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

            sliderImg: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg',],

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


@media (max-width : 600px) {
    .Main-Mobile {
        width: 350px;
        height: 350px;
    }
}

@media (min-width : 1100px) {
    #Home-Div {
        margin-top: 125px !important;
    }
}
</style>
