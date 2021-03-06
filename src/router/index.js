import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Router)
Vue.use(ElementUI)

axios.defaults.baseURL = process.env.API_ROOT
// Vue.prototype.$http = axios

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
