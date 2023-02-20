<template>
    <div class="row mt-5">
        <div class="col">
            <Carousel :autoplay="3000" :wrap-around="true" :transition="7500" :itemsToShow="5" :modelValue="2">
                <Slide v-for="(classItem, i) in classList" :key="classItem">
                    <div class="d-flex flex-column align-self-end" @click="btnData(classItem);">
                        <div class="col">
                            <img class="artworksCategory" :src="'/img/Artworks/' + classListImg[i]" />
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

        <div class="col-md-9 col-lg-9 mt-5">


            <div class="row" v-if="Object.keys(selectImg.fileName).length > 1">
                <div class="col-1 thumbnail">
                    <div class="row thumbnail-img mx-auto" v-for="(item, i) in selectImg.fileName" :key="item">
                        <img :src="'/img/Artworks/' + item" @click="ArtworksDetailClick(item)" />
                    </div>
                </div>

                <div class="col selectImg d-flex justify-content-center">
                    <div class="row text-start">
                        <img :src="mainImgDiv.img" />
                    </div>
                </div>
            </div>

            <div class="row" v-else>
                <div class="col-12 d-flex justify-content-center">
                    <div class="text-start singleMainImg">
                        <img :src="mainImgDiv.img" />
                        <h4 class="fw-900 mt-3">{{ selectImg.imgTitle }}</h4>
                        <div class="mt-1"> {{ selectImg.subject }} </div>
                        <div class="mt-1">
                            Height : {{ parseInt(selectImg['imgSize-w'] * 0.393701) }} inches / {{
                                selectImg['imgSize-w']
                            }} cm
                        </div>
                        <div>
                            Width : {{ parseInt(selectImg['imgSize-h'] * 0.393701) }} inches / {{
                                selectImg['imgSize-h']
                            }} cm
                        </div>

                        <div class="mt-1">
                            Executed {{ selectImg.imgYear }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="row row-cols-2 mt-5" v-if="selectImg.fileName.length > 1">
                <div class="col ">
                    <div class="row text-start ArtworksDetail-Table">
                        <h4 class="fw-900">{{ selectImg.imgTitle }}</h4>
                        <div class="mt-1"> {{ selectImg.subject }} </div>
                        <div class="mt-1">
                            Height : {{ parseInt(selectImg['imgSize-w'] * 0.393701) }} inches / {{
                                selectImg['imgSize-w']
                            }} cm
                        </div>
                        <div>
                            Width : {{ parseInt(selectImg['imgSize-h'] * 0.393701) }} inches / {{
                                selectImg['imgSize-h']
                            }} cm
                        </div>

                        <div class="mt-1">
                            Executed {{ selectImg.imgYear }}
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-sm-12 col-md-3 col-lg-3">
            <!-- Filter by -->
            <div class="col-12" id="Mobile-Filter">
                <div class="imgFilter-Div">
                    <div class="row mb-2 text-center">Filter by</div>
                    <div class="mt-4 text-start FilterTime-Div">Time Period</div>

                    <div class="row">
                        <form class="box">
                            <RangeSlider v-model="imgRange" bar-color="#bebebe" :min="imgYear.Min" :max="imgYear.Max"
                                :keep-just-significant-figures="false" @update:model-value="imgYearRange(selectClass)"
                                id="timePeriod">
                            </RangeSlider>
                        </form>
                    </div>
                </div>
            </div>
            <!-- Filter by -->
            <div class="row" id="nonMobile-Filter">
                <div class="imgFilter-Div">
                    <div class="mt-4 text-start FilterTime-Div">Time Period</div>
                    <div class="row">
                        <form class="box">
                            <RangeSlider v-model="imgRange" bar-color="#bebebe" :min="imgYear.Min" :max="imgYear.Max"
                                :keep-just-significant-figures="false" @update:model-value="imgYearRange(selectClass)"
                                id="timePeriod">
                            </RangeSlider>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Img List -->

            <div class="row">
                <h4 class="text-start mb-4">
                    {{ (imgData.length).toLocaleString('kr') }} {{ selectClass }} works
                </h4>
                <hr />
            </div>

            <div class="row mt-4">
                <div class="col-md-4 col-lg-4 mb-3" v-for="(item, index) in imgData" key="item">
                    <img class="imgItem" :src="'./img/Artworks/' + item.fileName[0]" @click="imgSelect(item)" />
                </div>
                <!-- <div class="row d-flex align-items-end"> -->
            </div>



        </div>


    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

import axios from 'axios'
import '../assets/style.css'
import RangeSlider from 'vue-simple-range-slider';
import 'vue-simple-range-slider/css';
import { ref, reactive, defineComponent } from "vue";
// import MasonryWall from '@yeger/vue-masonry-wall'
// import { MasonryGrid, JustifiedGrid, FrameGrid, packingGrid } from '@egjs/vue-grid'
// import { MasonryGrid } from '@egjs/vue-grid';
// import ArtworksImgList from './ArtworksImgList.vue';
import ArtworksDetail from './ArworksDetail.vue'
export default {
    components: {
        // MasonryWall,
        RangeSlider,
        Carousel, Slide,
        ArtworksDetail,
    },
    // props: {
    //     ArtWorksImg: Object,
    // },

    created() { this.loadData(); },
    computed: {

    },
    methods: {
        loadData() {
            axios.get("/json/Artworks.json").then((response) => {
                var tmp = [];
                this.allData = response.data
                this.allData.forEach((value, index, array) => { tmp.push(value.class); })
                const set = new Set(tmp)
                const newArr = [...set]
                this.classList = newArr

                newArr.forEach((value) => {
                    this.mainImg(value)
                })
                this.btnData(Object.values(this.classList)[1]);
                this.imgSelect(this.imgData[0])
            })
        },
        mainImg(name) {
            const filter = this.allData.filter(v => v.class == name)
            this.classListImg.push(filter[0].mainImg)
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
            var tmp = [];
            this.imgData.forEach((value) => { tmp.push(value.imgYear); })
            var Max = Math.max(...tmp)
            var Min = Math.min(...tmp)
            if (Min == Max) {
                return Min = Max - 1
            }
            this.imgRange = [Min, Max]
            this.imgYear.Min = Min
            this.imgYear.Max = Max

        },
        imgYearRange(name) {
            var filter = this.allData.filter(value => value.class == name);
            filter = filter.filter(value => (
                value.imgYear >= this.imgRange[0] &&
                value.imgYear <= this.imgRange[1])
            );
            this.imgData = filter
            var tmp = []
            this.imgData.forEach((value) => {
                tmp.push(value.fileName)
            })
            this.imgList = tmp;
        },

        imgSelect(item) {
            this.selectImg = item
            this.mainImgDiv.img = './img/Artworks/' + item.fileName[0]
        },

        ArtworksDetailClick(val) {
            this.mainImgDiv.img = './img/Artworks/' + val
        }

    },

    data() {
        return {
            allData: '',
            imgData: reactive([]),
            classList: [],
            classListImg: [],
            selectClass: '',

            selectImg: reactive({}),
            imgList: [],
            mainImgDiv: reactive({ img: '' }),

            imgYear: reactive({ Max: '', Min: '' }),
            imgRange: '',

        }
    },
}
</script>

<style>
.simple-range-slider .simple-range-slider-popover[data-v-f6e84873] {
    padding: 0px !important;
    border-radius: 0px !important;
    box-shadow: none !important;
}

.fw-900 {
    font-weight: 900;
    /* font-size: 32px; */
}

.imgTilteFont {
    font-size: 19px;
}




@media (max-width : 600px) {
    .artworksCategory {
        width: 10px;
        height: 10px;
        display: none;
    }

    .imgTilteFont {
        font-size: 10px;
    }

    #nonMobile-Filter {
        display: none;
    }
}

