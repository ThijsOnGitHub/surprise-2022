<template>
  <div>
    <div>{{object}}{{sounds == undefined}}</div>
  </div>

</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Inject, Provide} from "vue-property-decorator";

@Component
export default class TestComponent extends Vue {
  @Inject('sounds') sounds!: {sounds:{[key: string]: HTMLAudioElement }}

  get object(){
    return this.sounds.sounds
  }
}
</script>

<style scoped lang="less">

</style>
    