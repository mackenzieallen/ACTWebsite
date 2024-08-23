<template>
    <BaseLayout :heading="'Verbal Paired Associates - Set 1'" />

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
      trialWords: ['Metal', 'Baby', 'Crush', 'School', 'Rose', 'Obey', 'Fruit', 'Cabbage'],
      trialPairs: ['Iron', 'Cries', 'Dark', 'Grocery', 'Flower', 'Inch', 'Apple', 'Pen'],
      tableData: [
        { word: 'Fruit', expected: 'Apple', difficulty: 'easy' },
        { word: 'Obey', expected: 'Inch', difficulty: 'hard' },
        { word: 'Rose', expected: 'Flower', difficulty: 'easy' },
        { word: 'Baby', expected: 'Cries', difficulty: 'easy'},
        { word: 'Cabbage', expected: 'Pen', difficulty: 'hard'},
        { word: 'Metal', expected: 'Iron', difficulty: 'easy' },
        { word: 'School', expected: 'Grocery', difficulty: 'hard' },
        { word: 'Crush', expected: 'Dark', difficulty: 'hard' }
      ]
    };
  }
};
</script>

<style scoped>
</style>