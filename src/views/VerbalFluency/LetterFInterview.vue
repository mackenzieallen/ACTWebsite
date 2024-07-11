<template>
    <BaseLayout :heading="'Verbal Fluency - Letter F - Interview'" />

    <div class="instructions">
        <p><b>"I'm going to say a letter of the alphabet.  When I say begin, I want you to tell me as many words as you can that begin with that letter.  You will have 60 seconds before I tell you to stop.  None of the words can be names of people, or places, or numbers.  For example, if I gave you the letter T, you could say take, toy, tooth, and so forth, but you should not say Tom because that is a person’s name, you should not say Texas because that is the name of a place, and you should not say twelve because that is a number.  Also, do not give me the same word with different endings.  For example, if you say take, you should not also say takes and taking.  Do you have any questions?"</b></p>
        <p><b>The letter is F.  Ready?  Begin.</b> Start timing.</p>
        <p>If the examinee fails to make a response after any 15 – second interval, say <b class="emph">“keep going”</b>.</p>
        <p>The first time an examinee generates three consecutive words that do not start with the designated letter <b class="emph">“F”, say, the letter we are using now is “F”.</b></p>
    </div>
</template>

<script>
import BaseLayout from '../BaseLayout.vue';

export default {
  components: {
    BaseLayout
  }
}
</script>

<style scoped>
.instructions {
    font-size: 20px;
    line-height: 1.5;
}
.emph {
    font-style: italic;
}
</style>