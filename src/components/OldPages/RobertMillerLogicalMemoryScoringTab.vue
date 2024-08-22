<template>
    <h2>Robert Miller</h2>
    <div class="instructions">
      <span>“Now I am going to read to you another little story and see how much of it you can remember. As with the first story, try to remember it just the way I say it. Ready?”</span>
    </div>
    <v-container style="max-width: 100%;">
      <v-row class="shaded">
        <v-col>
          <label><input type="checkbox" @click="toggleScore(0)" id="input0"/>Robert</label>
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
          <label><input type="checkbox" @click="toggleScore(1)" id="input1"/>Miller</label>
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
          <label><input type="checkbox" @click="toggleScore(2)" id="input2"/>was driving</label>
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
          <label><input type="checkbox" @click="toggleScore(3)" id="input3"/>a ten-ton</label>
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
          <label><input type="checkbox" @click="toggleScore(4)" id="input4"/>truck</label>
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
        <v-col class="right">
          {{ rowTotal(0) }}
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(5)" id="input5"/>down a highway</label>
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
        <v-col>
          <label><input type="checkbox" @click="toggleScore(6)" id="input6"/>at night</label>
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
          <label><input type="checkbox" @click="toggleScore(7)" id="input7"/>in the Mississippi</label>
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
          <label><input type="checkbox" @click="toggleScore(8)" id="input8"/>Delta,</label>
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
        <v-col class="right">
          {{ rowTotal(1) }}
        </v-col>
      </v-row>
      <v-row class="shaded">
        <v-col>
          <label><input type="checkbox" @click="toggleScore(9)" id="input9"/>carrying eggs</label>
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
          <label><input type="checkbox" @click="toggleScore(10)" id="input10"/>to Nashville,</label>
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
        <v-col>
          <label><input type="checkbox" @click="toggleScore(11)" id="input11"/>when his axle</label>
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
          <label><input type="checkbox" @click="toggleScore(12)" id="input12"/>broke.</label>
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
        <v-col class="right">
          {{ rowTotal(2) }}
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(13)" id="input13"/>His truck skidded</label>
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
        <v-col>
          <label><input type="checkbox" @click="toggleScore(14)" id="input14"/>off the road</label>
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
          <label><input type="checkbox" @click="toggleScore(15)" id="input15"/>into a ditch.</label>
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
        <v-col class="right">
          {{ rowTotal(3) }}
        </v-col>
      </v-row>
      <v-row class="shaded">
        <v-col>
          <label><input type="checkbox" @click="toggleScore(16)" id="input16"/>He was thrown</label>
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
        <v-col>
          <label><input type="checkbox" @click="toggleScore(17)" id="input17"/>against the dashboard</label>
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
          <label><input type="checkbox" @click="toggleScore(18)" id="input18"/>and was badly shaken.</label>
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
        <v-col class="right">
          {{ rowTotal(4) }}
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(19)" id="input19"/>There was no traffic,</label>
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
        <v-col>
          <label><input type="checkbox" @click="toggleScore(20)" id="input20"/>and he doubted help would come.</label>
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
        <v-col class="right">
          {{ rowTotal(5) }}
        </v-col>
      </v-row>
      <v-row class="shaded">
        <v-col>
          <label><input type="checkbox" @click="toggleScore(21)" id="input21"/>Just then his two-way radio</label>
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
          <label><input type="checkbox" @click="toggleScore(22)" id="input22"/>buzzed.</label>
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
        <v-col>
          <label><input type="checkbox" @click="toggleScore(23)" id="input23"/>He quickly answered,</label>
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
        <v-col class="right">
          {{ rowTotal(6) }}
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <label><input type="checkbox" @click="toggleScore(24)" id="input24"/>"This is Grasshopper."</label>
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
        <v-col class="right">
          {{ rowTotal(7) }}
        </v-col>
      </v-row>
      <v-row justify="end" class="total">
        <v-col>
          Total Score: {{ totalScore }}
        </v-col>
      </v-row>
    </v-container>
    <div class="instructions">
      <span>“Now, what did I read to you?  Tell me everything and begin at the beginning.”</span> Record the participant’s story  in the space provided.  After the participant is finished, say <span>“Is there anything else?”</span> one time.<br/><br/>
      <span>“Later on I will ask you to tell me these stories again, so try to remember them.”</span>
    </div>
    <div>
      <Wavesurfer4Vue ref="robertPlayer" id="robertPlayer" :ScrollParent="scroll" url="/test.mp3" />
      <v-btn @click="play" color="primary">Play Audio</v-btn>
      <v-btn @click="pause" color="warning">Pause Audio</v-btn>
    </div>
    <h3>Notes</h3>
    <textarea v-model="robertNotes"></textarea>
  </template>
  
  <script>
    import robertSrc from './data/robert.json'
    import { ref } from 'vue'
    import { watch } from "vue"
    import { useRoute } from "vue-router"
    import { getLocalStorageArray } from './helpers/helpers.js'
  
    const robertPlayer = ref()
    const audioContext = new AudioContext
    
    export default {
      data() {
        return {
          robert: robertSrc,
          robertScores: getLocalStorageArray('robert-scores', new Array(robertSrc.items.length)), 
          currentIndex: 0,
          show: [],
          robertNotes: localStorage.getItem('robert-notes') || "",
          scroll: true
        }
      },
      computed: {
        totalScore() {
          return this.robertScores.reduce((partialSum, a) => partialSum + a, 0)
        }
      },
      watch: {
        robertScores: {
          handler(newScores, oldScores) {
            localStorage.setItem('robert-scores', JSON.stringify(newScores));
          },
          deep: true,
          immediate: false
        },
        robertNotes: {
          handler(newNotes, oldNotes) {
            localStorage.setItem('robert-notes', newNotes)
          }
        }
      },
      methods: {
        toggleTooltip(index) {
          this.show[index] = !this.show[index]
        },
        helpText(index) {
          return "Rules: " + this.robert['items'][index]['rules'] + 
                 "<br/>Accepted: " + this.robert['items'][index]['accepted'].join(', ') + 
                 "<br/>Unaccepted: " + this.robert['items'][index]['unaccepted'].join(', ')
        },
        toggleScore(index) {
          if (this.robertScores[index] == 1){
            this.robertScores[index] = 0
          } else {
            this.robertScores[index] = 1
          }
        }, 
        rowTotal(index) {
          var start, end
          start = end = 0
          if ( index == 0 ){
            start = 0
            end = 5
          } else if ( index == 1 ) {
            start = 5
            end = 9
          } else if ( index == 2 ) {
            start = 9
            end = 13 
          } else if ( index == 3) {
            start = 13
            end = 16
          } else if ( index == 4 ) {
            start = 16
            end = 19
          } else if ( index == 5 ) {
            start = 19
            end = 21
          } else if ( index == 6 ) {
            start = 21
            end = 24
          } else {
            start = 24
            end = 25
          }
  
          var x = 0
          for ( var y=start; y < end  ; y++ ){
            if ( this.robertScores[y] == null)
              this.robertScores[y] = 0
            x += this.robertScores[y]
          }
          return x
        }, 
        play() {
          audioContext.resume().then( function() {
            this.$refs.robertPlayer.play()
          }.bind(this))
        },
        pause() {
          this.$refs.robertPlayer.pause()
        }
      },
      checkBox(index) {
  
      },
      mounted() {
        const route = useRoute()
        watch(route, (to) => {
          if ( this.$refs.robertPlayer.wavesurfer.isPlaying() ) {
            this.$refs.robertPlayer.wavesurfer.pause()
          }
        }, {flush: 'pre', immediate: true, deep: true})
        
        for ( var x = 0; x < this.robertScores.length; x++ ){
          if ( this.robertScores[x] == 1) {
            document.getElementById('input' + x).checked = true 
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