<template>
  <BaseLayout :heading="'Verbal Fluency - Supermarket - Transcription'" />
  <VerbalFluencyTranscription />
</template>

<script>
import BaseLayout from '../BaseLayout.vue';
import VerbalFluencyTranscription from '@/components/Pages/VerbalFluencyTranscription.vue';

export default {
  components: {
    BaseLayout,
    VerbalFluencyTranscription
  }
}
</script>