<template>
  <BaseLayout :heading="'Trail Making'" />

  <div class="cube-container">
    <img src="../assets/images/cube.png" alt="Cube" />
  </div>

  <div class="notes-section">
    <label for="notes" class="notes-label">Notes:</label>
    <textarea id="notes" class="notes-input"></textarea>
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
.notes-section {
    padding: 20px;
}

.notes-label {
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
}

.notes-input {
    width: 100%;
    height: 150px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: vertical;
    background-color: #f0f0f0;
}

.cube-container {
  display: flex;
  justify-content: center;
}
</style>
