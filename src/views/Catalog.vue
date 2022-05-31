<template>
  <div class="catalog">
    <div class="catalog-popular">
      <router-link class="catalog-popular__link catalog__item" :to="{ name: 'Furniture Handles' }">
        <img class="catalog-popular__image catalog__image" src="@/assets/img/handle.png" alt="">
        <h4 class="catalog-popular__name title">Ручки мебельные</h4>
      </router-link>
      <router-link class="catalog-popular__link catalog__item" :to="{ name: 'Facades' }">
        <img class="catalog-popular__image catalog__image" src="@/assets/img/facades.png" alt="">
        <h4 class="catalog-popular__name title">Фасады мебельные</h4>
      </router-link>
    </div>
    <div class="catalog__links">
      <router-link class="catalog__link" :to="{ name: 'Novelties' }">Новинки</router-link>
      <AppButton @click="$router.push({ name: 'Sale' })" text="Распродажа" type="primary lg l" icon />
    </div>
    <div class="catalog__cards">
      <CatalogCard :cards="catalogList" />
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import AppButton from "../components/UI/AppButton.vue";
import CatalogCard from "../components/CatalogCard.vue";

export default {
  setup() {
    const catalogList = ref([
      {
        id: 1,
        image: 'faucets',
        title: 'Мойки и смесители',
        links: [
          { title: 'Мойки кухонные', path: '#' },
          { title: 'Смесители', path: '#' },
          { title: 'Аксессуары', path: '#' },
        ]
      },
      {
        id: 2,
        image: 'profile-for-frame-structures-CARDO',
        title: 'Профиль для каркасных конструкций CARDO',
        links: [
          { title: 'Профили CADRO', path: '#' },
          { title: 'Комплектующие к каркасной системе CADRO', path: '#' },
        ]
      },
      {
        id: 3,
        image: 'furniture-lamps',
        title: 'Светильники мебельные',
        links: [
          { title: 'Светодиодные светильники', path: '#' },
          { title: 'Галогенные светильники', path: '#' },
          { title: 'Выдвижные блоки розеток', path: '#' },
        ]
      },
      {
        id: 4,
        image: 'pull-out-systems-and-filling-for-cabinets-and-wardrobes',
        title: 'Выдвижные системы и наполнение для шкафов и гардеробов',
        links: [
          { title: 'Корзины сетчатые', path: '#' },
          { title: 'Системы для шкафов и гардеробов выкатные', path: '#' },
          { title: 'Штанги одежные', path: '#' },
        ]
      },
      {
        id: 5,
        image: 'railing-kitchen-systems',
        title: 'Рейлинговые кухонные системы',
      },
      {
        id: 6,
        image: 'lifting-mechanisms',
        title: 'Механизмы подъемные',
        links: [
          { title: 'Механизм Wind Salice', path: '#' },
          { title: 'Системы вертикального открывания', path: '#' },
          { title: 'Газлифты фасадные', path: '#' },
        ]
      },
      {
        id: 7,
        image: 'furniture-hinges',
        title: 'Петли мебельные',
        links: [
          { title: 'Петли мебельные Slide-On', path: '#' },
          { title: 'Петли с доводчиком', path: '#' },
          { title: 'Петли специальные', path: '#' },
        ]
      },
      {
        id: 8,
        image: 'drawers',
        title: 'Выдвижные ящики',
        links: [
          { title: 'Выдвижные ящики с доводчикоми', path: '#' },
          { title: 'Комплектующие для ящиков', path: '#' },
          { title: 'Металбоксы и рейлинги', path: '#' },
        ]
      },
      {
        id: 9,
        image: 'transformation-mechanisms-gas-lifts',
        title: 'Механизмы трансформации, газлифты',
        links: [
          { title: 'Механизмы шкаф-кровать Transformica', path: '#' },
          { title: 'Механизмы шкаф-кровать прочие', path: '#' },
          { title: 'Механизмы подъема спального основания', path: '#' },
        ]
      },
      {
        id: 10,
        image: 'plinth-for-countertops',
        title: 'Плинтус для столешниц',
        links: [
          { title: 'Плинтус', path: '#' },
          { title: 'Комплектующие для плинтуса', path: '#' },
        ]
      },
      {
        id: 11,
        image: 'guides-for-drawers',
        title: 'Направляющие для выдвижных ящиков',
        links: [
          { title: 'Скрытые направляющие', path: '#' },
          { title: 'Шариковые направляющие', path: '#' },
          { title: 'Роликовые направляющие', path: '#' },
        ]
      },
      {
        id: 12,
        image: 'plinth',
        title: 'Цоколь',
        links: [
          { title: 'Цоколь', path: '#' },
          { title: 'Комплектующие для цоколя', path: '#' },
        ]
      },
    ])

    return { catalogList }
  },
  components: { AppButton, CatalogCard }
}
</script>

<style lang="scss">
.catalog {
  &__item {
    display: flex;
    flex-direction: column;
  }

  &__image {
    margin: auto;
  }

  &__links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    height: 20vh;

    @include small-tablet {
      grid-template-columns: repeat(2, 50%);
      height: 12vh;
    }

    @include mobile {
      height: 60px;
    }

    .button {
      @include mobile {
        padding: 0 25px !important;
      }

      p {
        font-size: 4.8rem;

        @include laptop {
          font-size: 3.2rem;
        }

        @include small-tablet {
          font-size: 2rem;
        }

        @include mobile {
          font-size: 1.4rem;
        }
      }
      svg {
        width: 30px;
        height: 25px;

        @include laptop {
          width: 26px;
          height: 23px;
        }

        @include small-tablet {
          width: 12px;
          height: 10px;
        }
      }
    }
  }

  &__link {
    display: flex;
    align-items: center;
    padding: 0 80px;

    width: 100%;
    height: 100%;

    font-size: 4.8rem;
    border-right: $light-gray-line;
    border-top: $light-gray-line;
    border-bottom: $light-gray-line;

    transition: background-color .3s $ease;

    @include laptop {
      font-size: 3.2rem;
    }

    @include small-tablet {
      font-size: 2rem;
    }

    @include mobile {
      font-size: 1.4rem;
      padding: 0 25px;
    }

    &:hover {
      background-color: rgba($light-gray, .2);
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mobile {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}

.catalog-popular {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  height: calc(80vh - $header-desktop);

  @include small-tablet {
    grid-template-columns: repeat(2, 50%);
    height: calc(45vh - $header-tablet);
  }

  @include mobile {
    height: auto;
  }

  &__link {
    justify-content: flex-end;

    transition: background-color .3s $ease;

    @include mobile {
      padding: 45px 5px 18px;
    }

    &:first-child {
      border-right: $light-gray-line;
    }

    &:hover {
      background-color: rgba($light-gray, .2);
    }
  }

  &__image {
    width: 40%;

    @include tablet {
      width: 60%;
    }

    @include mobile {
      width: 50%;
      margin-bottom: 28px;
    }
  }

  &__name {
    padding: 0 0 40px 80px;

    @include small-tablet {
      padding-left: 32px;
      padding-bottom: 20px;
      font-size: 1.4rem !important;
    }

    @include mobile {
      text-align: center;
      padding: 0;
    }
  }
}


</style>