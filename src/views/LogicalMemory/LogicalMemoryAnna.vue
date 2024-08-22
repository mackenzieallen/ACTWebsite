<template>
    <BaseLayout :heading="'Logical Memory - Anna Thompson'" />

    <div class="instructions">
      <b>"I am going to read you a little story of just a few lines. Listen carefully and try to remember just the way I say it, as close to the same words you can remember. When I am through, I want you to tell me everything I read to you. You should tell me all you can remember, even if you are not sure. Are you ready?" </b> 
      <span>Stories should be read slowly, but with a natural pace and tone.</span>
    </div>
  
    <LogicalMemory :phrases="annaPhrases" />
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
      annaPhrases: [
        "Anna", "Thompson", "of South", "Boston",
        "employed", "as a cook", "in a school", "cafeteria",
        "reported", "at the City Hall", "Station",
        "that she had been held up:", "on State Street",
        "the night before", "and robbed", "of fifty-six dollars",
        "She had four", "small children",
        "the rent was due",
        "and they had not eaten", "for two days",
        "The police,", "touched by the woman's story",
        "took up a collection", "for her"
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