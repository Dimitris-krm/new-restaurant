<script setup>
import { useCartStore } from "../stores/cart";
import { computed, ref } from "vue";
import CartDish from "../components/CartDish.vue";
import Toast from "../components/Toast.vue";

const cartStore = useCartStore();
const cartTotal = computed(() => cartStore.cartTotal);
const selectedDishes = computed(() => cartStore.selectedDishes);
const currentTime = computed(() => {
  const currentTimestamp = Date.now();
  const dateObject = new Date(currentTimestamp);

  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`;

  return formattedTime;
});

const cartMessage = ref("");
const toastReason = ref("");
const showToast = ref(true)

const triggerToast = () => {
  showToast.value = true;
  setTimeout(() => (showToast.value = false), 3000);

};

async function createNewOrder() {
  try {
    if(selectedDishes.value.length === 0)
    {
        throw new Error("empty")
    }
    // Api Call to orders endpoint
    // const apiUrl = "http://localhost:3000/orders";
    // const postData = {
    //   timestamp: currentTime.value,
    //   status: "Order received",
    //   dishes: selectedDishes.value,
    //   eta: `${selectedDishes.value.length * 8} minutes`,
    // };
    // const requestOptions = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(postData),
    // };
    // const response = await fetch(apiUrl, requestOptions);

    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }

    // const data = await response.json();
    cartMessage.value = "Order sent succesfully";
    toastReason.value = "success";
    triggerToast()
    cartStore.resetCart();
  } catch (error) {
    if(error.message ==="empty"){
        console.log('hey')

        cartMessage.value = "No items in cart";
        toastReason.value = "error";
        console.log(cartMessage.value)
        console.log(toastReason.value)
        triggerToast()
    }
    else
    {
        cartMessage.value = "Error sending order";
        toastReason.value = "error";
        triggerToast()
    }
  }
}
</script>

<template>
  <Toast :message="cartMessage" :reason="toastReason" v-if="showToast" />
<div class="h-screen">
  <p v-if="selectedDishes.length === 0" class="text-3xl font-bold">No items in cart</p>
    
    <CartDish v-else
    v-for="(dish, index) in selectedDishes"
    :cartDish="dish"
    :index="index"
  ></CartDish>
</div>


  <footer
    class="bg-base-100 z-40 border h-max border-sky-500 py-2 px-4 flex sticky bottom-0 justify-between text-white"
  >
    <p class="text-2xl font-bold">Total: €{{ cartTotal.toFixed(2) }}</p>

    <button @click="createNewOrder" class="btn btn-success capitalize">
      Finalize order
    </button>
  </footer>

  
</template>
