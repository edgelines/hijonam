<template>
    <div class="container">
        <div class="row row-cols-3 mt-5">

            <div class="col-sm-12 col-md-8 col-lg-8">
                <div class="row">
                    <div class="col-1 thumbnail">
                        <div class="row thumbnail-img mx-auto"
                            v-for="(item, i) in ArtWorksImg[$route.params.id].fileName" :key="item">
                            <img :src="'/img/Artworks/' + item" @click="ArtworksDetailClick(item)" />
                        </div>
                    </div>
                    <div class="col ArtworksDetail-MainImg">
                        <img id="imgData" :src="mainImg" />
                        <!-- <img id="imgData" :src="'/img/Artworks/' + ArtWorksImg[$route.params.id].fileName[0]" /> -->
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 text-start ArtworksDetail-Table">

                <h2 class="fw-900">{{ ArtWorksImg[$route.params.id].imgTitle }}</h2>

                <div class="mt-4"> {{ ArtWorksImg[$route.params.id].subject }} </div>

                <div class="mt-4">
                    Height : {{ parseInt(ArtWorksImg[$route.params.id]['imgSize-w'] * 0.393701) }} inches / {{
                        ArtWorksImg[$route.params.id]['imgSize-w']
                    }} cm
                </div>
                <div>
                    Width : {{ parseInt(ArtWorksImg[$route.params.id]['imgSize-h'] * 0.393701) }} inches / {{
                        ArtWorksImg[$route.params.id]['imgSize-h']
                    }} cm
                </div>

                <div class="mt-4 mb-4">
                    Executed {{ ArtWorksImg[$route.params.id].imgYear }}
                </div>
                <hr id="ArtworksDetailHr" />
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

    data() {
        return {
            mainImg: ''
        }
    },
    props: {
        ArtWorksImg: Object,
    },
    setup(props) {
        const route = useRoute()
        var mainImg = ref('/img/Artworks/' + props.ArtWorksImg[route.params.id].fileName[0])

        function ArtworksDetailClick(val) {
            mainImg.value = '/img/Artworks/' + val
        }

        return {
            mainImg, ArtworksDetailClick
        }
    }
}
</script>

<style>
.fw-900 {
    font-weight: 900;
    /* font-size: 32px; */
}

@media (max-width : 600px) {
    #imgData {
        width: 50%;
        height: auto;
    }

    .thumbnail {
        z-index: 3;
    }
}

@media (max-width : 1099px) {
    #imgData {
        width: 50%;
        height: auto;
    }

    .thumbnail {
        z-index: 3;
    }
}


@media (min-width : 1100px) {
    #imgData {
        width: 81%;
        height: auto;
        margin-left: 120px;
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

    .ArtworksDetail-Table {
        width: 360px;
        margin-top: 90px;
        margin-left: 50px;
    }

    #ArtworksDetailHr {
        margin-top: 30px;
    }

}
</style>