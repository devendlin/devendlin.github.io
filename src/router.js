import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/Home.vue'
import Berita from './components/Berita.vue'
import Tentang from './components/Tentang.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/berita', component: Berita },
  { path: '/tentang', component: Tentang }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
