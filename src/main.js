import Vue from 'vue'
import VueRouter from 'vue-router'
import VueScrollactive from 'vue-scrollactive'
import VueMq from 'vue-mq'
import App from './App.vue'
import routes from './routes'

Vue.config.productionTip = false;


Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
  });

Vue.use(VueScrollactive);

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    sm: 730,
    md: 1000,
    lg: 1250,
    xl: Infinity,
  }
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app');
