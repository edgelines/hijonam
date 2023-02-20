<template>
    <div class="container">
        <div class="row selectImg d-flex justify-content-center">
            <!-- <img :src="'./img/Artworks/' + selectImg.fileName[0]" /> -->
            <!-- <img :src="mainImg" /> -->
        </div>
        <div class="row row-cols-2 mt-5">
            <div class="col text-start ArtworksDetail-Table">
                <h2 class="fw-900">{{ selectImg.imgTitle }}</h2>
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

            <div class="col">
                <div class="col-1 thumbnail">
                    <!-- <div class="row thumbnail-img mx-auto" v-for="(item, i) in selectImg.fileName" :key="item">
                        <img :src="'/img/Artworks/' + item" @click="ArtworksDetailClick(item)" />
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { reactive, ref } from "vue";
export default {
    components: {

    },

    props: {
        selectImg: Object,
        imgList: Array,
        ArtWorksImg: Object,
    },
    setup(props) {
        console.log(props.selectImg)
        // console.log(props.ArtWorksImg)
        // var mainImg = ref('/img/Artworks/' + props.selectImg.fileName[0])

        function ArtworksDetailClick(val) {
            mainImg.value = '/img/Artworks/' + val
        }

        return {
            // mainImg, ArtworksDetailClick
        }
    }
}
</script>

<style>
.fw-900 {
    font-weight: 900;
    /* font-size: 32px; */
}


/* 
    .ArtworksDetail-Table {
        width: 360px;
        margin-top: 90px;
        margin-left: 50px;
    }

    #ArtworksDetailHr {
        margin-top: 30px;
    } */
</style>