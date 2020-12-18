import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/dashboard'
  },
  {
    path: '/login',
    component: () => import('@/views/Tab2.vue')
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'dashboard'
      },
      {
        path: 'dashboard',
        component: () => import('@/views/Tab1.vue')
      },
      {
        name: 'Tab2',
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        name: 'Settings',
        path: 'settings',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
