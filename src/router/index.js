import Vue from 'vue';
import Router from 'vue-router';

/* layout */
import layout from '@/view/layout/Layout';
const _import = require('./_import_' + process.env.NODE_ENV);

Vue.use(Router);

export const asyncRouterMap = [{
  path: '*',
  redirect: '/404',
  hidden: true
}, {
  path: '/404',
  name: '404',
  component: _import('errorPage/404')
}, {
  path: '/error',
  name: '401',
  component: layout,
  redirect: '/error/401',
  children: [{
    path: '401',
    component: _import('errorPage/401')
  }]
}, {
  path: '/',
  component: layout,
  redirect: '/home',
  children: [{
    path: 'home',
    component: _import('home/index')
  }]
}];

export default new Router({
  mode: 'history',
  routes: asyncRouterMap
});
