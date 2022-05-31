<template>
  <div class="product">
    <div class="product__content" v-if="loader">
      <div class="product__image">
        <h3 class="product__type title" v-if="product.type">{{ product.type }}</h3>
        <img class="product__photo" :src="require(`@/assets/img/products/${product.image}.jpg`)" alt="">
        <img class="product__brand" src="@/assets/img/brands/metakor.png" />
      </div>
      <div class="product__mobile">
        <h3 class="product__name title">{{ product.name }}</h3>
        <div class="product__actions">
          <button class="product__add-favorite">
            <app-icon name="favorite" />
          </button>
          <button class="product__add-cart">
            <app-icon name="cart" />
          </button>
        </div>
      </div>
      <div class="product__info">
        <div class="product__left">
          <h3 class="product__name title">{{ product.name }}</h3>
          <div class="product-descr product__dropdown">
            <AppDropdown title="Описание товара">
              <template v-slot:default>
                <p class="body-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur dolorum maiores dolore nulla repellat quos fugiat hic non.</p>
              </template>
            </AppDropdown>
          </div>
          <div class="product-char product__dropdown">
            <AppDropdown title="Производитель">
              <template v-slot:default>
                <ul class="product-char__list">
                  <li class="product-char__item" v-for="char in charList" :key="char">
                    <p class="product-char__title body-2">{{ char.title }}</p>
                    <p class="product-char__text body-2">{{ char.text }}</p>
                  </li>
                </ul>
              </template>
            </AppDropdown>
          </div>
        </div>
        <div class="product__right">
          <div class="product__prices">
            <p class="product__old-price" v-if="product.oldPrice">{{ product.oldPrice }} ₽</p>
            <p class="product__price">{{ product.price }} ₽</p>
          </div>
          <div class="product__actions">
            <AppButton class="product__add-cart" text="Добавить в корзину" type="primary c" />
            <button class="product__add-favorite">
              <app-icon name="favorite" />
            </button>
            <AppButton class="product__one-click" text="Одним кликом" type="secondary c" />
          </div>
        </div>
      </div>
    </div>
    <AppLoader pos="center" v-else />
    <ProductReviews />
    <DeliveryMsg class="dark" />
    <div class="product__geo">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167459.2168443798!2d30.08053208087271!3d59.94366750174803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LM!5e0!3m2!1sru!2sru!4v1653292057338!5m2!1sru!2sru" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { db } from "@/firebaseInit.js";
import AppLoader from '@/components/UI/AppLoader.vue';
import AppDropdown from '../components/UI/AppDropdown.vue';
import AppButton from '../components/UI/AppButton.vue';
import ProductReviews from '../components/Product/ProductReviews.vue';
import DeliveryMsg from '../components/DeliveryMsg.vue';

export default {
  setup() {
    const route = useRoute();
    const products = ref([]);
    const loader = ref(null);
    const currentProductArray = ref(null);
    const product = ref(null);
    const charList = ref([
      { title: 'Производитель', text: 'Omoikiri' },
      { title: 'Страна производитель', text: 'Бельгия' },
      { title: 'Код производителя', text: 'B2.130218.52' },
      { title: 'Код товара', text: '11.4149.79 ' },
      { title: 'Цвет', text: 'Лак черный матовый' },
      { title: 'Тип товара', text: 'Скоба' },
      { title: 'Материал товара', text: 'Металл' },
      { title: 'Коллекция', text: 'Verona' },
      { title: 'Серия товара', text: 'Модерн' },
      { title: 'Размер модуля', text: '160мм' },
    ])

    const getProducts = async () => {
      const resultProducts = [];

      try {
        await db.collection("products").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            resultProducts.push(doc.data())
          });
          products.value = resultProducts
          currentProductArray.value = products.value.filter(product => product.id === route.params.id)
          product.value = currentProductArray.value[0]

          loader.value = true
        });
      }
      catch (error) {
        console.log(error.message)
        throw error
      }
    };

    getProducts()

    return { product, loader, charList }
  },
  components: { AppLoader, AppDropdown, AppButton, ProductReviews, DeliveryMsg }
}
</script>

