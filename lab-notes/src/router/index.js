import { createRouter, createWebHashHistory } from 'vue-router'
//import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    component: () => import('../views/Home.vue') //NO funciona si no se importa
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Registration.vue')
  }, {
    path: '/myNotes',
    name: 'My Notes',
    component: () => import('../views/Mynotes.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
