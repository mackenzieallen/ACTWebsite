<template>
  <div class="answer-component">
    <div v-for="(option, index) in options" :key="index">
      <input type="radio" :value="option.value" v-model="selectedAnswer" class="radioButtons">
      <label :for="option.value">{{ option.value }}</label>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      options: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        selectedAnswer: null
      };
    }
  };
</script>

<style scoped>
.answer-component {
    margin: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.radioButtons {
  accent-color: #237091;;
}
</style>
