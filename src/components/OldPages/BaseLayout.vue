<template>
    <v-app>
      <v-card class="mx-auto">
        <v-navigation-drawer permanent app>
          <v-list>
            <v-list-item v-for="item in items" :key="item.value" density="false">
              <ion-button :color="getColor(item.level, item.value)" 
                          @click="router.push('/' + item.value)" 
                          class="item-buttons ion-text-wrap" 
                          expand="full">
                <v-list-item-title class="item-title">{{ item.title }}</v-list-item-title>
              </ion-button>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
  
        <v-app-bar color="primary" density="compact" app>
          <v-app-bar-title>ACT Scoring</v-app-bar-title>
        </v-app-bar>
  
        <v-main class="main-content">
          <v-container fluid id="container">
            <slot></slot>
          </v-container>
        </v-main>
      </v-card>
    </v-app>
  </template>
  
  <style scoped>
  #container {
    padding: 16px;
  }
  .item-buttons {
    font-weight: bold;
    width: 100%;
    border: 1px solid grey;
  }
  .v-list-item {
    padding: 0;
  }
  .item-title {
    text-align: left !important;
    width: 100%;
  }
  .main-content {
    margin-left: 25px;
    margin-right: 25px;
  }
  </style>
  
  <script>
    import { useRouter } from 'vue-router';
  
    export default {
      setup() {
        const router = useRouter();
  
        const isCurrentRoute = (route) => {
          const currentPath = router.currentRoute.value.path.replace(/^\/|\/$/g, '');
          const targetPath = route.replace(/^\/|\/$/g, '');
          return currentPath === targetPath;
        };
  
        const getColor = (level, route) => {
          if (isCurrentRoute(route)) {
            return 'medium';
          } 
          else if(level === 'heading') {
              return 'dark'
          } 
          else {
            return 'light';
          }
        };
        
        return { router, getColor };
      }
    };
  </script>
  