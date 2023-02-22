<template>
    <div class="row Bio-Div">

        <!-- <div class="col-sm-12 col-md-4 col-lg-3">
                <img :src="profileIMG" class="img-fluid" />
            </div> -->

        <div class="col-sm-12 col-md-4 col-lg-3 bioBtn">
            <div class="btn-group-vertical row-cols-auto" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-lg"
                    @click="btnData('Awards'); this.title = 'Awards & Professional Affiliations'">Awards</button>
                <button type="button" class="btn btn-lg"
                    @click="btnData('Published Articles'); this.title = 'Published Articles'">Published
                    Articles</button>
                <button type="button" class="btn btn-lg"
                    @click="btnData('Work Experiences'); this.title = 'Work Experiences'">Work
                    Experiences</button>
            </div>

        </div>
        <div class="col-sm-12 col-md-8 col-lg-8">
            <div class="row text-start" id="Bio-Table-MainTitle">
                <h3>{{ title }}</h3>
            </div>
            <DataTable :options="options" :columns="columns" :data="tableData" class="text-start customizeTable ">
                <thead>
                    <tr>
                        <th class="text-center Bio-Table-year">year</th>
                        <th class="text-center Bio-Table-title">title</th>
                        <th class="text-center Bio-Table-location">location</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </DataTable>
        </div>

    </div>
</template>

<script>

import axios from 'axios'
export default {

    mounted() {
        this.btnData('Awards')
    },
    methods: {
        btnData(data) {
            axios.get("/json/" + data + ".json").then((response) => {
                this.tableData = response.data
            })
        }
    },
    data() {
        return {
            // profileIMG: require('../assets/profile.jpg'),
            title: 'Awards',
            tableData: [],
            columns: [{ data: "year" }, { data: "title" }, { data: "location" }],
            options: {
                // columnDefs: [{ targets: [0], width: '50px' }, { targets: [1], width: '200px' }, { targets: [2], width: '100px' }],
                ordering: false,
                // lengthMenu: [5],
                lengthChange: false,
                searching: false,
                info: false,
                order: false,
                scrollY: '600px',
                scrollCollapse: true,
                paging: false,
                // autoWidth: true,
            },
        }
    }
}
</script>

<style>
.customizeTable {
    font-size: 18px;
}

.Bio-Table-year {
    font-size: 0px;
    width: 50px;
}

.Bio-Table-title {
    font-size: 0px;
    width: 200px;
}

.Bio-Table-location {
    font-size: 0px;
    width: 100px;
}

@media (max-width : 600px) {
    .bioBtn {
        font-size: 12px;
        margin-bottom: 20px;
    }

    .Bio-Div {
        margin-top: 20px;
    }
}


@media (min-width : 1100px) {
    #Bio-Table-MainTitle {
        margin-bottom: 50px;
    }

    .bioBtn {
        margin-top: 85px;
    }

    .Bio-Div {
        margin-top: 95px;
    }

}
</style>
