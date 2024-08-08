<template>
    <div class="toggle">
        <div class="option" :class="{ active: selectedOption === 'c' }" @click="selectOption('c')">C</div>
        <div class="option" :class="{ active: selectedOption === 'i' }" @click="selectOption('i')">I</div>
        <div class="option" :class="{ active: selectedOption === 'r' }" @click="selectOption('r')">R</div>
    </div>
</template>

<script>
export default {
props: {
    modelValue: {
        type: String,
        default: null
    }
},
data() {
    return {
        selectedOption: this.modelValue
    };
},
methods: {
    selectOption(option) {
        this.selectedOption = option;
        this.$emit('update:modelValue', option);
    }
},
watch: {
    modelValue(newValue) {
        this.selectedOption = newValue;
    }
}
};
</script>

<style scoped>
.toggle {
    display: flex;
    justify-content: space-between;
    width: 100px;
    border: 1px solid #3F8FB2;
    border-radius: 10px;
    overflow: hidden;
}

.option {
    flex: 1;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    background-color: white;
    color: #3F8FB2;
    border-right: 1px solid #3F8FB2;
    transition: background-color 0.3s ease;
}

.option:last-child {
    border-right: none;
}

.option.active {
    background-color: #4AA7D0;
    background-image: linear-gradient(to bottom, #4AA7D0, #357A96);
    color: white;
}
</style>
