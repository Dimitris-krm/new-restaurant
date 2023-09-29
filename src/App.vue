<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Filters from "./components/Filters.vue";
</script>

<template>
  <Navbar></Navbar>

  <Suspense>
    <template #default>
      <RouterView />
    </template>
    <template #fallback>
      <p>LOADING ...</p>
    </template>
  </Suspense>
</template>

<!-- TODO -->

<!-- @ Working filters -->

<!-- @ Order page -->
