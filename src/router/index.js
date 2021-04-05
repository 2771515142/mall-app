import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Classify from '../views/Classify.vue';
import Shopping from '../views/Shopping.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'classify',
        component: Classify,
      },
      {
        path: 'shopping',
        component: Shopping,
      },
    ],
  },
  {
    path: '*',
    redirect: '/home/classify',
  },
];

const router = new VueRouter({
  mode: 'history', // 把Router的mode修改为history模式,VueRouter默认的模式为HASH模式
  routes,
});

export default router;
