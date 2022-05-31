<template>
  <div class="product-card" v-for="product in products" :key="product.id">
    <div class="product-card__top">
      <p class="product-card__type" v-if="product.type">{{ product.type }}</p>
      <img class="product-card__image" :src="require(`@/assets/img/products/${product.image}.jpg`)" />
      <div class="product-card__prices">
        <p class="product-card__old-price" v-if="product.oldPrice">{{ product.oldPrice }} ₽</p>
        <p class="product-card__price">{{ product.price }} ₽</p>
      </div>
    </div>
    <div class="product-card__bottom">
      <router-link class="product-card__name product-card__item body-2" :to="{ name: 'Product', params: { id: product.id } }">
        <span>{{ product.name }}</span>
      </router-link>
      <button class="product-card__favorite product-card__item">
        <app-icon name="favorite" />
      </button>
      <AppButton class="product-card__cart" text="В корзину" type="primary c" />
    </div>
  </div>
</template>

<script>
import AppButton from '../UI/AppButton.vue'

export default {
  props: { products: Object },
  components: { AppButton }
}
</script>

<style lang="scss">
.product-card {
  display: grid;
  grid-template-rows: 1fr 80px;
  border-right: $light-gray-line;
  border-bottom: $light-gray-line;

  @include laptop {
    grid-template-rows: 1fr 57px;
  }

  @include small-tablet {
    grid-template-rows: 1fr 42px;
  }

  @include mobile {
    grid-template-rows: 1fr 38px;
    grid-area: auto;
  }

  &__top {
    display: flex;
    flex-direction: column;
    padding: 25px;
    position: relative;

    @include laptop {
      padding: 17px;
    }

    @include mobile {
      padding: 10px;
    }
  }

  &__type {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 120%;
    text-transform: uppercase;
    text-align: right;

    @include laptop {
      font-size: 1.8rem;
    }

    @include small-tablet {
      font-size: 1.4rem;
    }

    @include mobile {
      font-size: 1.2rem;
    }
  }

  &__image {
    margin: auto;

    width: 300px;
    height: 310px;

    @include laptop {
      width: 213px;
      height: 220px;
    }

    @include small-tablet {
      width: 160px;
      height: 166px;
    }

    @include mobile {
      width: 112px;
      height: 116px;
    }
  }

  &__prices {
    display: flex;
    justify-content: flex-end;
    gap: 30px;

    font-weight: 600;
    font-size: 2.4rem;
    line-height: 120%;

    @include laptop {
      font-size: 1.8rem;
      gap: 18px;
    }

    @include small-tablet {
      font-size: 1.4rem;
    }

    @include mobile {
      font-size: 1.2rem;
      gap: 12px;
    }
  }

  &__old-price {
    color: $light-gray;
    position: relative;

    &:after {
      content: '';
      width: 120%;
      height: 1px;

      background-color: $light-gray;

      position: absolute;
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);
    }
  }

  &__bottom {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    border-top: $light-gray-line;

    @include mobile {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  &__item {
    position: relative;
    overflow: hidden;

    &:after {
      content: '';
      width: 100%;
      height: 100%;

      background-color: rgba($light-gray, .2);

      position: absolute;
      bottom: 0;
      left: 0;

      transform: translateY(100%);
      transition: transform .3s $ease;
    }

    &:hover {
      &:after {
        transform: translateY(0%);
      }
    }
  }

  &__name {
    display: flex;
    align-items: center;
    padding-left: 24px;
    padding-right: 10px;

    border-right: $light-gray-line;

    grid-column: 1 / 4;
      
    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      position: relative;
      z-index: 1;
    }
  }

  &__favorite {
    display: flex;
    align-items: center;
    justify-content: center;

    grid-column: 4 / 4;

    @include mobile {
      grid-column: 4 / 5;
    }

    svg {
      position: relative;
      z-index: 1;

      @include laptop {
        width: 14px;
        height: 12px;
      }

      @include small-tablet {
        width: 10px;
        height: 9px;
      }
    }
  }

  &__cart {
    grid-column: 5 / 7;

    @include laptop {
      font-size: 1.4rem;
    }

    @include small-tablet {
      font-size: 1.2rem;
    }

    @include mobile {
      font-size: 0;
      grid-column: 5 / 6;

      background-image: url('../../assets/img/icon/cart.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 12px 11px;
    }
  }

  &:nth-child(1) {
    grid-area: 1 / 1 / 2 / 7;

    @include mobile {
      grid-area: auto;
    }
  }
  &:nth-child(2) {
    grid-area: 1 / 7 / 2 / 19;

    @include mobile {
      grid-area: auto;
    }
  }
  &:nth-child(3) {
    grid-area: 2 / 1 / 3 / 7;

    @include mobile {
      grid-area: auto;
    }
  }
  &:nth-child(4) {
    grid-area: 2 / 7 / 3 / 13;

    @include mobile {
      grid-area: auto;
    }
  }
  &:nth-child(5) {
    grid-area: 2 / 13 / 3 / 19;

    @include mobile {
      grid-area: auto;
    }
  }
  &:nth-child(6) {
    grid-area: 3 / 1 / 4 / 13;

    @include mobile {
      grid-area: auto;
    }
  }
  &:nth-child(7) {
    grid-area: 3 / 13 / 4 / 19;

    @include mobile {
      grid-area: auto;
    }
  }
  &:nth-child(8) {
    grid-area: 4 / 1 / 5 / 7;

    @include mobile {
      grid-area: auto;
    }
  }
  &:nth-child(9) {
    grid-area: 4 / 7 / 5 / 13;

    @include mobile {
      grid-area: auto;
    }
  }
  &:nth-child(10) {
    grid-area: 4 / 13 / 5 / 19;

    @include mobile {
      grid-area: auto;
    }
  }
}
</style>