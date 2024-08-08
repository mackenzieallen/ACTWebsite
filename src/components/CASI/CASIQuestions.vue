<template>
  <div>
    <CASIPreQuestions :preQuestions="jsonData.prequestions" :responses="responses" @update:responses="updateResponses" />
    <h2>Questions</h2>
    <div v-for="(section, sectionIndex) in jsonData.sections" :key="'section' + sectionIndex" class="section">
      <h2>{{ section.title }}</h2>
      <div v-if="section.instructions" class="instructions">
        <span v-for="(instruction, index) in section.instructions" :key="'instruction' + sectionIndex + '-' + index">
          {{ instruction }}
        </span>
      </div>
      <CASIQuestion
        v-for="(question, questionIndex) in section.questions"
        :key="'section' + sectionIndex + '-' + questionIndex"
        :question="question"
        :responses="responses"
        :section="true"
        @update:responses="updateResponses"
      />
    </div>
    <CASIPostQuestions :postQuestions="jsonData.postquestions" :responses="responses" @update:responses="updateResponses" />
  </div>
</template>

<script>
import CASIPreQuestions from './CASIPrequestions.vue';
import CASIPostQuestions from './CASIPostquestions.vue';
import CASIQuestion from './CASIQuestion.vue';
import jsonData from '../../data/casi.json';

export default {
  components: { CASIPreQuestions, CASIPostQuestions, CASIQuestion },
  data() {
    return {
      jsonData,
      responses: {}
    };
  },
  methods: {
    updateResponses(name, value) {
      this.$set(this.responses, name, value);
    },
    submitForm() {
      console.log(this.responses);
    }
  }
};
</script>
