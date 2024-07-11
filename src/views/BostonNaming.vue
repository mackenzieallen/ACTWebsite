<template>
    <BaseLayout :heading="'Boston Naming'" />

    <div class="instructions">
        “Now I am going to show you some pictures and I want you to say the name of each picture.”
        (Record all responses verbatim. Maximum exposure per picture is 10 seconds).
    </div>
  
  </template>
  
  <script>
  import BaseLayout from './BaseLayout.vue';
  
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
