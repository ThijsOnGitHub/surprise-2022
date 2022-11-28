<template>
  <div v-if="role === 'screen'" class="full">
    <Missie text="Missie 1" />
  </div>
  <div v-else-if="role === 'subScreen'" class="full">
    <Missie text="Het paard (van sinterklaas)" />
    <AudioStart audio="/2022/audio/benthe-beurt.mp3" />
  </div>
  <NextSceneButton v-else :role="role" />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Roles} from "@/Interfaces/sessionInterface";
import {Prop} from "vue-property-decorator";
import AudioStart from "@/components/sceneItems/AudioStart.vue";
import Missie from "@/components/sceneItems/Missie.vue";
import NextSceneButton from "@/components/sceneItems/NextSceneButton.vue";
@Component({
  components: {NextSceneButton, Missie, AudioStart}
})
export default class scene2 extends Vue {
  @Prop({required:true})role!: Roles

}
</script>

<style scoped lang="less">

</style>
    