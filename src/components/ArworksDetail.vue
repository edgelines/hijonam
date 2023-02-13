<template>
    <div class="container-fluid">

        <!-- <h3> {{ ArtWorksImg[$route.params.id] }}</h3> -->

        <div class="row mt-5">
            <div class="col-8 mt-3">
                <img id="imgData"
                    :src="'/img/' + ArtWorksImg[$route.params.id].class + '/' + ArtWorksImg[$route.params.id].fileName" />
            </div>
            <div class="col-3 text-start mt-3 ">

                <h2 class="fw-900">{{ ArtWorksImg[$route.params.id].imgTitle }}</h2>

                <div class="mt-4"> {{ ArtWorksImg[$route.params.id].subject }} </div>

                <div class="mt-4">
                    Height : {{ parseInt(ArtWorksImg[$route.params.id]['imgSize-w'] * 0.393701) }} inches / {{
                        ArtWorksImg[$route.params.id]['imgSize-w'] * 10
                    }} cm
                </div>
                <div>
                    Width : {{ parseInt(ArtWorksImg[$route.params.id]['imgSize-h'] * 0.393701) }} inches / {{
                        ArtWorksImg[$route.params.id]['imgSize-h'] * 10
                    }} cm
                </div>

                <div class="mt-4 mb-5">
                    Executed {{ ArtWorksImg[$route.params.id].imgYear }}
                </div>
                <hr />
            </div>
        </div>

    </div>

</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        ArtWorksImg: Object,
    },
    setup(props) {

        return {}
    }
}
</script>

<style>
.fw-900 {
    font-weight: 900;
}

#imgData {
    width: 50%;
    height: auto;
}
</style>