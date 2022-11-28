<template>
  <SoundQuestion
    :role="role"
    ask-question="Luister goed naar het liedje!"
    question="Hoe gaat het liedje verder?"
    correct-answer="Maar ik moet naar bedje toe"
    :wrong-answers="['Maar hij moet naar bedje toe',
    'Dus gaat hij naar gertje toe',
    'Maar hij is aan wat haver toe',
    'Dus hij gaat naar bedje toe'
    ,'Dus hij gaat niet naar bedje toe']"
    :ask-question-audio="require('@/assets/audio/vraag_5_vraag.mp3')"
    :answer-audio="require('@/assets/audio/vraag_5_antwoord.mp3')"
    :show-answer-after="9000"
    :total-seconds="30"
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
export default class scene9 extends Vue {
@Prop()role!:Roles
}

</script>

<style scoped lang="less">
@import (reference) '../../less/main';

</style>
