<template>
    <div class="mt-5">
        <h2>
            Current Exhibition
        </h2>

        <h4 class="mt-5">
            On processing
        </h4>
        <div class="spinner-border" role="status">
        </div>
    </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation, Pagination } from 'swiper';
import axios from 'axios'
export default {
    // components: { Swiper, SwiperSlide, },

    data() {
        return {
            allData: [],
            imgData: [],

            homeArtworks: [],
            classList: [],
            classListImg: [],

            homeExhibtions: [],
            classListEx: [],
            classListImgEx: [],
        }
    },
    setup() {
        return {
            // modules: [Navigation, Pagination],
        }
    }
}
</script>

<style></style>
