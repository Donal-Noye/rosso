<template>
  <div class="not-found">
    <h1 class="not-found__title">404</h1>
    <div class="not-found__title">
      <h1 class="title">Плохи дела: мы не можем найти эту страницу!</h1>
    </div>
    <div class="not-found__content">
      <div class="not-found__text body-1">
        <p>
          Ссылка, на которую Вы щелкнули, чтобы прибыть сюда, содержит опечатку
          <br>
          Или эта страница была каким-то образом либо удалена, либо переименована нами
          <br>
          Или, что конечно же маловероятно, Вы вводили ее вручную и при этом допустили небольшую ошибку?
        </p>
        <p>Вы наверняка найдёте необходимую информацию если начнёте с главной страницы</p>
      </div>
      <AppButton @click="$router.push({ name: 'Home' })" text="Вернуться на главную" type="secondary lg r" icon />
    </div>
  </div>
</template>

<script>
import AppButton from '../components/UI/AppButton.vue'

export default {
  components: { AppButton },
}
</script>

<style lang="scss">
.not-found {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: 363px 1fr;

  @include laptop {
    grid-template-rows: 258px 1fr;
  }

  @include small-tablet {
    grid-template-rows: 224px 1fr;
  }

  @include mobile {
    grid-template-rows: 180px 1fr;
  }

  &__title {
    &:nth-child(1) {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding-bottom: 50px;
      grid-area: 1 / 1 / 2 / 7;

      font-weight: 600;
      font-size: 9.6rem;
      line-height: 110%;

      border-right: $light-gray-line;
      border-bottom: $light-gray-line;

      @include laptop {
        font-size: 6.4rem;
      }

      @include tablet {
        font-size: 4.8rem;
        padding-bottom: 30px;
      }

      @include small-tablet {
        font-size: 3.2rem;
        padding-bottom: 20px;
      }

      @include mobile {
        grid-area: 1 / 1 / 2 / 9;
      }
    }

    &:nth-child(2) {
      display: flex;
      align-items: flex-end;
      padding: 0 120px 50px;
      grid-area: 1 / 7 / 2 / 25;
      
      border-bottom: $light-gray-line;

      @include tablet {
        padding: 0 75px 30px;
      }

      @include small-tablet {
        padding: 0 40px 20px;
      }

      @include mobile {
        grid-area: 1 / 9 / 2 / 25;
        padding: 0 17px 20px;
      }

      .title {
        width: 60%;

        @include tablet {
          width: 100%;
        }
      }
    }
  }

  &__content {
    grid-area: 2 / 7 / 3 / 25;
    
    border-left: $light-gray-line;

    @include mobile {
      grid-area: 2 / 1 / 3 / 25;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 92px 316px;

    @include laptop {
      padding: 92px 172px;
    }

    @include tablet {
      padding: 92px 90px;
    }

    @include small-tablet {
      padding: 40px 58px 60px;
    }

    @include mobile {
      padding: 50px 33px 70px;
    }
  }
}
</style>