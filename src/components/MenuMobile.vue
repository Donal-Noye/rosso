<template>
  <transition name="menu-mobile">
    <div class="menu-mobile" v-if="menuActive" @click="close">
      <div class="menu-mobile__inner" @click.stop>
        <div class="menu-mobile__top">
          <router-link class="body-4" :to="{ name: 'Catalog' }">Каталог</router-link>
        </div>
        <div class="menu-mobile__links">
          <router-link class="body-4" :to="{ name: 'Novelties' }">Новинки</router-link>
          <router-link class="body-4" :to="{ name: 'Sale' }">Распродажа</router-link>
        </div>
        <nav class="menu-mobile__nav">
          <router-link class="nav__link body-4" v-for="item in navList" :key="item" :to="{ name: item.link }">
            {{ item.title }}
          </router-link>
        </nav>
        <div class="menu-mobile__bottom">
          <router-link class="body-4" :to="{ name: 'Novelties' }">Новинки</router-link>
          <router-link class="body-4" :to="{ name: 'Sale' }">Распродажа</router-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
  props: {
    menuActive: Boolean
  },
  setup(_, { emit }) {
    const navList = ref([
      { title: "О компании", link: "About" },
      { title: "Бренды", link: "Brands" },
      { title: "Доставка и оплата", link: "Delivery" },
      { title: "Гарантии", link: "Guaranty" },
      { title: "Обмен / возврат", link: "Exchange" },
      { title: "Контакты", link: "Contacts" },
    ]);

    const close = () => {
      emit('close')
    }

    return { navList, close }
  }
}
</script>

<style lang="scss">
.menu-mobile {
  display: none;

  width: 100%;
  height: calc(100vh - $header-tablet);

  background-color: rgba($black, .9);

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;

  @include tablet {
    display: block;
  }

  &__inner {
    padding: 0 30px;

    width: 50%;
    height: 100%;

    background-color: $white;

    position: absolute;
    left: 0;
    top: 0;

    @include mobile {
      width: 80%;
    }

    @include small-mobile {
      width: 90%;
    }
  }

  &__top,
  &__links,
  &__nav,
  &__bottom {
    padding: 16px 0;
    border-bottom: $light-gray-line;
  }

  &__top {
    padding: 16px 30px;
    margin: 0 -30px;
  }
}

.menu-mobile-enter-active, 
.menu-mobile-leave-active {
	transition: opacity 0.5s $ease;
}

.menu-mobile-leave-active {
  transition-delay: 0.25s;
}

.menu-mobile-enter-from,
.menu-mobile-leave-to {
  opacity: 0;
}

.menu-mobile-enter-active .menu-mobile__inner,
.menu-mobile-leave-active .menu-mobile__inner { 
  transition: transform .5s $ease;
}

.menu-mobile-enter-from .menu-mobile__inner,
.menu-mobile-leave-to .menu-mobile__inner {
  transform: translateX(-100%);
}
</style>