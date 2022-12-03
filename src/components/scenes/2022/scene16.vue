<template>
  <div class="army army_background">
    <SoundQuestion
        :role="role"
        ask-question="Luister goed welk liedje er hier achterstevoren wordt afgespeeld"
        ask-question-audio="/2022/audio/m-3-aq.mp3"
        answer-audio="/2022/audio/m-3-a.mp3"
        question="Welk liedje werd afgepeeld?"
        correct-answer="De zak van sinterklaas"
        :wrong-answers="['Dit is een pools sinterklaasliedje','Zwarte piet ging uit fietsen', 'Wie komt er alle jaren']"
        show-answer-after="4000"
        total-seconds="20"
    />
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
@Component({
  components: {SoundQuestion, NextSceneButton, AudioStart,Missie,scene4}
})
export default class scene16 extends Vue {
@Prop({required:true})role!: Roles
}
</script>

<style scoped lang="less">

</style>
    