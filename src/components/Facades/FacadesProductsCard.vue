<template>
  <li class="facades-products-card" v-for="card in products" :key="card.id">
    <div class="facades-products-card__top">
      <img class="facades-products-card__image" :src="require(`@/assets/img/facades/${card.image}.jpg`)" alt="">
      <div class="facades-products-card__price">
        от {{ card.startPrice }} ₽/м<sup>2</sup>
      </div>
    </div>
    <div class="facades-products-card__bottom">
      <div class="facades-products-card__name">
        <p class="body-2">{{ card.name }}</p>
      </div>
      <AppButton @click="$router.push({ name: 'Facade', params: { id: card.id } })" text="Подробнее" type="primary c" />
    </div>
  </li>
</template>

<script>
import AppButton from '../UI/AppButton.vue';
export default {
  props: {
    products: Object
  },
  setup() {
    return {};
  },
  components: { AppButton }
}
</script>

<style lang="scss">
.facades-products-card {
  display: grid;
  grid-template-rows: 1fr 80px;

  border-left: $light-gray-line;
  border-bottom: $light-gray-line;

  @include tablet {
    grid-template-rows: 1fr 60px;
  }

  @include small-tablet {
    grid-template-rows: 1fr 43px;
  }

  &__top {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 100px 24px 24px;

    border-bottom: $light-gray-line;

    @include tablet {
      padding: 80px 16px 16px;
    }

    @include small-tablet {
      padding: 60px 10px 10px;
    }

    @include mobile {
      padding: 37px 20px 10px;
    }
  }

  &__image {
    margin: 0 auto;

    @include laptop {
      width: 70%;
    }

    @include tablet {
      width: 50%;
    }

    @include mobile {
      width: 70%;
    }
  }

  &__price {
    margin-top: 46px;

    font-weight: 600;
    font-size: 2.8rem;

    @include tablet {
      font-size: 1.6rem;
    }

    @include small-tablet {
      font-size: 1.4rem;
    }

    @include mobile {
      margin-top: 14px;
    }

    sup {
      vertical-align: super;
      font-size: .8em;
    }
  }

  &__bottom {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  &__name {
    display: flex;
    align-items: center;
    padding: 0 25px;

    @include tablet {
      padding: 0 14px;
    }

    @include mobile {
      padding: 0 9px;
    }
  }
}
</style>