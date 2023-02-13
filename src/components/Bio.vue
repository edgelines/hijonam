<template>
    <div class="container">
        <div class="row mt-5">

            <h3>{{ title }}</h3>

        </div>
        <div class="row mt-5">
            <!-- <div class="col-sm-12 col-md-4 col-lg-3">
                <img :src="profileIMG" class="img-fluid" />
            </div> -->
            <div class="col-sm-12 col-md-4 col-lg-3">
                <div class="btn-group-vertical row-cols-auto" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-lg btn-outline-light customBtn"
                        @click="btnData('Solo Exhibitions'); this.title = 'Solo Exhibitions'">Solo Exhibitions</button>
                    <button type="button" class="btn btn-lg btn-outline-light customBtn"
                        @click="btnData('Group-Exhibitions'); this.title = 'Selected And Invitational Group Exhibitions'">Group
                        Exhibitions</button>
                    <button type="button" class="btn btn-lg btn-outline-light customBtn"
                        @click="btnData('Awards'); this.title = 'Awards & Professional Affiliations'">Awards</button>
                    <button type="button" class="btn btn-lg btn-outline-light customBtn"
                        @click="btnData('Published Articles'); this.title = 'Published Articles'">Published
                        Articles</button>
                    <button type="button" class="btn btn-lg btn-outline-light customBtn"
                        @click="btnData('Work Experiences'); this.title = 'Work Experiences'">Work
                        Experiences</button>
                </div>

            </div>
            <div class="col-sm-12 col-md-8 col-lg-9">

                <DataTable :options="options" :columns="columns" :data="tableData" class="text-start customizeTable ">
                    <thead>
                        <tr>
                            <th class="text-center d-none" style="width: 100px;">year</th>
                            <th class="text-center d-none" style="width: 500px;">title</th>
                            <th class="text-center d-none" style="width: 250px;">location</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </DataTable>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    components: {},
    mounted() {
        this.btnData('Solo Exhibitions')
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
            profileIMG: require('../assets/profile.jpg'),
            title: 'Solo Exhibitions',
            tableData: [],
            columns: [{ data: "year" }, { data: "title" }, { data: "location" }],
            options: {
                // columnDefs: [{ targets: [0], width: '50px' }],
                ordering: false,
                // lengthMenu: [5],
                lengthChange: false,
                searching: false,
                info: false,
                order: false,
                scrollY: '600px',
                scrollCollapse: true,
                paging: false,
                autoWidth: true,
            },
        }
    }
}
</script>

<style>
.customizeTable {
    font-size: 18px;
}

.customBtn {
    color: black;
    /* background-color: white !important; */
}
</style>
