import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Adel - Portfolio de développeur web',
      description: 'Portfolio professionnel de Adel, développeur web en formation.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: 'Page non trouvée - Adel'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Mise à jour du titre de la page
router.afterEach((to) => {
  document.title = to.meta.title || 'Portfolio de Adel'
})

export default router