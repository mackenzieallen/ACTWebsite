<template>
  <div id="app">
    <router-link v-for="route in $router.options.routes" :key="route.path" :to="route.path">
      {{ route.name }}
      <br>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

};
</script>