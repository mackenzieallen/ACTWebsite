<template>
  <div>
    <div class="star">* Original word from Word List Memory Task</div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th class="word-column">Word</th>
            <th class="response-column">Correct "Yes" Response</th>
            <th class="response-column">Correct "No" Response</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(word, index) in words"
            :key="index"
            :class="{'alternate-row': index % 2 !== 0}"
          >
            <td>{{ word.text }}</td>
            <td>
              <input
                v-if="word.correctResponse === 'yes'"
                type="checkbox"
                v-model="word.selected"
              />
            </td>
            <td>
              <input
                v-if="word.correctResponse === 'no'"
                type="checkbox"
                v-model="word.selected"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="totals-row">
        <div class="totals-cell"><strong>Total</strong></div>
        <div class="totals-cell">{{ totalYes }}</div>
        <div class="totals-cell">{{ totalNo }}</div>
      </div>
    </div>
  </div>

  <NotesSection />
</template>

<script>
import NotesSection from '../NotesSection.vue';

export default {
    components: {
        NotesSection
    },
    data() {
        return {
            words: [
                { text: 'Church', correctResponse: 'no', selected: false },
                { text: 'Coffee', correctResponse: 'no', selected: false },
                { text: 'Butter *', correctResponse: 'yes', selected: false },
                { text: 'Dollar', correctResponse: 'no', selected: false },
                { text: 'Arm *', correctResponse: 'yes', selected: false },
                { text: 'Shore *', correctResponse: 'yes', selected: false },
                { text: 'Five', correctResponse: 'no', selected: false },
                { text: 'Letter *', correctResponse: 'yes', selected: false },
                { text: 'Hotel', correctResponse: 'no', selected: false },
                { text: 'Mountain', correctResponse: 'no', selected: false },
                { text: 'Queen *', correctResponse: 'yes', selected: false },
                { text: 'Cabin *', correctResponse: 'yes', selected: false },
                { text: 'Slipper', correctResponse: 'no', selected: false },
                { text: 'Pole *', correctResponse: 'yes', selected: false },
                { text: 'Village', correctResponse: 'no', selected: false },
                { text: 'String', correctResponse: 'no', selected: false },
                { text: 'Ticket *', correctResponse: 'yes', selected: false },
                { text: 'Troops', correctResponse: 'no', selected: false },
                { text: 'Grass *', correctResponse: 'yes', selected: false },
                { text: 'Engine *', correctResponse: 'yes', selected: false },
            ],
        };
    },
  computed: {
    totalYes() {
      return this.words.filter(word => word.correctResponse === 'yes' && word.selected).length;
    },
    totalNo() {
      return this.words.filter(word => word.correctResponse === 'no' && word.selected).length;
    },
  },
};
</script>

<style scoped>
.table-container {
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  vertical-align: middle;
}

th.word-column {
  width: 33%;
}

th.response-column {
  width: 33%;
}

th {
  background-color: #f2f2f2;
}

.alternate-row {
  background-color: #f9f9f9;
}

.star {
  margin-top: 50px;
  margin-bottom: 25px;
  text-align: center;
}

.totals-row {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 10px;
  background-color: #f2f2f2;
  border-top: 2px solid #ddd;
  font-size: 1.1em;
  font-weight: bold;
}

.totals-cell {
  width: 33%;
  text-align: center;
}
</style>
