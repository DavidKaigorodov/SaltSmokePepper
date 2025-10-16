import { createApp } from 'vue'
import { router } from '../routes/router'
import App from './App.vue'
import '../styles/app.sass'

const app = createApp(App)
app.use(router)
app.mount('#app')