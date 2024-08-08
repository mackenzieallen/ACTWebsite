<template>
  <div v-if="preQuestions" class="pre-questions">
    <div v-if="preQuestions.preinstructions" class="instructions">
      <p>{{ preQuestions.preinstructions }}</p>
    </div>
    <div v-if="preQuestions.questions" class="section">
      <h2>Prequestions</h2>
      <CASIQuestion
        v-for="(question, index) in preQuestions.questions"
        :key="'pre' + index"
        :question="question"
        :responses="responses"
        :section="false"
        @update:responses="updateResponses"
      />
    </div>
  </div>
</template>

<script>
import CASIQuestion from './CASIQuestion.vue';

export default {
  components: { CASIQuestion },
  props: {
    preQuestions: Object,
    responses: Object
  },
  methods: {
    updateResponses(name, value) {
      this.$emit('update:responses', name, value);
    }
  }
};
</script>
