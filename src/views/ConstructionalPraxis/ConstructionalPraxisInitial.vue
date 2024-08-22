<template>
  <BaseLayout :heading="'Constructional Praxis Initial'" />

  <div class="instructions">
    <p>
      Present item #1, a circle, and say: <b>“Now here is a circle I would like you to draw. Copy it just below it.”</b>  Present the page with the circle to the subject and point to the lower half of the page.
    </p>
    <p>Next, present item #2, a diamond, and say: <b>“Now here’s a drawing of a diamond. Copy it as best you can, just below it.”</b></p>
    <p>
      After the subject has drawn the figure to his or her best ability, present item #3 and say, <b>“That’s fine.  Now draw this third figure.”</b>
    </p>
    <p>
      After this figure, two overlapping rectangles, is drawn, present item #4, a cube, and say, <b>“This is the hardest figure to draw, but take your time.”</b>
    </p>
    <p>
      Give the subject one or two minutes to draw each figure.  Repeat the instructions once if the subject does not understand the first time.  If the subject cannot draw the figure in one minute, reassure and turn to the next one.  Subjects are allowed to erase errors.  A pencil should be used.  Allow multiple self-starts, but do not encourage repeated attempts.  Score the last attempt or the one indicated by the subject.
    </p>
  </div>

  <ConstructionalPraxisContent />
</template>

<script>
import BaseLayout from '../BaseLayout.vue';
import ConstructionalPraxisContent from '../../components/Pages/ConstructionalPraxisContent.vue';

export default {
  components: {
    BaseLayout,
    ConstructionalPraxisContent
  }
}
</script>

<style scoped>
.instructions {
    font-size: 20px;
    line-height: 1.5;
}
</style>
