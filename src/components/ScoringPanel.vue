<template>
  <div :class="['scoring-panel', { open: isOpen }]">
    <button class="close-btn" @click="closePage">X</button>
    <div class="content">
      <h1>ACT Scoring Sheet</h1>

      <ScoreSection taskName="CASI">
        <div>Total Score: {{ totalScore }}</div>
      </ScoreSection>

      <slot></slot>
    </div>
  </div>
</template>

<script>
import ScoreSection from './ScoreSection.vue';

export default {
  components: {
    ScoreSection
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    totalScore: { 
      type: Number,
      default: 0
    }
  },
  methods: {
    closePage() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.scoring-panel {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 25%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
}

.scoring-panel.open {
  transform: translateX(0);
}

.close-btn {
  position: absolute;
  top: 10px;
  left: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.content {
  padding: 20px;
}
</style>
