/**
 * Created by admin on 2017/3/13.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'u-link--Active',
  routes
})
export default router
