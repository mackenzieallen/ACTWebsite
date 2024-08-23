<template>
  <BaseLayout :heading="'Verbal Paired Associates - Set 2'" />

  <VPATable :words="trialWords" :pairs="trialPairs" />

  <VPAContent :tableData="tableData" />
</template>


<script>
import BaseLayout from '../BaseLayout.vue';
import VPATable from '../../components/Pages/VPATable.vue';
import VPAContent from '../../components/Pages/VPAContent.vue';

export default {
  components: {
    BaseLayout,
    VPATable,
    VPAContent
  },
  data() {
    return {
      trialWords: ['Rose', 'Cabbage', 'Obey', 'Fruit', 'School', 'Metal', 'Crush', 'Baby'],
      trialPairs: ['Flower', 'Pen', 'Inch', 'Apple', 'Grocery', 'Iron', 'Dark', 'Cries'],
      tableData: [
          { word: 'Cabbage', expected: 'Pen', difficulty: 'hard' },
          { word: 'Baby', expected: 'Cries', difficulty: 'easy' },
          { word: 'Metal', expected: 'Iron', difficulty: 'easy' },
          { word: 'School', expected: 'Grocery', difficulty: 'hard'},
          { word: 'Rose', expected: 'Flower', difficulty: 'easy'},
          { word: 'Crush', expected: 'Dark', difficulty: 'hard' },
          { word: 'Fruit', expected: 'Apple', difficulty: 'easy' },
          { word: 'Obey', expected: 'Inch', difficulty: 'hard' }
      ]
    };
  }
};
</script>

<style scoped>
</style>