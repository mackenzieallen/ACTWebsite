<template>
  <div class="casi">
    <BaseLayout 
      :heading="'CASI'" 
      :totalScore="totalScore" 
      :casiATT="casiATT"
      :casiMMC="casiMMC"
      :casiORI="casiORI"
      :casiLTM="casiLTM"
      :casiSTM="casiSTM"
      :casiLANG="casiLANG"
      :casiDRAW="casiDRAW"
      :casiFLU="casiFLU"
      :casiATAJ="casiATAJ"
    />
    <form @submit.prevent="submitForm">
      <CASIQuestions v-if="jsonData" :jsonData="jsonData" @score-added="handleScoreAdded" />
      <TextButton class="submit-button" buttonText="Submit" :dark="true"></TextButton>
    </form>
  </div>
</template>

<script>
import CASIQuestions from '../components/CASI/CASIQuestions.vue';
import BaseLayout from '../views/BaseLayout.vue';
import CASIController from '../controllers/CASIController';
import TextButton from '../components/TextButton.vue';

export default {
  components: { 
    CASIQuestions,
    BaseLayout,
    TextButton
  },
  data() {
    return {
      controller: new CASIController(),
      jsonData: null,
      totalScore: null,
      casiATT: null,
      casiMMC: null,
      casiORI: null,
      casiLTM: null,
      casiSTM: null,
      casiLANG: null,
      casiDRAW: null,
      casiFLU: null,
      casiATAJ: null
    }
  },
  async mounted() {
    this.loadData();
    this.updateScores();
  },
  methods: {
    async loadData() {
      await this.controller.loadData();
      this.jsonData = this.controller.model.data;
      //console.log("[CASI] loadData: " + JSON.stringify(this.jsonData));
    },
    async submitForm() {
      this.controller.submitForm();
      this.updateScores();
    },
    handleScoreAdded(scoreLabel, value) {
      this.controller.calculateScores();
      this.updateScores();
    },
    updateScores() {
      this.totalScore = this.controller.totalScore;
      this.casiATT = this.controller.casiATT;
      this.casiMMC = this.controller.casiMMC;
      this.casiORI = this.controller.casiORI;
      this.casiLTM = this.controller.casiLTM;
      this.casiSTM = this.controller.casiSTM;
      this.casiLANG = this.controller.casiLANG;
      this.casiDRAW = this.controller.casiDRAW;
      this.casiFLU = this.controller.casiFLU;
      this.casiATAJ = this.controller.casiATAJ;
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

p {
  font-size: 14px;
}

.section {
  padding-bottom: 10px;
}

.submit-button {
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

.notes {
  margin-top: 30px;
}
</style>
