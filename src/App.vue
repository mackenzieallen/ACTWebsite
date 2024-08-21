<template>
  <div id="app">
    <div v-if="currentRouteName !== 'CASI'">
      <router-link v-for="route in $router.options.routes" :key="route.path" :to="route.path">
        {{ route.name }}
      <br>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
};
</script>