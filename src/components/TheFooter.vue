<template>
  <footer class="footer">
    <ul class="footer__list">
      <h6 class="footer__title title">Каталог</h6>
      <li class="footer__item" v-for="item in catalogList" :key="item">
        <router-link class="footer__link" :to="{ name: item.path }">{{ item.title }}</router-link>
      </li>
    </ul>
    <ul class="footer__list">
      <h6 class="footer__title title">Покупателю</h6>
      <li class="footer__item" v-for="item in buyerList" :key="item">
        <router-link class="footer__link" :to="{ name: item.path }">{{ item.title }}</router-link>
      </li>
    </ul>
    <ul class="footer__list">
      <h6 class="footer__title title">Компания</h6>
      <li class="footer__item" v-for="item in companyList" :key="item">
        <a class="footer__link" :href="item.path">{{ item.title }}</a>
      </li>
    </ul>
    <ul class="footer__list">
      <h6 class="footer__title title">Мы принимаем</h6>
      <li class="footer__item" v-for="item in cardsList" :key="item">
        <a class="footer__link" :href="item.path">{{ item.title }}</a>
      </li>
    </ul>
    <ul class="footer__list">
      <h6 class="footer__title title">Социальные сети</h6>
      <li class="footer__item" v-for="item in socialList" :key="item">
        <a class="footer__link" :href="item.path">{{ item.title }}</a>
      </li>
    </ul>
  </footer>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const catalogList = ref([
      { title: 'Ручки мебельные', path: 'Furniture Handles' },
      { title: 'Фасады мебельные', path: 'Facades' },
      { title: 'Новинки', path: 'Novelties' },
      { title: 'Распродажа', path: 'Sale' },
    ])
    
    const buyerList = ref([
      { title: 'Доставка', path: 'Delivery' },
      { title: 'Возврат / обмен', path: 'Exchange' },
      { title: 'Гарантии', path: 'Guaranty' },
      { title: 'Договор оферты', path: 'Contract Offer' },
    ])
    
    const companyList = ref([
      { title: 'О нас', path: '#' },
      { title: 'Парнеры', path: '#' },
      { title: 'Новости', path: '#' },
      { title: 'Дипломы / сертификаты', path: '#' },
    ])
    
    const cardsList = ref([
      { title: 'Mastercard', path: '#' },
      { title: 'Visa', path: '#' },
      { title: 'JСВ', path: '#' },
      { title: 'МИР', path: '#' },
    ])
    
    const socialList = ref([
      { title: 'Instagram', path: '#' },
      { title: 'Вконтакте', path: '#' },
    ])

    return { catalogList, buyerList, companyList, cardsList, socialList }
  }
}
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: center;
  margin-top: auto;
  padding: 80px 0;
  gap: 120px;

  color: $white;
  background-color: $black;

  @include laptop {
    padding: 60px 70px;
    gap: 90px;
  }

  @include small-tablet {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @include mobile {
    gap: 50px;
    grid-template-columns: repeat(2, 1fr);
    padding: 50px 30px;
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }

  &__title {
    margin-bottom: 20px;

    @include laptop {
      margin-bottom: 15px;
    }
  }
  
  &__link {
    padding: 5px 0;

    font-size: 1.4rem;
    line-height: 145%;

    transition: color .2s $ease;

    @include laptop {
      font-size: 1.2rem;
      line-height: 150%;
    }

    @include mobile {
      color: $gray;
    }

    &.active,
    &:hover {
      color: $gray;
    }

    &:active {
      @include mobile {
        color: $white;
      }
    }
  }
}
</style>