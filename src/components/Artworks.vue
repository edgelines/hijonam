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
                <!-- <span class="col text-start">{{ imgYearMinMax[0] }}</span>
                <span class="col text-end">{{ imgYearMinMax[1] }}</span> -->
                <form class="box">
                    <!-- <input type="range" class="col form-range" :min=imgYearMinMax[0] :max=imgYearMinMax[1]
                        id="customRange2" @input="imgYearRange($event, selectClass)"> -->
                    <!-- imgYearRange(selectClass) -->
                    <RangeSlider v-model="imgRange" style="width: 100%" bar-color="#bebefe" :min="imgMin" :max="imgMax"
                        :keep-just-significant-figures="false" @update:model-value="imgYearRange(selectClass)">
                        <!-- <template #suffix>$</template> -->
                    </RangeSlider>
                </form>
            </div>

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
                        <!-- <masonry-wall :items="imgData.fileName" :ssr-columns="1" :column-width="300" :gap="20"> -->
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

import RangeSlider from 'vue-simple-range-slider';
import 'vue-simple-range-slider/css';
import { reactive, defineComponent } from "vue";
import MasonryWall from '@yeger/vue-masonry-wall'
// import MultiRangeSlider from "multi-range-slider-vue";


export default {
    components: {
        Swiper, SwiperSlide, MasonryWall,
        RangeSlider,
        // MultiRangeSlider
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
            this.imgRange = [Min, Max]
            this.imgMin = Min
            this.imgMax = Max
        },
        imgYearRange(name) {
            var filter = this.allData.filter(value => value.class == name)
            filter = filter.filter(value => this.imgRange[0] <= value.imgYear &
                value.imgYear <= this.imgRange[1])
            this.imgData = filter

            var tmp = []
            this.imgData.forEach((value) => {
                tmp.push(value.fileName)
            })
            this.imgList = tmp;
        },
    },
    props: {
        ArtWorksImg: Object,
    },
    data() {
        return {
            modules: [Navigation, Pagination],

            allData: '',
            imgData: '',
            classList: [],
            classListImg: [],
            selectClass: '',

            imgList: [],

            imgYearMinMax: [],
            imgMin: '',
            imgMax: '',
            imgRange: '',


            imgSizeW: '',
            imgSizeH: '',

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
