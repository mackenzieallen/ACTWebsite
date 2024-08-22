<template>
    <NoteText text="You can make notes on the form below" />

    <div class="text-input-grid">
        <div v-for="(column, index) in columns" :key="index" class="column">
        <div v-for="item in itemsInColumn(index + 1)" :key="item.id" class="input-row">
            <TextInputWithToggle />
        </div>
        </div>
    </div>
</template>

<script>
import TextInputWithToggle from '../TextInputWithToggle.vue';
import NoteText from '../NoteText.vue';

export default {
components: {
    TextInputWithToggle,
    NoteText
},
data() {
    return {
        columns: [1, 2, 3],
        items: Array.from({ length: 60 }, (v, k) => ({ id: k + 1 }))
    };
},
methods: {
    itemsInColumn(columnIndex) {
        const itemsPerColumn = Math.ceil(this.items.length / this.columns.length);
        const startIndex = (columnIndex - 1) * itemsPerColumn;
        const endIndex = Math.min(startIndex + itemsPerColumn, this.items.length);
        return this.items.slice(startIndex, endIndex);
    }
}
};
</script>

<style scoped>
.text-input-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.column {
    flex: 1 1 30%; 
    min-width: 300px;
}

@media (max-width: 768px) {
.column {
    flex-basis: 50%;
}
}

@media (max-width: 480px) {
.column {
    flex-basis: 100%;
}
}

.input-row {
    margin-bottom: 10px;
}
</style>
