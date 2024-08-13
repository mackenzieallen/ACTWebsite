<template>
  <div class="casi">
    <BaseLayout :heading="'CASI'" />
    <form @submit.prevent="submitForm">
      <CASIQuestions :jsonData="jsonData" :responses="responses" @update:responses="updateResponses" />
      <button type="submit" class="submit-button">Submit</button>
    </form>
  </div>
</template>

<script>
import CASIQuestions from '../components/CASI/CASIQuestions.vue';
// import jsonData from '../data/casi.json';
import CASIController from '../controllers/CASIController';
import BaseLayout from '../views/BaseLayout.vue';

export default {
  components: { 
    CASIQuestions,
    BaseLayout 
  },
  data() {
    return {
      jsonData: null,
      responses: {},
      controller: new CASIController()
    };
  },
  async created() {
    this.jsonData = await this.controller.initialize();
  },
  methods: {
    updateResponses(name, value) {
      this.$set(this.responses, name, value);
    },
    async submitForm() {
      await this.controller.submitForm(this.responses);
    }
  }
};
</script>

<style>
.casi {
  max-width: 1000px;
  margin: auto;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

h2 {
  color: #555;
  border-bottom: 2px solid #eee;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.section {
  padding-bottom: 10px;
}

.question {
  margin-bottom: 20px;
}

.question-text {
  font-size: 1.2em;
  margin: 10px 0;
}

.input-group {
  margin: 15px 0;
}

.input-label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

.input-field input {
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.choice-label {
  margin-left: 8px;
}

.submit-button {
  background-color: #317391;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: block;
  margin: 30px auto 0;
}

.instructions {
  margin-bottom: 20px;
  font-style: italic;
  color: #555;
}

.introduction {
  margin-bottom: 20px;
  font-style: italic;
  color: #555;
}

.examples {
  margin-bottom: 20px;
  font-style: italic;
  color: #777;
}

.scores {
  margin-top: 10px;
  font-style: italic;
  color: #777;
}

.notes {
  margin-top: 30px;
}
</style>
