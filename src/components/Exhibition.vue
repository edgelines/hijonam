<template>
    <v-card class="mt-5">
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="title">
            <v-tab value="Past">Past Exhibition</v-tab>
            <v-tab value="Current">Current Exhibition</v-tab>
            <v-tab value="Upcoming">Upcoming Exhibition</v-tab>
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
<style></style>