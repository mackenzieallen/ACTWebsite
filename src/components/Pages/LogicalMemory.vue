<template>
    <div class="placeholder">
        checkboxes
    </div>

    <RadioButtonAnswers :options="answerOptions" />
</template>

<script>

import RadioButtonAnswers from '../RadioButtonAnswers.vue';
export default {
    components: {
        RadioButtonAnswers
    },
    data() {
    return {
      answerOptions: [
        { value: 'Option 1'},
        { value: 'Option 2'},
        { value: 'Option 3'}
      ]
    };
  }
    
}
</script>

<style scoped>
.placeholder {
    margin-top: 100px;
}
</style>