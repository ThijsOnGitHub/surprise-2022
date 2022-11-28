<template>
<TussenStand  :role="role"/>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import TussenStand from "@/components/sceneItems/TussenStand.vue";
import {Roles} from "@/Interfaces/sessionInterface";

@Component({
  components: {TussenStand}
})
export default class scene13 extends Vue {
@Prop()role!:Roles

  audio = new Audio(require('@/assets/audio/einde.mp3'))

  mounted(){
    if(this.role==='screen'){
      this.audio.play()
    }
  }

  beforeDestroy(){
    this.audio.pause()
  }

}
</script>

<style scoped lang="less">
@import (reference) '../../less/main';

</style>
