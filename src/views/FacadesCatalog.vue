<template>
  <div class="facades-catalog">
    <div class="facades-catalog-intro">
      <div class="facades-catalog-intro__image">
        <img src="@/assets/img/facades/facades-catalog-intro.jpg" alt="">
      </div>
      <div class="facades-catalog-intro__title">
        <h1 class="title">Пленочные фасады</h1>
      </div>
      <span class="empty empty--1"></span>
      <span class="empty empty--2"></span>
      <div class="facades-catalog-intro__text">
        <p class="body-2">Эти фасады настолько прочны и устойчивы к химическому воздействию, что вы можете даже наносить на них рисунки или надписи: маркером на водной основе – на глянцевой поверхности, мелками– на матовой.</p>
      </div>
      <AppButton text="Нужна помощь?" type="primary lg r" icon />
    </div>

    <div class="facades-catalog-brands">
      <h3 class="facades-catalog-brands__title title">Бренды</h3>
      <ul class="facades-catalog-brands__list">
        <li class="facades-catalog-brands__item" v-for="brand in brands" :key="brand">
          <img :src="require(`@/assets/img/brands/${brand.image}.png`)" alt="">
        </li>
      </ul>
    </div>
    <div class="facades-products">
      <div class="facades-products__title">
        <h3 class="title">Каталог товаров</h3>
      </div>
      <div class="filters__mobile" v-if="mobileFilters" :class="{ fixed: filtersActive }">
        <p class="body-4" @click="toggleFilters">Фильтры</p>
      </div>
      <div class="facades-products__main grid-with-filters">
        <Filters
          @close="toggleFilters" 
          :filtersActive="filtersActive" 
          :mobileFilters="mobileFilters"         
        >
          <template v-slot:default>
            <FilterItem>
              <template v-slot:default>
                <AppDropdown title="Категория" :items="brands" filterDefault />
              </template>
            </FilterItem>
            <FilterItem>
              <template v-slot:default>
                <AppDropdown title="Коллекция" :items="collection" filterDefault />
              </template>
            </FilterItem>
          </template>
        </Filters>
        <ul class="facades-products__list" v-if="loader">
          <FacadesProductsCard :products="products" />
        </ul>
        <AppLoader v-else pos="center" />
      </div>
    </div>
    <QuestionForm />
  </div>
</template>

<script>
import AppButton from '@/components/UI/AppButton.vue';
import Filters from '../components/Filters/Filters.vue';
import FilterItem from '../components/Filters/FilterItem.vue';
import AppDropdown from '../components/UI/AppDropdown.vue';
import { ref } from '@vue/reactivity';
import FacadesProductsCard from '../components/Facades/FacadesProductsCard.vue';
import { db } from "@/firebaseInit.js";
import AppLoader from "../components/UI/AppLoader.vue";
import QuestionForm from '../components/QuestionForm.vue';

export default {
  setup() {
    const brands = ref([
      { name: 'Fabriche', image: 'fabriche', value: 123 },
      { name: 'Ваш день', image: 'ваш-день', value: 98 },
      { name: 'Кедр', image: 'кедр', value: 64 },
      { name: 'Первая фабрика фасадов', image: 'первая-фабрика-фасадов', value: 23 },
    ])

    const collection = ref([
      { name: 'Palazzo', value: 123 },
      { name: 'Chalet', value: 98 },
      { name: 'Liberty', value: 64 },
    ])

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
          products.value = resultProducts.filter(product => product.product === 'facade')
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

    return { 
      brands,
      collection,
      products, 
      loader, 
      filtersActive,
      mobileFilters, 
      toggleFilters
    }
  },
  components: { AppButton, Filters, FilterItem, AppDropdown, FacadesProductsCard, AppLoader, QuestionForm }
}
</script>

<style lang="scss">
.facades-catalog-intro {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(8, 1fr);

  height: calc(90vh - $header-desktop);

  @include tablet {
    height: calc(90vh - $header-tablet);
  }

  @include small-tablet {
    height: calc(100vh - $header-tablet);
  }

  @include mobile {
    height: calc(60vh - $header-tablet);
  }

  &__image {
    grid-area: 1 / 1 / 9 / 7;

    @include small-tablet {
      grid-area: 1 / 1 / 5 / 14;
    }

    @include mobile {
      grid-area: 1 / 1 / 4 / 12; 
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
    align-items: flex-end;
    padding-left: 80px;
    padding-bottom: 43px;

    grid-area: 1 / 7 / 4 / 20;
    border-bottom: $light-gray-line;
    border-right: $light-gray-line;

    @include small-tablet {
      padding: 32px;
      grid-area: 1 / 14 / 5 / 25; 
    }

    @include mobile {
      padding: 17px;
      grid-area: 1 / 12 / 4 / 25;
    }
  }

  .empty {
    &--1 {
      grid-area: 1 / 20 / 4 / 25; 
      border-bottom: $light-gray-line;

      @include small-tablet {
        grid-area: 5 / 14 / 8 / 25;
      }

      @include mobile {
        display: none;
      }
    }

    &--2 {
      grid-area: 4 / 20 / 8 / 25;

      @include small-tablet {
        display: none;
      }
    }
  }

  &__text {
    display: flex;
    justify-content: center;
    padding-top: 60px;

    grid-area: 4 / 7 / 8 / 20; 
    border-right: $light-gray-line;

    @include small-tablet {
      padding-top: 56px;
      grid-area: 5 / 1 / 8 / 14;
    }

    @include mobile {
      grid-area: 4 / 1 / 8 / 25;
      padding: 33px;
    }

    p {
      width: 53%;

      @include small-tablet {
        width: 77%;
      }

      @include mobile {
        width: auto;
      }
    }
  }

  .button {
    grid-area: 8 / 7 / 9 / 25;

    @include small-tablet {
      grid-area: 8 / 1 / 9 / 25;
    }

    @include mobile {
      grid-area: 8 / 1 / 9 / 25;
    }
  }
}

.facades-catalog-brands {
  display: grid;
  grid-template-columns: 25% 1fr;

  height: 200px;

  border-bottom: $light-gray-line;

  @include small-tablet {
    display: block;
    height: auto;
  } 

  &__title {
    display: flex;
    align-items: center;
    padding-left: 78px;

    @include tablet {
      padding-left: 30px;
    }

    @include small-tablet {
      padding: 40px 65px;
      border-bottom: $light-gray-line;
    }

    @include small-mobile {
      padding: 33px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    width: 100%;

    @include small-tablet {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 142px);
    }
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;

    border-left: $light-gray-line;

    @include small-tablet {
      &:nth-child(-n+2) {
        border-bottom: $light-gray-line;
      }
      
    }

    img {
      @include laptop {
        width: 70%;
      }

      @include small-tablet {
        width: 50%;
      }
    }
  }
}

.facades-products {
  &__title {
    padding: 79px;

    border-bottom: $light-gray-line;
    background-color: $white;

    @include tablet {
      padding: 47px;
    }

    @include small-tablet {
      display: none;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column: 7 / 25;

    @include tablet {
      grid-column: 1 / 25;
    }

    @include mobile {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>