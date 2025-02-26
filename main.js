import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import uviewPlus from '@/uni_modules/uview-plus'
export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia() // 引入pinia
  app.use(pinia)
  app.use(uviewPlus)
  console.log("222",uni.$u.config.v);
  return {
    app,
	pinia
  }
}
// #endif