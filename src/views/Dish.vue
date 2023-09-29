<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import SelectedDish from "../components/SelectedDish.vue";
const selectedDish = ref(null);

const route = useRoute();
const dishMenu = `http://localhost:3000/dishes/${route.params.dish}`;

async function fetchDish() {
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
  const dish = await fetchDish();

  if (dish) {
    selectedDish.value = dish;
  }
});
</script>

<template>
  <div v-if="selectedDish">
    <SelectedDish :selectedDish="selectedDish"></SelectedDish>
  </div>

  <div v-else>
    <div class="... flex items-center justify-center">
      <span class="loading loading-bars loading-lg"></span>
    </div>
  </div>
</template>
