<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "../stores/cart";
const router = useRouter();

function navigateToPage(name) {
  router.push({ name: name });
}
const cartStore = useCartStore();
const dishesCount = computed(() => cartStore.selectedDishes.length);
const cartTotal = computed(() => cartStore.cartTotal);
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <a
            @click="navigateToPage('home')"
            class="btn btn-ghost normal-case text-xl"
            >YummyGreek</a
          >
        </li>
        <li>
          <a
            @click="navigateToPage('dishes')"
            class="btn btn-ghost normal-case text-xl"
            >Dishes</a
          >
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="badge badge-sm indicator-item">{{ dishesCount }}</span>
          </div>
        </label>
        <div
          tabindex="0"
          class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div class="card-body">
            <span class="font-bold text-lg"
              >{{ dishesCount }}
              {{ dishesCount === 1 ? "dish" : "dishes" }} selected</span
            >
            <span class="text-info">Subtotal: €{{ cartTotal.toFixed(2)}}</span>
            <div class="card-actions">
              <button
                @click="navigateToPage('cart')"
                class="btn capitalize btn-primary btn-block"
              >
                View cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
