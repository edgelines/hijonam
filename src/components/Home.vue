<template>

    <div class="row mt-5">
        <Carousel :autoplay="2000" :wrap-around="true" :transition="5000">
            <Slide v-for="(item, i) in sliderImg" :key="item">
                <div class="d-flex align-self-center flex-wrap mt-5">
                    <img class="d-flex align-self-center flex-wrap" :src="'/img/Main/' + item" />
                </div>
            </Slide>
            <!-- <template #addons>
            <Pagination />
        </template> -->
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
    mounted() {
        this.loadData()
        this.Exhibtions()
    },
    methods: {
        loadData() {
            axios.get("/json/data.json").then((response) => {
                var tmp = [];
                this.homeArtworks = response.data.filter(v => v.category == 'Artworks')
                this.homeExhibtions = response.data.filter(v => v.category == 'Exhibtions')

                this.homeArtworks.forEach((value, index, array) => { tmp.push(value.class); })
                var set = new Set(tmp)
                var newArr = [...set]
                this.classList = newArr
                newArr.forEach((value) => { this.mainImg(this.homeArtworks, value) })
            })
        },
        mainImg(df, name) {
            var filter = df.filter(v => v.class == name)
            this.classListImg.push(filter[0].fileName)
        },

        Exhibtions() {
            axios.get("/json/data.json").then((response) => {
                var tmp = [];
                this.homeExhibtions = response.data.filter(v => v.category == 'Exhibtions')

                this.homeExhibtions.forEach((value, index, array) => { tmp.push(value.class); })
                var set = new Set(tmp)
                var newArr = [...set]
                this.classListEx = newArr
                newArr.forEach((value) => {
                    var filter = this.homeExhibtions.filter(v => v.class == value)
                    this.classListImgEx.push(filter[0].fileName)
                })
            })
        }

    },
    data() {
        return {

            sliderImg: ['Spirit 1-2022.jpg', 'Spring Sonata 1-2022.jpg', 'HIJO signature.png'],
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
