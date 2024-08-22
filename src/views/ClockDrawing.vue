<template>
  <BaseLayout :heading="'Clock Drawing'" />

  <div class="subheading"><b>Score: </b>A 10-point scoring system is used as follows:</div>

  <div v-for="item in scores" :key="item.score" class="score-item">
    <p><b>{{ item.score }}</b>: {{ item.description }}</p>
  </div>

  <div class="content-container">
    <img src="../assets/images/circle.png" alt="Circle" />
    <div class="score">Score: 0</div>
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
  },
  data() {
    return {
      scores: [
        { score: 10, description: 'Normal drawing, numbers and hands in approximately correct positions, hour hand distinctly different than minute hand and approaching 4 o\'clock' },
        { score: 9, description: 'Slight errors in placement of hands (not exactly on 8 and 4, but not on one of the adjoining numbers) or missing one number on the clock face' },
        { score: 8, description: 'More noticeable gap in the placement of hour and minute hand (off by one number), number spacing shows a gap' },
        { score: 7, description: 'Placement of hands slightly off course (more than one number), very inappropriate spacing of numbers (e.g. all on one side), 1 hand missing. Hands are not centered or touching or hands are same length or incorrectly drawn - Hour hand longer than Minute hand' },
        { score: 6, description: 'Inappropriate use of clock hands (use of digital display or circling numbers despite repeated instructions, hands pointing wrong direction), crowding of numbers at one end of the clock or reversal of numbers' },
        { score: 5, description: 'Pervasive or otherwise inappropriate arrangement of numbers (e.g. numbers indicated by dots, reverse order). Hands may be represented, but do not clearly point at any number.' },
        { score: 4, description: 'Numbers absent, written outside of clock, more than one number on the circle of the clock or in distorted sequence. Hands not clearly represented.' },
        { score: 3, description: 'Numbers and clock face no longer connected in the drawing. Hands not recognizably present. No circle to represent the clock - only numbers and hands.' },
        { score: 2, description: 'Drawing reveals evidence of instructions received, but representation of clock is vague; inappropriate spatial arrangement of numbers.' },
        { score: 1, description: 'Irrelevant, uninterpretable figure or no attempt.' }
      ]
    }
  }
}
</script>

<style scoped>
.score {
  font-size: 36px;
}

.score-item {
  margin-bottom: 10px;
}

.score-item p {
  font-size: 16px;
  line-height: 1.5;
}

.subheading {
  font-size: 24px;
}

.content-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

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
</style>

