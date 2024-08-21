<template>
    <div :class="['progress-box', currentState]">
      <svg v-if="currentState === 'completed'" class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill="#FFFFFF" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StepperProgress',
    props: {
      currentState: {
        type: String,
        required: true,
        validator: value => ['unvisited', 'visited', 'completed'].includes(value)
      }
    }
  };
  </script>
  
  <style scoped>
  .progress-box {
    width: 40px;
    height: 40px;
    border: 2px solid #2FB3AA;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 8px;
    margin-top: 10px;
  }
  
  .progress-box.unvisited {
    border-color: #2FB3AA;
  }
  
  .progress-box.visited {
    background-color: #2FB3AA;
  }
  
  .progress-box.completed {
    background-color: #2FB3AA;
  }
  
  .checkmark {
    width: 20px;
    height: 20px;
    fill: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  </style>
  