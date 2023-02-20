<template>
    <justified-grid class="container" :gap="50" :defaultDirection="defaultDirection" :columnRange="[2, 5]" :rowRange="3"
        :sizeRange="[50, 8000]" :isCroppedSize="true" :displayedRow="-1" :preserveUIOnDestroy="true">

        <div class="image" data-grid-content-offset="100" v-for="(item, index) in imgData" key="item">
            <img :src="'./img/Artworks/' + item.fileName[0]" loading="lazy" />
            <!-- <div class="imgTilteFont text-start">{{ item.imgTitle }}</div> -->
        </div>

    </justified-grid>
</template>
<script>
import { JustifiedGrid } from "@egjs/vue-grid";
export default {
    props: {
        imgList: Object,
        imgData: Object,
    },
    data() {
        return {
            gap: 50,
            defaultDirection: "end",
            columnRange: [1, 5],
            rowRange: 0,
            sizeRange: [500, 3000],
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
        JustifiedGrid,
    },
};
</script>
<style>
.container {
    overflow: hidden;
}

.image {
    position: relative;
    width: 40%;
    font-size: 0;
}

.image img {
    width: 100%;
}

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