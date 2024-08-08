<template>
  <CASI />  
</template>

<script>
import CASI from '../components/CASI/CASI.vue';

export default {
  components: {
    CASI
  }
}
</script>
    
<style>
.casi {
  max-width: 800px;
  margin: auto;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

h2 {
  color: #555;
  border-bottom: 2px solid #eee;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.section {
  margin-bottom: 30px;
  padding-bottom: 15px;
}

.question {
  margin-bottom: 20px;
}

.question-text {
  font-size: 1.2em;
  margin: 10px 0;
}

.input-group {
  margin: 15px 0;
}

.input-label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

.input-field input {
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.choice-label {
  margin-left: 8px;
}

.submit-button {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: block;
  margin: 30px auto 0;
}

.submit-button:hover {
  background-color: #0056b3;
}

.instructions {
  margin-bottom: 20px;
  font-style: italic;
  color: #555;
}

.introduction {
  margin-bottom: 20px;
  font-style: italic;
  color: #555;
}

.examples {
  margin-bottom: 20px;
  font-style: italic;
  color: #777;
}

.scores {
  margin-top: 10px;
  font-style: italic;
  color: #777;
}

.notes {
  margin-top: 30px;
}
</style>
