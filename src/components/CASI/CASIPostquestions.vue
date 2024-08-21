<template>
  <div v-if="postQuestions" class="post-questions">
    <div class="subheading">Post-CASI Questions</div>
    <div v-if="postQuestions.instructions" class="instructions">
      <p v-for="(instruction, index) in postQuestions.instructions" :key="'postinstruction' + index">
        {{ instruction }}
      </p>
    </div>
    <CASIQuestionsSection :questions="postQuestions.questions" sectionType="post"/>
  </div>
</template>

<script>
import CASIQuestionsSection from './CASIQuestionsSection.vue';

export default {
  components: { CASIQuestionsSection },
  props: {
    postQuestions: Object,
  }
};
</script>

<style scoped>
.subheading {
    font-size: 28px;
    margin-bottom: 24px;
    color: #237091;
}
</style>