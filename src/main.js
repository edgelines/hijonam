import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './assets/scss/button.scss'

import DataTable from 'datatables.net-vue3'
import DataTablesLib from 'datatables.net';

import router from './router'
import jQuery from 'jquery'
import MasonryWall from '@yeger/vue-masonry-wall'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// import './main.scss'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import { aliases, fa } from 'vuetify/iconsets/fa'
// import { mdi } from 'vuetify/iconsets/mdi'


const app = createApp(App);

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi'
    },
})

global.$ = jQuery;
app.use($);
app.use(router);
app.use(vuetify)
app.use(MasonryWall)

DataTable.use(DataTablesLib);
app.component("DataTable", DataTable);
// app.component('VueSlider', VueSlider)
app.mount('#app')