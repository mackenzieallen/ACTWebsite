<template>
  <div class="input-group">
    <label :for="input.name" class="input-label">{{ input.label }}</label>

    <div v-if="input.type === 'text'" class="input-field">
      <input :type="input.type" :id="input.name" v-model="modelValue" />
    </div>

    <div v-if="input.type === 'choice' || input.type === 'prompt'" class="input-choice">
      <div v-if="input.choices" class="choice-section">
        <div v-for="(choice, choiceIndex) in input.choices" :key="choiceIndex" class="choice-option">
          <input
            type="radio"
            :id="input.name + '-choice-' + choiceIndex"
            :name="input.name"
            :value="choice.value !== undefined ? choice.value : choice"
            v-model="modelValue"
            @change="emitChange(input.name, choice.value !== undefined ? choice.value : choice)"
          />
          <label :for="input.name + '-choice-' + choiceIndex" class="choice-label">{{ choice.label !== undefined ? choice.label : (choice.value !== undefined ? choice.value : choice) }}</label>
        </div>
      </div>
    </div>

    <div v-if="input.scores" class="input-scores">
      <strong>Scores:</strong>
      <div v-for="(score, scoreIndex) in input.scores" :key="scoreIndex" class="choice-option">
        <input
          type="radio"
          :id="'score-' + scoreIndex"
          :name="input.name"
          :value="score.value"
          v-model="modelValue"
          @change="emitChange(input.name, score.value)"
        />
        <label :for="'score-' + scoreIndex" class="choice-label">{{ score.value }} {{ score.label }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    input: Object,
    modelValue: [String, Number]
  },
  methods: {
    emitChange(name, value) {
      this.$emit('update:responses', name, value);
    }
  }
};
</script>

<style scoped>
.input-choice input[type="radio"] {
  margin-right: 8px;
}

.choice-option {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.choice-label {
  margin-left: 8px;
}
</style>
  