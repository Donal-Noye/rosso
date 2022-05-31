<template>
  <div class="facade">
    <div class="facade__inner" v-if="loader">
      <div class="facade__detail facade__grid">
        <div class="facade__image">
          <img class="facade__photo lg" :src="require(`@/assets/img/facades/${facade.image}.jpg`)" alt="">
          <img src="@/assets/img/brands/fabriche.png" alt="" class="facade__brand">
        </div>
        <div class="facade__content">
          <div class="facade__header">
            <h3 class="title">Фрезеровка «{{ facade.name }}»</h3>
            <div class="facade__price">
              от {{ facade.startPrice }} ₽/м<sup>2</sup>
            </div>
          </div>
          <div class="facade__descr">
            <p class="subtitle-lg">Описание</p>
            <div class="facade__descr-content body-2">
              <p>Фрезеровку Лассо отличает оригинальный декор по углам фасада.</p>
              <p>Классический стиль вековых традиций поможет создать незабываемый дизайн Вашего интерьера.</p>
              <p>
              <ul>Преимущества:
                <li>шпон не подвержен усушке и набуханию, а значит ваш фасад никогда не «рассохнется»;</li>
                <li>используемый нами шпон, имеет постоянный цвет и рисунок, а значит, ваши фасады будут похожи между
                  собой. У дерева текстура на каждом фасаде своя, «природная»;</li>
                <li>богатый выбор текстур и расцветок.</li>
              </ul>
              </p>
            </div>
          </div>
          <div class="facade__char">
            <p class="subtitle-lg">Характеристики</p>
            <ul class="facade__char-list body-2">
              <li class="facade__char-item" v-for="char in charList" :key="char">
                <p>{{ char.title }}</p>
                <p>{{ char.text }}</p>
              </li>
            </ul>
          </div>
          <div class="facade__actions">
            <AppButton text="Заказать" @click="toggleModal" type="secondary c lg" />
            <AppButton text="Нужна помощь?" type="primary r lg" icon />
          </div>
        </div>
      </div>
      <div class="facade-color">
        <div class="facade__title">
          <h3 class="title">Цветовые решения</h3>
        </div>
        <div class="facade-color__inner facade__grid facade__section">
          <div class="facade-color__image facade__image">
            <img class="facade__photo" src="@/assets/img/facades/oakside-gray-stone.jpg" alt="">
            <p class="body-1">615 Оксайд серый камень</p>
          </div>
          <div class="facade-color__content facade__content">
            <div class="facade__dropdown">
              <AppDropdown title="Фантазийные">
                <template v-slot:default>
                  <ul class="facade-color__list">
                    <li @click="activeFantasy = item" class="facade-color__item facade__item"
                      :class="{ active: activeFantasy === item }" v-for="item in 13" :key="item">
                      <img :src="require(`@/assets/img/facades/colors/fantasy-${item}.jpg`)" alt="">
                    </li>
                  </ul>
                </template>
              </AppDropdown>
            </div>
            <div class="facade__dropdown">
              <AppDropdown title="Древесные" />
            </div>
            <div class="facade__dropdown">
              <AppDropdown title="Однотонные" />
            </div>
          </div>
        </div>
      </div>
      <div class="facade-versions">
        <div class="facade__title">
          <h3 class="title">Цветовые решения</h3>
        </div>
        <div class="facade-versions__inner facade__grid facade__section">
          <template v-for="item in versions" :key="item">
            <div class="facade-versions__image facade__image" v-show="selectedVersion === item">
              <img class="facade__photo" :src="require(`@/assets/img/facades/versions/${item}.jpg`)" alt="">
              <p class="body-1">Витрина решетка</p>
            </div>
          </template>
          <div class="facade-versions__content facade__content">
            <ul class="facade-versions__list">
              <li @click="selectedVersion = item" class="facade-versions__item facade__item"
                :class="{ active: item === selectedVersion }" v-for="item in versions" :key="item">
                <img :src="require(`@/assets/img/facades/versions/${item}.jpg`)" alt="">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <AppLoader pos="center" v-else />
    <QuestionForm />
    <teleport to='#app'>
      <AppModal center @close="toggleModal" :modalActive="modalActive">
        <template v-slot:default>
          <div class="facade-modal">
            <div class="facade-modal__header">
              <h3 class="facade-modal__title title">Оставить заявку на фасад</h3>
              <button class="modal__close" @click="toggleModal">
                <app-icon name="close" />
              </button>
            </div>
            <form class="facade-modal__form" @submit.prevent>
              <AppInput class="facade-modal__group" title="Ваше имя *" placeholder="Например, Иван" name="name" />
              <AppInput class="facade-modal__group" title="Ваш Email *" placeholder="example@example.ru" name="email" />
              <AppInput class="facade-modal__group" title="Ваш вопрос *" />
              <div class="facade-modal__group">
                <AppInputFile />
              </div>
              <AppButton class="facade-modal__btn" text="Отправить" type="secondary r" icon />
            </form>
          </div>
        </template>
      </AppModal>
    </teleport>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { db } from "@/firebaseInit.js";
