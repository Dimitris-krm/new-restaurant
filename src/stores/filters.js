import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', () => {
  const filters = ref({
    dietary:"",
    priceRange:"",
    allergens:""
  })

  if(localStorage.getItem("filters")){
    filters.value = JSON.parse(localStorage.getItem("filters"))
}

watch(
  filters,
    (newFilters)=>{
        localStorage.setItem("filters",JSON.stringify(newFilters))
    },
    {deep:true}
)


  function setFilters({ dietary, priceRange, allergens }) {
    filters.value.dietary = dietary;
    filters.value.priceRange = priceRange;
    filters.value.allergens = allergens;
  }

  function resetFilters(){
    filters.value.dietary = "";
    filters.value.priceRange = "";
    filters.value.allergens = "";
  }

  return { filters, setFilters, resetFilters }
})
