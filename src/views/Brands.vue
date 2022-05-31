<template>
  <div class="brands">
    <div class="brands__item large" v-for="brand in brands.slice(0, 1)" :key="brand">
      <img :src="require(`@/assets/img/brands/${brand}.png`)" alt="">
    </div>
    <div class="brands__title">
      <h1 class="title">Бренды партнеров</h1>
    </div>
    <div class="brands__text">
      <p class="body-1">У нас вы можете приобретсти партию продукции, изготовленную нашими партнерами.</p>
    </div>
    <ul class="brands__list">
      <li class="brands__item" v-for="brand in brands.slice(1)" :key="brand">
        <img :src="require(`@/assets/img/brands/${brand}.png`)" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const brands = ref(['transformica', 'metakor', 'confurn', 'giusti', 'rejs', 'gamet', 'stabilus', 'salice', 'lincos', 'озмф', 'nomet', 'formenti', 'korner'])

    return { brands }
  }
}
</script>

<style lang="scss">
.brands {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);

  height: calc(130vh - $header-desktop);

  @include tablet {
    height: calc(100vh - $header-tablet);
  }

  &__title {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    grid-area: 1 / 3 / 2 / 5;
    padding: 30px 70px;

    border-bottom: $light-gray-line;

    @include small-tablet {
      padding: 18px 30px;
    }
  }

  &__text {
    padding: 67px 160px;
    grid-area: 2 / 3 / 3 / 5;

    border-bottom: $light-gray-line;

    @include laptop {
      padding: 34px 54px;
    }

    @include small-tablet {
      padding: 18px 30px;
    }

    p {
      width: 588px;

      @include laptop {
        width: auto;
      }
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-area: 3 / 1 / 4 / 5;

    @include small-tablet {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;

    border-right: $light-gray-line;
    border-bottom: $light-gray-line;

    img {
      @include laptop {
        width: 60%;
      }

      @include tablet {
        width: 70%;
      }
    }

    &.large {
      grid-area: 1 / 1 / 3 / 3;

      img {
        width: 60%;

        @include tablet {
          width: 80%;
        }
      }
    }
  }
}
</style>