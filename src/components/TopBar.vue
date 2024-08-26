<template>
  <div class="top-bar">
    <div class="heading">ACT Interviewer App</div>
    <nav class="nav-links">
        <TextButton to="/" buttonText="Home" class="button" />
        <TextButton buttonText="Scores" @click="emitOpenScoringPanel" />
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
  align-items: center;
}

.button-container {
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 0;
    z-index: 1000;
    padding: 20px;
}

.button {
    margin-right: 10px;
}
</style>
