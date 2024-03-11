import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
import './uni.promisify.adaptor'
// import store from './store/index.js'
Vue.config.productionTip = false
// Vue.prototype.$store = store
Vue.use(uView)

// 全局引入http
import {
	http
} from "./common/http.js";
Vue.prototype.$http = http;

// 如此配置即可
uni.$u.config.unit = 'rpx'
App.mpType = 'app'
const app = new Vue({
  ...App,
	// store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif