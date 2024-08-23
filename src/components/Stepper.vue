<template>
    <div class="stepper-container">
        <div class="stepper">
            <div class="step-line"></div>
            <div v-for="(step, index) in steps" :key="index" class="step-wrapper">
                <div class="step-label" v-html="step.label"></div>
                <div class="step"
                    :class="{
                        'active': isActive(step.path),
                        'filled-before': isBefore(index),
                        'filled-after': isAfter(index)
                    }">
                    <div class="outer-circle"></div>
                    <div class="inner-circle"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="navigation-buttons">
        <ArrowButton 
            arrowDirection="left" 
            @clicked="goToPrevious" 
            :disabled="currentStepIndex === 0" 
        />
        <ArrowButton 
            arrowDirection="right" 
            @clicked="goToNext" 
            :disabled="currentStepIndex === steps.length - 1" 
        />
    </div>
</template>

<script>
import ArrowButton from './ArrowButton.vue';

export default {
    components: {
        ArrowButton
    },
    data() {
        return {
            steps: [
                { label: 'Clock Drawing', path: '/clock-drawing' },
                { label: 'CASI', path: '/CASI' },
                { label: 'Verbal Fluency<br>Letter F', path: '/verbal-fluency/letter-f/interview' },
                { label: 'Verbal Fluency<br>Supermarket', path: '/verbal-fluency/supermarket/interview' },
                { label: 'Trail Making A', path: '/trail-making/a' },
                { label: 'Trail Making B', path: '/trail-making/b' }
            ]
        };
    },
    computed: {
        currentStepIndex() {
            return this.steps.findIndex(step => step.path === this.$route.path);
        },
        isBefore() {
            return (index) => index < this.currentStepIndex;
        },
        isAfter() {
            return (index) => index > this.currentStepIndex;
        }
    },
    methods: {
        isActive(path) {
            return this.$route.path === path;
        },
        goToPrevious() {
            if (this.currentStepIndex > 0) {
                this.$router.push(this.steps[this.currentStepIndex - 1].path);
            }
        },
        goToNext() {
            if (this.currentStepIndex < this.steps.length - 1) {
                this.$router.push(this.steps[this.currentStepIndex + 1].path);
            }
        }
    }
};
</script>

<style scoped>
.stepper-container {
    overflow-x: auto;
    white-space: nowrap;
    margin: 20px 0;
    padding: 10px;
    position: relative;
}

.stepper {
    display: flex;
    align-items: center;
    position: relative;
    height: 150px;
    width: 100%;
    min-width: 100%;
    justify-content: space-between;
}

.step-line {
    position: absolute;
    top: 74%;
    left: 0;
    height: 2px;
    background-color: #2FB3AA;
    z-index: 1;
    width: 100%;
}

.step-wrapper {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    position: relative;
    flex: 1;
    height: 88.5px;
    padding-top: 10px;
}

.step-label {
    text-align: center;
    font-size: 18px;
    color: black;
    margin-bottom: 40px;
    white-space: normal;
    padding: 0 5px;
    box-sizing: border-box;
    height: auto;
    line-height: 1.2; /* Adjust line height */
    position: absolute;
    bottom: 0; /* Align label bottom with circle top */
}

.step {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 24px;
    height: 24px;
}

.step .outer-circle {
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid transparent;
    z-index: 1;
    transition: border-color 0.3s;
}

.step .inner-circle {
    width: 8px;
    height: 8px;
    border: 2px solid #2FB3AA;
    border-radius: 50%;
    background-color: white;
    z-index: 2;
}

.step.active .outer-circle {
    background-color: white;
    border-color: #2FB3AA;
}

.step.active .inner-circle {
    background-color: #2FB3AA;
    border-color: #2FB3AA;
}

.step-box {
    width: 100%;
    height: 100%;
    border-radius: 8px;
}

.navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding-right: 20px;
}

.step.filled-before .inner-circle {
    background-color: #2FB3AA;
    border-color: #2FB3AA;
}
</style>
