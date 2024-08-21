<template>
    <div>
        <div v-for="(question, index) in questions" :key="index" class="section">
            <CASIQuestion
                :question="question"
                :section="sectionType === 'post'"
                @score-added="handleScoreAdded"
            />
        </div>
        <h2></h2>
    </div>
</template>

<script>
import CASIQuestion from './CASIQuestion.vue';

export default {
    components: { CASIQuestion },
    props: {
        questions: Array,
        sectionType: String
    },
    methods: {
        handleScoreAdded(scoreLabel, value) {
            this.$emit('score-added', scoreLabel, value);
        }
    }
};
</script>