import AppLoader from '@/components/UI/AppLoader.vue';
import AppButton from '../components/UI/AppButton.vue';
import AppDropdown from '../components/UI/AppDropdown.vue';
import QuestionForm from '../components/QuestionForm.vue';
import AppInput from '../components/UI/AppInput.vue';
import AppInputFile from '../components/UI/AppInputFile.vue';
import AppModal from '../components/UI/AppModal.vue';

export default {
  setup() {
    const route = useRoute();
    const products = ref([]);
    const loader = ref(null);
    const currentFacadeArray = ref(null);
    const facade = ref(null);
    const activeFantasy = ref(null);
    const modalActive = ref(false);

    const charList = ref([
      { title: 'Производитель', text: 'Fabriche' },
      { title: 'Максимальный размер', text: '2300*596 мм' },
      { title: 'Ширина рамки', text: '83 мм' },
      { title: 'Стиль', text: 'Классика ' },
      { title: 'Толщина', text: '19 мм ' },
      { title: 'Срок изготовления', text: '4-5 недель' },
    ])

    const toggleModal = () => {
      modalActive.value = !modalActive.value
    }

    const versions = ref(['version-1', 'version-2', 'version-3', 'version-4', 'version-5', 'version-6', 'version-7',])
    const selectedVersion = ref('version-1');

    const getProducts = async () => {
      const resultProducts = [];

      try {
        await db.collection("products").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            resultProducts.push(doc.data())
          });
          products.value = resultProducts
          currentFacadeArray.value = products.value.filter(product => product.id === route.params.id)
          facade.value = currentFacadeArray.value[0]

          loader.value = true
        });
      }
      catch (error) {
        console.log(error.message)
        throw error
      }
    };

    getProducts()

    return { facade, loader, charList, activeFantasy, versions, selectedVersion, toggleModal, modalActive }
  },
  components: { AppLoader, AppButton, AppDropdown, QuestionForm, AppInput, AppInputFile, AppModal }
}
</script>

