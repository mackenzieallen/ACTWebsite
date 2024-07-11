<template>
    <BaseLayout :heading="'Verbal Paired Associates - Recall'" />

    <div class="instructions">
        "Do you remember the list of words that go together, which we read a short while ago? I am going to read the list one more time. After I read a word, see if you can tell me the word that goes with it. Ready? Let's begin.
    </div>
</template>

<script>
import BaseLayout from '../BaseLayout.vue';
  
export default {
    components: {
        BaseLayout
    }
}
</script>

<style scoped>
.instructions {
    font-size: 20px;
    line-height: 1.5;
}
</style>
  