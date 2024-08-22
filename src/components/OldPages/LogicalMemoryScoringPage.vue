<template>
    <ion-page>
        <BaseLayout>
        <h1>Logical Memory Scoring</h1>

        <v-tabs v-model="tab">
            <v-tab v-for="item in tabs" :key="item.value" :value="item.value">
                {{ item.label }}
            </v-tab>
        </v-tabs>

        <v-window v-model="tab" class="scroll-window">
            <v-window-item v-for="(item, index) in tabs" :key="index" :value="item.value">
            <component :is="item.component" :set="item.value"></component>
            </v-window-item>
        </v-window>
        </BaseLayout>
    </ion-page>
</template>

<script>
import BaseLayout  from './BaseLayout.vue'
import AnnaThompsonLogicalMemoryScoringTab from './AnnaThompsonLogicalMemoryScoringTab.vue'
import RobertMillerLogicalMemoryScoringTab from './RobertMillerLogicalMemoryScoringTab.vue'
import {  IonPage } from '@ionic/vue';
import { useRouter } from 'vue-router';

export default {
    components: {
        BaseLayout,
        AnnaThompsonLogicalMemoryScoringTab,
        RobertMillerLogicalMemoryScoringTab,
        IonPage
    },
    data() {
        return {
            tab: this.$route.params.set || 'a',
            tabs: [
                { label: 'Story A', value: 'a', component: AnnaThompsonLogicalMemoryScoringTab },
                { label: 'Story B', value: 'b', component: RobertMillerLogicalMemoryScoringTab }
            ]
        }
    },
    mounted() {
        let uri = window.location.pathname;
        let storyParam = uri.charAt(uri.length - 1);
        if (storyParam === 'a' || storyParam === 'b') {
            this.tab = storyParam;
        } else {
            this.tab = this.$route.params.set || 'a';
        }
        },
        watch: {
        tab(newValue) {
            this.$router.replace({ path: `/logical-memory/${newValue}` });
        },
    }
}
</script>

<style scoped>
.scroll-window {
    overflow-y: scroll !important;
    height: calc(100vh - 200px);
}
</style>