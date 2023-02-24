<template>
    <v-card class="ExhibitionMain">
        <v-tabs v-model="tab" color="black" align-tabs="title">
            <v-tab value="Past"><span class="customizeTabs">Past Exhibition</span></v-tab>
            <v-tab value="Current"><span class="customizeTabs">Current Exhibition</span></v-tab>
            <v-tab value="Upcoming"><span class="customizeTabs">Upcoming Exhibition</span></v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item value="Past">
                <v-container fluid>
                    <Past />
                </v-container>
            </v-window-item>
            <v-window-item value="Current">
                <v-container fluid>

                    <Current />

                </v-container>
            </v-window-item>
            <v-window-item value="Upcoming">
                <v-container fluid>
                    <Upcoming />

                </v-container>
            </v-window-item>

        </v-window>
    </v-card>
</template>
<script>
import Past from './Exhibition/PastExhibition.vue'
import Current from './Exhibition/Current.vue'
import Upcoming from './Exhibition/Upcoming.vue'
export default {
    data() {
        return {
            tab: null,

        }
    },
    components: { Past, Current, Upcoming },
};
</script>
<style>
.ExhibitionMain {
    margin-top: 80px;
}

.customizeTabs {
    font-size: 15px;
}
</style>