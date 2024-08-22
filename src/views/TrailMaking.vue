<template>
  <BaseLayout :heading="'Trail Making'" />

  <div class="cube-container">
    <img src="../assets/images/cube.png" alt="Cube" />
  </div>

  <NotesSection />
</template>

<script>
import BaseLayout from './BaseLayout.vue';
import NotesSection from '../components/NotesSection.vue';

export default {
  components: {
    BaseLayout,
    NotesSection
  }
}
</script>

<style scoped>
.cube-container {
  display: flex;
  justify-content: center;
}
</style>
