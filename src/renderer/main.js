import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import '../../node_modules/bootstrap/dist/css/bootstrap.css'
// import '../../node_modules/font-awesome/css/font-awesome.css'

// import '../../node_modules/jquery/dist/jquery.js'
// import '../../node_modules/bootstrap/dist/js/bootstrap.js'

import '../../node_modules/quasar-extras/material-icons'
import '../../node_modules/quasar-extras/ionicons'
import '../../node_modules/quasar-extras/fontawesome'
import Quasar from '../../node_modules/quasar-framework'
// import '../../node_modules/quasar-framework/dist/quasar.mat.css'
import '../../node_modules/quasar-framework/dist/quasar.mat.styl'
Vue.use(Quasar)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
Quasar.start(() => {
  new Vue({
    components: { App },
    router,
    store,
    template: '<App/>'
  }).$mount('#app')
})

// new Vue({
//   components: { App },
//   router,
//   store,
//   template: '<App/>'
// }).$mount('#app')
