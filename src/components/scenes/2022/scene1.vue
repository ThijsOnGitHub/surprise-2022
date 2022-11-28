<template>
  <Black :role="role"/>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Roles} from "@/Interfaces/sessionInterface";
import {Prop} from "vue-property-decorator";
import Black from "@/components/sceneItems/Black.vue";
@Component({
  components: {Black}
})
export default class scene1 extends Vue {
  @Prop({required:true})role!: Roles
}
</script>

<style scoped lang="less">

</style>
    