<template>
  <div v-if="rol == null || role === 'admin' ">
    <button  @click="nextScene" v-if="showButton">Volgende Scene</button>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {Roles} from "@/Interfaces/sessionInterface";

@Component({
  components: {}
})
export default class NextSceneButton extends Vue {
  @Prop() role!: Roles
  @Prop() setShowNext:boolean|undefined
  @Prop() restoreState!: {[key:string]:any}
  get showButton(){
    try{
      return this.$store.getters.getSceneData.showNext
    }catch (e){
      return true
    }
  }

  async nextScene(){
    let updateState = this.restoreState ||{}
    if(this.setShowNext !==undefined){
      updateState = Object.assign(updateState,{showNext:this.setShowNext})
    }
    console.log(await this.$store.dispatch("setSceneData",updateState))
    this.$store.commit('nextScene')
  }
}
</script>

<style scoped lang="less">
@import (reference) '../../less/main';

</style>
