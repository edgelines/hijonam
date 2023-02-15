<template>
    <div class="container">
        <div class="row" id="cardList">
            <masonry-wall :items="show" :ssr-columns="1" :column-width="410" :gap="40">
                <template #default="{ item, index }">
                    <div class="border border-2 exCard" @click="$router.push('/pastexhibtion/' + index)">
                        <img class="img-fluid mb-3" :src="'/img/Exhibitions/' + item.fileName[0]" />
                        <div class="imgTilteFont text-start mb-1">{{ item.title }}</div>
                        <div class="imgTilteFont text-start">{{ item.period }}</div>
                        <div class="mt-3">View More</div>
                    </div>
                </template>
            </masonry-wall>

        </div>
    </div>

</template>

<script>

import axios from 'axios'
import { ref, reactive } from "vue";
export default {

    mounted() {
        this.loadData()
    },

    methods: {
        loadData() {
            axios.get("/json/Exhibition.json").then((response) => {
                var tmp = [];
                this.rawData = response.data
                this.rawData.forEach((value, index, array) => { tmp.push(value.subject); })
                const set = new Set(tmp)
                const newArr = [...set]
                this.전시리스트 = newArr

                newArr.forEach((value) => { this.mainImg(value) })

                this.show = this.exhibitionData
            })
        },
        mainImg(name) {
            const filter = this.rawData.filter(v => v.subject == name)
            var tmp = {
                title: filter[0].subject,
                period: filter[0].dayStart + ' ~ ' + filter[0].dayEnd,
                fileName: filter[0].fileName
            }
            this.exhibitionData.push(tmp);

        },

    },
    data() {
        return {
            rawData: [],

            전시리스트: [],
            exhibitionData: reactive([]),
            show: [],

        }
    },
    setup() {
        return {

        }
    }
}
</script>

<style>
#cardList {
    margin-top: 60px;
}

.exCard {
    padding: 20px;
}
</style>
