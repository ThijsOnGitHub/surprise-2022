import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '../store'
import Screen from "@/views/Screen.vue";
import RegisterUser from "@/views/RegisterUser.vue";
import UserView from "@/views/UserView.vue";
import AdminView from "@/views/AdminView.vue";
import Start from "@/views/Start.vue";
import Speaker from "@/views/Speaker.vue";
import SubScreen from "@/views/SubScreen.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path:'/:id/screen',
    name: 'Screen',
    component:Screen
  },
  {
    path:'/:id/subScreen',
    name: 'Subscreen',
    component:SubScreen
  },
  {
    path: '/:id/register',
    name:'Register User',
    component:RegisterUser
  },
  {
    path: '/:id/user',
    name:'User',
    component: UserView
  },
  {
    path: '/:id/admin',
    name:'Admin',
    component: AdminView
  },
  {
    path:'/:id/speaker',
    name:'Speaker',
    component:Speaker
  },
  {
    path: '/',
    name: 'Home',
    component: Start
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if(to.params.id != from.params.id) {
    await store.dispatch("setSession", to.params.id)
    console.log(JSON.stringify(store.state))
    if(!store.state.sessionId){
      next('/')
    }
  }
  if(to.matched[0].path==='/:id/user' && !store.getters.userData){
    next(`/${to.params.id}/register`)
  }
  next()
})

export default router
