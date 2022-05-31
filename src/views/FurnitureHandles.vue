<template>
  <div class="furniture-handles">
    <div class="furniture-handles__intro">
      <div class="furniture-handles__photo furniture-handles__photo--1">
        <img src="@/assets/img/furniture-handles-1.jpg" alt="">
      </div>
      <div class="furniture-handles__title">
        <h1 class="title">Мебельные ручки</h1>
      </div>
      <span class="empty"></span>
      <div class="furniture-handles__text">
        <p class="body-2">Ручки являются базовой составляющей мебельного дизайна и способны кардинально
          изменить стилистику и настроение комплекта мебели. Мы абсолютно убеждены,
          что правильно подобранные мебельные ручки играют важную роль в формировании
          добавленной стоимости продукта.</p>
      </div>
      <div class="furniture-handles__photo furniture-handles__photo--2">
        <img src="@/assets/img/furniture-handles-2.jpg" alt="">
      </div>
    </div>
    <div class="filters__mobile" v-show="mobileFilters" :class="{ fixed: filtersActive }">
      <p class="body-4" @click="toggleFilters">Фильтры</p>
    </div>
    <div class="furniture-handles__content grid-with-filters">
      <FurnitureHandlesFilters 
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
import FurnitureHandlesFilters from '../components/Filters/FurnitureHandlesFilters.vue'
import AppProductCard from '../components/Product/AppProductCard.vue';
import { ref } from '@vue/reactivity';
import { db } from "@/firebaseInit.js";
import AppLoader from "../components/UI/AppLoader.vue";

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
          products.value = resultProducts.filter(product => product.product === 'furniture-handles')
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
  components: { FurnitureHandlesFilters, AppProductCard, AppLoader }
}
</script>

<style lang="scss">
.furniture-handles {
  &__intro {
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: repeat(9, 1fr);

    height: 604px;

    @include tablet {
      grid-template-rows: repeat(10, 1fr);
      height: calc(100vh - 72px);
    }

    @include small-tablet {
      height: auto;
    }

    @include mobile {
      grid-template-rows: repeat(11, 1fr);
      height: 404px;
    }
  }

  &__photo {
    &--1 {
      grid-area: 1 / 1 / 10 / 7;

      @include tablet {
        grid-area: 1 / 1 / 7 / 14;
      }

      @include mobile {
        grid-area: 1 / 1 / 6 / 11;
      }
    }
    &--2 {
      grid-area: 5 / 20 / 10 / 25;

      @include tablet {
        grid-area: 7 / 14 / 11 / 25;
      }

      @include mobile {
        display: none;
        grid-area: none;
      }
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    grid-area: 1 / 7 / 5 / 20;
    padding: 30px 80px;

    border-right: $light-gray-line;
    border-bottom: $light-gray-line;

    @include tablet {
      grid-area: 1 / 14 / 7 / 25;
      padding: 0 40px 53px;
    }

    @include small-tablet {
      padding: 32px;
    }

    @include mobile {
      grid-area: 1 / 11 / 6 / 25;
    }
  }

  &__text {
    grid-area: 5 / 7 / 10 / 20;

    border-right: $light-gray-line;
    border-bottom: $light-gray-line;

    @include tablet {
      grid-area: 7 / 1 / 11 / 14;
    }

    @include mobile {
      grid-area: 6 / 1 / 12 / 25;
    }

    p {
      margin: 60px auto 0;
      width: 558px;

      @include tablet {
        margin: 0;
        padding: 54px 64px;
        width: auto;
      }

      @include mobile {
        padding: 40px 33px;
        padding-right: 45px;
      }
    }
  }

  .empty {
    grid-area: 1 / 20 / 5 / 25;

    @include tablet {
      display: none;
      grid-area: none;
    }
  }
}
</style>