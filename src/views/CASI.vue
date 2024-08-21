<template>
  <div class="casi">
    <BaseLayout :heading="'CASI'" :totalScore="totalScore"  />
    <form @submit.prevent="submitForm">
      <CASIQuestions v-if="jsonData" :jsonData="jsonData" />
      <button type="submit" class="submit-button">Submit</button>
    </form>
  </div>
</template>

<script>
import CASIQuestions from '../components/CASI/CASIQuestions.vue';
import BaseLayout from '../views/BaseLayout.vue';
import CASIController from '../controllers/CASIController';

export default {
  components: { 
    CASIQuestions,
    BaseLayout 
  },
  data() {
    return {
      controller: new CASIController(),
      jsonData: null,
      totalScore: null
    }
  },
  async mounted() {
    this.loadData();
    this.totalScore = this.controller.totalScore; 
  },
  methods: {
    async loadData() {
      await this.controller.loadData();
      this.jsonData = this.controller.model.data;
      //console.log("[CASI] loadData: " + JSON.stringify(this.jsonData));
    },
    async submitForm() {
      this.controller.submitForm();
      this.totalScore = this.controller.totalScore;
    }
  },
};
</script>

<style>
.casi {
  max-width: 1200px;
  margin: auto;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

h2 {
  color: #555;
  border-bottom: 2px solid darkgray;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

p {
  font-size: 14px;
}

.section {
  padding-bottom: 10px;
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
  font-size: 14px;
  margin-bottom: 30px;
  color: #555;
}

.introduction {
  margin-bottom: 20px;
  color: #555;
}


.scores {
  margin-top: 10px;
  color: #777;
}

.notes {
  margin-top: 30px;
}
</style>
