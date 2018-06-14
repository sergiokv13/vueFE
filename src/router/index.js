import Vue from 'vue'
import Router from 'vue-router'
import AppDashboard from '@/components/AppDashboard'
import LoginForm from '@/components/LoginForm'
import TechsView from '@/components/TechsView'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppDashboard',
      component: AppDashboard
    },
    {
      path: '/login',
      name: 'LoginForm',
      component: LoginForm
    },
    {
      path: '/techs',
      name: 'TechsView',
      component: TechsView
    }
  ]
})
