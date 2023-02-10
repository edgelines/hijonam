<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">
                    <router-link class="nav-font" to="/">Hijo Nam</router-link>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active ms-4">
                            <router-link class="nav-font" to="/artist">BIO</router-link>
                        </a>
                        <a class="nav-link ms-4">
                            <router-link class="nav-font" to="/artworks">ARTWORKS</router-link>
                        </a>
                        <li class="nav-item dropdown ms-4">
                            <a class="nav-font nav-link dropdown-toggle" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                EXHIBITION
                            </a>
                            <ul class="dropdown-menu">
                                <a class="dropdown-item">
                                    <router-link class="nav-font" to="/exhibtion">Past Exhibition</router-link>
                                </a>
                                <a class="dropdown-item">
                                    <router-link class="nav-font" to="/upcoming">Upcoming Exhibition</router-link>
                                </a>
                            </ul>
                        </li>
                        <a class="nav-link ms-4">
                            <router-link class="nav-font" to="/portfolio">PORTFOLIO</router-link>
                        </a>
                        <!-- <a class="nav-link ms-4">
                            <router-link class="nav-font" to="/News">News Press</router-link>
                        </a>
                        <a class="nav-link ms-4">
                            <router-link class="nav-font" to="/pictures">Pictures</router-link>
                        </a>
                        <a class="nav-link ms-4">
                            <router-link class="nav-font" to="/contact">Contact</router-link>

                        </a> -->
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <div id="wrapper">
        <div class="container-fluid">
            <router-view :ArtWorksImg="ArtWorksImg" />
        </div>
    </div>
    <footer class="bg-light">
        footer <br />
        instagram, kakao, facebook, youtube
    </footer>
</template>

<script>
import axios from 'axios'
import { reactive, ref } from "vue";
export default {
    name: 'App',
    components: {},

    mounted() {
        axios.get("/json/data.json").then((response) => {
            this.ArtWorksImg = response.data

        })
    },
    data() {
        return {
            ArtWorksImg: [],

        }
    }
}
</script>

<style>
/* @import '../node_modules/bootstrap/scss/bootstrap'; */

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

html,
body {
    height: 100%;
}

#wrapper {
    height: auto;
    min-height: 100%;
    padding-bottom: 40px;
}

footer {
    bottom: 0;
    /* height: 5%;
    position: relative;
    transform: translateY(-100%); */
}

.nav-font {
    color: black !important;
    text-decoration: none !important;
}

/* $container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
  xxl: 1320px
); */
</style>
