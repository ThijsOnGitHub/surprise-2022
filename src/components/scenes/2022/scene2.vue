<template>
  <VideoPlayer :role="role" video="/2022/video/start-video-sinterklaas.mp4" />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
import {Roles} from "@/Interfaces/sessionInterface";
import NextSceneButton from "@/components/sceneItems/NextSceneButton.vue";
import VideoPlayer from "@/components/sceneItems/VideoPlayer.vue";
@Component({
  components: {VideoPlayer, NextSceneButton}
})
export default class scene1_22 extends Vue {
  @Prop({required:true})role!: Roles
}
</script>

<style scoped lang="less">

</style>
    