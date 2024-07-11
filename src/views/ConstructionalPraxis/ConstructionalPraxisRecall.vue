<template>
    <BaseLayout :heading="'Constructional Praxis Recall'" />

    <div class="instructions">
        "A while ago, I showed you some drawings on separate pieces of paper. You looked at each drawing and then drew it on the same sheet of paper. Do you remember them? I would like for you to draw them on this sheet, this time from memory."
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
</style>
  