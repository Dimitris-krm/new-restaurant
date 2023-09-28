import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodList from "../views/FoodList.vue"
import Dish from "../views/Dish.vue"
import Cart from "../views/Cart.vue"
import InvalidURL from "../views/InvalidURL.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path:"/dishes",
      name:"dishes",
      component:FoodList
    },

    {
      path:"/dishes/:dish",
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
