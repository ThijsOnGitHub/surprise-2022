<template>
  <div class="full">
    <component :is="'scene'+$store.getters.scene" role="user"/>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import scenes from "@/components/scenes/scenes";

    @Component({
      components: Object.assign(scenes,{

      })
    })
    export default class UserView extends Vue {

    }
</script>

<style scoped lang="less">
    @import (reference) '../less/main';

    .margin{
      padding: 10px
    }

</style>
