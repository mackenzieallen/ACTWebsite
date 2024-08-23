<template>
  <div class="top-bar">
    <div class="heading">ACT Interviewer App</div>
    <nav class="nav-links">
        <TextButton to="/" buttonText="Home" />

        <div class="button-container">
            <button @click="emitOpenScoringPanel" class="open-panel">
                Scores
            </button>
        </div>
    </nav>
  </div>
</template>

<script>
import TextButton from './TextButton.vue';

export default {
    components: {
        TextButton,
    },
    methods: {
        emitOpenScoringPanel() {
            this.$emit('openScoringPanel');
        }
    }
};
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f6f6f6;
  border-top: solid black;
  border-bottom: solid black;
  color: black;
  padding: 10px;
  width: 100%;
  font-size: 12px;
}

.heading {
  font-size: 1.5em;
  margin-right: 30px;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
}

.button-container {
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 0;
    z-index: 1000;
    padding: 20px;
}
.open-panel {
    border: none;
    background: #237091;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
}
</style>
