<template>
  <div>
    <TextInputWithToggle v-model="inputs" />
    <button>Submit</button>
  </div>
</template>

<script>
import TextInputWithToggle from '../components/TextInputWithToggle.vue';

export default {
  components: {
    TextInputWithToggle
  },
  data() {
    return {
      inputs: [
        { text: '', selectedOption: null }
      ]
    };
  }
};
</script>
