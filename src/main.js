import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/main.scss'

createApp(App)
  .component('app-icon', require('./components/UI/AppIcon').default)
  .use(store)
  .use(router)
  .mount('#app')
