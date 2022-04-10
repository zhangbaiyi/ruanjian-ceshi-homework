import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: () => import('../views/MainView.vue'),
    children: [
      {
        path: '/home',
        name: 'HomeView',
        component: () => import('../views/home')
      },
      {
        path: '/triangle-manual',
        name: 'TriangleManualView',
        component: () => import('../views/triangle-manual')
      },
      {
        path: '/triangle-file',
        name: 'TriangleFileView',
        component: () => import('../views/triangle-file')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
