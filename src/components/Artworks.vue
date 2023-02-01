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
            <div class="col-2" v-for="item in imgData" :key="item">
                <img class="img-fluid" :src="'/img/' + item.class + '/' + item.fileName" />
                {{ item.class }}
                {{ item.fileName }}
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    components: {},
    created() {
        this.loadData()
        console.log('created')
    },
    mounted() {
        console.log('mounted')
        this.btnData(Object.values(this.classList)[0])
    },
    methods: {
        loadData() {
            axios.get("/json/data.json").then((response) => {
                var tmp = [], mainImg = [];
                this.allData = response.data
                response.data.forEach((value, index, array) => {
                    tmp.push(value.class);
                })
                const set = new Set(tmp)
                const newArr = [...set]
                this.classList = newArr
                console.log(Object.values(this.classList)[0])
                console.log(this.allData)

                const filter = this.allData.filter(v => v.class == Object.values(this.classList)[0])
                this.imgData = filter;
                // console.log(this.imgData[0].fileName)
            })
        },
        btnData(name) {
            console.log(this.allData)
            const filter = this.allData.filter(v => v.class == name)
            this.imgData = filter;
            console.log('btn Start')
            console.log(filter)
        }
    },
    data() {
        return {
            allData: [],
            imgData: [],
            classList: [],
            // 첫데이터: classList[0],
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
