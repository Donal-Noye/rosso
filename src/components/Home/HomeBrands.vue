<template>
  <div class="home-brands">
    <div class="home-brands__title">
      <h1 class="title">Бренды партнеров</h1>
    </div>
    <ul class="home-brands__list">
      <li class="home-brands__item" v-for="brand in brands" :key="brand">
        <img :src="require(`@/assets/img/brands/${brand}.png`)" alt="">
      </li>
      <AppButton @click="$router.push({ name: 'Brands' })" text="Все бренды" type="secondary lg c" icon />
    </ul>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import AppButton from '../UI/AppButton.vue'
export default {
  setup() {
    const brands = ref(["transformica", "salice", "stabilus", "rejs", "confurn", "озмф"]);

    return { brands };
  },
  components: { AppButton }
}
</script>

<style lang="scss">
.home-brands {
  display: grid;
  grid-template-columns: 33.3% 1fr;

  @include laptop {
    grid-template-columns: 28% 1fr;
  }

  @include mobile {
    grid-template-columns: 1fr;
    height: auto;
  }

  height: 50vh;

  &__title {
    padding: 100px 84px;

    border-right: $light-gray-line;

    @include tablet {
      padding: 50px 20px;
    }

    @include mobile {
      border-right: none;
      border-bottom: $light-gray-line;
      padding: 40px 30px;
    }

    .title {
      width: 70%;

      @include tablet {
        width: 100%;
      }

      @include mobile {
        font-size: 1.4rem;
      }
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: 100%;

    @include mobile {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;

    border-right: $light-gray-line;

    &:nth-child(4) {
      border-right: none;
    }

    &:nth-child(-n+4) {
      border-bottom: $light-gray-line;
    }

    @include mobile {
      padding: 30px;
    }

    img {
      width: 80%;
      
      @include laptop {
        width: 70%;
      }
    }
  }

  .button {
    grid-column: 3 / 5;
    border: none;
    background: transparent;

    @include mobile {
      grid-column: 1 / 3;
      border-top: $light-gray-line;
    }

    p {
      @include laptop {
        font-size: 2.4rem;
      }

      @include mobile {
        font-size: 1.6rem;
      }
    }
  }
}
</style>