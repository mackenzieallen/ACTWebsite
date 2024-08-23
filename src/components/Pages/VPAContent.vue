<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Word</th>
          <th>Expected</th>
          <th>Recording</th>
          <th>Response</th>
          <th>Easy</th>
          <th>Hard</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index">
          <td>{{ item.word }}</td>
          <td>{{ item.expected }}</td>
          <td>
            <TextButton buttonText="PLAY/PAUSE" :dark="true"></TextButton>
          </td>
          <td><input type="text" v-model="item.response" /></td>
          <td><input v-if="item.difficulty === 'easy'" type="checkbox" v-model="item.easy" /></td>
          <td><input v-if="item.difficulty === 'hard'" type="checkbox" v-model="item.hard" /></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4"></td>
          <td>Total: {{ totalEasy }}</td>
          <td>Total: {{ totalHard }}</td>
        </tr>
      </tfoot>
    </table>

    <NotesSection />
  </div>
</template>

<script>
import TextButton from '../TextButton.vue';
import NotesSection from '../NotesSection.vue';

export default {
  components: {
    TextButton,
    NotesSection
  },
  props: {
    tableData: {
      type: Array,
      required: true
    }
  },
  computed: {
    totalEasy() {
      return this.tableData.filter(item => item.difficulty === 'easy' && item.easy).length;
    },
    totalHard() {
      return this.tableData.filter(item => item.difficulty === 'hard' && item.hard).length;
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  margin-top: 50px;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  vertical-align: middle;
}

th {
  background-color: #f2f2f2;
}

tfoot td {
  font-weight: bold;
  background-color: #f9f9f9;
}

input[type="text"] {
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}

input[type="checkbox"] {
  margin: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

button {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
