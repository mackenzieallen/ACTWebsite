<template>
  <div class="word-pair-container">
    <div class="header">
      <div class="column">Word</div>
      <div class="column">Pair</div>
    </div>
    <hr class="divider"/>
    <div class="rows">
      <div v-for="(word, index) in words" :key="index" class="row">
        <div class="column">{{ word }}</div>
        <div class="column">{{ pairs[index] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    words: {
      type: Array,
      required: true
    },
    pairs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.word-pair-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.column {
  flex: 1;
  text-align: center;
}

.divider {
  border: 0;
  border-top: 1px solid #ccc;
  margin: 0.5rem 0;
}

.rows {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
</style>
