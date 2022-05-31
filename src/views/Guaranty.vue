<template>
  <div class="guaranty">
    <div class="guaranty__title">
      <h1 class="title">Гарантии</h1>
    </div>
    <span class="empty"></span>
    <div class="guaranty__text body-1">
      <p>Все товары мы закупаем только у проверенных производителей и поставщиков. Наша компания уверена в качестве реализуемых комплектующих. Поэтому на всю реализуемую нами фурнитуру мы даём гарантию 1 год с момента приобретения.</p>
      <p>Гарантия действует при соблюдении условии эксплуатации и ухода.</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.guaranty {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(2, 1fr);

  height: 70vh;

  @include small-tablet {
    grid-template-rows: 1fr auto;
    height: auto;
  }

  &__title {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    grid-area: 1 / 1 / 2 / 17;
    padding: 0 314px 40px  0;

    border-right: $light-gray-line;
    border-bottom: $light-gray-line;

    @include small-tablet {
      padding: 16px 67px;
      padding-top: 60px;
      justify-content: flex-start;
      grid-area: 1 / 1 / 2 / 25;
    }
  }

  .empty {
    grid-area: 1 / 17 / 2 / 25;
    border-bottom: $light-gray-line;

    @include small-tablet {
      display: none;
    }
  }

  &__text {
    padding: 90px 80px;
    grid-area: 2 / 9 / 3 / 25;
    border-left: $light-gray-line;

    @include small-tablet {
      padding: 42px 32px 58px;
      grid-area: 2 / 6 / 3 / 25;
    }

    p {
      width: 60%;

      @include tablet {
        width: 90%;
      }
    }
  }
}
</style>