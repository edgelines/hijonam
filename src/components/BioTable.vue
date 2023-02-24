<template>
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
</template>

<script>
import axios from 'axios'
import { ref, onMounted } from 'vue'

export default {
    props: {
        title: String,
    },

    setup(props) {
        let title = props.title
        let tableData = ref([]);
        let columns = [{ data: "year" }, { data: "title" }, { data: "location" }];
        let options = {
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
        };


        onMounted(() => {
            axios.get("/json/" + title + ".json").then((response) => {
                tableData.value = response.data
            })
        })

        return {
            tableData, columns, options, title
        }
    },

}
</script>