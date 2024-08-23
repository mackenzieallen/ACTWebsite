<template>
  <div id="app">
    <Stepper />
    <router-view></router-view>
  </div>
</template>

<script>
import Stepper from './components/Stepper.vue';

export default {
  components: {
    Stepper
  }
};
</script>