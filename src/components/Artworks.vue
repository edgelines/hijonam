<template>
    <div class="row mt-5">
        <!-- {{ imgData[0] }} -->
        <div class="row">
            <div class="col" v-for="classItem in classList" :key="classItem">
                <button type="button" class="btn btn-light" @click="btnData(classItem)">
                    <!-- <img class="img-fluid" :src="'/img/' + classItem + '/' + imgData.fileName" /> -->
                    {{ classItem }}
                </button>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-3">

                <span class="row ms-3"> Filtered by </span>
                <label for="customRange2" class="form-label mt-4 text-start">Time Period</label>
                <div class="row">
                    <div class="row">
                        <span class="col text-start">{{ imgYearMinMax[0] }}</span>
                        <span class="col text-end">{{ imgYearMinMax[1] }}</span>
                    </div>
                    <input type="range" class="form-range" :min=imgYearMinMax[0] :max=imgYearMinMax[1] id="customRange2"
                        @input="imgYearRange($event)">
                </div>

            </div>

            <div class="col-9">
                <h4 class="text-start mb-3">
                    {{ (imgData.length).toLocaleString('kr') }} : {{ selectClass }}
                </h4>
                <div class="row">
                    <div class="col-4 col-md-2" v-for="item in imgData" :key="item">
                        <img class="img-fluid" :src="'/img/' + item.class + '/' + item.fileName" />
                        {{ item.imgTitle }}
                    </div>
                </div>
            </div>

            <!-- <v-container>
                <v-row>
                    <v-col cols="12" v-for="count in 12" :key="12" align-self="center">
                        <v-card class="pa-3">hello</v-card>
                    </v-col>
                </v-row>
            </v-container> -->
        </div>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    components: {},
    mounted() {
        this.loadData()
        // this.btnData(Object.values(this.classList)[0])
    },
    methods: {
        loadData() {
            axios.get("/json/data.json").then((response) => {
                var tmp = [];
                this.allData = response.data
                response.data.forEach((value, index, array) => { tmp.push(value.class); })
                const set = new Set(tmp)
                const newArr = [...set]
                this.classList = newArr

                this.btnData(Object.values(this.classList)[0]);
            })
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
        imgYearRange(event) {
            console.log(event.target.value);
            const val = event.target.value;
            const len = this.imgData.length;

            for (let i = 0; i < len; i++) {
                this.imgData.filter(v => v.imgYear >= val)
            }
        },
    },
    data() {
        return {
            allData: [],
            imgData: [],
            classList: [],
            selectClass: '',
            imgYearMinMax: [],

            profileIMG: require('../assets/profile.jpg'),
            title: 'Exhibitions',
            tableData: [],
            columns: [{ data: "year" }, { data: "title" }, { data: "location" }],
            options: {
                // columnDefs: [{ targets: [3], width: "1%" }],
                ordering: false,
                lengthMenu: [5],
                lengthChange: false,
                searching: false,
                info: false,
                order: false,
                scrollY: '500px',
                scrollCollapse: true,
                paging: false,
                autoWidth: true,
            },
        }
    }
}
</script>

<style>

</style>
