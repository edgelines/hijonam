import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import DataTable from 'datatables.net-vue3'
import DataTablesLib from 'datatables.net';

import router from './router'
import jQuery from 'jquery'
import MasonryWall from '@yeger/vue-masonry-wall'
import * as uiv from 'uiv'


// import VueMasonry from 'vue-masonry-css'
import VueFlux from 'vue-flux'

const app = createApp(App);

global.$ = jQuery;
app.use($);
app.use(router);
app.use(VueFlux);
app.use(uiv)
// app.use(VueMasonry);
app.use(MasonryWall)

DataTable.use(DataTablesLib);
app.component("DataTable", DataTable);

app.mount('#app')