<template>
  <div class="product-reviews">
    <div class="product-reviews__left">
      <h3 class="product-reviews__title title">Отзывы о товаре</h3>
      <ul class="product-reviews__list">
        <ProductReviewsItem :reviews="reviews" />
      </ul>
    </div>
    <div class="product-reviews__right">
      <h3 class="product-reviews__title title">Оставить свой отзыв</h3>
      <form @submit.prevent class="product-reviews__form">
        <AppInput class="product-reviews__group" title="Ваше имя *" placeholder="Например, Иван" name="name"  />
        <AppInput class="product-reviews__group" title="Ваш отзыв"  />
        <div class="product-reviews__group">
          <p class="body-1">Ваша оценка товара *</p>
          <div class="product-reviews__form-rating">
            <div class="product-reviews__star" v-for="item in 5" :key="item">
              <app-icon name="star-outline" />
            </div>
          </div>
        </div>
        <AppButton text="Отправить" type="secondary r md" icon />
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import ProductReviewsItem from './ProductReviewsItem.vue';
import AppButton from '../UI/AppButton.vue';
import AppInput from '../UI/AppInput.vue';

export default {
  setup() {
    const reviews = ref([
      { name: 'Ирина К.', text: 'Достойно выглядит, достаточно тяжелая, работает плавно. Хром и обработка без дефектов', date: '6 Февраля 2021' },
      { name: 'Семен Ф.', text: 'Достойно выглядит, достаточно тяжелая, работает плавно. Хром и обработка без дефектов', date: '6 Февраля 2021' },
    ])

    return { reviews }
  },
  components: { ProductReviewsItem, AppButton, AppInput }
}
</script>

<style lang="scss">
.product-reviews {
  display: grid;
  grid-template-columns: 1fr 1.2fr;

  @include laptop {
    display: block;
  }

  &__title {
    margin-bottom: 60px;

    @include mobile {
      margin-bottom: 30px;
    }
  }

  &__left {
    padding: 106px 80px 168px;

    border-right: $light-gray-line;

    @include laptop {
      padding: 42px 64px 56px;

      border-right: none;
      border-bottom: $light-gray-line;
    }

    @include mobile {
      padding: 40px 30px;
    }
  }

  &__list {
    display: grid;
    gap: 35px;
  }

  &__right {
    padding: 106px 80px 168px;
    position: relative;

    @include laptop {
      padding: 75px 64px 138px;
    }

    @include mobile {
      padding: 40px 30px 100px;
    }
  }

  &__form {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 82px;

    @include small-tablet {
      gap: 40px;
    }

    @include mobile {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  &__group {
    &:nth-child(1) {
      grid-column: 1 / 8;
      grid-row: 1 / 2;
    }

    &:nth-child(2) {
      grid-column: 1 / 12;
      grid-row: 2 / 3;
    }

    &:nth-child(3) {
      grid-column: 9 / 12;
      grid-row: 1 / 2;

      @include small-tablet {
        grid-column: 8 / 12;
      }
    }
  }

  &__form-rating {
    display: flex;
    gap: 12px;
    margin-top: 30px;

    @include small-tablet {
      gap: 9px;
      margin-top: 23px;
    }
  }

  &__star {
    display: flex;
    align-items: center;

    svg {
      @include small-tablet {
        width: 15px;
        height: 15px;
      }
    }
  }

  .button {
    font-size: 2rem;
    border: none;
    border-top: $light-gray-line;
    background-color: transparent;

    width: 100%;

    position: absolute;
    bottom: 0;
    left: 0;

    @include small-tablet {
      font-size: 1.6rem;
    }
  }
}
</style>