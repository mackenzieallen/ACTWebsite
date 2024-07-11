<template>
    <div class="arrow-buttons-container">
      <ArrowButton arrowDirection="left" @clicked="handleLeftArrowClick" />
      <ArrowButton arrowDirection="right" @clicked="handleRightArrowClick" />
    </div>

    <div>   
        <button @click="togglePanel">Open Panel</button>
        <ScoringPanel ref="panel"></ScoringPanel>
    </div>

    <div>
        <h1 class="heading">{{ heading }}</h1>
    </div>
</template>

<script>
import ArrowButton from '@/components/ArrowButton.vue';
import ScoringPanel from '@/components/ScoringPanel.vue';

export default {
    components: {
        ArrowButton,
        ScoringPanel
    },
    props: {
        heading: {
            type: String,
            required: true
        }
    },
    methods: {
        handleLeftArrowClick() {
            console.log('Left arrow clicked');
        },
        handleRightArrowClick() {
            console.log('Right arrow clicked');
        },
        togglePanel() {
            this.$refs.panel.openPanel();
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
</style>