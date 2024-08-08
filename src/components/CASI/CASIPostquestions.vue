<template>
  <div v-if="postQuestions" class="post-questions">
    <div v-if="postQuestions.instructions" class="instructions">
      <p v-for="(instruction, index) in postQuestions.instructions" :key="'postinstruction' + index">
        {{ instruction }}
      </p>
    </div>
    <div v-if="postQuestions.questions" class="section">
      <h2>Postquestions</h2>
      <CASIQuestion
        v-for="(question, index) in postQuestions.questions"
        :key="'post' + index"
        :question="question"
        :responses="responses"
        :section="true"
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
