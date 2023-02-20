<template>
    <div class="row Artworks-Div-Bottom">
        <!-- Filter by -->
        <div class="col-12" id="Mobile-Filter">
            <div class="imgFilter-Div">
                <div class="row mb-2 text-center">Filter by</div>
                <div class="mt-4 text-start FilterTime-Div">Time Period</div>

                <div class="row">
                    <form class="box">
                        <!-- <RangeSlider v-model="imgRange" bar-color="#bebefe" :min="imgYear.Min" :max="imgYear.Max"
                                    :keep-just-significant-figures="false" id="timePeriod">
                                </RangeSlider> -->
                        <RangeSlider v-model="imgRange" bar-color="#bebebe" :min="imgYear.Min" :max="imgYear.Max"
                            :keep-just-significant-figures="false" @update:model-value="imgYearRange(selectClass)"
                            id="timePeriod">
                        </RangeSlider>
                    </form>
                </div>

                <div class="mt-4 text-start FilterTime-Div">Size</div>
                <div class="row mt-2">
                    <form class="box">
                        <input type="range" v-model="rangeImg.W" id="rangeWidth" :min="0" :max="imgSizeFixed.W"
                            @input="imgSizeRange(selectClass)" />
                        <input type="range" v-model="rangeImg.H" id="rangeHeight" :min="0" :max="imgSizeFixed.W"
                            @input="imgSizeRange(selectClass)" />
                        <div :style="{ width: (sizePeriodGuideW / 1.8) + '%', height: (sizePeriodGuideH * 1.94) + '%' }"
                            class="img-Box">
                        </div>
                    </form>
                </div>
                <div id="Size-Box">
                    <div class="row mt-3">
                        {{ rangeImg.W }}cm X {{ rangeImg.H }}cm
                    </div>
                    <div class="row">
                        {{ parseInt(rangeImg.W * 0.393701) }}inch X {{ parseInt(rangeImg.H * 0.393701) }}inch
                    </div>
                </div>
            </div>
        </div>
        <!-- Filter by -->
        <div class="col-md-2 col-lg-2 mt-5" id="nonMobile-Filter">
            <div class="imgFilter-Div">
                <div class="row mb-2 text-center">Filter by</div>
                <div class="mt-4 text-start FilterTime-Div">Time Period</div>

                <div class="row">
                    <form class="box">
                        <!-- <RangeSlider v-model="imgRange" bar-color="#bebefe" :min="imgYear.Min" :max="imgYear.Max"
                                    :keep-just-significant-figures="false" id="timePeriod">
                                </RangeSlider> -->
                        <RangeSlider v-model="imgRange" bar-color="#bebebe" :min="imgYear.Min" :max="imgYear.Max"
                            :keep-just-significant-figures="false" @update:model-value="imgYearRange(selectClass)"
                            id="timePeriod">
                        </RangeSlider>
                    </form>
                </div>

                <div class="mt-4 text-start FilterTime-Div">Size</div>
                <div class="row mt-2">
                    <form class="box">
                        <input type="range" v-model="rangeImg.W" id="rangeWidth" :min="0" :max="imgSizeFixed.W"
                            @input="imgSizeRange(selectClass)" />
                        <input type="range" v-model="rangeImg.H" id="rangeHeight" :min="0" :max="imgSizeFixed.W"
                            @input="imgSizeRange(selectClass)" />
                        <div :style="{ width: (sizePeriodGuideW / 1.8) + '%', height: (sizePeriodGuideH * 1.94) + '%' }"
                            class="img-Box">
                        </div>
                    </form>
                </div>
                <div id="Size-Box">
                    <div class="row mt-3">
                        {{ rangeImg.W }}cm X {{ rangeImg.H }}cm
                    </div>
                    <div class="row">
                        {{ parseInt(rangeImg.W * 0.393701) }}inch X {{ parseInt(rangeImg.H * 0.393701) }}inch
                    </div>
                </div>
            </div>
        </div>

        <!-- Img List -->
        <div class="sol-sm-12 col-md-10 col-lg-10">
            <div class="row">
                <h4 class="text-start mb-4">
                    {{ (imgData.length).toLocaleString('kr') }} {{ selectClass }} works
                </h4>
                <hr />
            </div>

            <div class="row mt-4">
                <!-- <div class="row d-flex align-items-end"> -->
                <div class="row">
                    <masonry-wall :items="imgList" :ssr-columns="1" :column-width="380" :gap="40">
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
<script setup>

</script>
<!-- <script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import RangeSlider from 'vue-simple-range-slider';
import 'vue-simple-range-slider/css';
import { ref, reactive, defineProps, defineComponent, computed } from "vue";
import MasonryWall from '@yeger/vue-masonry-wall'

const props = defineProps({ ArtWorksImg: Object, });

const allData = props.ArtWorksImg;


let imgData = reactive({
    Category: '',
    Show: computed(() => {
        let filter = imgData.Category
        filter = filter.filter(value => imgRange[0] <= value.imgYear &
            value.imgYear <= imgRange[1])

        filter = filter.filter(value =>
            rangeImg.W > value['imgSize-w'] &
            rangeImg.H > value['imgSize-h'])

    })
})

var selectClass = '';
let classList = reactive([]);
let classListImg = reactive([]);
let imgList = reactive([]);

let imgYear = reactive({ Max: '', Min: '' });
let imgRange = reactive([]);

let imgSizeFixed = reactive({ W: '', H: '' });
let imgSize = reactive({ W: '', H: '' });
let rangeImg = reactive({ W: '', H: '' });


var tmp = [];
allData.forEach((value, index, array) => { tmp.push(value.class); })
const set = new Set(tmp)
const newArr = [...set]
classList = newArr

newArr.forEach((value) => { mainImg(value) })
ArtworksBtnClass(classList[0]);


function ArtworksBtnClass(name) {
    imgData.Category = allData.filter(v => v.class == name);
    selectClass = name;
    var tmp = [], tmp1 = [], tmp2 = [], tmp3 = []
    imgData.Category.forEach((value) => {
        tmp.push(value.fileName);
        tmp1.push(value.imgYear);
        tmp2.push(value['imgSize-w']);
        tmp3.push(value['imgSize-h'])
    })
    imgList = tmp;
    var Max = Math.max(...tmp1)
    var Min = Math.min(...tmp1)
    if (Min == Max) {
        return Min = Max - 1
    }
    imgRange = [Min, Max]
    imgYear.Max = Max
    imgYear.Min = Min

    var Max = Math.max(...tmp2)
    imgSizeFixed.W = Max
    rangeImg.W = Max
    var Max = Math.max(...tmp3)
    imgSizeFixed.H = Max
    rangeImg.H = Max
}

function mainImg(name) {
    const filter = allData.filter(v => v.class == name)
    const last = filter.length;
    classListImg.push(filter[last - 1].fileName)
};
function sizePeriodGuideH() {
    return parseInt((rangeImg.H / imgSizeFixed.H) * 100)
};
function sizePeriodGuideW() {
    return parseInt((rangeImg.W / imgSizeFixed.W) * 100)
};
function imgYearRange(name) {
    var filter = allData.filter(value => value.class == name)
    filter = filter.filter(value => imgRange[0] <= value.imgYear &
        value.imgYear <= imgRange[1])

    filter = filter.filter(value =>
        rangeImg.W > value['imgSize-w'] &
        rangeImg.H > value['imgSize-h'])

    imgData = filter

    var tmp = []
    imgData.forEach((value) => {
        tmp.push(value.fileName)
    })
    imgList = tmp;
}; -->


<!-- 
</script>

<style>

</style> -->
