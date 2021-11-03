import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { db } from './Config'
import store from './store'
console.log(db)
createApp(App).use(store).use(router).mount('#app')
