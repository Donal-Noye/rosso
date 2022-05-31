<template>
  <div class="about">
    <div class="about-history">
      <div class="about-history__block about-history__top">
        <div class="about-history__title">
          <h1 class="title">История компании</h1>
        </div>
        <span class="empty--1"></span>
        <span class="empty--2"></span>
        <div class="about-history__text">
          <p class="body-1">Компания РОССО была создана в январе 1998 года, как поставщик качественной мебельной фурнитуры и комплектующих для мебельных производств Санкт-Петербурга, а с 1999 года – и Москвы. Мы с самого начала взяли за правило поставлять такой товар, который не только требовался бы мебельщикам и был для них выгодным, но ещё и нравился бы нам самим.</p>
          <p class="body-1">В итоге мы отобрали для своей складской программы несколько известных европейских брендов с наилучшим соотношением цены и качества. Среди них: STABILUS, FRANKE, TEKA (Германия), METAKOR (Бельгия), FGV, GIUSTI, BOSETTI- MARELLA, EKOTECH (Италия), GAMET, NOMET, REJS, KORNER (Польша), LINCOS (Россия), и другие.</p>
        </div>
      </div>
      <div class="about-history__block about-history__bottom">
        <span class="empty--1"></span>
        <div class="about-history__image">
          <img src="@/assets/img/about-company.jpg" alt="">
        </div>
        <span class="empty--2"></span>
        <div class="about-history__text about-history__text--1">
          <p class="body-1">Ежегодно, начиная с 1999 года, компания принимает участие в главной мебельной выставке России «Мебель». Неоднократно принимала участие в важнейших региональных выставках. Сотрудники компании регулярно посещают международные выставки.</p>
        </div>
        <div class="about-history__text about-history__text--2">
          <p class="body-1">Благодаря этому и постоянному общению с клиентами из разных регионов нам удаётся быть в курсе основных мебельных тенденций и потребностей клиентов.</p>
        </div>
      </div>
    </div>
    <div class="furniture-handles">
      <div class="furniture-handles__image">
        <img src="@/assets/img/furniture-handles.jpg" alt="">
      </div>
      <div class="furniture-handles__title">
        <h1 class="title">Мебельные ручки</h1>
      </div>
      <div class="furniture-handles__text">
        <p class="body-1">За прошедшие годы компания РОССО, конечно, менялась, но осталась верна своим принципам: поставлять только качественный товар, выбирая тот, который нравится. География поставок постоянно расширяется. Нас знают во всех регионах России как надёжного поставщика и партнера. Компания даёт хорошую гарантию на всю поставляемую продукцию.</p>
        <p class="body-1">Мы стали специалистами в поставках одного из самых сложных и, в то же время, самых красивых направлений фурнитуры для мебели – лицевой фурнитуры, а точнее – мебельных ручек.</p>
      </div>
      <div class="furniture-handles__item furniture-handles__item--1">
        <h3 class="title">/1 Складская программа ручек</h3>
        <p class="body-1">Компания РОССО смогла создать складскую программу ручек, очень интересную для дизайнеров мебели, поскольку в этой коллекции можно увидеть не только традиционные ручки классического или современного стиля, в покрытии, например, бронза или хром, но и ручки для новейших, модных направлений кухонной и другой мебели, с необычными цветами и фактурами покрытий: олово, чугун, медь, графит и т.д.</p>
      </div>
      <div class="furniture-handles__item furniture-handles__item--2">
        <h3 class="title">/2 Профессиональная помощь</h3>
        <p class="body-1">Не случайно нашими клиентами за последние годы работы стали большинство самых крупных мебельных фабрик России. Этого удалось добиться, в том числе, и потому, что мы и наши зарубежные поставщики профессионально помогаем в подборе ручек и обеспечиваем максимально быструю поставку необходимого количества образцов.</p>
      </div>
      <div class="furniture-handles__item furniture-handles__item--3">
        <h3 class="title">/3 Эргономичный дизайн</h3>
        <p class="body-1">С другой стороны, наши ручки придутся по душе и будут долго служить покупателям мебели благодаря качеству покрытий и своему прекрасному, эргономичному дизайну, в котором продумана каждая мелочь, например – удобный захват, отсутствие каких-либо неудобных для пальцев рук швов, острых граней, пустот и т.д.; все ручки сделаны для радости пользования мебелью.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.about-history {
  &__block {
    display: grid;
    
    height: calc(100vh - $header-desktop);

    @include tablet {
      height: calc(100vh - $header-tablet);
    }
  }

  &__top {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 1fr);

    @include tablet {
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }

    .empty--1 {
      grid-area: 1 / 9 / 4 / 13;
      border-bottom: $light-gray-line;

      @include tablet {
        grid-area: 2 / 1 / 5 / 4;
      }
    }

    .empty--2 {
      grid-area: 4 / 1 / 9 / 5;
      border-bottom: $light-gray-line;

      @include tablet {
        display: none;
      }
    }

    .about-history__text {
      display: flex;
      flex-direction: column;
      gap: 25px;
      padding: 60px;
      grid-area: 4 / 5 / 9 / 13;
      border-left: $light-gray-line;

      @include tablet {
        padding: 40px;
        grid-area: 2 / 4 / 5 / 13;
      }

      p {
        width: 60%;

        @include tablet {
          width: auto;
          font-size: 1.2rem;
          line-height: 150%;
        }
      }
    }
  } 

  &__title {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    grid-area: 1 / 1 / 4 / 9;
    padding: 35px 100px;

    border-bottom: $light-gray-line;
    border-right: $light-gray-line;

    @include tablet {
      padding: 35px 70px;
      justify-content: flex-start;
      grid-area: 1 / 1 / 2 / 13;
    }
  }

  &__bottom {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    .empty--1 {
      grid-area: 1 / 1 / 2 / 2;
      border-bottom: $light-gray-line;
    }

    .empty--2 {
      grid-area: 2 / 1 / 3 / 2;
      border-bottom: $light-gray-line;
    }

    .about-history__text {
      display: flex;
      padding: 60px 70px;

      color: $gray;
      border-left: $light-gray-line;
      
      @include tablet {
        padding: 64px;
      }

      p {
        @include tablet {
          font-size: 1.2rem;
          line-height: 150%;
        }
      }

      &--1 {
        grid-area: 2 / 2 / 3 / 3;

        @include tablet {
          grid-area: 2 / 1 / 3 / 2;
        }
      }

      &--2 {
        grid-area: 2 / 3 / 3 / 4;

        @include tablet {
          grid-area: 2 / 2 / 3 / 3;
        }
      }
    }
  }

  &__image {
    grid-area: 1 / 2 / 2 / 4;

    @include tablet {
      grid-area: 1 / 1 / 2 / 3;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.furniture-handles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(10, 1fr);

  height: 130vh;

  color: $white;
  background-color: $black;
  border-bottom: 1px solid $gray;

  @include tablet {
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(8, 1fr);
    height: 190vh;
  }

  &__image {
    grid-area: 1 / 1 / 7 / 2;

    @include tablet {
      grid-area: 1 / 1 / 6 / 6; 
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
    padding: 20px 80px;
    grid-area: 1 / 2 / 3 / 4;

    border-bottom: 1px solid $gray;

    @include tablet {
      padding: 30px;
      grid-area: 1 / 6 / 2 / 12;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 25px;
    grid-area: 3 / 2 / 7 / 4;
    padding: 60px 70px;

    color: $light-gray;

    border-bottom: 1px solid $gray;

    @include tablet {
      grid-area: 2 / 6 / 6 / 12;
      padding: 30px 40px 0;
    }

    p {
      @include tablet {
        font-size: 1.2rem;
        line-height: 150%;
      }
    }
  }

  &__item {
    padding: 104px 80px 0;

    &:not(:last-child) {
      border-right: 1px solid $gray;
    }

    @include tablet {
      padding: 48px;

      &:not(:last-child) {
        border-right: none;
        border-bottom: 1px solid $gray;
      }
    }

    p {
      margin-top: 40px;
      color: $light-gray;

      @include tablet {
        margin-top: 20px;
        
        font-size: 1.2rem;
        line-height: 150%;
      }
    }

    &--1 {
      grid-area: 7 / 1 / 11 / 2;

      @include tablet {
        grid-area: 6 / 1 / 7 / 14;
      }
    }

    &--2 {
      grid-area: 7 / 2 / 11 / 3;

      @include tablet {
        grid-area: 7 / 1 / 8 / 14;
      }
    }

    &--3 {
      grid-area: 7 / 3 / 11 / 4;

      @include tablet {
        grid-area: 8 / 1 / 9 / 14;
      }
    }
  }
}
</style>