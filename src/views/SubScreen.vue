<template>
  <div>
    <component :sounds="sounds" :is="'scene'+$store.getters.scene" role="subScreen"/>
    <button v-if="!soundsLoaded" @click="loadSounds">Load sounds</button>
  </div>
</template>

<script lang="ts">
import {Component, Inject, Provide, Vue} from "vue-property-decorator";
import { User } from '@/Interfaces/sessionInterface';
import scenes from "@/components/scenes/scenes";
import TestComponent from "@/components/sceneItems/TestComponent.vue";

@Component({
  components: Object.assign(scenes,{
    TestComponent
  })
})
export default class Screen extends Vue {
  sounds : {sounds: { [keys: string]: HTMLAudioElement }} =  { sounds: {}}
  @Provide('sounds') injectSound = this.sounds
  soundsLoaded = false;
   soundsPaths = [
     "/2022/audio/benthe-beurt.mp3",
     "/2022/audio/benthe-goed.mp3",
     "/2022/audio/diana-beurt.mp3",
     "/2022/audio/diana-goed.mp3",
     "/2022/audio/jouke-beurt.mp3",
     "/2022/audio/jouke-goed.mp3",
     "/2022/audio/letta-beurt.mp3",
     "/2022/audio/letta-goed.mp3"
  ]


  public loadSounds() {
     let newSounds : {[keys:string]:HTMLAudioElement} = {};
    this.soundsPaths.forEach((path) => {
      const audio = new Audio(path);
      audio.load()
      newSounds = {
        ...newSounds,
        [path]: audio
      }
    });
    this.sounds.sounds = newSounds
    this.soundsLoaded = true;
  }

  get userId(){
    return this.$store.state.userId
  }

  get sessionId(){
    return this.$store.state.sessionId
  }

  get users(){
    return Object.values(this.$store.state.sessionData.users) as User[]
  }

}
</script>

<style scoped lang="less">
@import (reference) '../less/main';
body{
  margin: 0;
}
</style>
