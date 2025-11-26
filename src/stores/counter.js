import { defineStore } from 'pinia'

export const usePkmStore = defineStore('pkmns', {
  state: () => ({
    /** @type {{ name: string, order: number, height: number, weight: number }[]}*/
    favPkmn: [],
    /** @type {{ name: string, order: number, height: number, weight: number }[]} */
    loadedPkm: [],
  }),
  getters: {
    getAllPkm(state) {
      return state.favPkmn
    },
  },
  actions: {
    addfavPkm(pkm) {
      this.favPkmn.push(pkm)
    },
    addPkm(pkm){
      this.loadedPkm.push(pkm)
    },
    removePkm(choosenPkm) {
      this.favPkmn = this.favPkmn.filter((pkm) => pkm !== choosenPkm)
    },
    isFavorite(numberPokedex) {
      return this.favPkmn.some((pkm) => pkm.order === numberPokedex)
    },
  },
})
