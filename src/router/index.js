/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Profile from '@/components/Profile'
import StudentTable from '@/components/StudentTable'
import OldTable from '@/components/TableDataBak'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/student',
      name: 'Student Data',
      component: StudentTable
    },
    {
      path: '/tbold',
      name: 'Table Data Old',
      component: OldTable
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router
