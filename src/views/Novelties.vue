<template>
  <div class="novelties">
    <div class="filters__mobile" v-show="mobileFilters" :class="{ fixed: filtersActive }">
      <p class="body-4" @click="toggleFilters">Фильтры</p>
    </div>
    <div class="grid-with-filters">
      <NoveltiesFilters 
        @close="toggleFilters" 
        :filtersActive="filtersActive" 
        :mobileFilters="mobileFilters" 
      />
      <div class="products" v-if="loader">
        <AppProductCard :products="products" />
      </div>
      <AppLoader v-else />
    </div>
  </div>
</template>

<script>
import NoveltiesFilters from '../components/Filters/NoveltiesFilters.vue';
import { ref } from '@vue/reactivity';
import { db } from "@/firebaseInit.js";
import AppLoader from "../components/UI/AppLoader.vue";
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
          products.value = resultProducts.filter(product => product.type === 'new');
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

    return { loader, filtersActive, mobileFilters, toggleFilters, products };
  },
  components: { NoveltiesFilters, AppProductCard, AppLoader }
}
</script>

<style lang="scss">
.novelties {
  background-color: $white;
}
</style>