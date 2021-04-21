import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 引入样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'font-awesome/css/font-awesome.css'

// 引入axios
import axios from "axios"
import VueAxios from "vue-axios"

// 引入mock
import Mock from './mock'
Mock.bootstrap()

// 引入dialog可移动
import './directives.js'
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'ec201f098d2709b852e9453d444fc5d9',// 使用的是高德地图的web api
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation', 'AMap.Geocoder'],
  v: '1.4.4',
  uiVersion: '1.0'
})

Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
