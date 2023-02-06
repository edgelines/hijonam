<template>
    <div class="row">
        <ArworksModal @closeModal="모달창상태 = false;" :모달창상태="모달창상태" :imgURL="imgURL" :imgID="imgID" :imgData="imgData" />
        <div class="row mt-5">
            <swiper :slidesPerView="3" :spaceBetween="30" :pagination="{
                type: 'progressbar',
            }" :navigation="true" :modules="modules" class="mySwiper">
                <swiper-slide v-for="(classItem, i) in classList" :key="classItem">
                    <div class="divImgList text-center" @click="btnData(classItem)">
                        <img class="img-fluid" :src="'/img/' + classItem + '/' + classListImg[i]" />
                        <span>
                            {{ classItem }}
                        </span>
                    </div>
                </swiper-slide>
            </swiper>
        </div>


        <div class="row">
            <div class="col-3">
                <span class="row ms-3"> Filtered by </span>
                <label for="customRange2" class="form-label mt-4 text-start">Time Period</label>
                <div class="row">
                    <span class="col-2 text-start">{{ imgYearMinMax[0] }}</span>
                    <input type="range" class="col form-range" :min=imgYearMinMax[0] :max=imgYearMinMax[1]
                        id="customRange2" @input="imgYearRange($event, selectClass)">
                    <span class="col-2 text-end">{{ imgYearMinMax[1] }}</span>
                </div>
                <span class="col">{{ showImgYear }}</span>

            </div>

            <div class="col-9">
                <h4 class="text-start mb-3">
                    {{ (imgData.length).toLocaleString('kr') }} : {{ selectClass }}
                </h4>
                <div class="row">
                    <div class="col-6 col-md-3 mb-4" v-for="(item, i) in imgData" :key="item">
                        <div class="align-bottom"
                            @click="모달창상태 = true; this.imgURL = '/img/' + item.class + '/' + item.fileName; this.imgID = i;">
                            <img class="img-fluid mb-2 " :src="'/img/' + item.class + '/' + item.fileName" />
                            <span> {{ item.imgTitle }} </span>
                        </div>
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
import ArworksModal from './Modal/ArworksModal.vue';
export default {
    components: { Swiper, SwiperSlide, ArworksModal },
    mounted() { this.loadData() },
    methods: {
        loadData() {
            axios.get("/json/data.json").then((response) => {
                var tmp = [], tmpImg = [];
                this.allData = response.data.filter(v => v.category == 'Artworks')
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
            const last = filter.length;
            this.classListImg.push(filter[last - 1].fileName)
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
            this.imgData = this.allData.filter(value => value.class == name & value.imgYear <= val)
        },
    },
    data() {
        return {
            모달창상태: false,
            allData: [],
            imgData: [],
            classList: [],
            classListImg: [],
            selectClass: '',
            imgYearMinMax: [],
            showImgYear: '',
            imgID: '',
            imgURL: '',
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
.divImgList {
    width: 350px;
    height: 200px;

}

.divImgDetail {
    width: 350px;
    height: 200px;
}
</style>
