import { RouteRecordRaw } from "vue-router"
import * as Views from "@/views"

const Routes: RouteRecordRaw[] = [
  { path: '/', component: Views.Home },
  { path: '/editor', component: Views.Editor }
]

export default Routes
