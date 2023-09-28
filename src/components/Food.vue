<script setup>
import { useRouter } from 'vue-router';
import {useCartStore} from "../stores/cart"

const cartStore = useCartStore()
const router = useRouter()

const dishProps = defineProps({
  dish:{
    type:Object,
    required:true
  }
})

function navigateToDish(id){
  router.push({ name: 'dish', params: { dish:id} })
}

function addToCart(dish){
  cartStore.addDish(dish)
}

</script>

<template>

<div class="card card-compact w-50 bg-base-100 shadow-xl">
  <figure><img :src=dish.image class="w-full" /></figure>
  <div class="card-body">
    <h2 class="card-title text-3xl">{{ dish.name }}</h2>
    <p class="text-base">{{ dish.description }}</p>
    <p class="text-2xl font-bold text-right">{{ dish.price }} €</p>
    <div class="card-actions justify-between">
      <a @click="navigateToDish(dish.id)" class="underline text-2xl text-cyan-600 dark:text-cyan-400 hover:cursor-pointer" style="margin-top: 2px;">View more</a>
      <button class="btn btn-success capitalize" @click="addToCart(dish)">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59L3.62 17H19v-2H7l1.1-2z"/></svg>Add to cart</button>
    </div>
  </div>
</div>


</template>