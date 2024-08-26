<template>
    <BaseLayout :heading="'Trail Making A'" />

    <div class="instructions"> 
        <ul>
            <li>Provide the participant with a pen or pencil.</li>
            <li>If participant makes more than 5 errors or goes over 180 seconds, stop and go on to the next test.</li>
            <li>If participant makes more than 4 errors on sample, discontinue.</li>
            <li>Time limit: 180 seconds or 5 errors</li>
        </ul>

        <div>
            <b><u>Sample</u></b>
            <p>Place sample for Part A directly in front of the examinee, give the examinee a pencil/pen and say (also make sure you point out the numbers with instructions).</p>
            <p><b>“On this page are some numbers.  Begin at 1 and draw a line from 1 to 2, 2 to 3, 3 to 4 and so on, in order, until you reach the end.  Draw the lines as quickly as you can without making mistakes.  Go ahead.”</b></p>
            <p>If the examinee completes the sample item correctly in a manner demonstrating the he/she understands what to do, say, <b>“Good.  Now let’s try this one.”</b>  Next, present the test to examinee.  </p>
        </div>

        <div>
            <b><u>Test</u></b>
            <p><b>“On this page are numbers.  Do this the same way by connecting the numbers.  Begin at number 1 and draw a line from 1 to 2, 2 to 3, 3 to 4, and so on, in order, until you reach the end (point to numbers as you read instructions).  Draw the lines as quickly as you can without making mistakes.  Ready?  Begin.”</b> Start timing.</p>
            <p>Start timing as soon as the instruction is given to begin.  The psychometrician must watch the participant closely in order to catch any errors as soon as they are made.  If the participant makes an error, call it to his/her attention immediately, return the participant’s pencil to the last correct circle, and continue the test from that point.  Do not stop timing while correcting the error.</p>
            <p>After the participant completes Part A, take the test sheet and record the time in seconds and record errors on test.  Next, tell the participant, <b>“That’s fine.  Now we’ll try another one.”</b></p>
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