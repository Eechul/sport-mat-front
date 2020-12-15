import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueMoment from 'vue-moment'
import App from './App.vue'
import router from './router'
import store from './store'
import './main.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueMoment)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')