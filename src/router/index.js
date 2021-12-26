import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dev',
        name: 'Dev',
        component: () => import(/* webpackChunkName: "dev" */ '../views/Dev.vue')
    },
    {
        path: '/devDetail',
        name: 'DevDetail',
        component: () => import(/* webpackChunkName: "devDetail" */ '../views/DevDetail.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
    },
    {
        path: '/leaveMessage',
        name: 'LeaveMessage',
        component: () => import(/* webpackChunkName: "leaveMessage" */ '../views/LeaveMessage.vue')
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
