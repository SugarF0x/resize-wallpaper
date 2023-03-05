import { createApp } from 'vue'
import Router from './router'
import App from './App.vue'
import { createPinia } from "pinia"
import vuetify from "@/plugins/vuetify"

const app = createApp(App)
const pinia = createPinia()

app.use(Router)
app.use(pinia)
app.use(vuetify)

app.mount('#app')
