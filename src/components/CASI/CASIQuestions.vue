<template>
  <div>
    <CASIPreQuestions :preQuestions="jsonData.prequestions" :responses="responses" @update:responses="updateResponses" />
    <div class="heading">Questions</div>
    <div v-for="(section, sectionIndex) in jsonData.sections" :key="'section' + sectionIndex" class="section">
      <h2>{{ section.title }}</h2>
      <div v-if="section.instructions" class="instructions">
        <span v-for="(instruction, index) in section.instructions" :key="'instruction' + sectionIndex + '-' + index">
          {{ instruction }}
        </span>
      </div>
      <CASIQuestionsSection :questions="section.questions" :responses="responses" @update:responses="updateResponses" />
    </div>
    <CASIPostQuestions :postQuestions="jsonData.postquestions" :responses="responses" @update:responses="updateResponses" />
  </div>
</template>

<script>
import CASIPreQuestions from './CASIPrequestions.vue';
import CASIPostQuestions from './CASIPostquestions.vue';
import CASIQuestionsSection from './CASIQuestionsSection.vue';
import jsonData from '../../data/casi.json';
import { reactive } from 'vue';

export default {
  components: { CASIPreQuestions, CASIPostQuestions, CASIQuestionsSection },
  setup() {
    const responses = reactive({});

    function updateResponses(name, value) {
      responses[name] = value;
    }

    return {
      jsonData,
      responses,
      updateResponses
    };
  }
};
</script>

<style scoped>
.heading {
  color: #555;
  font-size: 1.5em;
  font-weight: bold;
}
</style>
