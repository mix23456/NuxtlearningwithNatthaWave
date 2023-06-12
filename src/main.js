import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import './style.css'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'

import VueSidePanel from 'vue3-side-panel'
import 'vue3-side-panel/dist/vue3-side-panel.css'

createApp(App)
    .use(router)
    .use(bootstrap)
    .use(VueSidePanel)
    .mount('#app')

