<template>
    <div class="score-section">
        <div class="task-name">
            <span>{{ taskName }}</span>
        </div>
        <div class="scores">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ScoreSection',
    props: {
        taskName: {
            type: String,
            required: true,
        },
    }
};
</script>

<style scoped>
.score-section {
    display: flex;
    border: 1px solid #ccc;
    margin: 10px 0;
    padding: 10px;
    border-radius: 8px;
    background-color: #f9f9f9;
}

.task-name {
    writing-mode: vertical-lr;
    text-orientation: mixed;
    transform: rotate(180deg);
    text-align: center;
    margin-right: 20px;
    font-weight: bold;
    background-color: #317391;
    color: white;
    padding: 10px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.scores {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
  