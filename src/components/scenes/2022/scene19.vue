   <template>
  <div class="army army_background">
    <SoundQuestion
        :role="role"
        ask-question="Luister naar het liedje"
        ask-question-audio="/2022/audio/m-6-q.mp3"
        answer-audio="/2022/audio/m-6-a.mp3"
        question="Welk liedje wordt hier achterstevoren afgespeeld?"
        correct-answer="Sinterklaasje kom maar binnen met je knecht"
        :wrong-answers="['Een pools liedje','Daar wordt aan de deur geklopt','Zu monjech','Zachtjes Gaan De Paardenvoetjes']"
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
export default class scene19 extends Vue {
@Prop({required:true})role!: Roles
}
</script>

<style scoped lang="less">

</style>
    