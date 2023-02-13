<template>

    <div class="row mt-5">
        <div class="col-1">

            <swiper :slidesPerView="1" :grid="{
                rows: 6,
            }" :spaceBetween="10" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>

            </swiper>
        </div>
        <div class="col-8 mt-3">




            <img id="imgData"
                :src="'/img/' + ArtWorksImg[$route.params.id].class + '/' + ArtWorksImg[$route.params.id].fileName" />
        </div>
        <div class="col-3 text-start mt-3 ">

            <h2 class="fw-900">{{ ArtWorksImg[$route.params.id].imgTitle }}</h2>

            <div class="mt-4"> {{ ArtWorksImg[$route.params.id].subject }} </div>

            <div class="mt-4">
                Height : {{ parseInt(ArtWorksImg[$route.params.id]['imgSize-w'] * 0.393701) }} inches / {{
                    ArtWorksImg[$route.params.id]['imgSize-w'] * 10
                }} cm
            </div>
            <div>
                Width : {{ parseInt(ArtWorksImg[$route.params.id]['imgSize-h'] * 0.393701) }} inches / {{
                    ArtWorksImg[$route.params.id]['imgSize-h'] * 10
                }} cm
            </div>

            <div class="mt-4 mb-5">
                Executed {{ ArtWorksImg[$route.params.id].imgYear }}
            </div>
            <hr />
        </div>
    </div>



</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {

        }
    },
    props: {
        ArtWorksImg: Object,
    },
    setup(props) {

        return {
            modules: [Grid, Pagination],
        }
    }
}
</script>

<style>
.fw-900 {
    font-weight: 900;
}

#imgData {
    width: 50%;
    height: auto;
}

/* 
.swiper {
    width: 200px;
    height: 500px;
    margin-left: auto;
    margin-right: auto;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: calc((100% - 30px) / 2) !important;
    display: flex;
    justify-content: center;
    align-items: center;
} */
</style>