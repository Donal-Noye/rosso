<template>
  <div class="catalog-card" v-for="card in cards" :key="card.id">
    <div class="catalog-card__image">
      <img :src="require(`@/assets/img/catalog/${card.image}.png`)" alt="">
    </div>
    <div class="catalog-card__content">
      <router-link class="catalog-card__title" :to="{ name: card.path }">{{ card.title }}</router-link>
      <ul class="catalog-card__list" v-if="card.links">
        <li class="catalog-card__item" v-for="link in card.links" :key="link">
          <a class="catalog-card__link body-1" :href="link.path">{{ link.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cards: Object
  }
}
</script>

<style lang="scss">
.catalog-card {
  display: grid;
  grid-template-rows: 1fr 1fr;

  padding: 50px 80px 0;

  border-right: $light-gray-line;
  border-bottom: $light-gray-line;

  @include small-tablet {
    padding: 20px 43px 0;
  }

  @include mobile {
    grid-template-rows: auto;
    padding: 20px 30px 40px;
  }

  &__image {
    margin: auto;
    margin-bottom: 40px;

    @include laptop {
      width: 70%;
    }

    @include mobile {
      width: 40%;
      margin-bottom: 15px;
    }

    img {
      width: 100%;
    }
  }

  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;

    &:hover {
      text-decoration: underline;
    }

    @include laptop {
      font-size: 1.6rem;
    }

    @include small-mobile {
      font-size: 1.2rem;
    }
  }

  &__list {
    padding-top: 15px;
    margin-top: 20px;
    
    border-top: $light-gray-line;
  }

  &__link {
    padding: 7px 0;

    transition: color .2s $ease;

    @include laptop {
      padding: 2px 0;
      font-size: 1.4rem;
    }

    @include small-mobile {
      font-size: 1.2rem;
    }

    &:hover {
      color: $light-gray;
    }
  }
}
</style>