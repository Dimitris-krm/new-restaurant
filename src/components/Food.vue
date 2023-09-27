<script setup>

defineProps({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

</script>

<template>

<div class="card card-compact w-50 bg-base-100 shadow-xl">
  <figure><img :src=image /></figure>
  <div class="card-body">
    <h2 class="card-title text-3xl">{{ name }}</h2>
    <p class="text-base">{{ description }}</p>
    <p class="text-2xl font-bold">{{ price }} €</p>
    <div class="card-actions justify-between">
      <a href="#" class="underline text-2xl text-cyan-600 dark:text-cyan-400" style="margin-top: 2px;">View more</a>
      <button class="btn btn-success">Add to cart</button>
    </div>
  </div>
</div>


</template>