<template>
  <SoundQuestion
    :role="role"
    ask-question="Luister goed naar dit liedje!"
    correct-answer="Knollen"
    :wrong-answers="['Kolen','De roe','Een nieuwe audi a1','Hun verdiende loon']"
    question="Hoe gaat dit liedje verder?"
    :total-seconds="15"
    :ask-question-audio="require('@/assets/audio/vraag_2_vraag.mp3')"
    :answer-audio="require('@/assets/audio/vraag_2_antwoord.mp3')"
    :show-answer-after="6700"
  />
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import Question, {QuestionStateFunction} from "@/components/sceneItems/Question.vue";
import {Roles} from "@/Interfaces/sessionInterface";
import SoundQuestion from "@/components/sceneItems/SoundQuestion.vue";

@Component({
  components: {SoundQuestion}
})
export default class scene6 extends Vue {
  @Prop()role!:Roles


}

</script>

<style scoped lang="less">
@import (reference) '../../less/main';

</style>