<style lang="scss">
.facade {
  background-color: $white;

  &__title {
    padding: 132px 157px 32px;

    border-bottom: $light-gray-line;
    border-top: $light-gray-line;
    background-color: $white;

    @include laptop {
      padding: 94px 112px 27px;
    }

    @include tablet {
      padding: 60px 100px 20px;
    }

    @include mobile {
      padding: 42px 30px 20px;
    }
  }

  &__detail {
    height: calc(100vh - $header-desktop);

    @include tablet {
      height: auto;

      .facade__image {
        padding: 46px 34px 28px;
        align-items: flex-end;
      }

      .facade__content {
        padding: 0;
      }
    }

    .facade__photo {
      margin: 0 auto 74px;

      width: 262px;
      height: 522px;

      @include laptop {
        margin-bottom: 48px;

        width: 187px;
        height: 372px;
      }

      @include tablet {
        margin-bottom: 25px;
      }

      @include mobile {
        width: 120px;
        height: 240px;
      }
    }

    .facade__content {
      display: grid;
      grid-template-columns: repeat(16, 1fr);
      grid-template-rows: auto 1fr 120px;

      @include laptop {
        grid-template-rows: auto 1fr 85px;
      }

      @include tablet {
        gap: 45px;
      }

      @include small-tablet {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;
      }
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(24, 1fr);

    @include tablet {
      display: block;
    }
  }

  &__section {
    min-height: 70vh;

    @include small-tablet {
      min-height: auto;
    }
  }

  &__image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column: 1 / 9;

    border-right: $light-gray-line;

    @include tablet {
      padding: 80px 0 38px;

      border-right: none;
      border-bottom: $light-gray-line;
    }

    @include mobile {
      padding: 44px 0;
    }
  }

  &__photo {
    margin-bottom: 50px;

    width: 188px;
    height: 374px;

    @include laptop {
      margin-bottom: 35px;

      width: 134px;
      height: 267px;
    }

    @include tablet {
      margin-bottom: 25px;
    }

    @include mobile {
      margin-bottom: 17px;

      width: 91px;
      height: 181px;
    }
  }

  &__brand {
    width: 228px;
    height: 33px;

    @include mobile {
      width: 30%;
      height: auto;
    }
  }

  &__content {
    grid-column: 9 / 25;

    @include tablet {
      padding: 60px 96px;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-area: 1 / 2 / 2 / 16;
    padding: 87px 0 25px;
    margin-bottom: 52px;

    border-bottom: $light-gray-line;

    @include laptop {
      padding: 62px 0 18px;
    }

    @include tablet {
      padding: 43px 0 10px;
      margin-bottom: 0;
    }

    @include small-tablet {
      margin-bottom: 25px;
      width: 85%;
    }

    @include mobile {
      padding-top: 28px;
    }
  }

  &__price {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 120%;
    text-align: right;

    @include small-tablet {
      font-size: 1.6rem;
      line-height: 130%;
    }

    @include mobile {
      font-size: 1.4rem;
    }

    @include small-mobile {
      font-size: 1.2rem;
    }
  }

  &__descr {
    grid-area: 2 / 2 / 3 / 10;

    @include small-tablet {
      margin-bottom: 30px;
      width: 85%;
    }
  }

  &__descr-content {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @include laptop {
      gap: 16px;
    }

    li {
      display: flex;
      gap: 5px;

      &:before {
        content: '-';
      }
    }
  }

  &__char {
    grid-area: 2 / 11 / 3 / 16;

    @include small-tablet {
      margin-bottom: 45px;
      width: 85%;
    }
  }

  &__char-item {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 7px;

    @include small-tablet {
      grid-template-columns: 35% auto;
      gap: 25px;
    }
  }

  &__descr-content,
  &__char-list {
    margin-top: 23px;

    @include laptop {
      margin-top: 16px;
    }
  }

  &__actions {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-area: 3 / 1 / 4 / 17;

    @include small-tablet {
      height: 85px;
      width: 100%;
    }

    @include mobile {
      height: 60px;
    }

    .button {
      padding: 0 !important;

      &:nth-child(1) {
        grid-column: 1 / 5;
        border-left: none;
        border-bottom: none;
        border-right: none;

        @include tablet {
          grid-column: 1 / 7;
        }
      }

      &:nth-child(2) {
        padding-right: 60px !important;
        grid-column: 5 / 17;

        @include tablet {
          grid-column: 7 / 17;
        }

        @include mobile {
          padding-right: 22px !important;
        }
      }
    }
  }

  &__dropdown {
    width: 80%;

    padding: 30px 0;
    border-top: $light-gray-line;

    @include laptop {
      padding: 20px 0;
    }

    @include tablet {
      width: 100%;
    }

    @include small-tablet {
      padding: 14px 0;
    }

    &:first-child {
      @include small-tablet {
        border-top: none;
      }
    }
  }

  &__item {
    cursor: pointer;

    img {
      transition: transform .3s $ease;
    }

    &.active {
      border: $light-gray-line;

      img {
        transform: scale(.7);
      }
    }
  }
}

.facade-color {
  &__content {
    padding: 80px 88px 0;

    @include tablet {
      padding: 60px 96px;
    }

    @include mobile {
      padding: 27px 48px;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;

    @include laptop {
      gap: 22px;
    }

    @include mobile {
      gap: 11px;
    }
  }

  &__item {
    width: 50px;
    height: 50px;

    @include mobile {
      width: 37px;
      height: 38px;
    }

    @include small-mobile {
      width: 17px;
      height: 18px;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.facade-versions {
  border-bottom: $light-gray-line;

  &__content {
    padding: 0 74px;
    margin: auto 0;

    @include laptop {
      padding: 124px 50px;
    }

    @include tablet {
      padding: 60px 96px;
    }

    @include mobile {
      padding: 28px 45px 32px;
    }
  }

  &__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 86px;

    @include laptop {
      gap: 60px;
    }

    @include tablet {
      justify-content: center;
    }

    @include mobile {
      gap: 23px;
    }
  }

  &__item {
    cursor: pointer;

    @include mobile {
      width: 41px;
      height: 70px;
    }

    @include small-mobile {
      width: 21px;
      height: 40px;
    }

    img {
      width: 75px;
      height: 150px;

      @include laptop {
        width: 54px;
        height: 108px;
      }

      @include mobile {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.facade-modal {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 132px 164px 40px;

    border-bottom: $light-gray-line;

    @include laptop {
      padding-left: 80px;
      padding-right: 80px;
    }

    @include tablet {
      padding: 100px 75px 20px;
    }

    @include small-tablet {
      padding-left: 40px;
      padding-right: 40px;
    }

    @include mobile {
      padding-top: 40px;
    }

    @include small-mobile {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  &__form {
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    grid-template-rows: repeat(2, 1fr) auto 1fr;
    row-gap: 80px;
    padding-top: 90px;

    @include small-tablet {
      grid-template-columns: repeat(24, 1fr);
      grid-template-rows: repeat(3, 1fr) 80px;
      row-gap: 48px;
      padding-top: 60px;
    }

    @include mobile {
      display: flex;
      flex-direction: column;
      padding-top: 30px;
      gap: 30px;
    }
  }

  &__group {
    @include mobile {
      padding: 0 40px;
    }

    @include small-mobile {
      padding: 0 20px;
    }

    &:nth-child(1) {
      grid-area: 1/3/2/8;

      @include small-tablet {
        grid-area: 1 / 3 / 2 / 12;
      }
    }

    &:nth-child(2) {
      grid-area: 1/9/2/14;

      @include small-tablet {
        grid-area: 1 / 14 / 2 / 23;
      }
    }

    &:nth-child(3) {
      grid-area: 2 / 3 / 3 / 14;

      @include small-tablet {
        grid-area: 2 / 3 / 3 / 23;
      }
    }

    &:nth-child(4) {
      grid-area: 3 / 3 / 4 / 13;

      @include small-tablet {
        grid-area: 3 / 3 / 4 / 23;
      }
    }
  }

  &__btn {
    padding-right: 84px;
    grid-area: 4 / 1 / 5 / 16;

    font-size: 2rem;
    background-color: transparent !important;
    border: none !important;
    border-top: $light-gray-line  !important;

    @include tablet {
      font-size: 1.6rem;
    }

    @include small-tablet {
      padding-right: 32px;
      grid-area: 4 / 1 / 5 / 25;
    }

    @include mobile {
      height: 60px;
    }
  }
}
</style>