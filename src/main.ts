import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
import './style.css'
import './styles/global.css'

const app = createApp(App)
app.use(router)
app.config.globalProperties.$store = store;
app.use(store)
app.mount('#app')
