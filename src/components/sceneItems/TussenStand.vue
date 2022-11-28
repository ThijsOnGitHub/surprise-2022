<template>
  <div v-if="role=== 'admin' ">
    <p>Dit is de uitslag</p>
    <p>Leuk dat je meedeed!</p>
    <NextSceneButton/>
  </div>
  <div v-else-if="role === 'screen' ">
    <h1>De uitslag</h1>
    <div class="columnRow">
      <div class="rowItem" v-for="(item,index) in orderedList">
        <div class="rank">{{index+1}}</div>
        <div>{{item[1].name}}</div>
        <div>{{item[1].gameData.correctAnswers}}</div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Jij staat {{position}}{{position===1?'ste':'e'}}</p>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {Roles, User} from "@/Interfaces/sessionInterface";
import NextSceneButton from "@/components/sceneItems/NextSceneButton.vue";

@Component({
  components: {NextSceneButton}
})
export default class TussenStand extends Vue {
  @Prop() role!: Roles

  get position(){
    if(this.role ==='user'){
      let position=-1
      this.orderedList.forEach((value, index) => {
        console.log(value[0])
        console.log(this.$store.state.userId)
        if(value[0]===this.$store.state.userId){
          position =index+1
        }
      })
      return position
    }
    return;
  }

  get orderedList(){
    let list =Object.entries<User>(this.$store.state.sessionData.users)
    return list.sort((a, b) => {
      return b[1].gameData.correctAnswers-a[1].gameData.correctAnswers
    })
  }

}
</script>

<style scoped lang="less">
@import (reference) '../../less/main';

.rank{
  text-align: center;
  height: 5vh;
  width: 5vh;
  border-radius: 100%;
  color:@sintDarkBlue;
  background:@sintYellow;
}

.rowItem{
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  max-width: 1000px;
  font-size: 3.2vh;
 margin-bottom: 1vh;

}
</style>
