<template>
    <transition name="slide">
      <div v-show="isOpen" class="panel">
        <div class="panel-content">
          <p>Panel content.</p>
          <button type="button" @click="closePanel">Close Panel</button>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      openPanel() {
        this.isOpen = true;
      },
      closePanel() {
        this.isOpen = false;
      }
    }
  };
  </script>
  
  <style>
  .panel {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    background-color: #fff;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transform: translateX(100%);
  }
  
  .panel-content {
    padding: 20px;
  }
  
  .slide-enter-active, .slide-leave-active {
    transition: transform 0.3s ease;
  }
  .slide-enter-to, .slide-leave {
    transform: translateX(0);
  }
  .slide-enter, .slide-leave-to {
    transform: translateX(100%);
  }
  </style>
  