<template>
    <div class="input-choice">
        <div
            v-for="(choice, choiceIndex) in input.choices"
            :key="`${input.name}-choice-${choiceIndex}`"
            class="choice-option"
        >
        <input
            type="radio"
            :id="`${input.name}-choice-${choiceIndex}`"
            :name="input.name"
            :value="choice.value || choice"
            v-model="radioSelection"
            @change="emitRadioChange(choice.value || choice)"
        />
        <label :for="`${input.name}-choice-${choiceIndex}`" class="choice-label">
            {{ choice.label || choice }}
        </label>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, toRefs } from 'vue';

export default defineComponent({
props: {
    input: {
        type: Object,
        required: true
    },
    modelValue: {
        type: [String, Number, Object],
        default: ''
    }
},
setup(props) {
    const { input } = toRefs(props);
    const radioSelection = ref(props.modelValue);

    function emitRadioChange(value) {
        console.log(`Radio Change - Name: ${input.value.name}, Value: ${value}`);
        input.value.value.selectedOption = value;
        console.log("Updated JSON:", input.value);
    }

    return {
        radioSelection,
        emitRadioChange
    };
}
});
</script>

<style scoped>
.choice-option input[type="radio"] {
    margin-right: 8px;
    vertical-align: middle;
}
</style>
