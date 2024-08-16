<template>
  <div class="casi">
    Hello
   <!-- <BaseLayout :heading="'CASI'" />
    <form @submit.prevent="submitForm">
      <CASIQuestions :jsonData="jsonData" />
      <button type="submit" class="submit-button">Submit</button>
    </form> -->
  </div>

  <div>

  </div>
</template>

<script>
// import CASIQuestions from '../components/CASI/CASIQuestions.vue';
// import BaseLayout from '../views/BaseLayout.vue';

 import CASIController from '../controllers/CASIController'

export default {
  components: { 
  //  CASIQuestions,
  //   BaseLayout 
  },

  data() {
    return {
      controller: new CASIController(),
      jsonData: null
    }
  },

  async mounted() {
    this.loadData()
  },

  methods: {

    async loadData() {
      await this.controller.loadData()
      this.jsonData = this.controller.model.data
      console.log("[CASI] loadData: " + JSON.stringify(this.jsonData))
    },

    async submitForm() {
      await this.controller.submitForm(this.jsonData);
    }
  },

  setup() {
    return {
      
    };
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

p {
  font-size: 14px;
}

.section {
  padding-bottom: 10px;
}

.question {
  margin-bottom: 20px;
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
