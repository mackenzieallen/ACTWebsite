<template>
    <BaseLayout :heading="'Word List - Recognition'" />

    <div class="instructions">
        <div> “Now I am going to show you a set of words printed on cards. Some of the words are from the list you saw earlier and some of the words I haven’t shown you before. I want you to say YES if the word I show you is one you saw earlier.” (Only YES or NO are acceptable). </div>
    </div>

    <WordListMemoryRecognition />
</template>

<script>
import BaseLayout from '../BaseLayout.vue';
import WordListMemoryRecognition from '../../components/Pages/WordListMemoryRecognition.vue';

export default {
  components: {
    BaseLayout,
    WordListMemoryRecognition
  }
}
</script>

<style scoped>
.instructions {
    font-size: 20px;
    line-height: 1.5;
}
</style>
