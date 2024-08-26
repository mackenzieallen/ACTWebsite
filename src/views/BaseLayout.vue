<template>
    <TopBar v-if="showStepper" @openScoringPanel="openScoringPanel" />
    
    <Stepper v-if="showStepper" />
    
    <div>
        <h1 class="heading">{{ heading }}</h1>
    </div>

    <ScoringPanel 
        :isOpen="isScoringPanelOpen" 
        :totalScore="totalScore" 
        :casiATT="casiATT"
        :casiMMC="casiMMC"
        :casiORI="casiORI"
        :casiLTM="casiLTM"
        :casiSTM="casiSTM"
        :casiLANG="casiLANG"
        :casiDRAW="casiDRAW"
        :casiFLU="casiFLU"
        :casiATAJ="casiATAJ"
        @close="closeScoringPanel" 
    />
</template>

<script>
import ScoringPanel from '../components/ScoringPanel.vue';
import TopBar from '../components/TopBar.vue';
import Stepper from '../components/Stepper.vue';

export default {
    components: {
        ScoringPanel,
        TopBar,
        Stepper
    },
    props: {
        heading: {
            type: String,
            required: true
        },
        ...['totalScore', 'casiATT', 'casiMMC', 'casiORI', 'casiLTM', 'casiSTM', 'casiLANG', 'casiDRAW', 'casiFLU', 'casiATAJ'].reduce((acc, key) => {
            acc[key] = { type: Number, default: 0 };
            return acc;
        }, {})
    },
    data() {
        return {
            isScoringPanelOpen: false,
        };
    },
    computed: {
        showStepper() {
            return this.$route.path !== '/';
        }
    },
    methods: {
        openScoringPanel() {
            this.isScoringPanelOpen = true;
        },
        closeScoringPanel() {
            this.isScoringPanelOpen = false;
        }
    }
}
</script>

<style scoped>
.heading {
    font-weight: normal;
    font-size: 36px;
    text-align: left;
    margin-bottom: 30px;
    color: #237091;
}
.instructions {
    font-size: 20px;
    line-height: 1.5;
}
.arrow-buttons-container {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
}
</style>
