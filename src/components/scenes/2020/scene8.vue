<template>
  <SoundQuestion
    :role="role"
    ask-question="Sinterklaas stelt een vraag!"
    correct-answer="Meiter"
    :wrong-answers="['UitsMijter','Mijter','Tabert','Staf','Meier']"
    question="Hoe heet het hoofddeskel van sinterklaas"
    :ask-question-audio="require('@/assets/2021/audio/vraag_4_vraag.mp3')"
    :answer-audio="require('@/assets/2021/audio/vraag_4_antwoord.mp3')"
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
export default class scene8 extends Vue {
@Prop()role!:Roles
}

</script>

<style scoped lang="less">
@import (reference) '../../../less/main';

</style>
