<template>
    <router-link v-for="route in $router.options.routes" :key="route.path" :to="route.path">
        {{ route.name }}
        <br>
    </router-link>
</template>