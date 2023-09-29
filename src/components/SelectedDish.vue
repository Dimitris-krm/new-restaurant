<script setup>
import { useCartStore } from "../stores/cart";
import Toast from "./Toast.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const showToast = ref(false);
const cartMessage = ref("");
const toastReason = ref("");
const router = useRouter();

const triggerToast = () => {
  showToast.value = true;
  setTimeout(() => (showToast.value = false), 3000);
};
function addToCart(dish) {
  cartStore.addDish(dish);
  cartMessage.value = "Dish added to cart";
  toastReason.value = "success";
  triggerToast();
}

function navigateBack() {
    router.go(-1)
}

const selectedDishProps = defineProps({
  selectedDish: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <Toast :message="cartMessage" :reason="toastReason" v-if="showToast" />

  <div class="grid grid-rows-3 grid-flow-col gap-2">
    <div class="row-span-3">
      <img :src="selectedDish.image" class="h-full" />
    </div>
    <div class="row-span-3 col-span-3">
      <p class="text-2xl font-bold">{{ selectedDish.name }}</p>

      <p class="text-base">{{ selectedDish.description }}</p>
      <br />
      <p class="text-2xl font-bold mb-4">€{{ selectedDish.price }}</p>
      <button
        @click="navigateBack()"
        class="btn btn-warning text-black mx-1 capitalize"
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2S2 6.48 2 12zm10-1h4v2h-4v3l-4-4l4-4v3z"/></svg>
        Nagivate back
      </button>
      <button
        @click="addToCart(selectedDish)"
        class="btn btn-success capitalize"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59L3.62 17H19v-2H7l1.1-2z"
          />
        </svg>
        Add to cart
      </button>
    </div>
  </div>

  <div class="divider"></div>

  <div class="flex flex-col md:flex-row">
    <div class="flex-1 w-32">
      <p class="text-2xl font-bold mb-4">Ingredients</p>
      <ul>
        <li v-for="ingredient in selectedDish.ingredients">
          {{ ingredient }}
        </li>
      </ul>
    </div>

    <div class="divider md:divider-horizontal"></div>
    <div class="flex-1 w-32">
      <p class="text-2xl font-bold mb-4">Allergens</p>
      <ul>
        <li v-for="allergen in selectedDish.tags['allergens']">
          {{ allergen }}
        </li>
      </ul>
    </div>

    <div class="divider md:divider-horizontal"></div>
    <div class="flex-1 w-32">
      <p class="text-2xl font-bold mb-4">Dietary preferences</p>
      <ul>
        <li v-for="preference in selectedDish.tags['dietaryPreferences']">
          {{ preference }}
        </li>
      </ul>
    </div>
  </div>
</template>
