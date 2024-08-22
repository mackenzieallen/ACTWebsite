<template>
    <div class="button-container">
        <button @click="openScoringPanel" class="open-panel">
            <i class="fas fa-bars fa bars"></i>
        </button>
    </div>

    <div>
        <h1 class="heading">{{ heading }}</h1>
    </div>

    <ScoringPanel :isOpen="isScoringPanelOpen" 
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


export default {
    components: {
        ScoringPanel
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
.open-panel {
    border: none;
    background: #237091;
    color: white;
    border-radius: 5px;
    width: 38px;
    height: 38px;
    cursor: pointer;
}
.bars {
    justify-content: center;
    display: flex;
}
.button-container {
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1000;
    padding: 20px;
}
</style>