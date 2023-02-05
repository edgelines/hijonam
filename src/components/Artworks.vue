<template>
    <div class="row">
        <!-- {{ imgData[0] }} -->
        <div class="row">
            <swiper ref="{swiperRef}" :slidesPerView="8" :centeredSlides="true" :spaceBetween="30" :pagination="{
                type: 'fraction',
            }" :navigation="true" :modules="modules" class="mySwiper">
                <swiper-slide v-for="(classItem, i) in classList" :key="classItem">
                    <button type="button" class="btn btn-light" @click="btnData(classItem)">
                        <img class="img-fluid mx-auto" :src="'/img/' + classItem + '/' + classListImg[i]" />
                        <span>
                            {{ classItem }}
                        </span>
                    </button>
                </swiper-slide>
            </swiper>
            <!-- <div class="col" v-for="(classItem, i) in classList" :key="classItem">
                <button type="button" class="btn btn-light" @click="btnData(classItem)">
                    <div class="mb-3 col-md-4">
                        <img class="img-fluid mx-auto" :src="'/img/' + classItem + '/' + classListImg[i]" />
                    </div>
                    <span>
                        {{ classItem }}
                    </span>
                </button>
            </div> -->
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
                    <div class="col-4 col-md-2 mb-4" v-for="item in imgData" :key="item">
                        <img class="img-fluid mb-2" :src="'/img/' + item.class + '/' + item.fileName" />
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
            this.classListImg.push(filter[1].fileName)
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
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper {
    width: 100%;
    height: 300px;
    margin: 20px auto;
}

.append-buttons {
    text-align: center;
    margin-top: 20px;
}

.append-buttons button {
    display: inline-block;
    cursor: pointer;
    border: 1px solid #007aff;
    color: #007aff;
    text-decoration: none;
    padding: 4px 10px;
    border-radius: 4px;
    margin: 0 10px;
    font-size: 13px;
}
</style>
