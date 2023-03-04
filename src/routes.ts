import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import * as Views from './views'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Views.Home },
  { path: '/editor', component: Views.Editor }
]

export default createRouter({
  history: createWebHistory(),
  routes: routes
})
