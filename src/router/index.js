import Vue from 'vue'
import Router from 'vue-router'
import App from '../components/App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    }
  ]
})
