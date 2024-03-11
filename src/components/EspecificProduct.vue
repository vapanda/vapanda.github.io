<script setup>
import { useProductStore } from '@/stores/ProductStore.js'
const productStore = useProductStore()
import { computed } from 'vue'
const producto = computed(()=>productStore.getProduct)

</script>

<template>
  <div class="align-items-center">
    <h1 class="flex justify-content-center" v-text="producto.nombre"></h1>

  </div>
</template>

<style scoped>

</style>