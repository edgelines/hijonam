<template>
    <RangeSlider v-model="imgRange" bar-color="#bebebe" :min="1980" :max="2020" :keep-just-significant-figures="false"
        @update:model-value="imgRange">
    </RangeSlider>

    <!-- <justified-grid class="container" v-bind:gap="gap" v-bind:defaultDirection="defaultDirection"
        v-bind:columnRange="columnRange" v-bind:rowRange="rowRange" v-bind:sizeRange="sizeRange"
        v-bind:isCroppedSize="isCroppedSize" v-bind:displayedRow="displayedRow">

        <div class="image" v-for="(item, index) in imgDataList" key="item">
            <img :src=item data-grid-content-offset="40" />
            <div class="title">Item {index}</div>
        </div>

    </justified-grid> -->
</template>
<script>
import RangeSlider from 'vue-simple-range-slider';
import 'vue-simple-range-slider/css';
import { JustifiedGrid } from "@egjs/vue-grid";
export default {
    data() {
        return {
            imgRange: [2000, 2200],
            gap: 10,
            defaultDirection: "end",
            columnRange: [1, 8],
            rowRange: 0,
            sizeRange: [200, 1000],
            isCroppedSize: false,
            displayedRow: -1,
            imgDataList: [
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
            ]
        }
    },
    components: {
        JustifiedGrid, RangeSlider
    },
};
</script>
<style>
html,
body {
    position: relative;
    height: 100%;
    padding: 0 !important;
    margin: 0 !important;
}

.container {
    overflow: hidden;
}

/* .item {
    position: absolute;
    width: 100px;
    color: white;
    text-align: center;
}

.item:nth-child(6n + 1) {
    background: #f55;
    height: 200px;
}

.item:nth-child(6n + 2) {
    background: #7e7;
    height: 300px;
}

.item:nth-child(6n + 3) {
    background: #66e;
    height: 200px;
}

.item:nth-child(6n + 4) {
    background: #4af;
    height: 100px;
}

.item:nth-child(6n + 5) {
    background: #ed5;
    height: 150px;
}

.item:nth-child(6n + 6) {
    background: #d5e;
    height: 130px;
} */
/* 
.image {
    position: relative;
    width: 100%;
    font-size: 0;
}

.image img {
    width: 100%;
} */

.title {
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
}

@media (prefers-color-scheme: dark) {
    .title {
        color: white;
    }
}

@media (prefers-color-scheme: light) {
    .title {
        color: black;
    }
}
</style>