import { createApp } from 'vue'
import './style/general.scss'
import App from './App.vue'
import { router } from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'


createApp(App).use(router).mount('#app')
