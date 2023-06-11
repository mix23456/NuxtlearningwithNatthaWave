import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import './style.css'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'

createApp(App).use(router).use(bootstrap).mount('#app')
