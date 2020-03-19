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
  },
  {
    path: '/cinema',
    name: 'Cinema',
    component: () => import(/* webpackChunkName: "about" */ '../views/cinema'),
    children: [
      {
        path: 'movies',
        component: () => import(/* webpackChunkName: "about" */ '../views/cinema/allMovies'),
      },
      {
        path: 'movie-shows',
        component: () => import(/* webpackChunkName: "about" */ '../views/cinema/movieShows'),
      },
      {
        path: 'movie/:id',
        component: () => import(/* webpackChunkName: "about" */ '../views/cinema/movie'),
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
