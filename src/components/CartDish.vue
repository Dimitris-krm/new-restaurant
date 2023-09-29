<script setup>
import { ref } from "vue";
import { useCartStore } from "../stores/cart";
import Toast from "./Toast.vue";

const cartStore = useCartStore();
const showToast = ref(false);

const cartMessage = ref("");
const toastReason = ref("")

const cartDishProps = defineProps({
  cartDish: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});


const triggerToast = () => {
  showToast.value = true;
  setTimeout(() => (showToast.value = false), 3000);
};

function removeFromCart(index) {
  cartStore.removeDish(index);
  cartMessage.value = "Dish removed from cart"
  toastReason.value = "error"
  triggerToast();
}



</script>

<template>
  <Toast :message="cartMessage" :reason="toastReason" v-if="showToast" />

  <div class="collapse collapse-arrow bg-base-200">
    <input type="checkbox" />
    <div class="collapse-title text-xl font-medium">
      {{ cartDish.name }}  €{{ cartDish.price }}
    </div>
    <div class="collapse-content">
        <p class="text-lg font-bold">
           Ingridients: <span class="font-normal"> {{ cartDish.ingredients.join(", ")  }}</span>
        </p>
        <p class="text-lg font-bold">
           Allergens: <span class="font-normal"> {{ cartDish.tags["allergens"].join(", ") }}</span>
        </p>
        <p class="text-lg font-bold">
           Dietary preferences: <span class="font-normal"> {{ cartDish.tags["dietaryPreferences"].join(", ") }}</span>
        </p>
      <button @click="removeFromCart(index)" class="btn mt-4 capitalize btn-error">
        Remove from cart
      </button>
    </div>
  </div>



</template>
