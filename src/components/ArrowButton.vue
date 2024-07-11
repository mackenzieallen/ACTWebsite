<template>
    <button class="arrow-button" :class="arrowDirection === 'left' ? 'left-arrow' : 'right-arrow'" @click="$emit('clicked')">
      <i :class="arrowDirection === 'left' ? 'fas fa-chevron-left' : 'fas fa-chevron-right'"></i>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      arrowDirection: {
        type: String,
        required: true,
        validator: value => ['left', 'right'].includes(value)
      }
    }
  };
  </script>
  
  <style scoped>
  .arrow-button {
    width: 50px;
    height: 50px;
    background-color: #3986A8;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
  
  .left-arrow {
    padding-right: 5px;
    color: white;
  }
  
  .right-arrow {
    padding-left: 5px;
    color: white;
  }
  </style>
  