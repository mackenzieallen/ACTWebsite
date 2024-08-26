<template>
  <BaseLayout :heading="'ACT Home Page'" />
  <div class="prompt">
    <p class="question">Do you want to administer or score?</p>
    <div class="button-container">
      <TextButton
        buttonText="Administer"
        :dark="userSelection === 'administer'"
        @click="setSelection('administer')"
      />
      <TextButton
        buttonText="Score"
        :dark="userSelection === 'score'"
        @click="setSelection('score')"
      />
    </div>

    <div v-if="userSelection" class="next-question">
      <p class="question">Enter Subject ID:</p>
      <input 
        v-model="subjectID" 
        type="text" 
        placeholder="Subject ID" 
        class="subject-input"
      />
      <TextButton
        :buttonText="startButtonText"
        :dark="true"
        @click="startProcess"
        class="start-button"
      />
    </div>
  </div>
</template>

<script>
import BaseLayout from './BaseLayout.vue';
import TextButton from '../components/TextButton.vue';

export default {
  components: {
    BaseLayout,
    TextButton,
  },
  data() {
    return {
      userSelection: null,
      subjectID: ''
    };
  },
  computed: {
    startButtonText() {
      return this.userSelection === 'administer' ? 'Start Administering' : 'Start Scoring';
    }
  },
  methods: {
    setSelection(selection) {
      this.userSelection = selection;
      console.log("User selected:", this.userSelection);
    },
    startProcess() {
      if (this.subjectID.trim() !== '') {
        console.log("Subject ID:", this.subjectID);
        this.$router.push('/clock-drawing');
      } else {
        alert("Please enter a valid Subject ID.");
      }
    }
  }
};
</script>

<style scoped>
.prompt {
  text-align: center;
  margin-top: 20px;
}

.question {
  font-size: 24px;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

.next-question {
  margin-top: 75px;
}

.subject-input {
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #3986A8;
  border-radius: 8px;
  margin-bottom: 20px;
}

.start-button {
  display: block;
  margin: 20px auto 0;
}
</style>