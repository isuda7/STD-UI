import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '../views/Demo.vue'
import Prototype from '../views/Prototype.vue'
import Contents from '../views/Contents.vue'
import Menu1 from '../views/Menu1.vue'
import Menu2 from '../views/Menu2.vue'
import Components from '../views/Components.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/prototype',
    name: 'Prototype',
    component: Prototype
  },
  {
    path: '/contents',
    name: 'Contents',
    component: Contents,
    children: [
      {
        path: '/menu1',
        name: 'Menu1',
        component: Menu1
      },
      {
        path: '/menu2',
        name: 'Menu2',
        component: Menu2
      }
    ]
  },
  {
    path: '/components',
    name: 'Components',
    component: Components
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
