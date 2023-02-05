<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">
                <router-link class="nav-font" to="/">Hijo Nam</router-link>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
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
                        <router-link class="nav-font" to="/exhibtions">Exhibtions</router-link>
                    </a>
                    <a class="nav-link disabled">Portfolio</a>
                    <a class="nav-link disabled">News Press</a>
                    <a class="nav-link disabled">Pictures</a>
                    <a class="nav-link disabled">Contact</a>
                </div>
            </div>
        </div>
    </nav>
    <div class="container-xxl">
        <router-view />
    </div>
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

.nav-font {
    color: black !important;
    text-decoration: none !important;
}
</style>
