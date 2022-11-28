<template>
  <div class="centerContent register__container" >
    <h1>Welkom bij de sinterCall</h1>
    <p>Voer uw naar hieronder in en klik op registreer:</p>
    <input type="text" v-model="name">
    <button @click="register" v-if="name">Aanmelden</button>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {User} from "@/Interfaces/sessionInterface";

    @Component({
        components: {}
    })
    export default class RegisterUser extends Vue {
      name:string=''

      mounted(){
        this.$store.watch((state, getters) => getters.userData,(value:User|undefined) => {
          if (value) {
            {
              this.name =value.name
            }
          }
        })
      }

      register(){
        this.$store.dispatch('register',this.name)
        this.$router.push(`/${this.$store.state.sessionId}/user`)
      }
    }
</script>

<style scoped lang="less">
    @import (reference) '../less/main';


    .register__container{
      padding: 10px;
    }
</style>
