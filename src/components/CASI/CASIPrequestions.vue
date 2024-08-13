<template>
  <div v-if="preQuestions" class="pre-questions">
    <div v-if="preQuestions.preinstructions" class="instructions">
      <p>{{ preQuestions.preinstructions }}</p>
    </div>
    <CASIQuestionsSection :questions="preQuestions.questions" :responses="responses" @update:responses="updateResponses" sectionType="pre"/>
  </div>
</template>

<script>
import CASIQuestionsSection from './CASIQuestionsSection.vue';

export default {
  components: { CASIQuestionsSection },
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

<style scoped>
.pre-questions {
  margin-bottom: 50px;
}
</style>