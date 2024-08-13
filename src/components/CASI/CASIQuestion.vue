<template>
  <div class="question">
    <p class="question-text">{{ question.question }}</p>
    
    <p v-if="question.examples" class="examples">
      <strong class="examples-title">Examples:</strong>
      <ul class="examples-list">
        <li v-for="(exampleGroup, key) in question.examples" :key="key" class="example-group">
          <div class="example-group-title">{{ key.charAt(0).toUpperCase() + key.slice(1) }} reasons:</div>
          <ul class="example-list">
            <li v-for="(example, index) in exampleGroup" :key="index" class="example-item">{{ example }}</li>
          </ul>
        </li>
      </ul>
    </p>
    
    <p v-if="question.postinstructions" class="postinstructions">{{ question.postinstructions }}</p>
    
    <CASIInput
      v-for="(input, inputIndex) in question.inputs"
      :key="inputIndex"
      :input="input"
      :modelValue="responses[input.name]"
      @update:responses="updateResponse"
    />
  </div>
</template>

<script>
import CASIInput from './CASIInput.vue';

export default {
  components: { CASIInput },
  props: {
    question: Object,
    responses: Object
  },
  methods: {
    updateResponse(name, value) {
      this.$emit('update:responses', name, value);
    }
  }
};
</script>

<style scoped>
.input-group {
  margin-bottom: 16px;
}

.input-label {
  display: block;
  margin-bottom: 8px;
}

.input-field input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.choice-option input[type="radio"] {
  margin-right: 8px;
  vertical-align: middle;
}

.choice-label {
  vertical-align: middle;
}

.examples {
  font-family: Arial, sans-serif;
  margin: 15px 0;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.examples-title {
  font-size: 1.3em;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.examples-list {
  padding-left: 0;
  list-style-type: none;
}

.example-group {
  margin-top: 30px;
}

.example-group-title {
  font-size: 1.1em;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

.example-list {
  padding-left: 20px;
}

.example-item {
  margin-bottom: 5px;
  color: #555;
}
</style>
