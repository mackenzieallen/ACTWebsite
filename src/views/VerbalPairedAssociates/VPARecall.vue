<template>
    <BaseLayout :heading="'Verbal Paired Associates - Recall'" />

    <div class="instructions">
        "Do you remember the list of words that go together, which we read a short while ago? I am going to read the list one more time. After I read a word, see if you can tell me the word that goes with it. Ready? Let's begin.
    </div>

    <VPAContent :tableData="tableData" />
</template>

<script>
import BaseLayout from '../BaseLayout.vue';
import VPAContent from '../../components/Pages/VPAContent.vue';

export default {
    components: {
        BaseLayout,
        VPAContent
    },
    data() {
        return {
            tableData: [
                { word: 'Rose', expected: 'Flower', difficulty: 'easy'},
                { word: 'Metal', expected: 'Iron', difficulty: 'easy' },
                { word: 'School', expected: 'Grocery', difficulty: 'hard'},
                { word: 'Cabbage', expected: 'Pen', difficulty: 'hard' },
                { word: 'Baby', expected: 'Cries', difficulty: 'easy' },
                { word: 'Crush', expected: 'Dark', difficulty: 'hard' },
                { word: 'Obey', expected: 'Inch', difficulty: 'hard' },
                { word: 'Fruit', expected: 'Apple', difficulty: 'easy' }
            ]
        };
    }
}
</script>

<style scoped>
.instructions {
    font-size: 20px;
    line-height: 1.5;
}
</style>
  