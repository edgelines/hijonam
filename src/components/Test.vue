<template>
    <div class="col-6">
        <RangeSlider v-model="state.value" style="width: 100%" :max="1000" bar-color="#bebffe" :min="1000">
            <!-- <template #suffix>$</template> -->
        </RangeSlider>
        <RangeSlider v-model="value2" style="width: 100%" :max="2000" bar-color="#bebffe" :min="1000">
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
            value2: [1000, 1000],
        }
    },
    setup() {
        const state = reactive({
            value: [1000, 1100],
        });
        return {
            state,
        }
    },
    watch: {

    }

}
</script>
