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
  }
});

const filtersStore = useFilterStore();

const currentFilters = computed(() => filtersStore.filters);

const filteredDishes = computed(() => {
  return dishes.value.filter((dish) => {
    const [minPrice, maxPrice] = currentFilters.value.priceRange.split("-");
    const isPriceInRange =
      (!minPrice || dish.price >= minPrice) &&
      (!maxPrice || dish.price <= maxPrice);

    const dietaryPref = currentFilters.value.dietary;
    const hasMatchingDietaryPref =
      !dietaryPref || dish.tags.dietaryPreferences.includes(dietaryPref);

    const allergen = currentFilters.value.allergens;
    const hasMatchingAllergen =
      !allergen || dish.tags.allergens.includes(allergen);

    return isPriceInRange && hasMatchingDietaryPref && hasMatchingAllergen;
  });
});
</script>

<template>
  <div v-if="dishes">
    <div class="flex space-x-2">
      <div class="w-64">
        <Filters></Filters>
      </div>
      <div class="flex-1 w-64">
        <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
          <Food
            v-for="dish in filteredDishes"
            :key="dish.id"
            :dish="dish"
          ></Food>
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
