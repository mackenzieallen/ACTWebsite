import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/HomePage.vue';
import PageIndex from '../views/PageIndex.vue';
import LogicalMemoryAnna from '../views/LogicalMemory/LogicalMemoryAnna.vue';
import LogicalMemoryRobert from '../views/LogicalMemory/LogicalMemoryRobert.vue';
import LetterFInterview from '../views/VerbalFluency/LetterFInterview.vue';
import LetterFTranscription from '../views/VerbalFluency/LetterFTranscription.vue';
import SupermarketInterview from '../views/VerbalFluency/SupermarketInterview.vue';
import SupermarketTranscription from '../views/VerbalFluency/SupermarketTranscription.vue';
import WordListTrial1 from '../views/WordList/WordListTrial1.vue';
import WordListTrial2 from '../views/WordList/WordListTrial2.vue';
import WordListTrial3 from '../views/WordList/WordListTrial3.vue';
import WordListRecall from '../views/WordList/WordListRecall.vue';
import WordListRecognition from '../views/WordList/WordListRecognition.vue';
import ConstructionalPraxisInitial from '../views/ConstructionalPraxis/ConstructionalPraxisInitial.vue';
import ConstructionalPraxisRecall from '../views/ConstructionalPraxis/ConstructionalPraxisRecall.vue';
import ClockDrawing from '../views/ClockDrawing.vue';
import WAIS from '../views/WAIS.vue';
import TrailMakingA from '../views/TrailMaking/TrailMakingA.vue';
import TrailMakingB from '../views/TrailMaking/TrailMakingB.vue';
import BostonNaming from '../views/BostonNaming.vue';
import CASI from '../views/CASI.vue';
import VPASet1 from '../views/VerbalPairedAssociates/VPASet1';
import VPASet2 from '../views/VerbalPairedAssociates/VPASet2';
import VPASet3 from '../views/VerbalPairedAssociates/VPASet3';
import VPARecall from '../views/VerbalPairedAssociates/VPARecall';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/page-index',
    name: 'Page Index',
    component: PageIndex
  },
  {
    path: '/logical-memory/anna',
    name: 'Logical Memory - Anna',
    component: LogicalMemoryAnna
  },
  {
    path: '/logical-memory/robert',
    name: 'Logical Memory - Robert',
    component: LogicalMemoryRobert
  },
  {
    path: '/verbal-fluency/letter-f/interview',
    name: 'Verbal Fluency - Letter F - Interview',
    component: LetterFInterview
  },
  {
    path: '/verbal-fluency/letter-f/transcription',
    name: 'Verbal Fluency - Letter F - Transcription',
    component: LetterFTranscription
  },
  {
    path: '/verbal-fluency/supermarket/interview',
    name: 'Verbal Fluency - Supermarket - Interview',
    component: SupermarketInterview
  },
  {
    path: '/verbal-fluency/supermarket/transcription',
    name: 'Verbal Fluency - Supermarket - Transcription',
    component: SupermarketTranscription
  },
  {
    path: '/word-list/trial1',
    name: 'Word List - Trial 1',
    component: WordListTrial1
  },
  {
    path: '/word-list/trial2',
    name: 'Word List - Trial 2',
    component: WordListTrial2
  },
  {
    path: '/word-list/trial3',
    name: 'Word List - Trial 3',
    component: WordListTrial3
  },
  {
    path: '/word-list/recall',
    name: 'Word List - Recall',
    component: WordListRecall
  },
  {
    path: '/word-list/recognition',
    name: 'Word List - Recognition',
    component: WordListRecognition
  },
  {
    path: '/constructional-praxis/intitial',
    name: 'Constructional Praxis - Initial',
    component: ConstructionalPraxisInitial
  },
  {
    path: '/constructional-praxis/recall',
    name: 'Constructional Praxis - Recall',
    component: ConstructionalPraxisRecall
  },
  {
    path: '/clock-drawing',
    name: 'Clock Drawing',
    component: ClockDrawing
  },
  {
    path: '/WAIS',
    name: 'WAIS',
    component: WAIS
  },
  {
    path: '/trail-making/a',
    name: 'Trail Making A',
    component: TrailMakingA
  },
  {
    path: '/trail-making/b',
    name: 'Trail Making B',
    component: TrailMakingB
  },
  {
    path: '/boston-naming',
    name: 'Boston Naming',
    component: BostonNaming
  },
  {
    path: '/CASI',
    name: 'CASI',
    component: CASI
  },
  {
    path: '/verbal-paired-associates/set1',
    name: 'Verbal Paired Associates - Set 1',
    component: VPASet1
  },
  {
    path: '/verbal-paired-associates/set2',
    name: 'Verbal Paired Associates - Set 2',
    component: VPASet2
  },
  {
    path: '/verbal-paired-associates/set3',
    name: 'Verbal Paired Associates - Set 3',
    component: VPASet3
  },
  {
    path: '/verbal-paired-associates/recall',
    name: 'Verbal Paired Associates - Recall',
    component: VPARecall
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
