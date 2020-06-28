import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'LoadMian',
        component: () => import('../views/LoadMian.vue')
      },
      {
        path: 'sys/role',
        name: 'sys/role',
        component: () => import('../views/sys/Role.vue')
      },
      {
        path: 'sys/user',
        name: 'sys/user',
        component: () => import('../views/sys/User.vue')
      }
      // { 
      //   path: 'sys',
      //   children: [
      //     {
      //       path: 'role',
      //       name: 'Role',
      //       component: () => import('../views/sys/Role.vue')
      //     },
      //     {
      //       path: 'user',
      //       name: 'User',
      //       component: () => import('../views/sys/User.vue')
      //     }
      //   ]
      // }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})


export default router
