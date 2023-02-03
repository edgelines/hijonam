<template>

    <div class="row mt-5">
        <div class="col-4">
            <img :src="profileIMG" class="img-fluid" />
        </div>
        <div class="col-8">
            <div class="row">
                <div class="btn-group row-cols-auto" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-light"
                        @click="btnData('Exhibitions'); this.title = 'Exhibitions'">Exhibitions</button>
                    <button type="button" class="btn btn-light"
                        @click="btnData('Group-Exhibitions'); this.title = 'Selected And Invitational Group Exhibitions'">Group
                        Exhibitions</button>
                    <button type="button" class="btn btn-light"
                        @click="btnData('Awards'); this.title = 'Awards & Professional Affiliations'">Awards</button>
                </div>
                <div class="btn-group row-cols-auto" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-light"
                        @click="btnData('Reviews'); this.title = 'Published Articles & Reviews'">Reviews</button>
                    <button type="button" class="btn btn-light"
                        @click="btnData('Carrer'); this.title = 'Published Articles & Reviews'">Published
                        Articles</button>

                </div>

            </div>
            <div class="row mt-4">
                <div>
                    <h3>{{ title }}</h3>
                </div>
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
                this.tableData = response.data
            })
        }
    },
    data() {
        return {
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
