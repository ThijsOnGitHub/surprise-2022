<template>
  <SoundQuestion
    :role="role"
    ask-question="Luister goed naar dit liedje!"
    correct-answer="Zwarte piet ging uit fietsen"
    :wrong-answers="['Daar wordt aan de deur geklopt','Zie gids komt de audi a1','Zie de maan schijnt door de bomen','Zwarte piet ging uit rijden in een audi a1']"
    question="Welk liedje is dit?"
    :ask-question-audio="require('@/assets/audio/vraag_3_vraag.mp3')"
    :answer-audio="require('@/assets/audio/vraag_3_antwoord.mp3')"
    :show-answer-after="4240"
  />
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import Question, {QuestionStateFunction} from "@/components/sceneItems/Question.vue";
import {Roles} from "@/Interfaces/sessionInterface";
import SoundQuestion from "@/components/sceneItems/SoundQuestion.vue";

@Component({
  components: {SoundQuestion, Question}
})
export default class scene7 extends Vue {
@Prop()role!:Roles
}

</script>

<style scoped lang="less">
@import (reference) '../../less/main';

</style>
