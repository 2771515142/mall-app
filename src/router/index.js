import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Classify from '../views/Classify.vue';
import Shopping from '../views/Shopping.vue';
import Search from '../views/Search.vue';

VueRouter.prototype.back = false;
VueRouter.prototype.goBack = function goBack() {
  this.back = true;
  this.go(-1);
};
Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'classify',
        name: 'classify',
        component: Classify,
      },
      {
        path: 'shopping',
        component: Shopping,
      },
    ],
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
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
