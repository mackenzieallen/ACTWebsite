<template>
    <h2>Anna Thompson</h2>
    <div class="instructions">
      <span>"I am going to read you a little story of just a few lines. Listen carefully and try to remember just the way I say it, as close to the same words you can remember. When I am through, I want you to tell me everything I read to you. You should tell me all you can remember, even if you are not sure. Are you ready?"</span>
      Stories should be read slowly, but with a natural pace and tone.
    </div>
    <v-container style="max-width: 100%;">
      <v-row class="shaded">
        <v-col>
          <label><input type="checkbox" @click="toggleScore(0)" id="annaInput0"/>Anna</label>
          <v-btn icon @click="toggleTooltip(0)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[0]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(0)"></span>
          </v-tooltip>
        </v-col>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(1)" id="annaInput1"/>Thompson</label>
          <v-btn icon @click="toggleTooltip(1)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[1]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(1)"></span>
          </v-tooltip> 
        </v-col>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(2)" id="annaInput2"/>of South</label>
          <v-btn icon @click="toggleTooltip(2)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[2]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(2)"></span>
          </v-tooltip> 
        </v-col>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(3)"  id="annaInput3"/>Boston</label>
          <v-btn icon @click="toggleTooltip(3)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[3]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(3)"></span>
          </v-tooltip> 
        </v-col>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(4)" id="annaInput4"/>employed</label>
          <v-btn icon @click="toggleTooltip(4)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[4]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(4)"></span>
          </v-tooltip> 
        </v-col>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(5)" id="annaInput5"/>as a cook</label>
          <v-btn icon @click="toggleTooltip(5)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[5]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(5)"></span>
          </v-tooltip> 
        </v-col>  
        <v-col class="right">
          {{ rowTotal(0) }}
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(6)" id="annaInput6"/>in a school</label>
          <v-btn icon @click="toggleTooltip(6)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[6]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(6)"></span>
          </v-tooltip> 
        </v-col>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(7)" id="annaInput7"/>cafeteria</label>
          <v-btn icon @click="toggleTooltip(7)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[7]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(7)"></span>
          </v-tooltip> 
        </v-col>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(8)" id="annaInput8"/>reported</label>
          <v-btn icon @click="toggleTooltip(8)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[8]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(8)"></span>
          </v-tooltip> 
        </v-col>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(9)" id="annaInput9"/>at the City Hall</label>
          <v-btn icon @click="toggleTooltip(9)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[9]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(9)"></span>
          </v-tooltip> 
        </v-col>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(10)" id="annaInput10"/>Station</label>
          <v-btn icon @click="toggleTooltip(10)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[10]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(10)"></span>
          </v-tooltip> 
        </v-col>
        <v-col class="right">
          {{ rowTotal(1) }}
        </v-col>
      </v-row>
      <v-row class="shaded">
        <v-col>
          <label><input type="checkbox" @click="toggleScore(11)" id="annaInput11"/>that she had been held up</label>
          <v-btn icon @click="toggleTooltip(11)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[11]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(11)"></span>
          </v-tooltip> 
        </v-col>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(12)" id="annaInput12"/>on State Street</label>
          <v-btn icon @click="toggleTooltip(12)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[12]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(12)"></span>
          </v-tooltip> 
        </v-col>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(13)" id="annaInput13"/>the night before</label>
          <v-btn icon @click="toggleTooltip(13)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[13]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(13)"></span>
          </v-tooltip> 
        </v-col>
        <v-col class="right">
          {{ rowTotal(2) }}
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(14)" id="annaInput14"/>and robbed</label>
          <v-btn icon @click="toggleTooltip(14)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[14]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(14)"></span>
          </v-tooltip> 
        </v-col>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(15)" id="annaInput15"/>of fifty-six dollars.</label>
          <v-btn icon @click="toggleTooltip(15)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[15]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(15)"></span>
          </v-tooltip> 
        </v-col>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(16)" id="annaInput16"/>She had four</label>
          <v-btn icon @click="toggleTooltip(16)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[16]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(16)"></span>
          </v-tooltip> 
        </v-col>
        <v-col class="right">
          {{ rowTotal(3) }}
        </v-col>
      </v-row>
      <v-row class="shaded">
        <v-col>
          <label><input type="checkbox" @click="toggleScore(17)" id="annaInput17"/>small children,</label>
          <v-btn icon @click="toggleTooltip(17)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[17]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(17)"></span>
          </v-tooltip> 
        </v-col>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(18)" id="annaInput18"/>the rent was due</label>
          <v-btn icon @click="toggleTooltip(18)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[18]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(18)"></span>
          </v-tooltip> 
        </v-col>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(19)" id="annaInput19"/>and they had not eaten</label>
          <v-btn icon @click="toggleTooltip(19)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[19]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(19)"></span>
          </v-tooltip> 
        </v-col>
        <v-col class="right">
          {{ rowTotal(4) }}
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(20)" id="annaInput20"/>for two days.</label>
          <v-btn icon @click="toggleTooltip(20)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[20]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(20)"></span>
          </v-tooltip> 
        </v-col>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(21)" id="annaInput21"/>The police,</label>
          <v-btn icon @click="toggleTooltip(21)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[21]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(21)"></span>
          </v-tooltip> 
        </v-col>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(22)" id="annaInput22"/>touched by the woman's story</label>
          <v-btn icon @click="toggleTooltip(22)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[22]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(22)"></span>
          </v-tooltip> 
        </v-col>
        <v-col class="right">
          {{ rowTotal(5) }}
        </v-col>
      </v-row>
      <v-row class="shaded">
        <v-col>
          <label><input type="checkbox" @click="toggleScore(23)" id="annaInput23"/>took up a collection</label>
          <v-btn icon @click="toggleTooltip(23)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[23]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(23)"></span>
          </v-tooltip> 
        </v-col>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(24)" id="annaInput24"/>for her.</label>
          <v-btn icon @click="toggleTooltip(24)">
            <v-icon>mdi-help</v-icon>    
          </v-btn>
          <v-tooltip v-model="show[24]" location="end">
            <template v-slot:activator="{ props }">
              <span v-bind="props"></span>
            </template>
            <span v-html="helpText(24)"></span>
          </v-tooltip> 
        </v-col>
        <v-col></v-col>
        <v-col class="right">
          {{ rowTotal(6) }}
        </v-col>
      </v-row>
      <v-row justify="end" class="total">
        <v-col>
          Total Score: {{ totalScore }}
        </v-col>
      </v-row>
    </v-container>
    <div class="instructions">
      <span>“Now, what did I read to you?  Tell me everything and begin at the beginning.”</span> Record the participant’s story  in the space provided.  After the participant is finished, say <span>“Is there anything else?”</span> one time.
    </div>
    <Wavesurfer4Vue ref="annaPlayer" id="annaPlayer" :ScrollParent="scroll" url="/test.mp3" />
    <v-btn @click="play" color="primary">Play Audio</v-btn>
    <v-btn @click="pause" color="warning">Pause Audio</v-btn>
    <h3>Notes</h3>
    <textarea v-model="annaNotes"></textarea>
  </template>
  
  <script>
    import annaSrc from './data/anna.json'
    import { ref } from 'vue'
    import { watch } from "vue"
    import { useRoute } from "vue-router"
    import { getLocalStorageArray } from './helpers/helpers.js'
  
    const annaPlayer = ref()
    const audioContext = new AudioContext
    
    export default {
      data() {
        return {
          anna: annaSrc,
          annaScores: getLocalStorageArray('anna-scores', new Array(annaSrc.items.length)), 
          currentIndex: 0,
          show: [],
          annaNotes: localStorage.getItem('anna-notes') || "",
          scroll: true
        }
      },
      computed: {
        totalScore() {
          return this.annaScores.reduce((partialSum, a) => partialSum + a, 0)
        }
      },
      watch: {
        annaScores: {
          handler(newScores, oldScores) {
            if ( newScores == null )
              return 
            console.log("got here newScores=" + newScores)
            localStorage.setItem('anna-scores', JSON.stringify(newScores));
          },
          deep: true,
          immediate: true
        },
        annaNotes: {
          handler(newNotes, oldNotes) {
            localStorage.setItem('anna-notes', newNotes)
          }
        }
      },
      methods: {
        toggleTooltip(index) {
          this.show[index] = !this.show[index]
        },
        helpText(index) {
          return "Rules: " + this.anna['items'][index]['rules'] + 
                 "<br/>Accepted: " + this.anna['items'][index]['accepted'].join(', ') + 
                 "<br/>Unaccepted: " + this.anna['items'][index]['unaccepted'].join(', ')
        },
        toggleScore(index) {
          if (this.annaScores[index] == 1){
            this.annaScores[index] = 0
          } else {
            this.annaScores[index] = 1
          }
        }, 
        rowTotal(index) {
          var start, end
          start = end = 0
          if ( index == 0 ){
            start = 0
            end = 6
          } else if ( index == 1 ) {
            start = 6
            end = 11
          } else if ( index == 2 ) {
            start = 11
            end = 14 
          } else if ( index == 3) {
            start = 14 
            end = 17
          } else if ( index == 4 ) {
            start = 17
            end = 20
          } else if ( index == 5 ) {
            start = 20
            end = 23
          } else {
            start = 23
            end = 25
          }
  
          var x = 0
          for ( var y=start; y < end  ; y++ ){
            if ( this.annaScores[y] != null )
              x += this.annaScores[y]
          }
          return x
        }, 
        play() {
          audioContext.resume().then( function() {
            this.$refs.annaPlayer.play()
          }.bind(this))
        },
        pause() {
          this.$refs.annaPlayer.pause()
        },
      },
      mounted() {
        console.log( "got here mounted")
        const route = useRoute()
        watch(route, (to) => {
            if ( this.$refs.annaPlayer.wavesurfer.isPlaying() ) {
              this.$refs.annaPlayer.wavesurfer.pause()
          }
        }, {flush: 'pre', immediate: true, deep: true})
        let defaultArray = new Array(this.anna.items.length)
        for ( let x=0; x < defaultArray.length; x++ )
          defaultArray[x] = 0
        console.log(defaultArray)
        this.annaScores = defaultArray
        console.log('annaScores=' + this.annaScores)
        this.annaScores = getLocalStorageArray('anna-scores', defaultArray)
        console.log('annaScores=' + this.annaScores)
        for ( var x = 0; x < this.annaScores.length; x++ ){
          if ( this.annaScores[x] == 1) {
            document.getElementById('annaInput' + x).checked = true 
          }   
        }
      },
    }
  </script>
  
  <style scoped>
    label {
      margin: .5em;
      border: 1px solid black;
      padding: .5em;
    }
    input[type=checkbox] {
      margin-right: .5em;
    }
    .v-btn--icon.v-btn--density-default {
      height: 24px;
      width: 24px;
    }
    .right {
      text-align: right;
      margin-right: 2.75em;
      width: 1em;
      flex-grow: 0;
    }
  
    .total {
      text-align: right;
      margin-right: 2em;
    }
  
    textarea {
      width: 98%;
      height: 8em;
      border: 1px solid black;
    }
    .instructions {
      margin: 1.5rem;
    }
    .instructions span {
      font-weight: bold;
    }
    .shaded {
      background-color: #eee;
    }
  </style>