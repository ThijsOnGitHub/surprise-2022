import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import 'firebase/database'
import {Session, User} from "@/Interfaces/sessionInterface";
const firebaseConfig = {
  apiKey: "AIzaSyBfbHk0BxcLPb5WQYkDVC2s-8iHPa3jzkU",
  authDomain: "lobby-game.firebaseapp.com",
  databaseURL: "https://lobby-game.firebaseio.com",
  projectId: "lobby-game",
  storageBucket: "lobby-game.appspot.com",
  messagingSenderId: "280176506770",
  appId: "1:280176506770:web:4bd461f770d8c388"
};
firebase.initializeApp(firebaseConfig);


const database=firebase.database()

Vue.use(Vuex)

export interface IState{
  sessionId:string
  userId:string
  firebaseSessionRef:firebase.database.Reference|null,
  sessionData:Session
}

const state: IState={
  sessionId:'',
  userId:'',
  firebaseSessionRef:null,
  sessionData:new Session()
}

let vuex = new Vuex.Store({
  state,
  mutations: {
    setState: (state1, payload:Partial<IState>) => {
      state1 = {...payload,...state1}
    },
    setUserId:(state1, payload) => {
      state1.userId=payload
    },
    setSessionId:(state1, payload) => {
      state1.sessionId=payload
    },
    setFirebaseSession:(state1, payload:firebase.database.Reference) => {
      state1.firebaseSessionRef=payload
    },
    updateSessionData:((state1, payload:Session) => {
      state1.sessionData =payload
    }),
    nextScene:state1 => {
      state1.firebaseSessionRef?.child('scene').set(state1.sessionData.scene+1)
    },
    forceScene:(state1,payload) => {
      state1.firebaseSessionRef?.child('scene').set(parseInt(payload))
    }
  },
  getters:{
    userId:state1 => state1.userId,
    userData:(state1): undefined|User => {
      try{
        return state1.sessionData.users[state1.userId];
      }catch (e) {
        return undefined
      }
    },
    scene:state1 => {
      return state1.sessionData.scene
    },
    name:(state1, getters) => {
      getters.userData.name
    },
    getSceneData:state1 => {
      return state1.sessionData.scenesData[state1.sessionData.scene]
    },
  },
  actions: {
    createSession(context,sessionId:string){
      console.log('requested')
      let sessionsRef=database.ref('sessions')
      sessionsRef.child(sessionId).set(new Session())
    },
    setSession:async (injectee, payload) => {
      let firebaseRef=database.ref(`sessions/${payload}`)
      let value = await firebaseRef.once("value")
      if(value.exists()){
        injectee.commit("setSessionId",payload)
        injectee.commit('setFirebaseSession',firebaseRef)
        injectee.commit("updateSessionData",value)
      }
      return
    },
    register:(injectee, payload) => {
      if(injectee.getters.userData){
        injectee.state.firebaseSessionRef?.child('users').child(injectee.state.userId).update({name:payload})
      }else{
        injectee.state.firebaseSessionRef?.child('users').child(injectee.state.userId).update(new User(payload))
      }
    },
    setSceneData:(intjectee, payload) => {
      return intjectee.state.firebaseSessionRef?.child('scenesData').child(intjectee.state.sessionData.scene+'').update(payload)
    },
    setUserGameData:(injectee, payload) => {
      console.log('updateing')
      injectee.state.firebaseSessionRef?.child('users').child(injectee.state.userId).child('gameData').update(payload)
    },
    kickUser:(injectee, payload:string) => {
      injectee.state.firebaseSessionRef?.child('users').child(payload).remove()
    }
  },
  modules: {
  }
})
export default vuex


vuex.watch((state1, getters) => state1.firebaseSessionRef,value => value?.on("value",a => {
 vuex.commit("updateSessionData",a.val())
}))

