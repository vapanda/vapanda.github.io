import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MainPageView.vue'
import ContactView from "@/views/ContactView.vue";
import ProductEspecificView from "@/views/ProductEspecificView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductEspecificView
    }
  ]
})

export default router
