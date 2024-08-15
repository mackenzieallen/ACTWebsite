<template>
  <div class="input-group">
    <label :for="input.name" class="input-label">{{ input.label }}</label>

    <CASITextInput
      v-if="input.type === 'text'"
      :input="input"
      :modelValue="modelValue"
    />
    <CASIChoiceInput
      v-if="input.type === 'choice' || input.type === 'prompt'"
      :input="input"
      :modelValue="modelValue"
    />
    <CASIScoreInput
      v-if="input.scores"
      :input="input"
      :modelValue="modelValue"
    />
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
  margin-bottom: 8px;
}
</style>
