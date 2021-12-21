import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import { BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

new Vue({
  name:"SlashRoles",
  router,
  render: h => h(App)
}).$mount('#app')
