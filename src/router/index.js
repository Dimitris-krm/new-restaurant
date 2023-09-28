import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodList from "../views/FoodList.vue"
import Dish from "../views/Dish.vue"
import InvalidURL from "../views/InvalidURL.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FoodList
    },
    {
      path:"/:dish",
      name:"dish",
      component:Dish
    },
    {
      path:"/:catchAll(.*)",
      name: "InvalidURL",
      component: InvalidURL
    },
  ]
})

export default router
