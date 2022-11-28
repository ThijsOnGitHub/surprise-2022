<template>
<div class="background">
  <div class="komu MissieText centerContent">{{ text }}</div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";

@Component
export default class Missie extends Vue {
  @Prop({required:true}) text!: string

}
</script>

<style scoped lang="less">
.background{
  height: 100%;
  width: 100%;
  background: url("/2022/img/background.png") no-repeat;
  background-size: cover;
}
.MissieText{
  color: white;
  font-size: 15em
}
</style>
    