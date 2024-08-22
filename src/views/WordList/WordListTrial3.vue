<template>
  <BaseLayout :heading="'Word List - Trial 3'" />

  <div class="instructions">
      <div> “I am going to show you ten printed words. Read each word out loud as I show it to you. Later, I will ask you to recall all ten words.” (Exposure time: 1 word every 2 seconds. Recall time: 90 seconds per trial maximum) </div>
      <br>
      <div>Check each word as it is recalled:</div>
  </div>

  <WordListMemoryContent :words="trialWords" />
</template>

<script>
import BaseLayout from '../BaseLayout.vue';
import WordListMemoryContent from '../../components/Pages/WordListMemoryContent.vue';

export default {
  components: {
    BaseLayout,
    WordListMemoryContent
  },
  data() {
    return {
      trialWords: [
        "Queen", "Grass", "Arm", "Cabin", "Pole", "Shore", "Butter", "Engine", "Ticket", "Letter"
      ]
    };
  }
};
</script>

<style scoped>
.instructions {
  font-size: 20px;
  line-height: 1.5;
}
</style>
