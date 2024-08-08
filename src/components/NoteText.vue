<template>
    <div class="note-text">
        <div class="note-box">
        <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NoteText',
    props: {
        text: {
        type: String,
        required: true
        }
    }
};
</script>

<style scoped>
.note-text {
    display: flex;
    justify-content: center;
    margin: 20px;
}

.note-box {
    background-color: #EDEDED;
    border-radius: 8px;
    padding: 12px 16px;
    width: 100%;
}
</style>
  