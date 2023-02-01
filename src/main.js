import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import DataTable from 'datatables.net-vue3'
import DataTablesLib from 'datatables.net';

import router from './router'
import jQuery from 'jquery'

const app = createApp(App);

global.$ = jQuery;
app.use($);
app.use(router);

DataTable.use(DataTablesLib);
app.component("DataTable", DataTable);

app.mount('#app')