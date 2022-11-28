<template>
    <div class="centerContent start__container">
        <h1>Welkom bij de surprise!</h1>
        <p>Vul hieronder een session id in om te joinen of om een sessie te creëren</p>
        <input  type="text" v-model="sessionId"/>
      <template v-if="sessionId">
        <button @click="goToNextPage">{{this.sessionExist ? 'Join session' : 'Create session' }}</button>
        <template v-if="sessionExist">
          <p>Selecteer de pagina waar je naartoe wilt</p>
          <template  v-for="page in pages">
            <label>{{page}}:<input type="radio" :value="page" v-model="selected"></label>
          </template>
        </template>

      </template>

    </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator"
    import firebase from "firebase/app";
    import 'firebase/database'
    @Component({
        components: {}
    })
    export default class Start extends Vue {
      sessionId :string =''
      sessionExist:boolean = true
      selected:string = 'screen'

      pages=['screen','user','admin','speaker']


      async goToNextPage(){
        let exist=await this.getExists(this.sessionId)
        if(exist){
          this.$router.push(`/${this.sessionId}/${this.selected}`)
        }else{
          this.$store.dispatch("createSession",this.sessionId)
          this.$router.push(`/${this.sessionId}/screen`)
        }
      }

      @Watch('sessionId')
      async getExists(value:string){
        if(value!=''){
          let result = await firebase.database().ref(`sessions/${value}`).once("value")
          let exists=result.exists()
          console.log(exists)
          this.sessionExist=exists
          return exists
        }
      }
    }
</script>

<style scoped lang="less">
    @import (reference) '../less/main';

    .start__container{
      padding: 8px;
    }
</style>
