<template>

    <div class="row mt-5">
        <div class="col-4">
            <img :src="profileIMG" class="img-fluid" />
        </div>
        <div class="col-8">
            <div class="row">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-light" @click="btnData('Exhibitions')">Exhibitions</button>
                    <button type="button" class="btn btn-light" @click="btnData('Group-Exhibitions')">Selected And
                        Invitational Group Exhibitions</button>
                </div>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-light" @click="btnData('Awards')">Awards & Professional
                        Affiliations</button>
                </div>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-light" @click="btnData('Reviews')">Published Articles &
                        Reviews</button>
                    <button type="button" class="btn btn-light" @click="btnData('Carrer')">Published Articles &
                        Reviews</button>
                </div>
            </div>
            <div class="row mt-4">
                <DataTable :options="options" :columns="columns" :data="tableData" class="text-start customizeTable ">
                    <thead>
                        <tr>
                            <th class="text-center d-none">year</th>
                            <th class="text-center d-none">title</th>
                            <th class="text-center d-none">location</th>
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
        this.btnData('Exhibitions')
    },
    methods: {
        btnData(data) {
            axios.get("/json/" + data + ".json").then((response) => {
                // console.log(response.data);
                this.tableData = response.data
            })
        }
    },
    data() {
        return {
            profileIMG: require('../assets/profile.jpg'),
            tableData: [],
            columns: [
                // {
                //     data: "업종명", "render": function (data, type, row) {
                //         if (type == 'display') {
                //             if (data == 'Kospi') { var data = "코스피"; }
                //             if (data == 'Kosdaq') { var data = "코스닥"; }
                //             if (data == 'Kospi200') { var data = "<span style='color:greenyellow'>코스피200</span>"; }
                //         }
                //         return data;
                //     }
                // },
                { data: "year" },
                { data: "title" },
                { data: "location" }
            ],
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
