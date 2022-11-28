<template>
  <SoundQuestion
    :role="role"
    ask-question="Luister naar sinterklaas!"
    correct-answer="Ozosnel"
    :wrong-answers="['Dinkie','Enzo Knol','Amerino','Samirigo']"
    question="Hoe heet het huidige paard van sinterklaas?"
    :total-seconds="15"
    :ask-question-audio="require('@/assets/audio/vraag_1.mp3')"
    :answer-audio="require('@/assets/audio/vraag_1_antwoord.mp3')"
    :show-answer-after="3240"
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
export default class scene5 extends Vue {
@Prop()role!:Roles
}

</script>

<style scoped lang="less">
@import (reference) '../../less/main';

</style>
