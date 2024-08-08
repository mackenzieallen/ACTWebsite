<template>
    <div class="container">
        <div v-for="(input, index) in inputs" :key="index" class="line-input" @click="focusInput(index)">
            <div
                contenteditable
                class="text"
                @input="updateText($event.target.textContent, index)"
                @keydown.enter.prevent
                @blur="blurInput(index)"
                ref="input"
            >{{ input.text }}</div>
            <ThreeWayToggle v-model="input.selectedOption" />
            <div class="input-indicator"></div>
        </div>
    </div>
  </template>
  
<script>
import ThreeWayToggle from './ThreeWayToggle.vue';
  
export default {
    components: {
        ThreeWayToggle
    },
    data() {
        return {
            inputs: [
                { text: '', selectedOption: null }
            ],
            activeIndex: null
        };
    },
    methods: {
        focusInput(index) {
            this.activeIndex = index;
            this.$nextTick(() => {
                this.$refs.input[index].focus();
                this.placeCaretAtEnd(this.$refs.input[index]);
            });
        },
        blurInput(index) {
            this.activeIndex = null;
            this.$refs.input[index].blur();
        },
        updateText(text, index) {
            this.inputs[index].text = text;
        },
        placeCaretAtEnd(el) {
            const range = document.createRange();
            const sel = window.getSelection();
            range.selectNodeContents(el);
            range.collapse(false);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
};
</script>
  
<style scoped>
.container {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
}

.line-input {
    position: relative;
    display: flex;
    align-items: center;
    padding: 8px;
    margin-bottom: 10px;
    cursor: text;
    border-bottom: 1px solid #707070;
}

.line-input:hover {
    background-color: #f0f0f0;
}

.text {
    flex: 1;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    outline: none; 
    cursor: text;
    min-height: 20px;
    font-size: 16px;
    padding: 0;
    border: none;
    resize: none;
}

.input-indicator {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #ccc;
}

button {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
