<template>
  <div class="pop-cat">
    <div class="pop-cat__item pop-cat__title">
      <h1 class="title">Популярные категории</h1>
    </div>
    <router-link class="pop-cat__item pop-cat__link" :to="{ name: cat.link }" v-for="cat in catList" :key="cat">
      <div class="pop-cat__inner">
        <img class="pop-cat__image" :src="require(`@/assets/img/${cat.img}.png`)" alt="" />
        <h3 class="title">{{ cat.title }}</h3>
      </div>
    </router-link>
    <div class="pop-cat__item pop-cat__btn">
      <AppButton @click="$router.push({ name: 'Catalog' })" text="Все категории" type="secondary md l" icon />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import AppButton from "../UI/AppButton.vue";

export default {
  setup() {
    const catList = ref([
      {
        img: "handle",
        title: "Ручки мебельные",
        link: 'Furniture Handles'
      },
      {
        img: "facades",
        title: "Фасады мебельные",
        link: 'Facades'
      },
      {
        img: "facade-profiles",
        title: "Профили фасадные",
      },
      {
        img: "drawers",
        title: "Выдвижные ящики",
        link: 'Drawers'
      },
    ]);
    return {
      catList,
    };
  },
  components: { AppButton },
};
</script>

<style lang="scss">
.pop-cat {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  height: 85vh;

  @include laptop {
    height: auto;
    grid-template-columns: repeat(2, 1fr);
  }

  @include small-tablet {
    grid-template-columns: 1fr;
  }

  &__item {
    border-right: $light-gray-line;

    &:nth-child(-n+3) {
      border-bottom: $light-gray-line;
    }

    &:nth-child(-n+4) {
      @include small-tablet {
        border-bottom: $light-gray-line;
      }
    }
  }

  &__link {
    padding: 30px 40px;
    position: relative;
    cursor: pointer;

    @include mobile {
      padding: 30px;
    }

    &:after {
      content: '';
      width: 0%;
      height: 100%;

      background-color: rgba($light-gray, .5);

      position: absolute;
      left: 0;
      top: 0;

      transition: width .6s $ease;
    }

    &:hover {
      &:after {
        width: 100%;
      }
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;

    height: 100%;

    position: relative;
    z-index: 1;

    @include small-tablet {
      justify-content: space-between;
      flex-direction: row-reverse;
      align-items: center;
    }

    .title {
      @include small-tablet {
        font-size: 1.8rem;
      }

      @include mobile {
        gap: 10px;
        font-size: 1.4rem;
      }
    }
  }

  &__image {
    margin: auto;

    @include small-tablet {
      margin: 0;
      width: 30%;
    }
  }

  &__title {
    padding: 120px 84px;

    @include laptop {
      padding: 90px 60px;
    }

    @include small-tablet {
      padding: 85px 40px;
    }

    @include mobile {
      padding: 30px;
    }
  }

  &__btn {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .button {
      font-size: 2.4rem;
      width: 100%;
      border: none;
      border-top: $light-gray-line;
      background-color: transparent;

      @include laptop {
        font-size: 1.8rem;
      }
    }
  }
}
</style>