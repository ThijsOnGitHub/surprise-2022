<template>
  <Question
      :role="role"
      :ask-question="askQuestion"
      :correct-answer="correctAnswer"
      :wrong-answers="wrongAnswers"
      :question="question"
      :start-ask-question="startAskQuestion"
      :start-question="startQuestion"
      :start-answer="startAnswer"
      :show-answer-initial="false"
  />
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import Question, {QuestionStateFunction} from "@/components/sceneItems/Question.vue";
import {Roles} from "@/Interfaces/sessionInterface";

@Component({
  components: {Question}
})
export default class SoundQuestion extends Vue {
  @Prop({required:true})role!:Roles
  @Prop({required:true})askQuestion!:string
  @Prop({required:true})correctAnswer!:string
  @Prop({required:true})wrongAnswers!:string
  @Prop({required:true})question!:string
  @Prop({required:true})askQuestionAudio!:string
  @Prop({default:require('@/assets/2021/audio/achtergrond_muziek.mp3')})questionAudio!:string
  @Prop({required:true})answerAudio!:string
  @Prop({default:15})totalSeconds!:number
  @Prop({default:0})showAnswerAfter!:number

  questionInterval : number| null = null
  startAskQuestion:QuestionStateFunction<Question>=(setQuestionState, setState, addAudioFile) => {
    let audioFile = addAudioFile(new Audio(this.askQuestionAudio))
    audioFile.onended =()=>setQuestionState("question")
    audioFile.play()
  }

  startQuestion:QuestionStateFunction<Question>=(setQuestionState, setState, addAudioFile) => {
    addAudioFile(new Audio(this.questionAudio)).play()
    let totalSeconds=this.totalSeconds
    setState({seconds:totalSeconds})
    this.questionInterval=setInterval(()=>{
      totalSeconds--
      setState({seconds:totalSeconds})
      if(totalSeconds<=0){
        setQuestionState("answer")
        if(this.questionInterval){clearInterval(this.questionInterval)}
      }
    },1000)
  }


  startAnswer:QuestionStateFunction<Question>= (setQuestionState, setState, addAudioFile) => {
    if(this.questionInterval){clearInterval(this.questionInterval)}
    let audio = addAudioFile(new Audio(this.answerAudio))
    let count = 0
    const timeout =setInterval(()=>{
      count+=0.5
      console.log(count)
    },500)
    audio.onended = ()=> {
      this.$store.dispatch("setSceneData", {showNext: true})
      clearInterval(timeout)
    }
    audio.play()
    setTimeout(()=>{
     this.$store.dispatch("setSceneData",{showAnswer:true})
    },this.showAnswerAfter)
  }



}

</script>

<style scoped lang="less">
@import (reference) '../../less/main';

</style>
