<template>
    <div class="container"> 
        <div class="green-line"></div>

        <div class="box-container">
            <div class="progress-container">
                <span class="progress-text">Home</span>
                <StepperProgress class="progress" currentState="completed" />
            </div>
            <div class="progress-container">
                <span class="progress-text">Anna</span>
                <StepperProgress class="progress" currentState="completed" />
            </div>
            <div class="progress-container">
                <span class="progress-text">Robert</span>
                <StepperProgress class="progress" currentState="visited" />
            </div>
            <div class="progress-container">
                <span class="progress-text">CASI</span>
                <StepperProgress class="progress" currentState="unvisited" />
            </div>
            <div class="progress-container">
                <span class="progress-text">Interview</span>
                <StepperProgress class="progress" currentState="unvisited" />
            </div>
            <div class="progress-container">
                <span class="progress-text">Transcription</span>
                <StepperProgress class="progress" currentState="unvisited" />
            </div>
        </div>
    </div>
</template>

<script>
import StepperProgress from './StepperProgress.vue';

export default {
    components: {
        StepperProgress
    }
};
</script>

<style scoped>
.container {
    position: relative;
    width: 100%;
    height: 300px;
}
.box-container {
    display: flex;
    justify-content: center;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
.progress-container {
    text-align: center;
    margin: 0 100px;
}
.progress-text {
    font-size: 16px;
    color: #333;
}
.progress {
    text-align: center;
}
.green-line {
    position: absolute; 
    top: 160px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #2FB3AA;
}
</style>
