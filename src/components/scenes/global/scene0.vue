<template>
  <div v-if="role==='admin'">
    <h1>Welkom admin</h1>
    <p>Klik op de knop hieronder om het avontuur te starten</p>
    <button @click="$store.commit('nextScene')">Start het avontuur!</button>
  </div>
  <div v-else-if="role === 'screen'" class="centerContent">
    <p>Om dit spel te starten klik in het admin field op Starten</p>
    <img :src="adminQrCode" alt="adminQrCode"/>
  </div>
  <div v-else>
    <p>{{ $store.getters.userData.name }}, jij hoort hier nog niet te zijn</p>
    <p>Wacht totdat het verhaal verder gaat</p>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {Roles} from "@/Interfaces/sessionInterface";

@Component({
  components: {}
})
export default class scene0 extends Vue {
  @Prop({required:true})role!: Roles

  get adminQrCode(){
    return `https://chart.googleapis.com/chart?cht=qr&chl=${window.location.origin +'/'+encodeURI(this.$store.state.sessionId)}/admin&chs=300x300`
  }
}
</script>

<style scoped lang="less">
@import (reference) '../../../less/main';

</style>
