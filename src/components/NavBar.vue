<template>
  <nav>
    <RouterLink to="/">
      <i class="pi pi-home"></i>
    </RouterLink>
    <RouterLink to="/search">
      <i class="pi pi-search"></i>
    </RouterLink>
    <RouterLink to="/fav">
      <i class="pi pi-star"></i>
    </RouterLink>
  </nav>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
  import 'primeicons/primeicons.css'
</script>
