<template>
  <div class="drawers">
    <div class="filters__mobile" v-if="mobileFilters" :class="{ fixed: filtersActive }">
      <p class="body-4" @click="toggleFilters">Фильтры</p>
    </div>
    <div class="grid-with-filters">
      <DrawersFilters 
        @close="toggleFilters" 
        :filtersActive="filtersActive" 
        :mobileFilters="mobileFilters" 
      />
      <div class="furniture-handles__products products" v-if="loader">
        <AppProductCard :products="products" />
      </div>
      <AppLoader v-else />
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { db } from "@/firebaseInit.js";
import AppLoader from "../components/UI/AppLoader.vue";
import DrawersFilters from '../components/Filters/DrawersFilters.vue';
import AppProductCard from '../components/Product/AppProductCard.vue';

export default {
  setup() {
    const products = ref([])
    const loader = ref(null)
    const filtersActive = ref(true)
    const mobileFilters = ref(false)

    const getProducts = async () => {
      const resultProducts = []

      try {
        await db.collection('products').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            resultProducts.push(doc.data())
          })
          products.value = resultProducts.filter(product => product.product === 'drawer')
          loader.value = true
        })
      } catch (error) {
        console.log(error.message)
        throw error
      }
    }

    getProducts()

    const checkScreen = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 1024) {
        mobileFilters.value = true;
        filtersActive.value = false
        return;
      }
      mobileFilters.value = false
      filtersActive.value = true
    }

    window.addEventListener("resize", checkScreen);
    checkScreen()

    const toggleFilters = () => {
      filtersActive.value = !filtersActive.value
    }

    return { products, loader, filtersActive, mobileFilters, toggleFilters };
  },
  components: { DrawersFilters, AppLoader, AppProductCard }
}
</script>

<style lang="scss">
.drawers {
  background-color: $white;
}
</style>