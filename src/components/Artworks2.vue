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
        <!-- Img List -->
        <div class="col">
            <div class="row">
                <h4 class="text-start mb-4">
                    {{ (imgData.length).toLocaleString('kr') }} {{ selectClass }} works
                </h4>
                <hr />
            </div>

            <div class="test row">
                <!-- <div class="col-sm-12 col-md-6 col-lg-4 image-test" v-for="(item, index) in imgData" key="item">
                                                        <img :src="'./img/Artworks/' + item.fileName[0]" />
                                                        <div class="imgTilteFont">{{ item.imgTitle }}</div>
                                                    </div> -->


                <JustifiedGrid class="container" v-bind:gap="gap" v-bind:defaultDirection="defaultDirection"
                    v-bind:columnRange="columnRange" v-bind:rowRange="rowRange" v-bind:sizeRange="sizeRange"
                    v-bind:isCroppedSize="isCroppedSize" v-bind:displayedRow="displayedRow">
                    <div class="image" v-for="(item, index) in Painting" key="item">
                        <img class="image" :src="'./img/Artworks/' + item.fileName[0]" data-grid-content-offset="40" />
                        <div class="imgTilteFont text-start">{{ item.imgTitle }}</div>
                    </div>

                </JustifiedGrid>

                {{ Painting }}
                <!-- <JustifiedGrid class="container" v-bind:gap="gap" v-bind:defaultDirection="defaultDirection"
                                v-bind:columnRange="columnRange" v-bind:rowRange="rowRange" v-bind:sizeRange="sizeRange"
                                v-bind:isCroppedSize="isCroppedSize" v-bind:displayedRow="displayedRow">
                                <div class="image" v-for="(item, index) in testImgList" key="item">
                                    <img class="image" :src="item" data-grid-content-offset="40" />
                                    <div class="imgTilteFont text-start">{{ item.imgTitle }}</div>
                                </div>
                            </JustifiedGrid> -->

            </div>


        </div>

    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import '../assets/style.css'
import RangeSlider from 'vue-simple-range-slider';
import 'vue-simple-range-slider/css';
import { ref, reactive, defineComponent } from "vue";
import MasonryWall from '@yeger/vue-masonry-wall'
import { MasonryGrid, JustifiedGrid, FrameGrid, packingGrid } from '@egjs/vue-grid'
export default {
    components: {
        // Swiper, SwiperSlide,
        MasonryWall,
        RangeSlider,
        Carousel, Slide,
        JustifiedGrid,
        // MasonryGrid,
        // ArtworksImgList
    },
    props: {
        ArtWorksImg: Object,
    },

    mounted(props) { this.loadData(); },
    computed: {
        sizePeriodGuideH() {
            return parseInt((this.rangeImg.H / this.imgSizeFixed.H) * 100)
        },
        sizePeriodGuideW() {
            return parseInt((this.rangeImg.W / this.imgSizeFixed.W) * 100)
        },
    },
    methods: {
        loadData() {

            var tmp = [];
            this.allData = this.ArtWorksImg
            this.allData.forEach((value, index, array) => { tmp.push(value.class); })
            const set = new Set(tmp)
            const newArr = [...set]
            this.classList = newArr
            newArr.forEach((value) => { this.mainImg(value) })
            this.btnData(Object.values(this.classList)[0]);

            var Painting = [], Patina = [], Faabric = [], Hanji = [], Ottchil = [], Installation = []
            var Painting = this.allData.filter(v => v.class == 'Painting')
            this.Painting = Painting;

        },
        mainImg(name) {
            const filter = this.allData.filter(v => v.class == name)
            const last = filter.length;
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
            var tmp = [], tmp2 = [], tmp3 = []
            this.imgData.forEach((value) => { tmp.push(value.imgYear); tmp2.push(value['imgSize-w']); tmp3.push(value['imgSize-h']) })
            var Max = Math.max(...tmp)
            var Min = Math.min(...tmp)
            if (Min == Max) {
                return Min = Max - 1
            }
            this.imgRange = [Min, Max]
            this.imgYear.Min = Min
            this.imgYear.Max = Max

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

            filter = filter.filter(value =>
                this.rangeImg.W > value['imgSize-w'] &
                this.rangeImg.H > value['imgSize-h'])

            this.imgData = filter

            var tmp = []
            this.imgData.forEach((value) => {
                tmp.push(value.fileName)
            })
            this.imgList = tmp;
        },

        imgSizeRange(name) {
            var filter = this.allData.filter(value => value.class == name)
            filter = filter.filter(value => this.imgRange[0] <= value.imgYear &
                value.imgYear <= this.imgRange[1])
            filter = filter.filter(value =>
                this.rangeImg.W > value['imgSize-w'] &
                this.rangeImg.H > value['imgSize-h'])

            this.imgData = filter

            var tmp = []
            this.imgData.forEach((value) => {
                tmp.push(value.fileName)
            })
            this.imgList = tmp;
        }
    },

    data() {
        return {
            allData: '',
            imgData: reactive([]),
            classList: [],
            classListImg: [],
            selectClass: '',

            imgList: [],

            imgYear: reactive({ Max: '', Min: '' }),
            imgRange: '',

            imgSizeFixed: reactive({ W: '', H: '' }),
            imgSize: reactive({ W: '', H: '' }),
            rangeImg: reactive({ W: '', H: '' }),

            gap: 10,
            defaultDirection: "end",
            columnRange: [2, 6],
            rowRange: 0,
            sizeRange: [200, 3000],
            isCroppedSize: false,
            displayedRow: -1,
            testImgList: [
                'https://naver.github.io/egjs-infinitegrid/assets/image/1.jpg',
                'https://naver.github.io/egjs-infinitegrid/assets/image/2.jpg',
                'https://naver.github.io/egjs-infinitegrid/assets/image/3.jpg',
                'https://naver.github.io/egjs-infinitegrid/assets/image/4.jpg',
                'https://naver.github.io/egjs-infinitegrid/assets/image/5.jpg',
                'https://naver.github.io/egjs-infinitegrid/assets/image/6.jpg',
                'https://naver.github.io/egjs-infinitegrid/assets/image/7.jpg',
                'https://naver.github.io/egjs-infinitegrid/assets/image/8.jpg',
                'https://naver.github.io/egjs-infinitegrid/assets/image/9.jpg',
                'https://naver.github.io/egjs-infinitegrid/assets/image/10.jpg',
            ],
            Painting: ref([]),
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

.test .container {
    overflow: hidden;
}


.image {
    position: relative;
    width: 100%;
    font-size: 0;
}

.image img {
    width: 100%;
}

.image-test {
    position: relative;
    width: 450px;
    height: 500px;
    font-size: 0;
}

.image-test img {
    width: 70%;
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
        margin-left: 90px;
    }

    .FilterTime-Div {
        margin-left: -14px;
    }

    .Artworks-Div-Bottom {
        margin-top: 90px;
    }

    #Mobile-Filter {
        display: none;
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

        /* opacity: .5;
        cursor: pointer;
        user-select: none;
        border-radius: 8px;
        box-shadow: 0 0 3px 3px #6f84be */
    }

    #rangeHeight {
        position: relative;
        left: -105px;
        top: 57px;
        transform: rotate(90deg);
        width: 100px;
    }

    #Size-Box {
        position: relative;
        top: 90px;
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
