<template>
  <div class="army army_background">
    <SoundQuestion
        :role="role"
        ask-question="Luister goed welk liedje en maak hem af"
        ask-question-audio="/2022/audio/m-4-q.mp3"
        answer-audio="/2022/audio/m-4-a.mp3"
        question="Hoe gaat dit liedje verder?"
        correct-answer="Wees maar gerust mijn kind"
        :wrong-answers="['Wees maar gerust mijn vrind','Het is de echte sint nicloaas','Is hij groot of heel klein']"
        show-answer-after="5000"
        total-seconds="30"
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
export default class scene17 extends Vue {
@Prop({required:true})role!: Roles
}
</script>

<style scoped lang="less">

</style>
    