<template>
    <div class="row Bio-Div">
        <div class="col-sm-12 col-md-4 col-lg-3 bioBtn">
            <div id="ExhibitionBtnGroup" class="btn-group-vertical row-cols-auto" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-lg"
                    @click="btnData('Solo Exhibitions'); this.title = 'Solo Exhibitions'">Solo</button>
                <button type="button" class="btn btn-lg"
                    @click="btnData('Group-Exhibitions'); this.title = 'Selected And Invitational Group Exhibitions'">Group
                </button>
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
            title: 'Solo Exhibitions',
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
@media (min-width : 1100px) {
    #ExhibitionBtnGroup {
        margin-top: 0px;
    }

    .btn-bd-primary {
        --bs-btn-font-weight: 600;
        --bs-btn-color: var(--bs-white);
        --bs-btn-bg: var(--bd-violet);
        --bs-btn-border-color: var(--bd-violet);
        --bs-btn-border-radius: .5rem;
        --bs-btn-hover-color: var(--bs-white);
        --bs-btn-hover-bg: #{shade-color($bd-violet, 10%)};
        --bs-btn-hover-border-color: #{shade-color($bd-violet, 10%)};
        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
        --bs-btn-active-color: var(--bs-btn-hover-color);
        --bs-btn-active-bg: #{shade-color($bd-violet, 20%)};
        --bs-btn-active-border-color: #{shade-color($bd-violet, 20%)};
    }

}
</style>
