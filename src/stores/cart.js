import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const selectedDishes = ref([]);

  if (localStorage.getItem("cart")) {
    selectedDishes.value = JSON.parse(localStorage.getItem("cart"));
  }

  watch(
    selectedDishes,
    (cart) => {
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    { deep: true }
  );

  const cartTotal = computed(() => {
    return selectedDishes.value.reduce((total, dish) => total + dish.price, 0);
  });

  function addDish(dish) {
    selectedDishes.value.push(dish);
  }
  function removeDish(dishIndex) {
    selectedDishes.value.splice(dishIndex, 1);
  }
  function resetCart() {
    selectedDishes.value = [];
  }

  return { selectedDishes, cartTotal, addDish, removeDish, resetCart };
});
