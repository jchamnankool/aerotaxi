import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import SubscribeForm from '../components/SubscribeForm.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  routes: [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/Subscribeform',
    name:'Subscribeform',
    component: SubscribeForm
  }
]
});
