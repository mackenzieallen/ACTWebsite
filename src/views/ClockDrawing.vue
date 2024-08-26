<template>
  <BaseLayout :heading="'Clock Drawing'" />

  <ClockDrawingAdminister />
  <ClockDrawingScoring />

  <div class="content-container">
    <img src="../assets/images/circle.png" alt="Circle" />
  </div>

  <NotesSection />
</template>

<script>
import BaseLayout from './BaseLayout.vue';
import NotesSection from '../components/NotesSection.vue';
import ClockDrawingAdminister from '../components/Pages/ClockDrawingAdminister.vue';
import ClockDrawingScoring from '../components/Pages/ClockDrawingScoring.vue';

export default {
  components: {
      BaseLayout,
      NotesSection,
      ClockDrawingAdminister,
      ClockDrawingScoring
  }
}
</script>

<style scoped>
.content-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>

