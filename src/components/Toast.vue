<script setup>
const cartDishProps = defineProps({
  message: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="toast-wrapper">
    <div :class="reason">
      {{ message }}
    </div>
  </div>
</template>

<style>
.toast-wrapper {
  position: fixed;
  width: 90%;
  top: 20px;
  /* z-index: 10; */
}

.success {
  padding: 20px;
  color: white;
  background: #4f7942;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: 0 auto;
}

.error {
  padding: 20px;
  color: white;
  background: #ff0000;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: 0 auto;
}
</style>
