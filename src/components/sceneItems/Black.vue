<template>
  <div v-if="role !== 'admin' && (notForRoles == null || notForRoles.includes(role))" class="black"></div>
  <div v-else>
    <NextSceneButton />
  </div>
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
  @Prop()notForRoles?: Roles[]
}
</script>

<style scoped lang="less">
.black{
  background: black;
  width: 100%;
  height: 100%;
}
</style>