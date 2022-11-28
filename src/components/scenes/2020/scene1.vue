<template>
  <div v-if="role==='admin'" class="columnRow --spaced">
    <p>Hier komt scene 1</p>
    <button @click="startKlopGeluid">Klop geluid</button>
    <button @click="startSintVerhaal">Sint Start</button>
    <next-scene-button :set-show-next="false"/>
  </div>
  <div v-else-if="role === 'screen'" class="black__screen" >
  </div>
  <div v-else class="centerContent">
    <p>{{ $store.getters.userData.name }}, jij hoort hier nog niet te zijn</p>
    <p>Wacht totdat het verhaal verder gaat</p>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {Roles} from "@/Interfaces/sessionInterface";
import NextSceneButton from "@/components/sceneItems/NextSceneButton.vue";

@Component({
  components: {NextSceneButton}
})
export default class scene1 extends Vue {
  @Prop({required:true})role!: Roles


  startKlopGeluid(event:Event){
    this.$store.dispatch('setSceneData',{kloppen:Date.now()})
  }

  startSintVerhaal(){
    this.$store.dispatch('setSceneData',{sintVerhaal:Date.now()})
  }

  sounds:HTMLAudioElement[] = [new Audio(require('@/assets/2021/knock.wav')),new Audio(require('@/assets/2021/audio/black_screen_sint.mp3'))]
  unwatchArray:(()=>void)[]=[()=>{}]

  mounted(){
    if(this.role=== "screen") {
      this.sounds[1].onended =()=>{
        this.$store.dispatch("setSceneData",{showNext:true})
      }
      this.unwatchArray.push(
          this.$store.watch((state, getters) => getters.getSceneData.kloppen, value => {
          this.sounds[0].play()
      }))
      this.unwatchArray.push(
          this.$store.watch((state, getters) => getters.getSceneData.sintVerhaal,value =>{
            this.sounds[1].play()

          }
      ))
    }
  }

  beforeDestroy(){
    if(this.role=='screen'){
      this.unwatchArray.forEach(value => value())
      this.sounds.forEach(value => value.pause())
    }
  }

}
</script>

<style scoped lang="less">
@import (reference) '../../../less/main';
.black__screen{
  background: black;
  width: 100%;
  height: 100%;
  padding: 0;
}
</style>
