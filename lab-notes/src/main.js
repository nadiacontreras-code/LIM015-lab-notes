import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { db } from './Config'
console.log(db)
createApp(App).use(router).mount('#app')
