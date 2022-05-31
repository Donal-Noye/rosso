<template>
  <router-link class="facades-card" v-for="card in facades" :key="card" :to="{ name: 'Facades Catalog' }">
    <div class="facades-card__inner">
      <div class="facades-card__content">
        <h3 class="facades-card__title title">{{ card.title }}</h3>
        <p class="facades-card__text body-2">{{ card.text }}</p>
      </div>
      <AppButton class="facades-card__btn" text="Подробнее" type="secondary md r" icon />
    </div>
    <img class="facades-card__image" :src="require(`@/assets/img/facades/${card.image}.jpg`)" alt="">
  </router-link>
</template>

<script>
import AppButton from '../UI/AppButton.vue';

export default {
  props: {
    facades: Object
  },
  components: { AppButton }
}
</script>

<style lang="scss">
.facades-card {
  overflow: hidden;
  position: relative;

  border-bottom: $light-gray-line;
  border-right: $light-gray-line;

  transition: color .3s $ease;

  @include mobile {
    color: $white;
    border: none;
  }

  &:hover {
    color: $white;

    .facades-card__image {
      opacity: 1;
    }

    .facades-card__btn {
      color: $white;
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;

    position: relative;
    z-index: 1;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 90px 80px;

    @include tablet {
      padding: 50px;
      gap: 20px;
    }
  }

  &__image {
    width: 100%;
    height: 100%;

    opacity: 0;
    
    position: absolute;
    top: 0;
    left: 0;

    transition: opacity .3s $ease;

    @include mobile {
      opacity: 1;
    }
  }

  &__btn {
    width: 100%;
    background-color: transparent !important;
    border: none !important;
    border-top: $light-gray-line !important;

    @include mobile {
      color: $white !important;
    }

    &:after {
      background-color: transparent !important;
    }
  }
}
</style>