@media (max-width : 1099px) {
    .artworksCategory {
        width: 150px;
        height: 150px;
    }

    .imgTilteFont {
        font-size: 14px;
    }

    .Artworks-Div-Bottom {
        margin-top: 50px;
    }

    #Mobile-Filter {
        display: none;
    }
}


@media (min-width : 1100px) {
    .artworksCategory {
        width: 300px;
        height: auto;
    }

    .imgFilter-Div {
        width: 400px;
        /* border: 1px solid #2c3e50; */
        margin-left: 10px;
    }

    .Artworks-Div-Bottom {
        margin-top: 50px;
    }

    #timePeriod {
        width: 100%;
    }

    #Mobile-Filter {
        display: none;
    }

    .selectImg>img {
        width: 70%;
        height: auto;
    }

    .singleMainImg {
        width: 100%;
        height: auto;
    }

    .thumbnail {
        z-index: 3;
        /* width: 230px; */
        margin-top: 0px;
        /* margin-left: 180px; */
    }

    .thumbnail-img {
        width: 170px;
        /* height: 100px; */
        margin-bottom: 10px;
    }

    .imgItem {
        /* position: absolute; */
        width: 140px;
        height: 140px;
        /* top: 50%;
        left: 50%; */
        /* transform: translate(-50%, -50%); */
        object-fit: cover;
    }


}
</style>
