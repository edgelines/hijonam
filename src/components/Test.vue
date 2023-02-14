<template>
    <div class="col-1 border border-dark border-2">
        <form id="Box-Div">
            <div>
                <input type="range" class="range-vertical" v-model="firstValue" />
                <input type="range" v-model="secondValue" />
                <div :style="{ width: secondValue + 'px', height: firstValue + 'px' }" class="img-Box"></div>
            </div>
        </form>

    </div>
</template>

<script>
export default {
    data() {
        return {
            firstValue: 100,
            secondValue: 100
        }
    }
}
</script>

<style>

</style>
