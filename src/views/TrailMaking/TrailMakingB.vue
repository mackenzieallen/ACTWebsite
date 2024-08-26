<template>
    <BaseLayout :heading="'Trail Making B'" />

    <div class="instructions"> 
        <ul>
            <li>Provide the participant with a pen or pencil.</li>
            <li>If participant makes more than 5 errors or goes over 300 seconds, discontinue.</li>
            <li>If participant makes more than 4 errors on sample, discontinue.</li>
            <li>Time limit: 300 seconds or 5 errors</li>
        </ul>

        <div>
            <b><u>Sample</u></b>
            <p><b>“This time, I want you to do something different.  I want you to switch between connecting the numbers and letters.  Begin at number 1 and draw a line from 1 to A, A to 2, 2 to B, B to 3 and so on, in order, until you reach the end.  In other words, you will draw a line from a number to a letter, to a number, and so on, in order, until you reach the end.  Do you have any questions?  Draw the lines as quickly as you can without making mistakes.  Go ahead.”</b></p>
            <p>If the examinee completes the sample item correctly in a manner demonstrating the he/she understands what to do, say, <b>“Good.  Now let’s try this one.”</b>  Next, present the test to examinee. </p>
        </div>

        <div>
            <b><u>Test</u></b>
            <p><b>After the participant has completed Sample B, present Part B and say, “On this page are more numbers and letters.  Do this the same way by switching between numbers and letters.  Begin at number 1 and draw a line from the 1 to A, A to 2, 2 to B, B to 3, and so on, in order, until you reach the end.  In other words, you will draw a line from a number to a letter, to a number, and so on, in order, until you reach the end.  Draw the lines as quickly as you can without making mistakes.  Ready? Begin.”</b> Start timing.</p>
            <p>Start timing as soon as the instruction is given to begin.  Remember to be alert for mistakes.  If the participant makes an error, call it to his/her attention immediately, return the participant’s pen or pencil to the last correct circle, and continue the test from that point.  Do not stop timing while correcting the error.</p>
            <p>After the participant completes Part B, take the test sheet and record the time in seconds and record errors on test.  </p>
        </div>
    </div>
    <NotesSection />
</template>
  
<script>
import BaseLayout from '../BaseLayout.vue';
import NotesSection from '../../components/NotesSection.vue';
  
export default {
    components: {
        BaseLayout,
        NotesSection
    }
}
</script>

<style scoped>
.instructions {
    font-size: 18px;
}

.instructions ul {
    padding-left: 0;
    margin-left: 0;
    list-style-position: inside;
}

.instructions li {
    margin-left: 0;
    padding-left: 0;
}
</style>