<style lang="scss">
.product {
  &__content {
    display: grid;
    grid-template-columns: 40% 1fr;

    min-height: calc(100vh - $header-desktop);

    border-bottom: $light-gray-line;
    background-color: $white;

    @include tablet {
      min-height: calc(100vh - $header-tablet);
    }

    @include small-tablet {
      display: block;
    }
  }

  &__image {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 40px;

    border-right: $light-gray-line;

    @include tablet {
      padding: 16px;
    }

    @include small-tablet {
      border-right: none;
      border-bottom: $light-gray-line;
      padding: 30px;
    }

    @include mobile {
      padding: 15px;
    }
  }

  &__photo {
    margin: auto;
    width: 60%;

    @include tablet {
      width: 100%;
    }

    @include small-tablet {
      width: 40%;
    }

    @include mobile {
      width: 50%;
    }
  }

  &__type {
    text-transform: uppercase;

    @include mobile {
      font-size: 1.4rem !important;
    }
  }

  &__brand {
    width: 140px;
    height: 82px;

    @include tablet {
      width: 99px;
      height: 59px;
    }

    @include mobile {
      width: 61px;
      height: 37px;
    }
  }

  &__mobile {
    display: none;
    justify-content: space-between;
    align-items: center;

    height: 40px;

    border-bottom: $light-gray-line;

    @include mobile {
      display: flex;

      .product__name {
        display: block;
        margin-bottom: 0;
        padding: 0 16px;

        font-size: 1.4rem;
      }
    }

    @include small-mobile {
      .product__name {
        font-size: 1.2rem;
      }
    }

    .product__actions {
      display: flex;
      gap: 0;
      height: 100%;
    }

    .product__add-cart,
    .product__add-favorite {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-area: auto;
      padding: 0;

      width: 40px;
      height: 100%;

      svg {
        width: 12px;
        height: 11px;
      }
    }

    .product__add-favorite {
      border-top: none;
      border-bottom: none;
    }

    .product__add-cart {
      background-color: $black;
      color: $white;

      transition: background-color .3s $ease;

      &:hover {
        background-color: $gray;
      }
    }
  }

  &__info {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 80px;
    padding: 130px 80px 0 52px;

    @include laptop {
      gap: 40px;
    }

    @include tablet {
      display: flex;
      flex-direction: column;
      padding: 68px 80px 50px 52px;
      grid-template-columns: auto;
      gap: 50px;
    }

    @include small-tablet {
      display: grid;
      grid-template-columns: 2fr 1fr;
      padding: 43px 50px;
      gap: 40px;
    }

    @include mobile {
      grid-template-columns: 1fr;
      padding: 14px 16px 16px;
      gap: 15px;
    }
  }

  &__left {
    @include tablet {
      order: 2;
    }

    @include small-tablet {
      order: 1;
    }

    @include mobile {
      order: 2;
    }
  }

  &__right {
    @include tablet {
      order: 1;
    }

    @include small-tablet {
      order: 2;
    }

    @include mobile {
      order: 1;
    }
  }

  &__name {
    margin-bottom: 20px;

    @include small-tablet {
      margin-bottom: 16px;
      font-size: 1.8rem;
    }

    @include mobile {
      display: none;
    }
  }

  &__dropdown {
    padding: 20px 0;
    border-top: $light-gray-line;

    @include small-tablet {
      padding: 14px 0;
    }
  }

  &__prices {
    display: flex;
    margin-bottom: 20px;
    gap: 18px;

    font-weight: 600;
    font-size: 2rem;
    line-height: 120%;

    @include mobile {
      margin-bottom: 0;
    }

    @include small-mobile {
      font-size: 1.4rem;
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

  &__actions {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 16px;
    row-gap: 20px;

    @include laptop {
      font-size: 1.2rem;
    }

    @include small-tablet {
      column-gap: 11px;
      row-gap: 13px;
    }

    @include mobile {
      display: none;
    }
  }

  &__add-cart {
    padding: 20px 50px;
    grid-area: 1 / 1 / 2 / 5;

    @include laptop {
      padding: 12px 22px;
    }
  }

  &__add-favorite {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: 2 / 1 / 3 / 2;

    border: $light-gray-line;
    position: relative;
    overflow: hidden;

    svg {
      position: relative;
      z-index: 1;

      @include laptop {
        width: 12px;
        height: 10px;
      }
    }

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

  &__one-click {
    padding: 20px 30px;
    grid-area: 2 / 2 / 3 / 5;

    @include laptop {
      padding: 12px 10px;
    }
  }

  &__geo {
    display: flex;
    flex-direction: column;
    padding: 90px 0;
  
    @include mobile {
      padding: 40px 13px;
    }

    iframe {
      margin: auto;

      width: 85%;
      height: 503px;
  
      @include mobile {
        width: 100%;
        height: 490px;
      }
    }
  }
}

.product-char {
  &__list {
    display: flex;
    flex-direction: column;
    row-gap: 7px;
  }

  &__item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  &__text {
    color: #8B8B8B;
  }
}


</style>