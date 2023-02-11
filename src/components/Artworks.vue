<template>

    <!-- Img Swiper -->
    <div class="row mt-5">
        <div class="col-3"></div>
        <div class="col-8">
            <swiper :slidesPerView="3" :spaceBetween="30" :pagination="{
                type: 'progressbar',
            }" :navigation="true" :modules="modules" class="mySwiper">
                <swiper-slide v-for="(classItem, i) in classList" :key="classItem">
                    <div class="divImgList" @click="btnData(classItem)">
                        <img style="height: 320px;" :src="'/img/' + classItem + '/' + classListImg[i]" />
                        <span>
                            {{ classItem }}
                        </span>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>

    <div class="row mt-5">
        <div class="col-1">
            <!-- Emtpy -->
        </div>

        <!-- Filter by -->
        <div class="col-2 mt-5">
            <span class="row mb-2 text-center"> Filter by </span>

            <label for="customRange2" class="form-label mt-4 text-start">Time Period</label>
            <div class="row">
                <span class="col text-start">{{ imgYearMinMax[0] }}</span>
                <span class="col text-end">{{ imgYearMinMax[1] }}</span>
                <form class="box border">
                    <input type="range" class="col form-range" :min=imgYearMinMax[0] :max=imgYearMinMax[1]
                        id="customRange2" @input="imgYearRange($event, selectClass)">

                    <!-- <VueSimpleRangeSlider style="width: 250px" :min=imgYearMinMax[0] :max=imgYearMinMax[1]
                            :logarithmic="true" v-model="imgYearMinMax" @input="imgYearRange($event, selectClass)"> -->
                    <!-- <VueSimpleRangeSlider style="width: 250px" :min=imgYearMinMax[0] :max=imgYearMinMax[1]
                            :logarithmic="true" v-model="state.range"> -->

                    <!-- <template #prefix="{ value }">$</template> -->
                    <!-- </VueSimpleRangeSlider>
                        {{ state }} -->

                </form>
                <!-- <button @click="setSelected(selectClass, $event)">검색</button> -->

                <!-- <form class="box border">
                        <div class="filterSlider">
                            <input type="range" id="input-left" :min=imgYearMinMax[0] :max=imgYearMinMax[1] />
                            <input type="range" id="input-right" :min=imgYearMinMax[0] :max=imgYearMinMax[1] />
                            <div class="track">
                                <div class="range"></div>
                                <div class="thumb left"></div>
                                <div class="thumb right"></div>
                            </div>

                        </div>
                    </form> -->
            </div>
            <span class="col">{{ showImgYear }}</span>

            <div class="row mt-5">
                <div class="col">
                    <input type="range" class="form-range range-vertical" v-model="imgSizeH">
                    <span v-text="imgSizeH"></span>
                </div>
                <div class="col-8">
                    <input type="range" class="form-range" v-model="imgSizeW">
                    <span v-text="imgSizeW"></span>
                </div>
            </div>
        </div>

        <!-- Img List -->
        <div class="col-8">
            <div class="row">
                <h4 class="text-start mb-4">
                    {{ (imgData.length).toLocaleString('kr') }} {{ selectClass }} works
                </h4>
                <hr />
            </div>

            <div class="row mt-4">
                <!-- <div class="row d-flex align-items-end"> -->
                <div class="row">
                    <masonry-wall :items="imgList" :ssr-columns="1" :column-width="300" :gap="20">
                        <template #default="{ item, index }">
                            <div class="mb-4" @click="$router.push('/artworks/' + imgData[index].imgID)">
                                <img class="img-fluid mb-3" :src="'/img/' + selectClass + '/' + item" />
                                <span class="fw-bolder">{{ imgData[index].imgTitle }}</span>
                            </div>
                        </template>
                    </masonry-wall>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';
import axios from 'axios'

import VueSimpleRangeSlider from 'vue-simple-range-slider';
import "vue-simple-range-slider/css";
import { reactive, defineComponent } from "vue";
import MasonryWall from '@yeger/vue-masonry-wall'
import MultiRangeSlider from "multi-range-slider-vue";


export default {
    components: {
        Swiper, SwiperSlide, MasonryWall,
        VueSimpleRangeSlider, MultiRangeSlider
    },
    mounted() { this.loadData() },
    methods: {
        loadData() {
            axios.get("/json/data.json").then((response) => {
                var tmp = [], tmpImg = [];
                this.allData = response.data.filter(v => v.category == 'Artworks')
                this.allData.forEach((value, index, array) => { tmp.push(value.class); })
                const set = new Set(tmp)
                const newArr = [...set]
                this.classList = newArr

                newArr.forEach((value) => {
                    this.mainImg(value)
                })
                this.btnData(Object.values(this.classList)[0]);
            })
        },
        mainImg(name) {
            const filter = this.allData.filter(v => v.class == name)
            const last = filter.length;
            this.classListImg.push(filter[last - 1].fileName)
        },
        btnData(name) {
            const filter = this.allData.filter(v => v.class == name)
            this.imgData = filter;
            this.selectClass = name;
            var tmp = []
            this.imgData.forEach((value) => {
                tmp.push(value.fileName)
            })
            this.imgList = tmp;
            this.getMaxMin()
        },
        getMaxMin() {
            var tmp = []
            this.imgData.forEach((value) => { tmp.push(value.imgYear) })
            var Max = Math.max(...tmp)
            var Min = Math.min(...tmp)
            this.imgYearMinMax = [Min, Max]
        },
        imgYearRange(name) {
            this.imgData = this.allData.filter(value =>
                value.class == name &
                value.imgYear >= imgYearMinMax[0] &
                value.imgYear <= imgYearMinMax[1]
            )
            console.log(this.imgData);
        },
        setSelected(name, event) {
            const filter = this.allData.filter(v => v.class == name
                // &
                // v.imgYear >= this.state.range[0] &
                // v.imgYear <= this.state.range[1]
            )
            this.imgData = filter;
            console.log(event)
        }
    },
    data() {
        return {
            allData: '',
            imgData: '',
            classList: [],
            classListImg: [],
            selectClass: '',

            imgList: [],

            imgYearMinMax: [],
            showImgYear: '',
            imgID: '',
            imgURL: '',
            imgSizeW: '',
            imgSizeH: '',
            state: reactive({ range: [2009, 2022] }),
            modules: [Navigation, Pagination],
            // state: reactive({ number: 1 })
        }
    },
}
</script>

<style>
.divImgList {
    width: 350px;
    height: 350px;
}

.box {
    width: 300px;
    height: 100px;
}

.filterSlider {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
}

/* 
input {
    width: calc(100% - 2rem);
    top: 3rem;
    left: 1rem;
    position: absolute;
    border: none;
} */

.range-vertical {
    transform: rotate(270deg);
    width: 40%;

}
</style>
