<template>
  <div>
    <button @click="loadSounds">Load Sounds</button>
    <p>{{display}}</p>
    <p>{{log}}</p>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {IState} from "@/store";

@Component({
  components: {}
})
export default class Speaker extends Vue {
  sounds:HTMLAudioElement[]=[]
  unWatch:()=>void = ()=>{}
  log:string=''
  display='Niet gespeeld'
  loadSounds(){
    this.sounds = [new Audio(require('@/assets/2021/audio/scene12_speaker.mp3'))]
    this.sounds.forEach(value => value.load())
    this.log= JSON.stringify(this.sounds)
  }

  mounted(){
    this.log= JSON.stringify(this.sounds)
    this.unWatch = this.$store.watch((state:IState, getters) => state.sessionData.scene,(value, oldValue)=>{
      if(value===12){
        this.sounds[0].play()
        this.display='started'
      }
      if(oldValue===12){
        this.display='paused'
        this.sounds[0].pause()
        this.sounds[0].currentTime=0
      }
    })
  }

  destroy(){
    this.sounds.forEach(value => value.pause())
    this.unWatch()
  }
}
</script>

<style scoped lang="less">
@import (reference) '../less/main';

</style>
