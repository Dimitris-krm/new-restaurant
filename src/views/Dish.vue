<template>

<div v-if="selectedDish">
        <div class="flex justify-between">

            <div class="flex-auto w-full">
                <figure class="flex items-center justify-start">
                 <img :src=selectedDish.image class=" justify-center" />
                </figure>
            </div>

            <div class="hidden lg:block flex-initial w-64 justify-end">
            <p class="text-2xl font-bold mb-4">€{{ selectedDish.price }}</p>
                
            <button class="btn btn-success capitalize">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59L3.62 17H19v-2H7l1.1-2z"/></svg>
                Add to cart
            </button>
            </div>
        </div>

        
 
    <div class="divider"></div> 

    <div class="flex flex-col md:flex-row ">
        <div class="flex-1 w-64 ">
            <p class="text-2xl font-bold mb-4">{{ selectedDish.name }}</p>
            <p class="text-base">{{ selectedDish.description }}</p>

        </div>

        <div class="divider md:divider-horizontal"></div>
        <div class="flex-1 w-32" >
            <p class="text-2xl font-bold mb-4">Ingredients</p>
            <ul>
                <li v-for="ingredient in selectedDish.ingredients"> {{ ingredient }}</li>
            </ul>
        </div>

        <div class="divider md:divider-horizontal"></div>
        <div class="flex-1 w-32 ">
            <p class="text-2xl font-bold mb-4">Allergens</p>
            <ul>
                <li v-for="allergen in selectedDish.tags['allergens']"> {{ allergen }}</li>
            </ul>
        </div>

        <div class="divider md:divider-horizontal"></div>
        <div class="flex-1 w-32 ">
            <p class="text-2xl font-bold mb-4">Dietary preferences</p>
            <ul>
                <li v-for="preference in selectedDish.tags['dietaryPreferences']"> {{ preference }}</li>
            </ul>
        </div>


   

    </div>


    <footer class="bg-gray-900 py-4 px-6 flex items-center sticky bottom-0 justify-between text-white sm:hidden">
        <p class="text-2xl font-bold mb-4">€{{ selectedDish.price }}</p>

            <button class="btn btn-success capitalize">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59L3.62 17H19v-2H7l1.1-2z"/></svg>
                    Add to cart
            </button>
    </footer>


</div>

    
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import { useRoute } from "vue-router";
  
  const selectedDish = ref(null); // Initialize as null
  
  const route = useRoute();
  const dishMenu = `http://localhost:3000/dishes/${route.params.dish}`;
  
  async function fetchDishes() {
    try {
      const response = await fetch(dishMenu);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }
  
  onMounted(async () => {
    const dishes = await fetchDishes();

    if (dishes) {
      selectedDish.value = dishes;
      console.log(selectedDish.value);
    }
  });
  </script>
  