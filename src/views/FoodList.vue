<script setup>
import Filters from "../components/Filters.vue";
import Food from "../components/Food.vue";
import { useFilterStore } from "../stores/filters";
import { onMounted, ref, computed } from "vue";
const dishMenu = "http://localhost:3000/dishes";
const dishes = ref([]);

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
  const getDishes = await fetchDishes();

  if (getDishes) {
    dishes.value = getDishes;
    const test = dishes.value[0]
    console.log(test.tags.dietaryPreferences.includes("vegan"));
  }
});

const filtersStore = useFilterStore();

const currentFilters = computed(() => filtersStore.filters);
console.log(currentFilters.value);
console.log(currentFilters.value.dietary);
console.log(currentFilters.value.allergens);  

const dietaryFilter = computed(() => {
  if(
    currentFilters.value.allergens === "" &&
    currentFilters.value.priceRange === "" &&
    currentFilters.value.dietary === "" 
    
  ){
    return dishes.value
  }
  return dishes.value.filter((dish) => {
    const [minPrice, maxPrice] = currentFilters.value.priceRange.split("-");

    const isPriceInRange =
      (minPrice === null || dish.price >= minPrice) &&
      (maxPrice === null || dish.price <= maxPrice);

    const dietaryPref = currentFilters.value.dietary;
  
    const hasMatchingDietaryPref =
      !dietaryPref || dish.tags.dietaryPreferences.includes(dietaryPref);




    // Include the dish in the result if it meets all criteria
    return  hasMatchingDietaryPref;
  });
});

const allergenFilter = computed(()=>{
  if(
    currentFilters.value.allergens === "" &&
    currentFilters.value.priceRange === "" &&
    currentFilters.value.dietary === "" 
    
  ){
    return dishes.value
  }

  return dietaryFilter.value.filter((dish) => {
    const allergen = currentFilters.value.allergens;
    const hasMatchingAllergen =
    !allergen || dish.tags.allergens.includes(allergen);

    return hasMatchingAllergen

  });


})


const priceFilter = computed(()=>{
  if(
    currentFilters.value.allergens === "" &&
    currentFilters.value.priceRange === "" &&
    currentFilters.value.dietary === "" 
    
  ){
    return dishes.value
  }
  return allergenFilter.value.filter((dish) => {
    const [minPrice, maxPrice] = currentFilters.value.priceRange.split("-");

    const isPriceInRange =
      (minPrice === null || dish.price >= minPrice) &&
      (maxPrice === null || dish.price <= maxPrice);
    return isPriceInRange
  });

})
</script>

<template>
  <div v-if="dishes">
    <div class="flex space-x-2">
      <div class= "w-64">
        <Filters></Filters>
      </div>
      <div class="flex-1 w-64">
        <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
          <Food v-for="dish in priceFilter" :key="dish.id" :dish="dish"></Food>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <div class="... flex items-center justify-center">
      <span class="loading loading-bars loading-lg"></span>
    </div>
  </div>
</template>
