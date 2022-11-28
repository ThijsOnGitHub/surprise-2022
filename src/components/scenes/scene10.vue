<template>
  <SoundQuestion
    :role="role"
    ask-question="Luister goed naar het Sinterklaas!"
    question="Hoe heet de hond van Sinterklaas?"
    correct-answer="Pieter"
    :wrong-answers="['Gierter',
    'Amerigo',
    'Benard van het hooglaagste Duinen',
    'Zwartje'
    ,'Dommie']"
    :ask-question-audio="require('@/assets/audio/vraag_6_vraag.mp3')"
    :answer-audio="require('@/assets/audio/vraag_6_antwoord.mp3')"
    :show-answer-after="3500"
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
export default class scene10 extends Vue {
@Prop()role!:Roles
}

</script>

<style scoped lang="less">
@import (reference) '../../less/main';

</style>
