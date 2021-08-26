import { createRouter, createWebHashHistory } from 'vue-router';
// import Home from '/src/views/Home.vue';

const router = createRouter({
  history: createWebHashHistory('/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('/src/views/Home.vue')
    }
  ]
});


export default router
