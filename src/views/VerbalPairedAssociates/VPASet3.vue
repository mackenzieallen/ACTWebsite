<template>
  <BaseLayout :heading="'Verbal Paired Associates - Set 3'" />

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
    trialWords: ['Baby', 'Crush', 'School', 'Rose', 'Cabbage', 'Fruit', 'Obey', 'Metal'],
    trialPairs: ['Cries', 'Dark', 'Grocery', 'Flower', 'Pen', 'Apple', 'Inch', 'Iron'],
    tableData: [
        { word: 'Obey', expected: 'Inch', difficulty: 'hard' },
        { word: 'Fruit', expected: 'Apple', difficulty: 'easy' },
        { word: 'Baby', expected: 'Cries', difficulty: 'easy'},
        { word: 'Metal', expected: 'Iron', difficulty: 'easy' },
        { word: 'Crush', expected: 'Dark', difficulty: 'hard' },
        { word: 'School', expected: 'Grocery', difficulty: 'hard' },
        { word: 'Rose', expected: 'Flower', difficulty: 'easy' },
        { word: 'Cabbage', expected: 'Pen', difficulty: 'hard'}
    ]
  };
}
};
</script>

<style scoped>
</style>