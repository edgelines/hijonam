import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue';
import Artist from './components/Artist.vue';
import Artworks from './components/Artworks.vue';
import Exhibtion from './components/Exhibtion.vue';
import Upcoming from './components/Upcoming.vue'
import Portfolio from './components/Portfolio.vue'
import News from './components/News.vue'
import Pictures from './components/Pictures.vue'
import Contact from './components/Contact.vue'

const routes = [
    { path: "/", component: Home, },
    { path: "/artist", component: Artist, },
    { path: "/artworks", component: Artworks, },
    { path: "/exhibtion", component: Exhibtion, },
    { path: "/upcoming", component: Upcoming, },
    { path: "/portfolio", component: Portfolio, },
    { path: "/news", component: News, },
    { path: "/pictures", component: Pictures, },
    { path: "/contact", component: Contact, },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 