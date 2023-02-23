
<template>
    <div>
        <v-slider v-model="slider1" color="orange" label="color"></v-slider>

        <v-slider v-model="slider2" track-color="green" label="track-color"></v-slider>

        <v-slider v-model="slider3" thumb-color="purple" label="thumb-color"></v-slider>

        <v-slider v-model="value" :min="0" :max="1" :step="0.2" thumb-label></v-slider>
    </div>
    <v-card>
        <v-card-text>
            <v-range-slider v-model="value" strict></v-range-slider>
        </v-card-text>
    </v-card>

    <div>
        <input type="range" />
    </div>
</template>
<script>
export default {
    data: () => ({
        slider1: 0,
        slider2: 50,
        slider3: 100,
        value: [20, 40],
    }),
}
</script>
