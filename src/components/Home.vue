<template>
    <div class="mt-5">
        <h1>Home</h1>
    </div>
    <div class="row mt-5">
        <h2>{{ homeArtworks.length }} : Artworks</h2>
        <swiper :slidesPerView="4" :spaceBetween="30" :pagination="{
            type: 'fraction',
        }" :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide v-for="(classItem, i) in classList" :key="classItem">
                <button type="button" class="btn btn-light">
                    <img class="img-fluid mx-auto" :src="'/img/' + classItem + '/' + classListImg[i]" />
                    <span>
                        {{ classItem }}
                    </span>
                </button>
            </swiper-slide>
        </swiper>
    </div>

    <div class="row mt-5">
        <h2>{{ homeExhibtions.length }} : Exhibtions</h2>
        <swiper :slidesPerView="2" :spaceBetween="30" :pagination="{
            type: 'fraction',
        }" :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide v-for="(classItem, i) in classListEx" :key="classItem">
                <button type="button" class="btn btn-light">
                    <img class="img-fluid mx-auto" :src="'/img/Exhibtions/' + classListImgEx[i]" />
                    <span>
                        {{ classItem }}
                    </span>
                </button>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';
import axios from 'axios'
export default {
    components: { Swiper, SwiperSlide, },
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
            modules: [Navigation, Pagination],
        }
    }
}
</script>

<style>

</style>
