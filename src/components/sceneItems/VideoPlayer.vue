<template>
  <div v-if="role === 'screen'" class="centerContent background">
    <video class="video" autoplay :src="video"></video>
  </div>
  <div v-else-if="role === 'admin'">
    <next-scene-button />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
import {Roles} from "@/Interfaces/sessionInterface";
import NextSceneButton from "@/components/sceneItems/NextSceneButton.vue";
@Component({
  components: {NextSceneButton}
})
export default class scene1_22 extends Vue {
  @Prop({required:true})role!: Roles
  @Prop({required:true})video!: string
}
</script>

<style scoped lang="less">

.background{
  background: black !important;
}
.video{
  width: 100%;
  object-fit: contain;
}

</style>
    