<template>
  <ul v-if="item" :class="{ disable: item.name === '' }">
    <li>{{ item.name }}</li>
    <li>{{ item.order === 0 ? '' : `Nº Pokédex: ${item.order}` }}</li>
    <li>{{ item.height === 0 ? '' : `Altura: ${item.height}` }}</li>
    <li>{{ item.weight === 0 ? '' : `Pes: ${item.weight}` }}</li>
    <li>
      <button v-if="item && item.name" class="heart-btn" @click="changeStatusPkm(item, item.order)">
        <i class="pi" :class="{ 'pi-heart': !isFav, 'pi-heart-fill': isFav }"></i>
      </button>
    </li>
  </ul>
  <!-- <h1>CLIMENT GUAPO TE AMO, TONY PUTERO</h1> att. iker -->
</template>

<script setup>
import { computed } from 'vue'
import { usePkmStore } from '@/stores/counter'
const { item } = defineProps({ item: Object })

const favPkm = usePkmStore()
const isFav = computed(() => favPkm.isFavorite(item.order))

function changeStatusPkm(pkm) {
  if (!favPkm.isFavorite(pkm.order)) {
    favPkm.addPkm(pkm)
    isFav.value = true
  } else favPkm.removePkm(pkm)
  isFav.value = false
}
</script>

<style scoped>
.disable {
  list-style: none;
}

.heart-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.3rem;
  font-size: 1.4rem;
}
</style>
