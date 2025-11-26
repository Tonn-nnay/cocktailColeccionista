import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import SearchPage from '@/pages/SearchPage.vue'
import FavoritePage from '@/pages/FavoritePage.vue'
import ItemDetailPage from '@/pages/ItemDetailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/search', component: SearchPage },
    { path: '/favorites', component: FavoritePage },
    { path: '/item/:id', component: ItemDetailPage },
  ],
})

export default router
