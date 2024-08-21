<template>
    <button :class="['square-button', { 'dark': dark }]">
        <i class="fas fa-minus"></i>
    </button>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';

export default {
    name: 'MinusButton',
    props: {
        dark: {
            type: Boolean,
            default: true
        }
    }
};
</script>

<style scoped>
.square-button {
    width: 40px;
    height: 40px;
    border: 2px solid #3986A8;
    color: #3986A8;
    font-size: 1.5rem;
    font-weight: bold;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.square-button.dark {
    background-color: #3986A8;
    color: white;
}
</style>
