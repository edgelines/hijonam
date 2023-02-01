<template>
    <div class="row mt-5">
        <div class="row">
            <div class="col" v-for="classItem in classList" :key="classItem">
                <button type="button" class="btn btn-light">
                    <img class="img-fluid" :src="'/img/' + classItem + '/' + imgData.fileName" />
                    {{ item }}
                </button>
            </div>
        </div>
        Artworks Page
        <div class="row">
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
    mounted() {
        this.loadData()
    },
    methods: {
        loadData() {
            axios.get("/json/data.json").then((response) => {
                var tmp = []
                this.imgData = response.data
                response.data.forEach((value, index, array) => {
                    tmp.push(value.class);
                })
                const set = new Set(tmp)
                const newArr = [...set]
                this.classList = newArr
            })
        }
    },
    data() {
        return {
            imgData: [],
            classList: [],

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
