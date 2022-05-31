<template>
  <div class="question">
    <div class="question__title">
      <h2 class="title">Остались вопросы?</h2>
    </div>
    <form class="question__form" @submit.prevent>
      <AppInput class="question__group" title="Ваше имя *" placeholder="Например, Иван" name="name"  />
      <AppInput class="question__group" title="Ваш Email *" placeholder="example@example.ru" name="email"  />
      <AppInput class="question__group" title="Ваш вопрос *"  />
      <div class="question__group">
        <AppInputFile />
      </div>
      <AppButton class="question__btn" text="Отправить" type="secondary r" icon />
    </form>
  </div>
</template>

<script>
import AppInput from './UI/AppInput.vue';
import AppButton from './UI/AppButton.vue';
import AppInputFile from './UI/AppInputFile.vue';

export default {
  setup() {
    
  },
  components: { AppInput, AppButton, AppInputFile }
}
</script>

<style lang="scss">
.question {
  display: grid;
  grid-template-columns: repeat(24, 1fr);

  @include small-tablet {
    display: block;
  }

  &__title {
    grid-column: 1 / 10;
    padding: 80px;

    border-right: $light-gray-line;

    @include small-tablet {
      padding: 54px 66px 30px;
      border-right: none;
      border-bottom: $light-gray-line;
    }

    @include mobile {
      padding: 41px 30px 18px;
    }
  }

  &__form {
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    grid-template-rows: repeat(2, 1fr) auto 1fr;
    row-gap: 80px;
    padding-top: 90px;
    grid-column: 10 / 25;

    @include small-tablet {
      grid-template-columns: repeat(24, 1fr);
      grid-template-rows: repeat(3, 1fr) 80px;
      row-gap: 48px;
      padding-top: 60px;
    }

    @include small-mobile {
      display: flex;
      flex-direction: column;
      padding-top: 30px;
      gap: 30px;
    }
  }

  &__group {
    @include small-mobile {
      padding: 0 30px;
    }

    &:nth-child(1) {
      grid-area: 1 / 2 / 2 / 7;

      @include small-tablet {
        grid-area: 1 / 3 / 2 / 12;
      }
    }
    &:nth-child(2) {
      grid-area: 1 / 8 / 2 / 13; 

      @include small-tablet {
        grid-area: 1 / 14 / 2 / 23; 
      }
    }
    &:nth-child(3) {
      grid-area: 2 / 2 / 3 / 13;

      @include small-tablet {
        grid-area: 2 / 3 / 3 / 23; 
      }
    }
    &:nth-child(4) {
      grid-area: 3 / 2 / 4 / 13;

      @include small-tablet {
        grid-area: 3 / 3 / 4 / 23;
      }
    }
  }

  &__btn {
    padding-right: 240px;
    grid-area: 4 / 1 / 5 / 16;
    
    font-size: 2rem;
    background-color: transparent !important;
    border: none !important;
    border-top: $light-gray-line !important;

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