<template>
    <div class="container">
        <div class="row row-cols-3 mt-5">

            <div class="col-sm-12 col-md-9 col-lg-9">
                <div class="row">
                    <div class="col-1 thumbnail">
                        <div class="row thumbnail-img mx-auto" v-for="(item, i) in sliderImg" :key="item">
                            <img :src="'/img/Main/' + item" />
                        </div>
                    </div>
                    <div class="col ArtworksDetail-MainImg">
                        <img id="imgData"
                            :src="'/img/' + ArtWorksImg[$route.params.id].class + '/' + ArtWorksImg[$route.params.id].fileName" />
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-3 col-lg-3 text-start ArtworksDetail-Table">

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
            sliderImg: ['Spirit 1-2022.jpg', 'Spring Sonata 1-2022.jpg', 'Spain Ronda 2-2022.jpg'],
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

@media (max-width : 600px) {
    #imgData {
        width: 50%;
        height: auto;
    }

    /* 
    .thumbnail {
        width: 200px;
        height: auto;
        margin-bottom: 100px;
    } */
}

@media (max-width : 1099px) {
    #imgData {
        width: 50%;
        height: auto;
    }

    /* 
    .thumbnail {
        width: 200px;
        height: auto;
        margin-bottom: 100px;
    } */
}


@media (min-width : 1100px) {
    #imgData {
        width: 72%;
        height: auto;
        margin-left: 120px;
    }

    .thumbnail {
        /* width: 230px; */
        margin-top: 0px;
        /* margin-left: 180px; */
    }

    .thumbnail-img {
        width: 200px;
        /* height: 100px; */
        margin-bottom: 10px;
    }

}
</style>