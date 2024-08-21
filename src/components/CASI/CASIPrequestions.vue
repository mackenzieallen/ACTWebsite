<template>
  <div v-if="preQuestions" class="pre-questions">
    <div class="subheading">Pre-CASI Questions</div>
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
.subheading {
    font-size: 28px;
    margin-bottom: 24px;
    color: #237091;
}
.instructions {
  margin-bottom: 30px;
}
</style>