<template>
    <BaseLayout :heading="'Logical Memory - Robert Miller'" />

    <div class="instructions">
      <b>"I am going to read you a little story of just a few lines. Listen carefully and try to remember just the way I say it, as close to the same words you can remember. When I am through, I want you to tell me everything I read to you. You should tell me all you can remember, even if you are not sure. Are you ready?" </b> 
      <span>Stories should be read slowly, but with a natural pace and tone.</span>
    </div>
   
    <LogicalMemory :phrases="robertPhrases" />
</template>

<script>
import LogicalMemory from '@/components/Pages/LogicalMemory.vue';
import BaseLayout from '../BaseLayout.vue';

export default {
  components: {
    LogicalMemory,
    BaseLayout
  },
  data() {
    return {
      robertPhrases: [
        "Robert", "Miller", "was driving", "a ten-ton", "truck",
        "down a highway", "at night", "in the Mississippi", "Delta,",
        "carrying eggs", "to Nashville", "when his axle", "broke.",
        "His truck skidded", "off the road", "into a ditch.",
        "He was thrown", "against the dashboard", "and was badly shaken.",
        "There was no traffic,", "and he doubted help would come.",
        "Just then his two-way radio", "buzzed.", "He quickly answered,",
        "'This is Grasshopper.'"
      ]
    };
  }
}
</script>

<style scoped>
.instructions {
    font-size: 20px;
    line-height: 1.5;
}
</style>