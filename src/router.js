import Vue from 'vue';
import Router from 'vue-router';
import Tasks from './views/Tasks.vue';
import New from './views/New.vue';
import Show from './views/Show.vue';
import Edit from './views/Edit.vue';
import {authGuard} from './auth/authGuard'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/tasks',
      beforeEnter: authGuard
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks,
      beforeEnter: authGuard
    },
    {
      path: '/tasks/new',
      name: 'new-task',
      component: New,
      beforeEnter: authGuard
    },
    {
      path: '/tasks/:id',
      name: 'show',
      component: Show,
      beforeEnter: authGuard,
    },
    {
      path: '/tasks/:id/edit',
      name: 'edit',
      component: Edit,
      beforeEnter: authGuard
    }
   
  ]
});