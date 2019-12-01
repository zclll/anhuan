import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import VueMaterial from 'vue-material';

// import 'vue-material/dist/vue-material.css';
// import 'vue-material/dist/theme/default.css';
// Vue.use(VueMaterial);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
