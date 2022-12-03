<template>
<div class="background centerContent">
  <div class="centerContent limiter">
    <div class="komu MissieText centerContent full" ref="text" v-html="text"></div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop, Watch} from "vue-property-decorator";
import textFit from "textfit";

@Component
export default class Missie extends Vue {
  $refs!: {
    text: HTMLDivElement
  }
  @Prop({required:true}) text!: string

  @Watch('text')
  onTextChange(){
    Vue.nextTick().then(() => {
      textFit(this.$refs.text, { maxFontSize: 5000});
    })
  }

  mounted(){
    textFit(this.$refs.text,{maxFontSize: 5000});
  }
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
  text-align: center;
}
.limiter{
  width: 75%;

}
</style>
    