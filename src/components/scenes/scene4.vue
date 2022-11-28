<template>
  <div v-if="role==='admin'" class="columnRow">
    <p>Hier komt scene 4</p>
    <h1>Aanmeldingen:</h1>
    <p>(Klik om te kicken)</p>
    <div class="optionGrid">
      <p class="user buttonStyle" v-for="(user,key) in $store.state.sessionData.users"  @click="()=>kickUser(key)">{{user.name}}</p>
    </div>

    <NextSceneButton v-if="names.length !== 0" />
  </div>
  <div v-else-if="role === 'screen'" class="centerContent" >
    <div class="columnRow call__content --spaced">
      <h1>De pietentest</h1>
      <p>Meld je nu aan via de QR-code:</p>
      <img :src="userQrCode" class="qr_code" alt="adminQrCode"/>
      <h1>Aanmeldingen:</h1>
      <div class="optionGrid">
        <p  class="name buttonStyle" v-for="name in names">{{name}}</p>
      </div>

    </div>
  </div>
  <div v-else class="centerContent">
    <p>Welkom {{ $store.getters.userData.name }}, We gaan zo beginnen!</p>
    <p></p>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {Roles, User} from "@/Interfaces/sessionInterface";
import NextSceneButton from "@/components/sceneItems/NextSceneButton.vue";

@Component({
  components: {NextSceneButton}
})
export default class scene4 extends Vue {
  @Prop({required:true})role!: Roles


  kickUser(userId:string){
    this.$store.dispatch("kickUser",userId)
  }

  get userQrCode(){
    return `https://chart.googleapis.com/chart?cht=qr&chl=${window.location.origin +'/'+encodeURI(this.$store.state.sessionId)}/user&chs=500x500`
  }
  sound = new Audio(require('@/assets/audio/achtergrond_muziek.mp3'))



  get names() {
    if(this.$store.state.sessionData.users){
      return Object.values<User>(this.$store.state.sessionData.users).map(value=> value.name)
    }else{
      return []
    }
  }

  unwatchArray:(()=>void)[]=[]

  mounted(){
    this.sound.loop=true
    if(this.role==="screen"){
      this.sound.play()
    }

    if(this.role=="user"){
      this.unwatchArray.push(
          this.$store.watch((state, getters) => getters.userData,value => {
            if(value===undefined){
              this.$router.push('/')
            }
          })
      )
    }
  }


  beforeDestroy(){
    if(this.role==="screen"){
      this.sound.pause()
      this.unwatchArray.forEach(value => value())
    }
  }
}


</script>

<style scoped lang="less">
@import (reference) '../../less/main';
.name{
  height: fit-content;
}

.qr_code{
  height: 30vh;
}

.black__screen{
  background: black;
  width: 100%;
  height: 100%;
  padding: 0;
}
.user{
  cursor: pointer;
  text-decoration: underline;
}
.call__content{
  height: 95vh;
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
