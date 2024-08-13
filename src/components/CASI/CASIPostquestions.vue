<template>
  <div v-if="postQuestions" class="post-questions">
    <div v-if="postQuestions.instructions" class="instructions">
      <p v-for="(instruction, index) in postQuestions.instructions" :key="'postinstruction' + index">
        {{ instruction }}
      </p>
    </div>
    <CASIQuestionsSection :questions="postQuestions.questions" :responses="responses" @update:responses="updateResponses" sectionType="post"/>
  </div>
</template>

<script>
import CASIQuestionsSection from './CASIQuestionsSection.vue';

export default {
  components: { CASIQuestionsSection },
  props: {
    postQuestions: Object,
    responses: Object
  },
  methods: {
    updateResponses(name, value) {
      this.$emit('update:responses', name, value);
    }
  }
};
</script>
