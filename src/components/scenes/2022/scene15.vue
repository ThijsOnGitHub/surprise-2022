<template>
  <div class="army army_background">
    <SoundQuestion
        :role="role"
        ask-question="Luister naar dit liedje en maak hem af"
        ask-question-audio="/2022/audio/m-2-q.mp3"
        answer-audio="/2022/audio/m-2-a.mp3"
        question="Hoe gaat dit liedje verder?"
        correct-answer="Wie brengt een zak vol lekkers mee, Sint Nicolaas hoezee!"
        :wrong-answers="['Wie brengt een zak vol lekkers mee, Sinterklaas hoezee!','Wie neemt er wat lekkers mee, Sinterklaas hoezee!', 'Wie neemt er wat lekkers mee, Sint Nicolaas hoezee!']"
        show-answer-after="9000"
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
export default class scene15 extends Vue {
@Prop({required:true})role!: Roles
}
</script>

<style scoped lang="less">

</style>
    