<template>
  <div v-if="role=== 'admin' ">
    <p>Dit is de uitslag</p>
    <p>Leuk dat je meedeed!</p>
    <NextSceneButton/>
  </div>
  <div v-else-if="role === 'screen' || role === 'user' " class="full ">
    <div >
      <h1>De uitslag</h1>
      <div class="columnRow">
        <div class="rowItem" v-for="(item,index) in orderedList">
          <div class="rank">{{index+1}}</div>
          <div>{{item[1].name}}</div>
          <div>{{item[1].correctAnswers}}</div>
        </div>
      </div>
    </div>
    <div v-if="role === 'user'">
      <div class="centerContent">
        <p>Jij staat {{position}}{{position===1?'ste':'e'}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {GameData, Roles, User} from "@/Interfaces/sessionInterface";
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

  getCorrectAnswers(gameData: GameData) {
    if(gameData.submittedAnswers == null){
      return 0
    }
    return Object.values(gameData.submittedAnswers).filter((value) => value.isCorrect).length
  }

  get usersWithCorrectAswers() {
    const users = this.$store.state.sessionData.users
    const usersWithCorrectAnswers = Object.entries(users).map((value) => {
      const user: User = value[1] as User
      return [value[0], {name:user.name, correctAnswers: this.getCorrectAnswers(user.gameData ?? {submittedAnswers: {}})}]
    })
    return Object.fromEntries(usersWithCorrectAnswers)
  }

  get orderedList(){
    let list =Object.entries<{username:string,correctAnswers:number}>(this.usersWithCorrectAswers)
    return list.sort((a, b) => {
      return b[1].correctAnswers-a[1].correctAnswers
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
