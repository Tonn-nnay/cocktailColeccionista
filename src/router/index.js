import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import SearchPage from '@/components/SearchPage.vue'
import FavoritePage from '@/components/FavoritePage.vue'
import ItemDetailPage from '@/components/ItemDetailPage.vue'

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
