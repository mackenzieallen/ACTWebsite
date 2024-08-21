<template>
  <div id="app">
    <div v-if="currentRouteName !== 'CASI'">
      <NavigationBar />

      <router-link v-for="route in $router.options.routes" :key="route.path" :to="route.path">
        {{ route.name }}
      <br>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';

export default {
  components: {
        NavigationBar
    },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
};
</script>