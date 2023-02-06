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
                        <a class="nav-link active">
                            <router-link class="nav-font" to="/artist">Artist</router-link>
                        </a>
                        <a class="nav-link">
                            <router-link class="nav-font" to="/artworks">Artworks</router-link>
                        </a>
                        <a class="nav-link">
                            <router-link class="nav-font" to="/exhibtion">Exhibtion</router-link>
                        </a>
                        <a class="nav-link disabled">Portfolio</a>
                        <a class="nav-link disabled">News Press</a>
                        <a class="nav-link disabled">Pictures</a>
                        <a class="nav-link disabled">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <div id="wrapper">
        <div class="container-xxl">
            <router-view />
        </div>
    </div>
    <footer class="bg-light">
        footer sectors <br />
        instagram, kakao, facebook, youtube
    </footer>
</template>

<script>

export default {
    name: 'App',
    components: {}
}
</script>

<style>
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

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper {
    width: 100%;
    height: 300px;
    margin: 20px auto;
}

.append-buttons {
    text-align: center;
    margin-top: 20px;
}

.append-buttons button {
    display: inline-block;
    cursor: pointer;
    border: 1px solid #007aff;
    color: #007aff;
    text-decoration: none;
    padding: 4px 10px;
    border-radius: 4px;
    margin: 0 10px;
    font-size: 13px;
}
</style>
