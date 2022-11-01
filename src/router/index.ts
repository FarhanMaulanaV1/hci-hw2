import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import PageSecond from '../views/Page2.vue'
import TabsUtama from '../views/tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/HomePage'
  },
  {
    path: '/tabs/',
    component: TabsUtama,
    children: [
      {
        path: '',
        redirect: '/tabs/HomePage'
      },
      {
        path: 'HomePage',
        component: HomePage
      },
      {
        path: 'Page2',
        component: PageSecond
      }
    ]
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
