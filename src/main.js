import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

import './utils/global.js'

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
