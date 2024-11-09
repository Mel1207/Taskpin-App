import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './style.css'
import './styles/global.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
