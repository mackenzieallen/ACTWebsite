<template>
  <div class="story-container">
    <div v-for="(phrase, index) in phrases" :key="index" class="phrase-box">
      <input type="checkbox" v-model="checkedPhrases[index]" />
      <span>{{ phrase }}</span>
    </div>

    <div class="total-score">
      Total Score: {{ totalScore }}
    </div>
  </div>

  <div class="instructions">
      <b>“Now, what did I read to you? Tell me everything and begin at the beginning.”</b>
      Record the participant’s story in the space provided. 
      After the participant is finished, say <b>“Is there anything else?”</b> one time.
    </div>

    <NotesSection />
</template>

<script>
import NotesSection from '../NotesSection.vue';

export default {
  components: {
    NotesSection
  },
  props: {
    phrases: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      checkedPhrases: Array(this.phrases.length).fill(false)
    };
  },
  computed: {
    totalScore() {
      return this.checkedPhrases.filter(checked => checked).length;
    }
  }
};
</script>

<style scoped>
.story-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
  max-width: 100%;
  box-sizing: border-box;
}

.phrase-box {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1 1 auto;
  max-width: 200px;
  box-sizing: border-box;
}

.phrase-box input[type="checkbox"] {
  margin-right: 10px;
}

.phrase-box span {
  flex: 1;
}

.total-score {
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  width: 100%;
}

.instructions {
    font-size: 20px;
    line-height: 1.5;
}
</style>