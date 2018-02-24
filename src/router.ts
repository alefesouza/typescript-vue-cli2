import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Details from './views/Details.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'details',
      path: '/events/:id',
      component: Details,
    },
  ],
});
