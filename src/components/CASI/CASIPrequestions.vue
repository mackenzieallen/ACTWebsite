<template>
  <div v-if="preQuestions" class="pre-questions">
    <div v-if="preQuestions.preinstructions" class="instructions">
      <p>{{ preQuestions.preinstructions }}</p>
    </div>
    <CASIQuestionsSection :questions="preQuestions.questions" sectionType="pre"/>
  </div>
</template>

<script>
import CASIQuestionsSection from './CASIQuestionsSection.vue';

export default {
  components: { CASIQuestionsSection },
  props: {
    preQuestions: Object
  }
};
</script>

<style scoped>
.pre-questions {
  margin-bottom: 50px;
}
</style>