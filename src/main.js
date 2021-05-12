import Vue from 'vue'
import App from './App.vue'
import './quasar'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueResource from 'vue-resource'
import store from './store.js'


//import CONST from "./const";
import {
  Quasar
} from 'quasar'

Vue.config.productionTip = false
Vue.prototype.$eventBus = new Vue()

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Quasar)

const router = new VueRouter({
  routes: Routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  store, //esto es el store de VUEX
  router,
  template: '<App/>',
  render: h => h(App)
})