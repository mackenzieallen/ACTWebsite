<template>
    <div class="container">
        <div class="play-buttons">
            <TextButton buttonText="Play Audio" :dark="true"></TextButton>
            <TextButton buttonText="Pause Audio" :dark="true"></TextButton>
            <TextButton buttonText="Add Region" :dark="true"></TextButton>
            <TextButton buttonText="Play Region" :dark="true"></TextButton>
            <TextButton buttonText="Clear Regions" :dark="true"></TextButton>
        </div>

        <div class="input-container">
            <input type="text" placeholder="Word" />
        </div>

        <div class="correct-buttons">
            <div class="button-with-label">
                <TextButton buttonText="Correct" :dark="false"></TextButton>
                <span class="label">Correct Repeats: 0</span>
            </div>
            <div class="button-with-label">
                <TextButton buttonText="Incorrect" :dark="false"></TextButton>
                <span class="label">Incorrect Repeats: 0</span>
            </div>
        </div>
    </div>
</template>

<script>
import TextButton from '../TextButton.vue';

export default {
    components: {
        TextButton
    }
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 20px;
    height: 100vh;
    text-align: center;
}

.play-buttons,
.correct-buttons {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.input-container {
    margin-bottom: 20px;
}

.input-container input {
    width: 400px;
    padding: 12px;
    margin: 0 10px;
    box-sizing: border-box;
}

.additional-buttons {
    gap: 20px;
}

.button-with-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
}

.label {
    margin-top: 10px;
}
</style>
