<template>
    <div class="input-field">
        <input
        type="text"
        :id="input.name"
        v-model="textInput"
        @input="handleTextInput"
        />
    </div>
<pre>{{ input }}</pre>

</template>

<script>
import { defineComponent, ref, toRefs } from 'vue';

export default defineComponent({
    props: {
        input: {
            type: Object,
            required: true
        },
        modelValue: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const { input } = toRefs(props);
        const textInput = ref(props.modelValue);
        let debounceTimeout = null;

        function handleTextInput(event) {
        const value = event.target.value;
        textInput.value = value;

        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        debounceTimeout = setTimeout(() => {
            console.log(`Text Input - Name: ${input.value.name}, Value: ${value}`);
            input.value.value.enteredText = value;
            console.log("Updated JSON:", input.value);
        }, 1000);
        }

        return {
            textInput,
            handleTextInput
        };
    }
    });
</script>

<style scoped>
.input-field input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>
