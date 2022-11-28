<template>
  <div v-if="role==='screen'||role==='user'" :style="{backgroundColor:backgroundColor}" class="centerContent">
    <p v-if="backgroundColor!='black'">Luister goed naar het liedje!</p>
  </div>
  <div v-else-if="role === 'admin'" class="centerContent">
    <h1>Scene Speelt zich af</h1>
    <NextSceneButton set-show-next="false"/>
  </div>
  <div v-else>

  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import Question, {QuestionStateFunction} from "@/components/sceneItems/Question.vue";
import {Roles} from "@/Interfaces/sessionInterface";
import SoundQuestion from "@/components/sceneItems/SoundQuestion.vue";
import TussenStand from "@/components/sceneItems/TussenStand.vue";
import NextSceneButton from "@/components/sceneItems/NextSceneButton.vue";

@Component({
  components: {NextSceneButton, TussenStand, SoundQuestion, Question}
})
export default class scene12 extends Vue {
@Prop()role!:Roles

  sounds:HTMLAudioElement[]=[new Audio(require('@/assets/audio/scene12_screen.mp3'))]
  interval:number=0
  backgroundColor:string=''

  showNext(){
    this.$store.dispatch("setSceneData",{showNext:true})
  }


  mounted(){

    if(this.role ==='screen'||this.role === 'user'){
      let time=0
      this.interval=setInterval(()=>{
        time+=1
        console.log(time)
        if(time===8){
          this.backgroundColor='black'
        }
        if(time===9){
          this.backgroundColor=''
        }
        if(time===13){
          this.backgroundColor='red'
        }
        if(time===14){
          this.backgroundColor='green'
        }
        if(time===15){
          this.backgroundColor=''
        }
        if(time==16){
          this.backgroundColor='black'
        }
        if(time==17){
          this.backgroundColor=''
        }
        if(time===33){
          this.backgroundColor='black'
        }
        if(time===35){
          this.backgroundColor='yellow'
        }
        if(time===37){
          this.backgroundColor='red'
        }
        if(time==39){
          this.backgroundColor='purple'
        }
        if(time===41){
          this.backgroundColor=''
        }
        if(time==43){
          this.backgroundColor='black'
        }
      },1000)

      if(this.role=='screen'){
        this.sounds[0].onended=this.showNext
        this.sounds[0].play()
      }
      if(this.role==='user'){
      }
    }
  }

  beforeDestroy(){
    this.sounds.forEach(value => value.pause())
    clearInterval(this.interval)
  }

}


</script>

<style scoped lang="less">
@import (reference) '../../less/main';

</style>
