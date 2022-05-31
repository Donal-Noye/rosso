<template>
  <div class="intro">
    <div class="intro__photo">
      <img src="@/assets/img/intro.jpg" alt="">
    </div>
    <div class="intro__title">
      <h1 class="title">Поставщик качественной мебельной фурнитуры</h1>
    </div>
    <div class="intro__text">
      <p class="body-1">Мы стали специалистами в поставках одного из самых сложных и, в то же время, самых красивых направлений фурнитуры для мебели – лицевой фурнитуры, а точнее – мебельных ручек.</p>
    </div>
    <div class="empty"></div>
    <AppButton @click="$router.push({ name: 'Catalog' })" text="В каталог" type="primary lg r" icon />
  </div>
</template>

<script>
import AppButton from "../UI/AppButton.vue";

export default {
  components: { AppButton }
}
</script>

<style lang="scss">
.intro {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);

  height: calc(100vh - $header-desktop);

  @include tablet {
    height: calc(100vh - $header-tablet);
  }

  @include small-tablet {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(10, 1fr);
  }

  @include mobile {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(10, 1fr);
  }

  &__photo {
    grid-area: 1 / 1 / 9 / 5;

    @include small-tablet {
      grid-area: 1 / 1 / 7 / 2;
    }

    @include mobile {
      grid-area: 1 / 1 / 5 / 3;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  &__title {
    display: flex;
    align-items: flex-end;
    padding: 0 0 31px 66px;
    grid-area: 1 / 5 / 4 / 11; 

    border-bottom: $light-gray-line;
    border-right: $light-gray-line;

    @include tablet {
      grid-area: 1 / 5 / 4 / 12; 
    }

    @include small-tablet {
      padding: 35px;
      grid-area: 1 / 2 / 7 / 3;
    }

    @include mobile {
      padding: 30px 24px;
      grid-area: 1 / 3 / 5 / 6; 
    }

    h1 {
      width: 847px;

      @include laptop {
        width: 568px;
      }

      @include mobile {
        width: 100%;
      }
    }
  }

  &__text {
    display: flex;
    justify-content: flex-end;
    padding: 60px;
    grid-area: 4 / 5 / 8 / 11;

    border-right: $light-gray-line;

    @include tablet {
      grid-area: 4 / 5 / 8 / 12; 
    }

    @include small-tablet {
      padding-top: 40px;
      grid-area: 7 / 1 / 10 / 2; 
    }

    @include mobile {
      grid-area: 5 / 1 / 10 / 5;
      padding: 40px;
      padding-top: 30px;
    }

    p {
      width: 558px;

      @include laptop {
        width: 397px;
      }

      @include small-tablet {
        font-size: 1.2rem;
        line-height: 150%;

        width: 100%;
      }

      @include mobile {
        font-size: 1.4rem;
      }

      @media (max-width: 320px) {
        font-size: 1.2rem;
      }
    }
  }

  .empty {
    grid-area: 1 / 11 / 4 / 13;

    border-bottom: $light-gray-line;

    @include tablet {
      grid-area: 1 / 12 / 4 / 13;
    }

    @include small-tablet {
      grid-area: 7 / 2 / 10 / 3;
    }

    @include mobile {
      grid-area: 5 / 5 / 10 / 6;
    }
  }

  .button {
    grid-area: 8 / 5 / 9 / 13;

    @include small-tablet {
      grid-area: 10 / 1 / 11 / 3;
    }

    @include mobile {
      grid-area: 10 / 1 / 11 / 6;
    }
  }
}
</style>