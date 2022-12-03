<template>
  <div v-if="role=='screen'" class="full">
    <Missie  text="Missie 2" />
    <audio-start audio="/2022/audio/start-missie-3.mp3" re />
  </div>
  <div v-else-if="role== 'admin'">
    <next-scene-button  :role="role" />
  </div>
  <div v-else>
    <Missie text="Luister naar sinterklaas"/>
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
export default class scene21 extends Vue {
@Prop({required:true})role!: Roles
}
</script>

<style scoped lang="less">

</style>
    