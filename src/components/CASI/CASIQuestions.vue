<template>
  <div>
    <CASIPreQuestions :preQuestions="jsonData.prequestions" />
    <div class="heading">Questions</div>
    <div v-for="(section, sectionIndex) in jsonData.sections" :key="'section' + sectionIndex" class="section">
      <h2>{{ section.title }}</h2>
      <div v-if="section.instructions" class="instructions">
        <span v-for="(instruction, index) in section.instructions" :key="'instruction' + sectionIndex + '-' + index">
          {{ instruction }}
        </span>
      </div>
      <CASIQuestionsSection :questions="section.questions" />
    </div>
    <CASIPostQuestions :postQuestions="jsonData.postquestions" />
  </div>
</template>

<script>
import CASIPreQuestions from './CASIPrequestions.vue';
import CASIPostQuestions from './CASIPostquestions.vue';
import CASIQuestionsSection from './CASIQuestionsSection.vue';

export default {
  props: {
    jsonData: {
      type: Object,
      required: true,
    },
  },
  components: { 
    CASIPreQuestions, CASIPostQuestions, CASIQuestionsSection 
  },
};
</script>

<style scoped>
.heading {
  color: #555;
  font-size: 1.5em;
  font-weight: bold;
}
</style>
