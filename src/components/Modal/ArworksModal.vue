<template>
    <div class="container-sm">
        <div class="black-bg" v-if='모달창상태 == true'>
            <div div class="white-bg">
                <div class="row">
                    <div class="col">
                        <img :src="imgURL" id="imgData" />
                    </div>
                    <div class="col">
                        <table class="table table-sm tableCustom">
                            <thead>
                                <th id="제목">제목</th>
                                <th id="내용">내용</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="tbTitle">Title</td>
                                    <td class="tbContent">{{ imgData[imgID].imgTitle }}</td>
                                </tr>
                                <tr>
                                    <td class="tbTitle">Manufacturing</td>
                                    <td class="tbContent">{{ imgData[imgID].subject }}</td>
                                </tr>
                                <tr>
                                    <td class="tbTitle">Art Period</td>
                                    <td class="tbContent">{{ imgData[imgID].imgYear }}</td>
                                </tr>
                                <tr>
                                    <td class="tbTitle">Size</td>
                                    <td class="tbContent">{{ imgData[imgID]['imgSize-w'] }}mm * {{
                                        imgData[imgID]['imgSize-h']
                                    }}mm
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <button class="btn-close btn-closeCuston position-absolute top-0 end-0" aria-label="Close"
                    @click="$emit('closeModal')"> </button>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: "ImgModal",
    data() {
        return {

        }
    },
    props: {
        모달창상태: Boolean,
        imgID: Number,
        imgData: Array,
        imgURL: String,
    }
}
</script>

<style>
.black-bg {
    width: 80%;
    height: auto;
    background: rgb(0, 0, 0, 0.5);
    position: fixed;
    padding: 0.2em;
    z-index: 4;
}

.white-bg {
    width: 100%;
    background: white;
    border-radius: 8px;
    padding: 0.6em;
}

.tableCustom {
    margin-top: 4em;
    width: 80%;
}

.tbTitle {
    font-weight: 600;
    text-align: start;
    font-size: 22px;
    padding: 0.4em;
    width: 35%;
}


.btn-closeCuston {
    width: 3em !important;
    height: 3em !important;
}

.tbContent {
    text-align: start;
    font-size: 20px;
    width: 30%;
}

table th {
    display: none;
}

#imgData {
    width: 70%;
    height: auto;
}
</style>