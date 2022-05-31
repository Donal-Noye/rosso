<template>
  <div class="delivery-msg">
    <div class="delivery-msg__item">
      <h3 class="title">Доставка</h3>
      <p class="body-2">Наш склад/магазин, в котором Вы можете самостоятельно забрать заказ, находится по адресу: г. Санкт-Петербург, Полюстровский проспект, дом 50, 3-й этаж (вход с Чугунной улицы).</p>
    </div>
    <div class="delivery-msg__item">
      <h3 class="title">Пункты выдачи</h3>
      <p class="body-2">Мы организуем доставку ваших заказов в Санкт-Петербург транспортной компанией СДЭК. Товар можно получить в пунктах выдачи заказов или заказать доставку до двери.</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.delivery-msg {
  display: grid;
  grid-template-columns: 1fr 1.2fr;

  @include mobile {
    display: block;
  }

  &.dark {
    color: $white;
    background-color: $black;

    .delivery-msg__item:first-child {
      border-right: $gray-line;

      @include mobile {
        border-bottom: $gray-line;
      }
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 162px;
    gap: 40px;

    height: 360px;

    @include tablet {
      padding-left: 80px;
    }

    @include small-tablet {
      padding: 0 30px;
    }
  
    @include mobile {
      padding: 40px 30px;
      gap: 20px;
      height: auto;
    }

    p {
      width: 70%;

      @include small-tablet {
        width: 100%;
      }
    }

    &:first-child {
      border-right: $light-gray-line;
  
      @include mobile {
        border-right: none;
        border-bottom: $light-gray-line;
      }
    }
  }
}
</style>