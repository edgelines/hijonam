<template>
    <div id="Contact">
        <h3 id="title" class="mb-5">
            For all inquiries, please contact by region below
        </h3>

        <div id="email" class="col-6 text-start">
            <div class="row">
                <div class="col-2 font">U.S</div>
                <div class="col font">hijonamart@gmail.com</div>
            </div>
            <div class="row">
                <div class="col-2 font">Europe</div>
                <div class="col font">minatavsan@gmail.com</div>
            </div>
            <div class="row">
                <div class="col-2 font">Korea</div>
                <div class="col font">spacetailor83@gmail.com</div>
            </div>
        </div>
        <!-- <table id="email" class="table table-hover table-borderless">
            <thead>
                <tr>
                    <td class="col-2" id="Table-Region"></td>
                    <td class="col-9" id="Table-email"></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>U.S</td>
                    <td>hijonamart@gmail.com</td>
                </tr>
                <tr>
                    <td>Europe</td>
                    <td>minatavsan@gmail.com</td>
                </tr>
                <tr>
                    <td>Korea</td>
                    <td>spacetailor83@gmail.com</td>
                </tr>
            </tbody>
        </table> -->
    </div>

    <footer class="border-top p-5 footerfont fixed-bottom text-start">
        The content of this site is for personal use only. Neither text nor images may be reproduced in any form without the
        permission. <br />You may download content solely for your personal use for non-commercial purposes. You may not
        modify or
        further reproduce the content for any purpose whatsoever.<br /> You must request and obtain express permission from
        HijoNam Studio for all other uses of content.
    </footer>
</template>

<script>

export default {


    data() {
        return {

        }
    },
    setup() {
        return {

        }
    }
}
</script>

<style>
#Contact {
    margin-left: 170px;
    position: relative;
    top: 150px;

}

#Contact>div>div>.font {
    font-size: 22px;
}

#Contact>#title {
    /* position: relative;
    left: 100px; */
    text-align: justify;

}

#Contact>#email {
    margin-top: 100px;
    /* position: relative;
    left: 100px;
    top: 50px; */
}

#email>div {
    margin-bottom: 40px;
}

footer {
    width: 100%;
    height: auto;
}

.footerfont {
    font-size: 22px;
}

/* #Contact>table>tbody>tr>td {
    margin-bottom: 100px;
} */
</style>
