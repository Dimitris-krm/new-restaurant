<template>
    
    <p v-for="dish in selectedDishes">
    {{ dish }}
    </p>
</template>


<script setup>
import {ref} from "vue"
import {useCartStore} from "../stores/cart"

const cartStore = useCartStore()
console.log(cartStore.selectedDishes)
const selectedDishes = cartStore.selectedDishes

</script>