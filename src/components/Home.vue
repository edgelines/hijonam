<template>
    <div class="mt-5">
        <h1>Home</h1>
    </div>
    <div class="row mt-5">
        <h2>{{ homeArtworks.length }} : Artworks</h2>
        <swiper :slidesPerView="3" :spaceBetween="30" :pagination="{
            type: 'progressbar',
        }" :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide v-for="(classItem, i) in classList" :key="classItem">
                <div class="divImgList text-center">
                    <img class="img-fluid mx-auto" :src="'/img/' + classItem + '/' + classListImg[i]" />
                    <span>
                        {{ classItem }}
                    </span>
                </div>
            </swiper-slide>
        </swiper>
    </div>

    <div class="row mt-5">
        <h2>{{ homeExhibtions.length }} : Exhibtions</h2>
        <swiper :slidesPerView="3" :spaceBetween="10" :pagination="{
            type: 'progressbar',
        }" :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide v-for="(classItem, i) in classListEx" :key="classItem">
                <div class="divImgList text-center">
                    <img class="img-fluid mx-auto" :src="'/img/Exhibtions/' + classListImgEx[i]" />
                    <span>
                        {{ classItem }}
                    </span>
                </div>
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

.swiper {
    width: 100%;
    height: 260px;
    /* margin: 20px auto; */
}

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
