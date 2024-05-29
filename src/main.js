import { createApp } from 'vue'
import App from './App.vue'
import InlineSvg from 'vue-inline-svg'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'

const app = createApp(App)

app.use(store)
app.use(router)
app.component('inline-svg', InlineSvg)
app.mount('#app')
