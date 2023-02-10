<template>

    <div class="row">
        <img class="img-fluid mb-2 " :src="'/img/' + Data.class + '/' + Data.fileName" />
        <span>
            {{ Data.imgTitle }}
        </span>
    </div>

    <!-- Img List -->


    <!-- <div class="row mt-4">
        
        <div class="row ">
            <div class="mb-4 col-6 col-md-4" :imgData="tmpData" v-for="(Item, i) in imgData" :key="Item"
                @click="$router.push('/artworks/' + i)">
                <div> -->
    <!-- // this.imgURL = '/img/' + item.class + '/' + item.fileName; this.imgID = i;"  -->
    <!-- <img class="img-fluid mb-2 " :src="'/img/' + Item.class + '/' + Item.fileName" /> -->
    <!-- <span> {{ Item.imgTitle }} </span>
                </div>
            </div>
        </div>

    </div> -->





</template>

<script>


export default {
    props: {
        Data: Object,
    },

    data() {
        return {
        }
    },
}
</script>

<style>

</style>
