<template>
    <div class="input-scores">
        <div
            v-for="(score, scoreIndex) in input.scores"
            :key="`score-${scoreIndex}`"
            class="choice-option"
        >
        <input
            type="radio"
            class="radioButtons"
            :id="`score-${scoreIndex}`"
            :name="input.name"
            :value="score.value"
            v-model="radioSelection"
            @change="emitRadioChange(score.value)"
        />
        <label :for="`score-${scoreIndex}`" class="choice-label">
            {{ score.label ? score.label : score.value }}
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
            //console.log("Updated JSON:", input.value);

            this.$emit('score-added', input.value.scoreLabel, value);

            console.log(`ScoreLabel: ${input.value.scoreLabel}, Selected Score: ${value}`);

        }

        return {
            radioSelection,
            emitRadioChange
        };
    }
    });
</script>

<style scoped>
.input-scores {
    margin-bottom: 30px;
}

.choice-label {
    margin-left: 8px;
    font-size: 14px;
}
.radioButtons {
  accent-color: #237091;;
}
</style>
