<template>
    <div>
        <div v-if="sectionType === 'pre'">
            <div class="subheading">Prequestions</div>
        </div>

        <div v-if="sectionType === 'post'">
            <div class="subheading">Postquestions</div>
        </div>

        <div v-for="(question, index) in questions" :key="index" class="section">
            <CASIQuestion
                :question="question"
                :section="sectionType === 'post'"
            />
        </div>
    </div>
</template>

<script>
import CASIQuestion from './CASIQuestion.vue';

export default {
    components: { CASIQuestion },
    props: {
        questions: Array,
        sectionType: String
    }
};
</script>
  
<style scoped>
.subheading {
    font-size: 28px;
    margin-bottom: 14px;
}
</style>