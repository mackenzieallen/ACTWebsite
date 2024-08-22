<template>
    <div class="stepper-container">
        <div class="stepper">
        <div class="step-line"></div>
        <div v-for="(step, index) in steps" :key="index" class="step-wrapper">
            <div class="step-label">{{ step.label }}</div>
            <router-link :to="step.path" class="step" :class="{ active: isActive(step.path) }">
                <div class="step-box"></div>
            </router-link>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            steps: [
                { label: 'Home', path: '/' },
                { label: 'Logical Memory (Anna)', path: '/logical-memory/anna' },
                { label: 'Logical Memory (Robert)', path: '/logical-memory/robert' },
                { label: 'Verbal Fluency, Letter F (Interview)', path: '/verbal-fluency/letter-f/interview' },
                { label: 'Verbal Fluency, Letter F (Transcription)', path: '/verbal-fluency/letter-f/transcription' },
                { label: 'Verbal Fluency, Supermarket (Interview)', path: '/verbal-fluency/supermarket/interview' },
                { label: 'Verbal Fluency, Supermarket (Transcription)', path: '/verbal-fluency/supermarket/transcription' },
                { label: 'Word List (Trial 1)', path: '/word-list/trial1' },
                { label: 'Word List (Trial 2)', path: '/word-list/trial2' },
                { label: 'Word List (Trial 3)', path: '/word-list/trial3' },
                { label: 'Word List (Recall)', path: '/word-list/recall' },
                { label: 'Word List (Recognition)', path: '/word-list/recognition' },
                { label: 'Constructional Praxis (Initial)', path: '/constructional-praxis/intitial' },
                { label: 'Constructional Praxis (Recall)', path: '/constructional-praxis/recall' },
                { label: 'Clock Drawing', path: '/clock-drawing' },
                { label: 'WAIS', path: '/WAIS' },
                { label: 'Trail Making', path: '/trail-making' },
                { label: 'Boston Naming', path: '/boston-naming' },
                { label: 'CASI', path: '/CASI' },
                { label: 'Verbal Paired Associates (Set 1)', path: '/verbal-paired-associates/set1' },
                { label: 'Verbal Paired Associates (Set 2)', path: '/verbal-paired-associates/set2' },
                { label: 'Verbal Paired Associates (Set 3)', path: '/verbal-paired-associates/set3' },
                { label: 'Verbal Paired Associates (Recall)', path: '/verbal-paired-associates/recall' }
            ]
        };
    },
    methods: {
        isActive(path) {
            return this.$route.path === path;
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
    align-items: flex-end;
    position: relative;
    height: 150px;
    width: 100%;
    min-width: 100%;
}

.step-line {
    position: absolute;
    top: 74%;
    left: 0;
    height: 2px;
    background-color: #2FB3AA;
    z-index: 1;
    width: 400%;
}

.step-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-bottom: 10px;
    padding-top: 10px;
    flex: 1;
    margin-right: 50px;
}

.step-label {
    text-align: center;
    font-size: 12px;
    color: black;
    margin-bottom: 12px;
    white-space: normal;
    padding: 0 5px;
    box-sizing: border-box;
    height: 30px;
    display: flex;
    align-items: flex-end;
}

.step {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border: 2px solid #2FB3AA;
    border-radius: 8px;
    background-color: white;
    transition: background-color 0.3s, border-color 0.3s;
    cursor: pointer;
    position: relative;
    margin-top: 0;
    z-index: 2;
}

.step.active {
    background-color: #2FB3AA;
    border-color: #2FB3AA;
}

.step-box {
    width: 100%;
    height: 100%;
    border-radius: 8px;
}


</style>
