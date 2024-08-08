<template>
  <div class="casi">
    <CASIHeader />
    <form @submit.prevent="submitForm">
      <CASIQuestions :jsonData="jsonData" :responses="responses" @update:responses="updateResponses" />
      <button type="submit" class="submit-button">Submit</button>
    </form>
  </div>
</template>

<script>
import CASIHeader from './CASIHeader.vue';
import CASIQuestions from './CASIQuestions.vue';
import jsonData from '../../data/casi.json';

export default {
  components: { CASIHeader, CASIQuestions },
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
  