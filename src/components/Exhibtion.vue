<template>
    <div class="container">
        <div class="row">
            <div class="row mt-5">
                <Carousel :autoplay="3500" :wrap-around="true" :transition="7500" :itemsToShow="3" :modelValue="1">
                    <Slide v-for="(classItem, i) in classList" :key="classItem">
                        <div class="d-flex flex-column" @click="btnData(classItem)">
                            <div class="col">
                                <img class="col-sm-12 col-md-8 col-lg-8" :src="'/img/Exhibtions/' + classListImg[i]" />
                                <!-- <img style="width: 350px; height: 200px;" :src="'/img/Exhibtions/' + classListImg[i]" /> -->
                            </div>
                            <div class="row mt-1">
                                <div class="col fw-bolder">
                                    {{ classItem }}
                                </div>
                            </div>
                        </div>
                    </Slide>
                </Carousel>

                <!-- 
                <swiper :slidesPerView="3" :spaceBetween="30" :pagination="{
                    type: 'progressbar',
                }" :navigation="true" :modules="modules" :scrollbar="{
        hide: false,
    }" class="mySwiper">
                    <swiper-slide v-for="(classItem, i) in classList" :key="classItem">
                        <div class="divImgList text-center" @click="btnData(classItem)">
                            <img class="img-fluid" :src="'/img/Exhibtions/' + classListImg[i]" />
                            <span>
                                {{ classItem }}
                            </span>
    
                        </div>
                    </swiper-slide>
                </swiper> -->
            </div>
            <div class="row mt-5">
                <div class="col">
                    <h4 class="text-start mb-3">
                        {{ (imgData.length).toLocaleString('kr') }} : {{ selectClass }}
                    </h4>
                    <div class="row">
                        <div class="col-sm-12 col-md-3 col-lg-3 mb-4" v-for="item in imgData" :key="item">
                            <img class="divImgDetail img-fluid mb-2" :src="'/img/Exhibtions/' + item.fileName" />
                            <!-- <span> {{ item.imgTitle }} </span> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import axios from 'axios'
export default {
    components: { Carousel, Slide, },
    mounted() {
        this.loadData()
    },
    methods: {
        loadData() {
            axios.get("/json/data.json").then((response) => {
                var tmp = [], tmpImg = [];
                this.allData = response.data.filter(v => v.category == 'Exhibtions')
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
            this.classListImg.push(filter[0].fileName)
        },
        btnData(name) {
            const filter = this.allData.filter(v => v.class == name)
            this.imgData = filter;
            this.selectClass = name;

        },

    },
    data() {
        return {
            allData: [],
            imgData: [],
            classList: [],
            classListImg: [],
            selectClass: '',

        }
    },
    setup() {
        return {

        }
    }
}
</script>

<style>
.divImgDetail {
    width: 600px;
    height: 200px;
}
</style>
