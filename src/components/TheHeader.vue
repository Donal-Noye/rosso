<template>
  <header class="header">
    <div class="header__top">
      <div class="header__city">
        <img src="@/assets/img/icon/geo.svg" alt="" />
        <p>Санкт-Петербург</p>
      </div>
      <nav class="nav">
        <router-link class="nav__link" v-for="item in navList" :key="item" :to="{ name: item.link }">
          {{ item.title }}
        </router-link>
      </nav>
      <a class="header__tel" href="tel:78123806686">
        <img src="@/assets/img/icon/phone.svg" alt="" />
        <p>+7(812) 380-66-86</p>
      </a>
    </div>
    <div class="header__bottom">
      <div class="header__left">
        <button class="burger" @click="toggleMenu">
          <div class="burger__icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p class="burger__title">Каталог</p>
        </button>
        <div class="header__links">
          <router-link :to="{ name: 'Novelties' }">Новинки</router-link>
          <router-link :to="{ name: 'Sale' }">Распродажа</router-link>
        </div>
      </div>
      <img @click="$router.push({ name: 'Home' })" class="header__logo" src="@/assets/img/logo.png" alt="">
      <div class="header__actions">
        <button class="header__action">
          <app-icon name="search" />
        </button>
        <button class="header__action">
          <app-icon name="profile" />
        </button>
        <button class="header__action">
          <app-icon name="favorite" />
        </button>
        <button class="header__action" @click="toggleModal">
          <app-icon name="cart" />
        </button>
      </div>
    </div>
  </header>
  <teleport to='#app'>
    <MenuMobile @close="toggleMenu" :menuActive="menuActive"  />
    <AppModal 
      title="Корзина" 
      right 
      @close="toggleModal" 
      :modalActive="modalActive" 
    />
  </teleport>
</template>

<script>
import { ref } from "@vue/reactivity";
import AppModal from "./UI/AppModal.vue";
import MenuMobile from "./MenuMobile.vue";
import { useRouter } from 'vue-router';

export default {
  setup() {
    const modalActive = ref(false);
    const menuActive = ref(false);
    const router = useRouter() 

    const navList = ref([
      { title: "О компании", link: "About" },
      { title: "Бренды", link: "Brands" },
      { title: "Доставка и оплата", link: "Delivery" },
      { title: "Гарантии", link: "Guaranty" },
      { title: "Обмен / возврат", link: "Exchange" },
      { title: "Контакты", link: "Contacts" },
    ]);

    const toggleModal = () => {
      modalActive.value = !modalActive.value
    }

    const toggleMenu = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth > 1024) {
        router.push({ name: 'Catalog' })
      } else {
        menuActive.value = !menuActive.value
      }
    }

    return {
      navList,
      modalActive,
      menuActive,
      toggleModal,
      toggleMenu,
    };
  },
  components: { AppModal, MenuMobile }
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: $header-desktop;

  background-color: $white;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;

  @include tablet {
    height: $header-tablet;
  }

  &__top,
  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 85px;

    border-bottom: $light-gray-line;
  }

  &__top {
    height: 40%;

    @include laptop {
      font-size: 1.2rem;
    }

    @include tablet {
      display: none;
    }
  }

  &__tel,
  &__city {
    display: flex;
    align-items: center;
    gap: 12px;

    @include laptop {
      gap: 7px;
    }

    img {
      @include laptop {
        width: 15px;
        height: 15px;
      }
    }
  }

  &__bottom {
    height: 60%;
    position: relative;

    @include laptop {
      font-size: 1.4rem;
    }

    @include tablet {
      height: 100%;
    }

    @include small-tablet {
      padding-left: 32px;
      padding-right: 32px;
    }

    @include mobile {
      padding-left: 17px;
      padding-right: 17px;
    }
  }

  &__left {
    display: flex;
    align-items: center;

    height: 100%;
  }

  &__links {
    display: flex;
    margin-left: 50px;

    height: 100%;

    @include laptop {
      margin-left: 25px;
    }

    @include tablet {
      display: none;
    }

    a {
      display: flex;
      align-items: center;
      padding: 0 20px;

      height: 100%;

      transition: color .3s $ease;

      @include laptop {
        padding: 0 14px;
      }

      &:hover {
        color: $light-gray;
      }

      &.active {
        color: $light-gray;
      }
    }
  }

  &__logo {
    cursor: pointer;

    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    @include laptop {
      width: 227px;
      height: 32px;
    }

    @include tablet {
      width: 160px;
      height: 22px;
    }

    @include mobile {
      width: 127px;
      height: 18px;
    }
  }

  &__actions {
    display: flex;
    align-items: center;

    height: 100%;

    @include mobile {
      gap: 22px;
    }
  }

  &__action {
    display: flex;
    align-items: center;
    padding: 20px;

    height: 100%;

    color: $black;

    transition: color .3s $ease;

    @include laptop {
      padding: 20px 15px;
    }

    @include mobile {
      padding: 0;
    }

    &:nth-child(2),
    &:nth-child(3) {
      @include tablet {
        display: none;
      }
    }

    &:hover {
      color: $light-gray;
    }

    svg {
      @include mobile {
        width: 15px;
        height: 15px;
      }
    }
  }
}

.nav {
  display: flex;
  gap: 35px;
  justify-content: space-between;

  height: 100%;

  @media (max-width: 1540px) {
    gap: 25px;
  }

  @media (max-width: 1200px) {
    gap: 10px;
  }

  &__link {
    display: flex;
    align-items: center;
    position: relative;

    height: 100%;

    color: $gray;

    @media (max-width: 1540px) {
      font-size: 1.2rem;
    }

    &:after {
      content: '';
      width: 0%;
      height: 2px;

      visibility: hidden;
      background-color: $gray;

      position: absolute;
      bottom: 0;
      left: 50%;

      transform: translateX(-50%);
      transition: all .3s $ease 50ms;
    }

    &.active,
    &:hover {
      &:after {
        visibility: visible;
        width: 100%;
      }
    }
  }
}

.burger {
  display: flex;
  align-items: center;
  gap: 15px;

  height: 100%;

  &__icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    width: 18px;
    height: 12px;

    span {
      display: block;
      width: 100%;
      height: 2px;

      background-color: $black;
      border-radius: 2px;

      transition: all .5s $ease;
    }
  }

  &__title {
    font-weight: 500;

    @include mobile {
      display: none;
    }
  }
}
</style>