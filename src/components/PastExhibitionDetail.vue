<template>
    <div class="mt-5">
        <h2>
            Past Exhibition Detail
        </h2>

        <h4 class="mt-5">
            On processing
        </h4>
        <div class="spinner-border" role="status">
        </div>
    </div>
</template>

<script>
// import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Pagination, Slide } from 'vue3-carousel'

// import axios from 'axios'
export default {
    // components: { Carousel, Slide, },
    // mounted() {
    //     this.loadData()
    // },
    // methods: {
    //     loadData() {
    //         axios.get("/json/data.json").then((response) => {
    //             var tmp = [], tmpImg = [];
    //             this.allData = response.data.filter(v => v.category == 'Exhibtions')
    //             this.allData.forEach((value, index, array) => { tmp.push(value.class); })
    //             const set = new Set(tmp)
    //             const newArr = [...set]
    //             this.classList = newArr

    //             newArr.forEach((value) => {
    //                 this.mainImg(value)
    //             })
    //             this.btnData(Object.values(this.classList)[0]);
    //         })
    //     },
    //     mainImg(name) {
    //         const filter = this.allData.filter(v => v.class == name)
    //         this.classListImg.push(filter[0].fileName)
    //     },
    //     btnData(name) {
    //         const filter = this.allData.filter(v => v.class == name)
    //         this.imgData = filter;
    //         this.selectClass = name;

    //     },

    // },
    // data() {
    //     return {
    //         allData: [],
    //         imgData: [],
    //         classList: [],
    //         classListImg: [],
    //         selectClass: '',

    //     }
    // },
    // setup() {
    //     return {

    //     }
    // }
}
</script>

<style>

</style>
