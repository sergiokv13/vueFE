import Vue from 'vue'
import Router from 'vue-router'
import AppDashboard from '@/components/AppDashboard'
import LoginForm from '@/components/LoginForm'
import TechsView from '@/components/TechsView'
import InventoryView from '@/components/InventoryView'
import TechInventory from '@/components/TechInventory'
import ItemsView from '@/components/ItemsView'




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
    },
    {
      path: '/inventory',
      name: 'InventoryView',
      component: InventoryView,
    },
    {
      path: '/inventory/:locationId/:displayName',
      name: 'InventoryViewWithParam',
      component: InventoryView,
    },
    {
      path: '/items',
      name: 'ItemsView',
      component: ItemsView,
    }
  ]
})
