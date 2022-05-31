<template>
  <div class="contacts">
    <div class="contacts__title">
      <h1 class="title">Связаться с нами</h1>
    </div>
    <div class="contacts__inner">
      <div class="contacts__row">
        <h5 class="title">Контакты</h5>
        <div class="contacts__content">
          <a class="contacts__item" href="tel:+78123806686">+7(812) 380-66-86 (Санкт-Петербург)</a>
          <a class="contacts__item" href="tel:+74955067832">+7(495) 506-78-32 (Москва)</a>
          <a class="contacts__item" href="mailto:info@rosso.su">info@rosso.su</a>
        </div>
      </div>
      <div class="contacts__row">
        <h5 class="title">Адрес</h5>
        <div class="contacts__content">
          <div class="contacts__location">
            <p class="contacts__item">г. Санкт-Петербург</p>
            <p class="contacts__item">Полюстровский пр., д. 50</p>
            <p class="contacts__item">Пн-Пт. С 10.00 ДО 18.00</p>
          </div>
          <div class="contacts__location">
            <p class="contacts__item">г. Москва, Московская область</p>
            <p class="contacts__item">ул. Фабричная, д.6</p>
            <p class="contacts__item">Пн- Пт. С 10.00 ДО 18.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.contacts {
  display: grid;
  grid-template-columns: 33.3% 1fr;

  border-bottom: 1px solid $light-gray;

  &.dark {
    color: $white;
    background-color: $black;
    border-bottom: 1px solid $gray;

    .contacts__title {
      border-right: 1px solid $gray;

      @include tablet {
        border-bottom: 1px solid $gray;
      }
    }
    .contacts__row {
      &:first-child {
        border-bottom: 1px solid $gray;
      }
    }
  }

  @include laptop {
    grid-template-columns: 28% 1fr;
  }

  @include small-tablet {
    grid-template-columns: 1fr;
  }

  &__title {
    padding: 100px 84px;

    border-right: 1px solid $light-gray;

    @include tablet {
      padding: 50px 20px;
      border-bottom: 1px solid $light-gray;
    }

    @include small-tablet {
      padding: 73px 56px 50px;
      border-right: none;
    }

    @include mobile {
      padding: 30px;
    }

    .title {
      width: 70%;

      @include small-tablet {
        width: 100%;
        font-size: 3.2rem;
      }

      @include mobile {
        font-size: 1.8rem;
      }
    }
  }

  &__inner {
    display: grid;
    grid-template-rows: 40% 1fr;

    @include mobile {
      grid-template-rows: auto;
    }
  }

  &__row {
    display: flex;
    padding: 70px;

    @include small-tablet {
      padding-left: 56px;
    }

    @include mobile {
      padding: 30px;
      flex-direction: column;
    }

    &:first-child {
      border-bottom: 1px solid $light-gray;
    }

    .title {
      color: $gray;

      width: 30%;

      @include small-tablet {
        width: 40%;
      }
    }
  }

  &__content {
    margin: -5px 0;

    @include mobile {
      margin-top: 10px;
    }
    
    a {
      transition: color .3s $ease;

      &:hover {
        color: $light-gray;
      }
    }
  }

  &__location:first-child {
    margin-bottom: 50px;

    @include mobile {
      margin-bottom: 20px;
    }
  }

  &__item {
    padding: 8px 0;
    font-size: 2.4rem;

    @include laptop {
      font-size: 1.8rem;
    }

    @include mobile {
      font-size: 1.2rem;
      padding: 0;
    }
  }
}
</style>