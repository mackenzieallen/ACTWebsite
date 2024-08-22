<template>
  <button :class="['arrow-button', arrowDirection, { disabled: isDisabled }]" @click="handleClick" :disabled="isDisabled">
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isDisabled() {
      return this.disabled;
    }
  },
  methods: {
    handleClick() {
      if (!this.isDisabled) {
        this.$emit('clicked');
      }
    }
  }
};
</script>

<style scoped>
.arrow-button {
  width: 38px;
  height: 38px;
  background-color: #3986A8;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
}

.arrow-button.left {
  padding-right: 5px;
}

.arrow-button.right {
  padding-left: 5px;
}

.arrow-button.disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
  border: 2px solid #aaa;
}

.arrow-button.disabled i {
  pointer-events: none;
}
</style>
