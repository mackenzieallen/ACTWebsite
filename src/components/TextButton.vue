<template>
    <button :class="['square-button', { 'dark': dark }]">
        <span>{{ buttonText }}</span>
    </button>
</template>

<script>
export default {
    name: 'TextButton',
    props: {
        buttonText: {
            type: String,
            required: true
        },
        dark: {
            type: Boolean,
            default: true
        }
    }
};
</script>

<style scoped>
.square-button {
    min-width: 40px;
    height: 40px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: white;
    border: 2px solid #3986A8;
    color: #3986A8;
    font-size: 1rem;
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
