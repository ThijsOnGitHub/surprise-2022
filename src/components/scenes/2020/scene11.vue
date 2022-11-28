<template>
  <SoundQuestion
    :role="role"
    ask-question="Luister goed naar het Sinterklaas!"
    question="Wat is het rijtuigtype van Sinterklaas' vervoersmiddel?"
    correct-answer="Schimmel"
    :wrong-answers="['Haflinger',
    'Bacterie',
    'Audi'
    ,'Ford'
    ,'Mustang']"
    :ask-question-audio="require('@/assets/2021/audio/vraag_7_vraag.mp3')"
    :answer-audio="require('@/assets/2021/audio/vraag_7_antwoord.mp3')"
    :show-answer-after="3000"
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
export default class scene11 extends Vue {
@Prop()role!:Roles
}

</script>

<style scoped lang="less">
@import (reference) '../../../less/main';

</style>
