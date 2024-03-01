import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Import all of Bootstrap's JS
import 'bootstrap'
import './assets/all.scss'

import { register } from 'swiper/element/bundle'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(register)
app.use(router)

app.mount('#app')
