<script setup>
import Filters from "../components/Filters.vue"
import Food from "../components/Food.vue"
import { ref } from "vue";
const dishMenu = 'http://localhost:3000/dishes'
const dishes = ref()
fetch(dishMenu)
.then(response=>{
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
})
.then(data=>{
    console.log(data);
    dishes.value = data
})
.catch(error=>{
    throw new Error(error);
})



</script>

<template>
<div class="flex  space">
  <div class="hidden lg:block w-64">
    <Filters></Filters>
  </div>
  <div class="flex-1 w-64">
    <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-10">


    <Food v-for="dish in dishes" :key="dish.id" :dish="dish" ></Food>

 
 </div>
  </div>
</div>
</template>