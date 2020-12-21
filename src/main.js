import Vue from 'vue'
import ElementUI from 'element-ui'
import VueMoment from 'vue-moment'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import '../element-variables.scss'
import '@/assets/css/main.css'
import '@/assets/css/utils.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueMoment)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
