<template>

    <div class="row mx-auto" id="PastExhibitionDetail">

        <masonry-wall :items="detailPage_img" :ssr-columns="1" :column-width="400" :gap="40">
            <template #default="{ item, index }">
                <div>
                    <img class="img-fluid" :src="'/img/Exhibitions/' + item" />
                </div>
            </template>
        </masonry-wall>
    </div>

</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { reactive, ref } from "vue";
export default {
    props: {
        Exhibition: Object,
    },
    setup(props) {
        const route = useRoute()
        const origin = props.Exhibition[route.params.id]
        let detailPage_img = origin.fileName

        return {
            detailPage_img
        }
    }

}
</script>

<style>
#PastExhibitionDetail {
    margin-top: 100px;
    width: 85%;
}
</style>
