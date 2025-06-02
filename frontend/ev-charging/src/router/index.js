import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Chargers from '../views/Chargers.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/chargers', component: Chargers }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
