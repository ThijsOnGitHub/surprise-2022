<template>
  <div v-if="role === 'screen'" class="full">
    <Missie  text="Hier ligt het cadeautje:  🚲🎅😂😎🧀🍗🏠🎁💚🎉" />
    <AudioStart audio="/2022/audio/achtergrond_muziek.mp3" :repeat="true" />
  </div>
  <div v-else-if="role== 'admin'">
    <next-scene-button  :role="role" />
  </div>
  <div v-else class="full">
    <Missie :text="showAnswer"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Roles} from "@/Interfaces/sessionInterface";
import {Prop} from "vue-property-decorator";
import AudioStart from "@/components/sceneItems/AudioStart.vue";
import NextSceneButton from "@/components/sceneItems/NextSceneButton.vue";
import Missie from "@/components/sceneItems/Missie.vue";
import scene4 from "@/components/scenes/global/scene4.vue";
import SoundQuestion from "@/components/sceneItems/SoundQuestion.vue";
import TussenStand from "@/components/sceneItems/TussenStand.vue";
@Component({
  components: {TussenStand, SoundQuestion, NextSceneButton, AudioStart,Missie,scene4}
})
export default class scene22 extends Vue {
@Prop({required:true})role!: Roles


  answers = ["🚲=S","🎅=P","😂=O","😎=R","🧀=T","🍗=K","🏠=A","🎁=M","💚=E","🎉=R","🎀=G","🎞=F","🧵=Q","🎄=B"];
  mixedAnswers = this.answers.sort(() => Math.random() - 0.5);

  interval:number|undefined = undefined
  counter=0
  get index(){
    return this.counter % this.mixedAnswers.length
  }

  get showAnswer(){
    return this.mixedAnswers[this.index]
  }

  mounted() {
    this.interval = setInterval(() => {
      this.counter++
    }, 5000);
  }

  beforeDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}
</script>

<style scoped lang="less">

</style>
    