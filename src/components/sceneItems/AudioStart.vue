<template>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Inject, Prop, Provide} from "vue-property-decorator";

@Component
export default class AudioStart extends Vue {
  @Prop({required:true}) audio!: string
  @Prop({default:false}) repeat!: boolean
  @Inject('sounds') sounds?: { sounds:{ [key: string]: HTMLAudioElement } }

  audioObject = new Audio(this.audio);

  mounted() {
    if(this.sounds != null){
      const objectAudio = this.sounds?.sounds![this.audio];
      if(objectAudio != null) {
        this.audioObject = objectAudio
      }
    }
    this.audioObject.pause()
    this.audioObject.currentTime = 0
    this.audioObject.loop = this.repeat
    this.audioObject.play();
  }

  beforeDestroy(){
    this.audioObject.pause();
  }
}
</script>

<style scoped lang="less">

</style>
    