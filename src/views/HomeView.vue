<script setup>
import {computed} from "vue"
import { useCounterStore } from "../stores/counter";
const countStore = useCounterStore();

function increaseCount(){
  countStore.increment()
}
const count = computed(() => countStore.count);

</script>

<template>
  <button @click="increaseCount">Click me</button>
  <p>{{ count }}</p>
  <p class="text-3xl font-bold">Welcome to YummyGreek</p>
</template>
