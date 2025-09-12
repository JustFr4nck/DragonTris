import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia();

const persistedStatePlugin = createPersistedStatePlugin();


pinia.use(persistedStatePlugin)
app.use(pinia)
app.use(router)

app.mount('#app')
