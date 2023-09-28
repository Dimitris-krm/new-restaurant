<template>
  <div class="hidden md:block">
    <h3 class="font-bold">Filters</h3>
  <p class="font-bold">Dietary Preferences:</p>

  <select class="select select-bordered w-full max-w-xs" v-model="dietaryFilter" @change="applyFilters" >
    <option selected value="">No filter</option>
    <option value="vegan">Vegan</option>
    <option value="gluten-free">Gluten free</option>
    <option value="lactose-free">Lactose free</option>
    <option value="nut-free">Nut free</option>
  </select>

<br>

<p class="font-bold">Price range:</p>

<select class="select select-bordered w-full max-w-xs"  v-model="priceFilter" @change="applyFilters">
  <option selected value="">No filter</option>
  <option value="0-10">Under €10</option>
    <option value="10-20">€10-€20</option>
    <option value="20-30">€20-€30</option>
    <option value="30-40">€30-€40</option>
    <option value="40-99">Over €40</option>
</select>

<br>


<p class="font-bold">Allegerns:</p>

<select class="select select-bordered w-full max-w-xs"  v-model="allergenFilter" @change="applyFilters">
  <option selected value="">No filter</option>
    <option value="contains-nuts">Contains nuts</option>
    <option value="contains-gluten">Contains gluten</option>
    <option value="contains-lactose">Contains lactose</option>
    <option value="other-allergens">Other allergens</option>
    <option value="allergen-free">Allergen free</option>
</select>

<br>
<button @click="resetFilters" class="btn-wide btn-success capitalize">Clear filters</button>
</div>
</template>

<script setup>
import { ref } from 'vue';
import {useFilterStore} from "../stores/filters"

const filtersStore = useFilterStore()

const priceFilter = ref(filtersStore.filters.priceRange)
const allergenFilter = ref(filtersStore.filters.allergens)
const dietaryFilter = ref(filtersStore.filters.dietary)

const applyFilters = () => {
  filtersStore.setFilters({
    dietary: dietaryFilter.value,
    priceRange: priceFilter.value,
    allergens: allergenFilter.value,
  });
};

function resetFilters(){
  filtersStore.resetFilters
  
  dietaryFilter.value = ""
  priceFilter.value =  ""
  allergenFilter.value =  ""


}

</script>