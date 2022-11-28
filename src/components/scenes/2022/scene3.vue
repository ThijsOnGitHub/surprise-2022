<template>
  <div class="full" v-if="role === 'screen'">
    <AudioStart audio="/2022/audio/start-missie-1.mp3" />
    <Missie text="Missie 1" />
  </div>
  <NextSceneButton v-else :role="role" />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Roles} from "@/Interfaces/sessionInterface";
import {Prop} from "vue-property-decorator";
import AudioStart from "@/components/sceneItems/AudioStart.vue";
import NextSceneButton from "@/components/sceneItems/NextSceneButton.vue";
import Missie from "@/components/sceneItems/Missie.vue";
@Component({
  components: {NextSceneButton, AudioStart,Missie}
})
export default class scene2 extends Vue {
@Prop({required:true})role!: Roles
}
</script>

<style scoped lang="less">

</style>
    