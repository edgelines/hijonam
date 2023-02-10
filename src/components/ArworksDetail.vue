<template>
    <div class="container">

        <!-- <h3> {{ ArtWorksImg[$route.params.id] }}</h3> -->

        <div class="row mt-5">
            <div class="col-5">
                <img id="imgData"
                    :src="'/img/' + ArtWorksImg[$route.params.id].class + '/' + ArtWorksImg[$route.params.id].fileName" />
            </div>
            <div class="col-7">
                <table class="table table-sm tableCustom">
                    <thead>
                        <th id="제목">제목</th>
                        <th id="내용">내용</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="tbTitle">Title</td>
                            <td class="tbContent">{{ ArtWorksImg[$route.params.id].imgTitle }}</td>
                        </tr>
                        <tr>
                            <td class="tbTitle">Manufacturing</td>
                            <td class="tbContent">{{ ArtWorksImg[$route.params.id].subject }}</td>
                        </tr>
                        <tr>
                            <td class="tbTitle">Art Period</td>
                            <td class="tbContent">{{ ArtWorksImg[$route.params.id].imgYear }}</td>
                        </tr>
                        <tr>
                            <td class="tbTitle">Size</td>
                            <td class="tbContent">{{ ArtWorksImg[$route.params.id]['imgSize-w'] }}mm * {{
                                ArtWorksImg[$route.params.id]['imgSize-h']
                            }}mm
                            </td>
                        </tr>
                    </tbody>
                </table>
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