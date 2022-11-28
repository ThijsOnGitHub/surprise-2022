<template>
<div v-if="role === 'admin'">
  <h1>De vraag speelt zich vanzelf af</h1>
  <NextSceneButton :set-show-next="false" :restore-state="{questionState:'askQuestion',showAnswer:false}" />
</div>
<div v-else-if="role ==='screen' " class="full">
  <div v-if="state==='askQuestion' " class="centerContent">
    <h1>{{askQuestion}}</h1>
  </div>
  <div v-else-if="state ==='question'" class="centerContent">
    <div class="columnRow">
      <div class="aantal__seconden"><p>{{seconds}}</p></div>
      <h1>{{question}}</h1>
      <div class="optionGrid">
        <p v-for="answer in answers" class="answerButton">{{answer}}</p>
      </div>

    </div>
  </div>
  <div v-else class="centerContent">
    <div class="columnRow">
      <p>{{question}}</p>
      <div class="optionGrid">
        <p v-for="answer in answers" :class="[showAnswer && {'--correct': answer === correctAnswer,'--wrong':answer !== correctAnswer}]" class="answerButton">{{answer}}</p>
      </div>
      <p v-if="showAnswer">Het goede antwoord was: {{correctAnswer}}</p>
    </div>

  </div>
</div>
<div v-else class="full">
  <div v-if="state==='askQuestion' " class="centerContent">
    <h1>{{askQuestion}}</h1>
  </div>
  <div v-else-if="state ==='question'" class="centerContent">
    <div class="columnRow --spaced" v-if="!answerSubmitted">
      <p>{{question}}</p>
      <button @click="submitAnswer(answer)" v-for="answer in answers" class="answerButton">{{answer}}</button>
    </div>
    <div v-else>
      <p>Je antwoord is doorgegeven</p>
    </div>
  </div>
  <div v-else class="full" :style="[showAnswer && {color:correctAnswerSubmitted? 'green' : 'red'}]">
    <div class="centerContent">
      <template v-if="valueAnswerSubmitted === ''" >
        <p>Je hebt geen antwoord gegeven</p>
        <p v-if="showAnswer">Het goede antwoord was: {{correctAnswer}}</p>
      </template>
      <template v-else>
        <p >Je gaf het antwoord: {{valueAnswerSubmitted}}</p>
        <template v-if="showAnswer">
          <p v-if="correctAnswerSubmitted">Je antwoord was goed</p>
          <template v-else>
            <p >Je antwoord was fout</p>
            <p >Het antwoord was: {{correctAnswer}}</p>
          </template>
        </template>

      </template>

      <p v-if="showAnswer">Je hebt nu {{this.$store.getters.userData.gameData.correctAnswers}} punten</p>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {Roles} from "@/Interfaces/sessionInterface";
import {shuffle} from 'lodash'
import NextSceneButton from "@/components/sceneItems/NextSceneButton.vue";

export type QuestionStates = 'answer'|'question'|'askQuestion'
export type QuestionStateFunction<stateType> = (
    setQuestionState:(state:QuestionStates)=>void,
    setState:(newState:Partial<stateType>)=>void,
    addAudioFile:(file:HTMLAudioElement)=>HTMLAudioElement
) => void
export interface QuestionStateObject<valueType>{
  answer:valueType,
  askQuestion:valueType,
  question:valueType
}

export type QuestionStateAudioCallback=(setState:(QuestionStateFunction:QuestionStates)=>void)=>void
@Component({
  components: {NextSceneButton}
})
export default class Question extends Vue {
  @Prop({required:true})role!:Roles
  @Prop({required:true})askQuestion!:string
  @Prop({required:true})question!:string



  @Prop({default:(()=>{})})startAskQuestion!: QuestionStateFunction<this>
  @Prop({default:(()=>{})})startQuestion!:QuestionStateFunction<this>
  @Prop({default:(()=>{})})startAnswer!:QuestionStateFunction<this>


  @Prop({required:true})wrongAnswers!: string[]
  @Prop({required:true})correctAnswer!:string


  get showAnswer(){
    return this.$store.getters.getSceneData.showAnswer
  }

  answers:string[]=[]
  seconds=0
  answerSubmitted:boolean=false
  correctAnswerSubmitted:boolean=false
  valueAnswerSubmitted:string=''

  submitAnswer(answer:string){
    this.answerSubmitted=true
    this.valueAnswerSubmitted = answer
    if(answer === this.correctAnswer){
      console.log('hallo')
      this.correctAnswerSubmitted =true
      this.$store.dispatch("setUserGameData",{correctAnswers:this.$store.getters.userData.gameData.correctAnswers+1})
    }
  }

  setQuestionState(newState:QuestionStates){
    this.$store.dispatch("setSceneData",{questionState:newState})
  }

  setState(state:Partial<this>){
    Object.entries(state).forEach((value)=> {
      //@ts-ignore
      this[value[0]]=value[1]
    })
  }

  addAudioFile(file:HTMLAudioElement){
    this.audioFiles.push(file)
    return file
  }

  audioFiles:HTMLAudioElement[]=[]

  get state():QuestionStates{
    return this.$store.getters.getSceneData.questionState
  }

  unwatchStore:()=>void =()=>{}

  mounted(){
    this.answers.push(...this.wrongAnswers)
    this.answers.push(this.correctAnswer)
    this.answers=shuffle(this.answers)
    if(this.role ==='screen'){
      this.startAskQuestion(this.setQuestionState,this.setState,this.addAudioFile)
      this.unwatchStore=this.$store.watch((state1, getters) => getters.getSceneData,(value,oldValue) => {
        if(value.questionState!==oldValue.questionState){
          this.stopAllSound()
          const state: QuestionStates =value.questionState
          switch (state){
            case "answer":
              this.startAnswer(this.setQuestionState,this.setState,this.addAudioFile)
              break;
            case "question":
              this.startQuestion(this.setQuestionState,this.setState,this.addAudioFile)
              break;
            case "askQuestion":
              this.startAskQuestion(this.setQuestionState,this.setState,this.addAudioFile)
              break;
          }
        }
      })

    }
  }

  stopAllSound(){
    this.audioFiles.forEach(value => {
      value.pause()
      value.currentTime=0
    })
  }


  beforeDestroy(){
    if(this.role === "screen"){
      this.stopAllSound()
      this.unwatchStore()
    }
  }


}
</script>

<style scoped lang="less">
@import (reference) '../../less/main';

.answerButton{
  color: @sintDarkBlue;
  font-family: @sintFont;
  background: #ffc000;
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  margin: 1em;
  height: fit-content;

  &.--correct{
    color: green;
  }

  &.--wrong{
    color:red
  }
}
.answerButton +.answerButton{
  margin: 2vh;
}

.aantal__seconden{
  background: @sintYellow;
  height: 7.2vh;
  width: 7.2vh;
  border-radius: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  >p{
    color: @sintDarkBlue;
  }
}





</style>
