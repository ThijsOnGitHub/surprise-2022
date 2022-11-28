import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from "firebase/app";
import 'firebase/auth'

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    store.commit("setUserId",uid)
    // ...
  } else {
    // User is signed out.
    // ...
  }
  // ...
});

firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')




