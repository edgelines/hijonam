import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue';
import Artist from './components/Artist.vue';
import Artworks from './components/Artworks.vue';
import Exhibtions from './components/Exhibtions.vue';
// import FundarmentalSub3 from './components/Fundarmental/FundarmentalSub3.vue';

const routes = [
    { path: "/", component: Home, },
    { path: "/artist", component: Artist, },
    { path: "/artworks", component: Artworks, },
    { path: "/exhibtions", component: Exhibtions, },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 