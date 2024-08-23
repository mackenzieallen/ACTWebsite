<template>

  <BaseLayout :heading="'WAIS'" />

  <div class="form-container">
    <section class="section">
      <h2 class="section-title">INFORMATION</h2>
      <div class="question-row header-row">
        <div class="question-container"></div>
        <div class="score-container">
          <p class="score-label">Score (0 or 1)</p>
        </div>
      </div>
      <div class="question-row" v-for="(question, index) in informationQuestions" :key="index">
        <div class="question-container">
          <p class="question">{{ question.text }}</p>
          <textarea v-model="information[question.model]" rows="4" class="answer-input"></textarea>
        </div>
        <div class="score-container">
          <label>
            <input type="radio" :name="`information_${index}`" v-model="informationScores[question.model]" :value="0">
            0
          </label>
          <label>
            <input type="radio" :name="`information_${index}`" v-model="informationScores[question.model]" :value="1">
            1
          </label>
        </div>
      </div>
      <div class="total-container">
        <p class="total-label">Total: {{ calculateInformationTotal() }}</p>
      </div>
    </section>

    <div class="section-divider"></div>

    <section class="section">
      <h2 class="section-title">COMPREHENSION</h2>
      <div class="question-row header-row">
        <div class="question-container"></div>
        <div class="score-title-container">
          <p class="score-label">Score (0, 1, or 2)</p>
        </div>
      </div>
      <div class="question-row" v-for="(question, index) in comprehensionQuestions" :key="index">
        <div class="question-container">
          <p class="question">{{ question.text }}</p>
          <textarea v-model="comprehension[question.model]" rows="4" class="answer-input"></textarea>
        </div>
        <div class="score-container">
          <label>
            <input type="radio" :name="`comprehension_${index}`" v-model="comprehensionScores[question.model]" :value="0">
            0
          </label>
          <label>
            <input type="radio" :name="`comprehension_${index}`" v-model="comprehensionScores[question.model]" :value="1">
            1
          </label>
          <label>
            <input type="radio" :name="`comprehension_${index}`" v-model="comprehensionScores[question.model]" :value="2">
            2
          </label>
        </div>
      </div>
      <div class="total-container">
        <p class="total-label">Total: {{ calculateComprehensionTotal() }}</p>
      </div>
    </section>
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
  },
  data() {
    return {
      information: {
        presidents: '',
        panama: '',
        laborDay: '',
        king: ''
      },
      comprehension: {
        clothes: '',
        envelope: '',
        borrow: '',
        movies: ''
      },
      informationScores: {
        presidents: null,
        panama: null,
        laborDay: null,
        king: null
      },
      comprehensionScores: {
        clothes: null,
        envelope: null,
        borrow: null,
        movies: null
      },
      informationQuestions: [
        { text: 'Presidents: Name 4 men who have been President of the United States since 1950.', model: 'presidents' },
        { text: 'Panama: In which direction would you travel if you went from Chicago to Panama?', model: 'panama' },
        { text: 'Labor Day: In which month is Labor Day?', model: 'laborDay' },
        { text: 'King: Who was Martin Luther King, Jr.?', model: 'king' }
      ],
      comprehensionQuestions: [
        { text: 'Clothes: Why do we wash clothes?', model: 'clothes' },
        { text: 'Envelope: What would you do if you found an envelope in the street that was sealed, addressed, and had a stamp?', model: 'envelope' },
        { text: 'Borrow: Why do some people prefer to borrow money from a bank rather than a friend?', model: 'borrow' },
        { text: 'Movies: What should you do if while you are in a movie theater, you are the first person to see smoke and fire?', model: 'movies' }
      ]
    };
  },
  methods: {
    calculateInformationTotal() {
      return Object.values(this.informationScores).reduce((total, score) => total + Number(score || 0), 0);
    },
    calculateComprehensionTotal() {
      return Object.values(this.comprehensionScores).reduce((total, score) => total + Number(score || 0), 0);
    }
  }
};
</script>

<style scoped>
.form-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
}

.section {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 30px;
}

.section-title {
  font-size: 1.5em;
  color: #333;
}

.question-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.header-row {
  align-items: center;
}

.question-container {
  flex: 1;
  margin-right: 20px;
}

.question {
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.answer-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  background-color: #f0f0f0;
}

.score-title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-width: 100px;
}

.score-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-width: 100px;
  margin-top: 40px;
}

.score-label {
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

label {
  margin-bottom: 10px;
  font-size: 16px;
}

input[type="radio"] {
  margin-right: 5px;
}

.total-container {
  margin-top: 20px;
  text-align: right;
}

.total-label {
  font-weight: bold;
  font-size: 1.2em;
  color: #333;
}

.section-divider {
  border-top: 1px solid #ccc;
  margin: 30px 0;
}
</style>
