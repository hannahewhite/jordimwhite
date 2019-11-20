import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import VueScrollTo from 'vue-scrollto';
import VueScrollReveal from 'vue-scroll-reveal';
import VueMq from 'vue-mq'


// FontAwesome
library.add(faSun, faMoon);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// ScrollTo
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

// ScrollReveal
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 1500,
  scale: 1,
  distance: '0px',
  mobile: false,
  viewFactor: 0.3
});

// MediaQuery
Vue.use(VueMq, {
  breakpoints: { 
    sm: 540,
    md: 690,
    lg: 1250,
    xl: Infinity,
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
