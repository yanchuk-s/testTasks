import Vue from 'vue';
import VueRouter from 'vue-router';
import TaskOne from '../views/taskOne.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'TaskOne',
    component: TaskOne
  },
  {
    path: '/task-two',
    name: 'TaskTwo',
    component: () => import(/* webpackChunkName: "about" */ '../views/taskTwo.vue')
  },
  {
    path: '/task-three',
    name: 'TaskThree',
    component: () => import(/* webpackChunkName: "about" */ '../views/taskThree.vue')
  },
  {
    path: '/task-four',
    name: 'TaskFour',
    component: () => import(/* webpackChunkName: "about" */ '../views/taskFour.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
