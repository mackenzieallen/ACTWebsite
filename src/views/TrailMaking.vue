<template>
  <BaseLayout :heading="'Trail Making'" />
  <NotesSection />
</template>

<script>
import BaseLayout from './BaseLayout.vue';
import NotesSection from '../components/NotesSection.vue';

export default {
  components: {
    BaseLayout,
    NotesSection
  }
}
</script>