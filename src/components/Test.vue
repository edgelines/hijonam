<template>

    <div class="range_container border">
        <form class="box border">
            <div class="sliders_control ">
                <input id="fromSlider" type="range" value="10" :min=imgRange.min :max=imgRange.max
                    @input="value = $event.target" />
                <input id="toSlider" type="range" value="30" :min=imgRange.min :max=imgRange.max />
            </div>
            <span> {{ imgRange }} </span>
            <span> {{ imgRange.value }}</span>
        </form>
        <div class="form_control">
            <div class="form_control_container">
                <div class="form_control_container__time">Min</div>
                <input class="form_control_container__time__input" type="number" id="fromInput" value="10" min="0"
                    max="100" />
            </div>
            <div class="form_control_container">
                <div class="form_control_container__time">Max</div>
                <input class="form_control_container__time__input" type="number" id="toInput" value="30" min="0"
                    max="100" />
            </div>
        </div>
        <div class="row">
            <form class="box border">
                <input v-for="(value, index) in values" :key="index" type="range" :min="min" :max="max" :value="value"
                    @input="updateValue(index, $event.target.value)" />

            </form>
        </div>
    </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation, Pagination } from 'swiper';
// import axios from 'axios'
import { reactive, defineComponent } from "vue";


export default {

    data() {
        return {
            min: 0,
            max: 100,
            values: [50, 75]
        }
    },
    methods: {
        updateValue(index, newValue) {
            this.values.splice(index, 1, newValue);
        }
    },
    props: {

    },
    setup(props) {



        return {
            imgRange: reactive({
                min: 0,
                max: 100,
                value: ''
            }),
            // modules: [Navigation, Pagination],
        }
    }
}
</script>
<!-- 
<style>
.range_container {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 100px auto;
}

.sliders_control {
    position: relative;
    min-height: 50px;
}

.form_control {
    position: relative;
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    color: #635a5a;
}


input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    pointer-events: all;
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px #C6C6C6;
    cursor: pointer;
}

input[type=range]::-moz-range-thumb {
    -webkit-appearance: none;
    pointer-events: all;
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px #C6C6C6;
    cursor: pointer;
}

input[type=range]::-webkit-slider-thumb:hover {
    background: #f7f7f7;
}

input[type=range]::-webkit-slider-thumb:active {
    box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
    -webkit-box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
}

input[type="number"] {
    color: #8a8383;
    width: 50px;
    height: 30px;
    font-size: 20px;
    border: none;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    opacity: 1;
}

input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    height: 2px;
    width: 80%;
    position: absolute;
    transform: translate(-120px, 20px);
    background-color: #C6C6C6;
    pointer-events: none;
}

#fromSlider {
    height: 0;
    z-index: 1;
}
</style> -->
