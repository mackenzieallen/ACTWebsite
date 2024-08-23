<template>
  <BaseLayout :heading="'Boston Naming'" />

  <div class="instructions">
    “Now I am going to show you some pictures and I want you to say the name of each picture.”
    (Record all responses verbatim. Maximum exposure per picture is 10 seconds).
  </div>

  <div class="table-container">
    <table class="styled-table">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Recording</th>
          <th>Response</th>
          <th>Correct (A)*</th>
          <th>Correct (C)**</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index">
          <td>{{ item.picture }}</td>
          <td>
            <TextButton buttonText="PLAY/PAUSE" :dark="true"></TextButton>
          </td>
          <td>
            <input type="text" v-model="item.response" />
          </td>
          <td>
            <input
              type="checkbox"
              v-if="showCheckboxA(item.picture)"
              v-model="item.correctA"
              @change="updateTotals"
            />
          </td>
          <td>
            <input
              type="checkbox"
              v-if="showCheckboxC(item.picture)"
              v-model="item.correctC"
              @change="updateTotals"
            />
          </td>
        </tr>
        <tr>
          <td colspan="3"><strong>Total:</strong></td>
          <td><strong>{{ totalCorrectA }}</strong></td>
          <td><strong>{{ totalCorrectC }}</strong></td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <NotesSection />
</template>

<script>
import BaseLayout from './BaseLayout.vue';
import TextButton from '../components/TextButton.vue';
import NotesSection from '../components/NotesSection.vue';

export default {
  components: {
    BaseLayout,
    TextButton,
    NotesSection
  },
  data() {
    return {
      tableData: [
        { picture: 'Bed **' },
        { picture: 'Tree **' },
        { picture: 'House **' },
        { picture: 'Whistle **' },
        { picture: 'Comb *' },
        { picture: 'Flower **' },
        { picture: 'Toothbrush **' },
        { picture: 'Mushroom *' },
        { picture: 'Camel **' },
        { picture: 'Mask **' },
        { picture: 'Volcano **' },
        { picture: 'Seahorse *' },
        { picture: 'Canoe */**' },
        { picture: 'Beaver *' },
        { picture: 'Harmonica **' },
        { picture: 'Dominoes **' },
        { picture: 'Hammock **' },
        { picture: 'Unicorn *' },
        { picture: 'Funnel **' },
        { picture: 'Tripod *' },
        { picture: 'Hourglass *' },
        { picture: 'Tongs */**' },
        { picture: 'Abacus *' }
      ],
      totalCorrectA: 0,
      totalCorrectC: 0,
    };
  },
  methods: {
    showCheckboxA(picture) {
      if((picture.includes('*') && !picture.includes('**')) || picture.includes('*/**')) {
        return true;
      }
      return false;
    },
    showCheckboxC(picture) {
      return picture.includes('**') || picture.includes('*/**');
    },
    updateTotals() {
      this.totalCorrectA = this.tableData.filter(item => item.correctA).length;
      this.totalCorrectC = this.tableData.filter(item => item.correctC).length;
    }
  },
  mounted() {
    this.updateTotals();
  }
};
</script>

<style scoped>
.instructions {
  font-size: 20px;
  line-height: 1.5;
}

.table-container {
  margin: 20px;
}

.styled-table {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  border-collapse: collapse;
}

.styled-table th,
.styled-table td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}

.styled-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

input[type="text"] {
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
}

input[type="checkbox"] {
  margin: auto;
  display: block;
}
</style>
