<template>
  <nav>
    <RouterLink to="/">
      <i class="pi pi-home"></i>
    </RouterLink>
    <RouterLink to="/search">
      <i class="pi pi-search"></i>
    </RouterLink>
    <RouterLink to="/favorites">
      <i class="pi pi-star"></i>
    </RouterLink>
  </nav>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
  import 'primeicons/primeicons.css'
</script>

<style scoped>
  nav{
    display: flex;
    background-color: #ccc;
    padding-left: 15px;
  }

  i{
    font-size: 30px;
    margin: 10px 5px;
    color: #555;
  }

  i:hover{
    color: #333;
  }

</style>
