<template>
    <div>
        <input type="range" :min="0" :max="2153" v-model="value" />
        <p>Value: {{ valuePercentage }}%</p>
        <div :style="{ width: valuePercentage + '%', height: valuePercentage + '%', background: 'red' }"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 2153
        }
    },
    computed: {
        valuePercentage() {
            return (this.value / 2153) * 100;
        }
    }
}
</script>