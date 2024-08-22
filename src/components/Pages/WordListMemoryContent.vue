<template>
    <div class="word-list-memory-content">
        <div class="row header">
            <div class="column header-column">Can't Read</div>
            <div class="column">Word</div>
            <div class="column header-column">Correct</div>
        </div>
        <div v-for="(word, index) in words" :key="index" class="row">
            <div class="column">
                <input 
                    type="checkbox" 
                    :id="'cant-read-' + index" 
                    v-model="cantReadCheckboxes[index]" 
                    @change="updateCantReadTotal"
                />
            </div>

        <div class="column">{{ word }}</div>
            <div class="column">
            <input 
                type="checkbox" 
                :id="'correct-' + index" 
                v-model="correctCheckboxes[index]" 
                @change="updateCorrectTotal"
            />
            </div>
        </div>

        <div class="row totals">
            <div class="column total-column">Total: {{ cantReadTotal }}</div>
            <div class="column"></div>
            <div class="column total-column">Total: {{ correctTotal }}</div>
        </div>

        <div class="notes-section">
            <label for="notes" class="notes-label">Notes:</label>
            <textarea id="notes" class="notes-input"></textarea>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
      words: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        cantReadCheckboxes: Array(this.words.length).fill(false),
        correctCheckboxes: Array(this.words.length).fill(false),
        cantReadTotal: 0,
        correctTotal: 0
      };
    },
    methods: {
      updateCantReadTotal() {
        this.cantReadTotal = this.cantReadCheckboxes.filter(checked => checked).length;
      },
      updateCorrectTotal() {
        this.correctTotal = this.correctCheckboxes.filter(checked => checked).length;
      }
    },
    watch: {
      words(newWords) {
        this.cantReadCheckboxes = Array(newWords.length).fill(false);
        this.correctCheckboxes = Array(newWords.length).fill(false);
        this.updateCantReadTotal();
        this.updateCorrectTotal();
      }
    },
    mounted() {
      this.updateCantReadTotal();
      this.updateCorrectTotal();
    }
};
</script>

<style scoped>
.word-list-memory-content {
    margin: 20px;
    display: flex;
    flex-direction: column;
    margin: 0 200px;
}

.row {
    display: flex;
    margin-bottom: 10px;
}

.column {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px;
}

.header {
    font-weight: bold;
    border-bottom: 2px solid #ddd;
    padding-bottom: 5px;
    margin-bottom: 10px;
}

.header-column {
    font-weight: bold;
}

.column input[type="checkbox"] {
    margin-right: 5px;
}

.totals {
    font-weight: bold;
}

.total-column {
    display: flex;
    align-items: center;
    justify-content: center;
}

.row:last-child {
    margin-bottom: 0;
}

.notes-section {
    padding: 20px;
}

.notes-label {
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
}

.notes-input {
    width: 100%;
    height: 150px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: vertical;
    background-color: #f0f0f0;
}
  </style>
  