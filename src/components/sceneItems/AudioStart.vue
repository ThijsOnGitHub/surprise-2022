<template>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";

@Component
export default class AudioStart extends Vue {
  @Prop({required:true}) audio!: string

  audioObject = new Audio(this.audio);

  mounted() {
    this.audioObject.pause()
    this.audioObject.currentTime = 0
    this.audioObject.play();
  }

  beforeDestroy(){
    this.audioObject.pause();
  }
}
</script>

<style scoped lang="less">

</style>
    