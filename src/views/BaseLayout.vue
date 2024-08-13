<template>
    <div class="button-container">
        <button @click="openScoringPanel" class="open-panel">
            <i class="fas fa-bars fa-2x"></i>
        </button>
    </div>
    
    <!--     <div class="arrow-buttons-container">
        <ArrowButton arrowDirection="left" @clicked="handleLeftArrowClick" />
        <ArrowButton arrowDirection="right" @clicked="handleRightArrowClick" />
    </div> -->

    <div>
        <h1 class="heading">{{ heading }}</h1>
    </div>

    <ScoringPanel :isOpen="isScoringPanelOpen" @close="closeScoringPanel" />
</template>

<script>
// import ArrowButton from '@/components/ArrowButton.vue';
import ScoringPanel from '../components/ScoringPanel.vue';


export default {
    components: {
        //ArrowButton,
        ScoringPanel
    },
    props: {
        heading: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isScoringPanelOpen: false,
        };
    },
    methods: {
        handleLeftArrowClick() {
            console.log('Left arrow clicked');
        },
        handleRightArrowClick() {
            console.log('Right arrow clicked');
        },
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
    font-weight: bold;
    font-size: 36px;
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
    background: none;
    border: none;
    cursor: pointer;
}
.button-container {
    display: flex;
    justify-content: flex-end;
}
</style>