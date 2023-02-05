<template>
    <div class="row">
        <div class="row mt-5">
            <swiper ref="{swiperRef}" :slidesPerView="8" :centeredSlides="true" :spaceBetween="30" :pagination="{
                type: 'fraction',
            }" :navigation="true" :modules="modules" class="mySwiper">
                <swiper-slide v-for="(classItem, i) in classList" :key="classItem">
                    <button type="button" class="btn btn-light" @click="btnData(classItem)">
                        <img class="img-fluid mx-auto" :src="'/img/Exhibtions/' + classListImg[i]" />
                        <span>
                            {{ classItem }}
                        </span>
                    </button>
                </swiper-slide>
            </swiper>
        </div>
        <div class="row">
            <div class="col">
                <h4 class="text-start mb-3">
                    {{ (imgData.length).toLocaleString('kr') }} : {{ selectClass }}
                </h4>
                <div class="row">
                    <div class="col-4 col-md-2 mb-4" v-for="item in imgData" :key="item">
                        <img class="img-fluid mb-2" :src="'/img/Exhibtions/' + item.fileName" />
                        <span> {{ item.imgTitle }} </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';
import axios from 'axios'
export default {
    components: { Swiper, SwiperSlide, },
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
            this.getMaxMin()
        },
        getMaxMin() {
            var tmp = []
            this.imgData.forEach((value) => { tmp.push(value.imgYear) })
            var Max = Math.max(...tmp)
            var Min = Math.min(...tmp)
            this.imgYearMinMax = [Min, Max]
        },
        imgYearRange(event, name) {
            const val = event.target.value;
            this.showImgYear = event.target.value;
            this.imgData = this.allData.filter(value => value.class == name & value.imgYear >= val)
        },
    },
    data() {
        return {
            allData: [],
            imgData: [],
            classList: [],
            classListImg: [],
            selectClass: '',
            imgYearMinMax: [],
            showImgYear: '',
        }
    },
    setup() {
        return {
            modules: [Navigation, Pagination],
        }
    }
}
</script>

<style>

</style>
