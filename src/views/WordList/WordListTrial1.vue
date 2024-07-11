<template>
    <BaseLayout :heading="'Word List - Trial 1'" />

    <div class="instructions">
        <div> “I am going to show you ten printed words. Read each word out loud as I show it to you. Later, I will ask you to recall all ten words.” (Exposure time: 1 word every 2 seconds. Recall time: 90 seconds per trial maximum) </div>
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
