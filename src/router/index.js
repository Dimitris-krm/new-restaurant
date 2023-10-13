import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodList from "../views/FoodList.vue"
import Dish from "../views/Dish.vue"
import Cart from "../views/Cart.vue"
import Login from "../views/LoginPage.vue"
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
      component: Cart,
      meta:{
        requiresAuth:true
      }
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
      path:"/login",
      name:"login",
      component:Login
    },
    {
      path:"/:catchAll(.*)",
      name: "InvalidURL",
      component: InvalidURL
    },
  ]
})


router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    console.log("hello")

    if(await checkToken())
    {
      next("/home")
    }
    else
    {
      next("/dishes")
    }

}
else
{
  next()

}



});


async function checkToken(){
  try {
    const myHeaders = new Headers();
    const token = localStorage.getItem("token")
// Add headers to the Headers object
    myHeaders.append('Authorization', JSON.parse(token));
    myHeaders.append('Content-Type', 'application/json');
    const requestOptions = {
      method: 'GET', // or 'POST', 'PUT', etc.
      headers: myHeaders, // Set the headers using the Headers object
      // Other options like body, mode, credentials, etc.
    };
    const response = await fetch("http://localhost:3500/protected-api",requestOptions);
    const data = await response.json();
    if(response.status !== 200){
      console.log("un")
      throw new Error("Un")
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return false;
  }
}

export default router
