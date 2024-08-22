<template>
  <div id="app">
    <div v-if="currentRouteName !== 'CASI'">
      <Stepper />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Stepper from './components/Stepper.vue';

export default {
  components: {
        Stepper
    },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
};
</script>