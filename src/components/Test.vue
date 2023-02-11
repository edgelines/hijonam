<template>
    <div class="col-6">
        <RangeSlider v-model="state.value" style="width: 100%" exponential :max="1000000000" bar-color="#bebffe"
            :min="100">
            <!-- <template #suffix>$</template> -->
        </RangeSlider>
        <RangeSlider v-model="value2" style="width: 100%" exponential :max="1000000000" bar-color="#bebffe" :min="100">
            <!-- <template #suffix>$</template> -->
        </RangeSlider>
    </div>
</template>

<script>
import RangeSlider from 'vue-simple-range-slider';
import 'vue-simple-range-slider/css';
import { reactive } from 'vue';

export default {
    name: 'App',
    components: {
        RangeSlider
    },
    methods: {

    },
    data() {
        return {
            value2: [2000, 5000],
        }
    },
    setup() {
        const state = reactive({
            value: [1000, 5000],
        });
        return {
            state,
        }
    },
    watch: {

    }

}
</script>
