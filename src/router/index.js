import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/Navbar'
import Home from "@/components/Home"
import Boards from "@/components/Boards"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/boards',
      name: 'Boards',
      component: Boards
    }
  ]
})
