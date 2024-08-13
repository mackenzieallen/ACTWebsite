<template>
  <div class="input-group">
    <label :for="input.name" class="input-label">{{ input.label }}</label>

    <div v-if="input.type === 'text'" class="input-field">
      <input :type="input.type" :id="input.name" v-model="textInput" />
    </div>

    <div v-if="input.type === 'choice' || input.type === 'prompt'" class="input-choice">
      <div v-for="(choice, choiceIndex) in input.choices" :key="`${input.name}-choice-${choiceIndex}`" class="choice-option">
        <input
          type="radio"
          :id="`${input.name}-choice-${choiceIndex}`"
          :name="input.name"
          :value="choice.value || choice"
          v-model="radioSelection"
          @change="emitRadioChange(input.name, choice.value || choice)"
        />
        <label :for="`${input.name}-choice-${choiceIndex}`" class="choice-label">{{ choice.label || choice }}</label>
      </div>
    </div>

    <div v-if="input.scores" class="input-scores">
      <div v-for="(score, scoreIndex) in input.scores" :key="`score-${scoreIndex}`" class="choice-option">
        <input
          type="radio"
          :id="`score-${scoreIndex}`"
          :name="input.name"
          :value="score.value"
          v-model="radioSelection"
          @change="emitRadioChange(input.name, score.value)"
        />
        <label :for="`score-${scoreIndex}`" class="choice-label">
          {{ score.label ? score.label : score.value }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-dupe-keys */

import { defineComponent, ref, toRefs } from 'vue';

export default defineComponent({
  props: {
    input: {
      type: Object,
      required: true
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },
  emits: ['update:responses'],
  setup(props, { emit }) {
    const { input } = toRefs(props);
    const textInput = ref('');
    const radioSelection = ref(null);

    function emitRadioChange(name, value) {
      emit('update:responses', name, value);
    }

    return {
      input,
      textInput,
      radioSelection,
      emitRadioChange
    };
  }
});
</script>

<style scoped>
.input-scores {
  margin-top: 10px;
  margin-bottom: 30px;
}
</style>