<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
  { id: 3, name: 'New users annually', value: '46,000' },
]
</script>

<template>
  <div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div class="card-body">
          <span class="font-bold text-lg">8 Items</span>
          <span class="text-info">Subtotal: $999</span>
          <div class="card-actions">
            <button class="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="grid  md:grid-cols-3 sm:grid-cols-1 gap-10">

 


<div class="card card-compact w-50 bg-base-100 shadow-xl">
  <figure><img src="./assets/mousaka.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="card card-compact w-50 bg-base-100 shadow-xl">
  <figure><img src="./assets/mousaka.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title text-3xl">Mousakas</h2>
    <p class="text-base">Best greek dish ever</p>
    <p class="text-base">Price: 15.99€</p>
    <div class="card-actions justify-between">
      <a href="#" class="underline text-2xl text-cyan-600 dark:text-cyan-400" style="margin-top: 2px;">View more </a>
      <button class="btn btn-success">Add to cart</button>
    </div>
  </div>
</div>

<div class="card card-compact sm:w-50 w-150 bg-base-100 shadow-xl">
  <figure><img src="./assets/mousaka.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
      <button class="btn btn-primary">Buy Now</button>
    </div>
    <div class="card-actions justify-start">
      <button class="btn btn-primary">Buy Now</button>

    </div>
  </div>
</div>
</div>

</template>
