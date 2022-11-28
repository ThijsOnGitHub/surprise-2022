<template>
  <div v-if="role==='admin'">
    <p>Hier komt scene 3</p>
    <NextSceneButton :set-show-next="false"/>
  </div>
  <div v-else-if="role === 'screen'" class="black__screen  " >
    <div class="title__bar">
      SintCall
    </div>
    <div class="centerContent call__content">
      <img class="sint__foto" src="@/assets/profielfoto_sint.jpg"/>
      <div class="icon__bar">
        <div class="icon__circle">
          <img  src="@/assets/icons/mic.svg"/>
        </div>
        <div class="icon__circle">
          <img src="@/assets/icons/mute_video.svg"/>
        </div>
        <div class="icon__circle">
          <img src="@/assets/icons/flip_cam.svg"/>
        </div>
      </div>
    </div>
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
export default class scene3 extends Vue {
  @Prop({required:true})role!: Roles

  sound = new Audio(require('@/assets/audio/gedicht.mp3'))

  mounted(){
    if(this.role==="screen"){
      this.sound.onended= ()=>{
        this.$store.dispatch("setSceneData",{showNext:true})
      }
      this.sound.play()

    }
  }

  beforeDestroy(){
    if(this.role==='screen'){
      this.sound.pause()
    }
  }
}


</script>

<style scoped lang="less">
@import (reference) '../../less/main';
.black__screen{
  background: black;
  width: 100%;
  height: 100%;
  padding: 0;
}
.call__content{
  height: 95vh;
  justify-content: unset;
}
.title__bar{
  background-color: @sintDarkBlue;
  height: 10vh;
  font-size: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sint__foto{
  margin-top: 20vh;
  object-fit: cover;
  height: 30vh;
  width: 30vh;
  border-radius: 100%;
}

.icon__bar{
  position: absolute;
  display: flex;
  width: 30vw;
  justify-content:space-evenly ;
  top:80vh;
}

.icon__circle{
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  width: 5vw;
  height: 5vw;
  border-radius: 100%;
  >img{
    width: 3vw;
    height: 3vw;
  }
}
</style>
