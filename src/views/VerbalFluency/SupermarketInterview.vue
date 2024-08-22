<template>
    <BaseLayout :heading="'Verbal Fluency - Supermarket - Interview'" />

    <div class="instructions">
        <p><b>"I’d like you to name all the things you can find or buy in a supermarket. You will have one minute to name as many different items as fast as you can.” Ready?  Begin.</b> Start timing.</p>
        <p class="emph">Allow one minute. Participant responses should be transcribed verbatim. If the participant gives no response in 15 seconds, repeat the basic instruction. The first time an incorrect answer is provided, say <b>“I want supermarket (grocery store) items.”</b> Do not correct for subsequent errors. If the participant says, <b>“I can’t think of anymore”</b> before 60 seconds have passed, say: <b class="no-emph">“Keep trying.”
        </b></p>
    </div>

    <VerbalFluencyInterview />
</template>

<script>
import BaseLayout from '../BaseLayout.vue';
import VerbalFluencyInterview from '@/components/Pages/VerbalFluencyInterview.vue';

export default {
  components: {
    BaseLayout,
    VerbalFluencyInterview
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
.no-emph {
    font-style: normal;
}
</style>