<template>
    <BaseLayout :heading="'Word List - Recall'" />

    <div class="instructions">
        <div>“A few minutes ago I asked you to learn a list of ten words which you read one at a time from cards. Now I want you to try to recall as many of those 10 words as you can. OK, now tell me as many of those 10 words as you can remember.” (Maximum time: 90 seconds)</div>
        <br>
        <div>Check each word as it is recalled:</div>
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
