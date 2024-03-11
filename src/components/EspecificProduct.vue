<script setup>
import { useProductStore } from '@/stores/ProductStore.js'
const productStore = useProductStore()
import { computed } from 'vue'
const producto = computed(()=>productStore.getProduct)
</script>

<template>

</template>

<style scoped>

</style>