import Vue from 'vue';
import Router from 'vue-router';
import Betting from '@/components/Betting';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Betting',
      component: Betting,
    },
  ],
});
