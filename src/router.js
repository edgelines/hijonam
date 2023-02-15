import { createWebHistory, createRouter, createWebHashHistory } from "vue-router";
import Home from './components/Home.vue';
import Bio from './components/Bio.vue';
import Artworks from './components/Artworks.vue';
import ArworksDetail from "./components/ArworksDetail.vue";
import PastExhibition from './components/PastExhibition.vue';
import PastExhibitionDetail from './components/PastExhibitionDetail.vue';
import Upcoming from './components/Upcoming.vue'
import Portfolio from './components/Portfolio.vue'
import News from './components/News.vue'
import Pictures from './components/Pictures.vue'
import Contact from './components/Contact.vue'
import Test from './components/Test.vue'


const routes = [
    { path: "/", component: Home, },
    { path: "/bio", component: Bio, },
    { path: "/artworks", component: Artworks, },
    { path: "/artworks/:id(\\d+)", component: ArworksDetail, },

    { path: "/pastexhibtion", component: PastExhibition, },
    { path: "/pastexhibtion/:id(\\d+)", component: PastExhibitionDetail, },

    { path: "/upcoming", component: Upcoming, },
    { path: "/portfolio", component: Portfolio, },
    { path: "/news", component: News, },
    { path: "/pictures", component: Pictures, },
    { path: "/contact", component: Contact, },
    { path: "/test", component: Test, },
];

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes,
});

export default router; 