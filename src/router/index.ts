import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/operationControl/definition',
  },
  {
    path:'/operationControl',
    name:'operationControl',
    component:() => import('@/views/operationControl.vue'),
    redirect: '/operationControl/definition',
    children:[
      {
        path:'/operationControl/definition',
        name:'definition',
        component:()=>import("@/components/operation/definition.vue")
      },{
        path:'/operationControl/approval',
        name:'approval',
        component:()=>import("@/components/operation/approval.vue")
      },{
        path:'/operationControl/homework',
        name:'approval',
        component:()=>import('@/components/operation/homework.vue')
      },{
        path:'/operationControl/process',
        name:'process',
        component:()=>import('@/components/operation/process.vue')
      }
    ]
  },
  
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
