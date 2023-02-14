<template>
    <!-- Img Swiper -->
    <div class="row mt-5">
        <div class="col">
            <Carousel :autoplay="3000" :wrap-around="true" :transition="7500" :itemsToShow="5" :modelValue="2">
                <Slide v-for="(classItem, i) in classList" :key="classItem">
                    <div class="d-flex flex-column" @click="btnData(classItem)">
                        <div class="col">
                            <img class="artworksCategory" :src="'/img/Artworks/' + classListImg[i][0]" />
                        </div>
                        <div class="row mt-1">
                            <div class="col imgTilteFont">
                                {{ classItem }}
                            </div>
                        </div>
                    </div>
                </Slide>
            </Carousel>
        </div>
    </div>

    <div class="row Artworks-Div-Bottom">
        <!-- Filter by -->
        <div class="col-2 mt-5">
            <div class="imgFilter-Div">
                <div class="row mb-2 text-center">Filter by</div>
                <div class="mt-4 text-start FilterTime-Div">Time Period</div>

                <div class="row">
                    <form class="box">
                        <RangeSlider v-model="imgRange" bar-color="#bebefe" :min="imgMin" :max="imgMax"
                            :keep-just-significant-figures="false" @update:model-value="imgYearRange(selectClass)"
                            id="timePeriod">
                        </RangeSlider>
                    </form>
                </div>

                <div class="mt-4 text-start FilterTime-Div">Size Period</div>
                <div class="row mt-2">
                    <form class="box">
                        <!-- <input type="range" @click="rangeW_input($event.target.value)" id="rangeWidth" :min="0"
                            :max="100" />
                        <input type="range" @click="rangeH_input($event.target.value)" id="rangeHeight" :min="0"
                            :max="100" /> -->
                        <input type="range" v-model="rangeImg.W" id="rangeWidth" :min="0" :max="imgSizeFixed.W" />
                        <input type="range" v-model="rangeImg.H" id="rangeHeight" :min="0" :max="imgSizeFixed.W" />
                        <div :style="{ width: (sizePeriodGuideW / 1.7) + '%', height: (sizePeriodGuideH * 1.43) + '%' }"
                            class="img-Box">
                        </div>
                        {{ rangeImg.W }} * {{ rangeImg.H }}
                    </form>
                </div>
            </div>
        </div>

        <!-- Img List -->
        <div class="col-10">
            <div class="row">
                <h4 class="text-start mb-4">
                    {{ (imgData.length).toLocaleString('kr') }} {{ selectClass }} works
                </h4>
                <hr />
            </div>

            <div class="row mt-4">
                <!-- <div class="row d-flex align-items-end"> -->
                <div class="row">
                    <masonry-wall :items="imgList" :ssr-columns="1" :column-width="420" :gap="40">
                        <template #default="{ item, index }">
                            <div class="mb-4" @click="$router.push('/artworks/' + imgData[index].imgID)">
                                <img class="img-fluid mb-1" :src="'/img/Artworks/' + item[0]" />
                                <div class="imgTilteFont text-start">{{ imgData[index].imgTitle }}</div>
                            </div>
                        </template>
                    </masonry-wall>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

import axios from 'axios'

import RangeSlider from 'vue-simple-range-slider';
import 'vue-simple-range-slider/css';
import { reactive, defineComponent } from "vue";
import MasonryWall from '@yeger/vue-masonry-wall'

export default {
    components: {
        // Swiper, SwiperSlide,
        MasonryWall,
        RangeSlider,
        Carousel, Slide,
    },
    mounted() { this.loadData() },
    computed: {
        sizePeriodGuideH() {
            return parseInt((this.rangeImg.H / this.imgSizeFixed.H) * 100)
        },
        sizePeriodGuideW() {
            return parseInt((this.rangeImg.W / this.imgSizeFixed.W) * 100)
        }
    },
    methods: {
        loadData() {
            axios.get("/json/Artworks.json").then((response) => {
                var tmp = [], tmpImg = [];
                this.allData = response.data
                // this.allData = response.data.filter(v => v.category == 'Artworks')
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
            var tmp = [], tmp2 = [], tmp3 = []
            this.imgData.forEach((value) => { tmp.push(value.imgYear); tmp2.push(value['imgSize-w']); tmp3.push(value['imgSize-h']) })
            var Max = Math.max(...tmp)
            var Min = Math.min(...tmp)
            this.imgYearMinMax = [Min, Max]
            if (Min == Max) {
                return Min = Max - 1
            }
            this.imgRange = [Min, Max]
            this.imgMin = Min
            this.imgMax = Max

            var Max = Math.max(...tmp2)
            this.imgSizeFixed.W = Max
            this.rangeImg.W = Max
            var Max = Math.max(...tmp3)
            this.imgSizeFixed.H = Max
            this.rangeImg.H = Max
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

            imgSizeFixed: reactive({ W: '', H: '' }),
            imgSize: reactive({ W: '', H: '' }),
            showImgSize: reactive({ W: '', H: '' }),
            rangeImg: reactive({ W: '', H: '' }),
        }
    },
}
</script>

<style>
.simple-range-slider .simple-range-slider-popover[data-v-f6e84873] {
    box-shadow: none !important;
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

.imgTilteFont {
    font-size: 19px;
}

#rangeHeight {
    position: relative;
    left: -60px;
    top: 100px;
    /* float: left; */
    /* transform: ; */
    transform: rotate(90deg);
    width: 100px;
}

#Box-Div {
    height: 200px;
}

.img-Box {
    position: relative;
    left: 30px;
    width: 50px;
    height: 50px;
    background-color: rgba(89, 89, 233, 0.525);
}


@media (max-width : 600px) {
    .artworksCategory {
        width: 100px;
        height: 100px;
    }
}

@media (max-width : 1099px) {
    .artworksCategory {
        width: 250px;
        height: 250px;
    }

    .Artworks-Div-Bottom {
        margin-top: 50px;
    }
}


@media (min-width : 1100px) {
    .artworksCategory {
        width: 300px;
        height: 300px;
    }

    .imgFilter-Div {
        margin-left: 90px;
    }

    .FilterTime-Div {
        margin-left: -14px;
    }

    .Artworks-Div-Bottom {
        margin-top: 90px;
    }

    #timePeriod {
        width: 160px;
        margin-left: -5px;
    }

    #rangeWidth {
        position: relative;
        left: -12px;
        /* top: 105px; */
        width: 120px;
    }

    #rangeHeight {
        position: relative;
        left: -105px;
        top: 57px;
        transform: rotate(90deg);
        width: 100px;
    }

    .img-Box {
        position: relative;
        left: 30px;
        top: -10px;
        width: 100px;
        height: 100px;
        background-color: rgba(166, 166, 166, 0.525);
    }
}
</style>
