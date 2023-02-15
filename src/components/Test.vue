<template>

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
