<template>
    <div>
      <div v-if="sectionType === 'pre'">
        <h2>Prequestions</h2>
      </div>
      <div v-if="sectionType === 'post'">
        <h2>Postquestions</h2>
      </div>
      <div v-for="(question, index) in questions" :key="index" class="section">
        <CASIQuestion
          :question="question"
          :responses="responses"
          :section="sectionType === 'post'"
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
      questions: Array,
      responses: Object,
      sectionType: String
    },
    methods: {
      updateResponses(name, value) {
        this.$emit('update:responses', name, value);
      }
    }
  };
  </script>
  