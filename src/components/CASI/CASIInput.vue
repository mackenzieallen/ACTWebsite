<template>
  <div class="input-group">
    <label :for="input.name" class="input-label">{{ input.label }}</label>

    <div class="label-container">
      <div v-for="(label, index) in input.labelArray" :key="index">
        {{ index + 1 }}. {{ label }}
      </div>
    </div>

    <div class="inputs">
      <CASITextInput
        v-if="input.type === 'text'"
        :input="input"
        :modelValue="modelValue"
      />
      <CASIChoiceInput
        v-if="input.type === 'prompt'"
        :input="input"
        :modelValue="modelValue"
      />
      <CASIScoreInput
        v-if="input.scores"
        :input="input"
        :modelValue="modelValue"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-dupe-keys */

import { defineComponent, toRefs } from 'vue';
import CASITextInput from './CASITextInput.vue';
import CASIChoiceInput from './CASIChoiceInput.vue';
import CASIScoreInput from './CASIScoreInput.vue';

export default defineComponent({
  components: { CASITextInput, CASIChoiceInput, CASIScoreInput },
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
  setup(props) {
    const { input } = toRefs(props);

    return {
      input
    };
  }
});
</script>

<style scoped>
.input-label {
  display: block;
  font-size: 14px;
  margin-bottom: 3px;
}
.inputs {
  display: flex;
}
.label-container {
  font-size: 14px;
}
.input-group {
  margin-bottom: 20px;
}
</style>
