import { RouteRecordRaw } from "vue-router"
import Paths from './paths'
import * as Views from "@/views"

const Routes: RouteRecordRaw[] = [
  { path: Paths.HOME, component: Views.Home },
  { path: Paths.EDITOR, component: Views.Editor }
]

export default Routes
