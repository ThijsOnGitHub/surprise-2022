<template>
  <div class="army army_background">
    <SoundQuestion
        :role="role"
        ask-question="Luister naar dit liedje en maak hem af"
        ask-question-audio="/2022/audio/m-1-q.mp3"
        answer-audio="/2022/audio/m-1-a.mp3"
        question="Hoe gaat dit liedje verder?"
        correct-answer="Kom ook eens bij mij"
        :wrong-answers="['En rij toch niet stilletjes mijn huisje voorbij','Kom jij eens hier','Mag ik mij cadeautje?' ]"
        show-answer-after="5000"
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
export default class scene14 extends Vue {
@Prop({required:true})role!: Roles
}
</script>

<style scoped lang="less">

</style>
    