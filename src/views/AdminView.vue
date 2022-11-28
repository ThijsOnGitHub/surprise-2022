<template>
  <div class="adminContainer">
    <component :is="'scene'+$store.state.sessionData.scene" role="admin"/>
    <div class="scene__setter">
      <p>Stel scene in:</p>
      <input type="number" min="0" v-model="forceSceneNumber">
      <button @click="$store.commit('forceScene',forceSceneNumber)">Force Scene</button>
      <p>Huidige scene: {{$store.getters.scene}}</p>
    </div>
  </div>

</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import scenes from "@/components/scenes/scenes";
    @Component({
      components: Object.assign(scenes,{

      })
    })
    export default class AdminView extends Vue {
      forceSceneNumber:number = 0
    }
</script>

<style scoped lang="less">
    @import (reference) '../less/main';

    .adminContainer{
      margin: 8px;
    }

    .scene__setter{
      display: flex;
      background: @sintDarkBlue;
      height: fit-content;
      position: fixed;
      width: 100%;
      bottom: 0;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      >*+*{
        margin: 10px;
      }
    }

</style>
