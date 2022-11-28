<template>
<component :is="'scene'+$store.getters.scene" role="screen"/>

</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import { User } from '@/Interfaces/sessionInterface';
    import scenes from "@/components/scenes/scenes";

    @Component({
      components: Object.assign(scenes,{

      })
    })
    export default class Screen extends Vue {
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
