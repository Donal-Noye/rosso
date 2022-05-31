<template>
  <div class="facades">
    <div class="facades-intro">
      <div class="facades-intro__image facades-intro__image--1">
        <img src="@/assets/img/facades/facades-intro-1.jpg" alt="">
      </div>
      <div class="facades-intro__title">
        <h1 class="title">Фасады для мебели оптом</h1>
      </div>
      <div class="facades-intro__text">
        <p class="body-2">Rosso является оптовым поставщиком мебельных фасадов для кухни. Оптовые партии товара доставляются с заводов производителей с полным комплектом документов.</p>
      </div>
      <AppButton text="Нужна помощь?" type="primary lg r" icon />
      <div class="facades-intro__image facades-intro__image--2">
        <img src="@/assets/img/facades/facades-intro-2.jpg" alt="">
      </div>
    </div>
    <div class="facades__main">
      <div class="facades__title">
        <h3 class="title">Каталог фасадов</h3>
      </div>
      <ul class="facades__list">
        <FacadesCard :facades="facades" />
      </ul>
    </div>
    <QuestionForm />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import AppButton from '../components/UI/AppButton.vue';
import FacadesCard from '../components/Facades/FacadesCard.vue';
import QuestionForm from '../components/QuestionForm.vue';

export default {
  setup() {
    const facades = ref([
      { 
        title: 'Акриловые фасады', 
        text: 'Акриловый пластик — это новейшая разработка современной технологии. Наносят такой покрытие двумя способами: с одной стороны дверцы или с обеих сторон.',
        image: 'acrylic'
      },
      { 
        title: 'Пленочные фасады', 
        text: 'Пленочные фасады изготавливаются по современным технологиям на основе плит МДФ (древесноволокнистая плита средней плотности).',
        image: 'film'
      },
      { 
        title: 'Фасады из натурального дерева', 
        text: 'В качестве отделочных материалов применяются высокостойкие краски и эмали итальянских производителей. Использование современных станков гарантирует высочайшую точность изготовления всех деталей.',
        image: 'natural-wood'
      },
      { 
        title: 'Композитный материал', 
        text: 'Композитная панель представляет собой листовой трехслойный материал, который состоит из двух алюминиевых листов, между которыми распологатся полимерный композитный материал.',
        image: 'composite'
      },
      { 
        title: 'Инновационные пластиковые фасады', 
        text: 'Акриловый пластик — это новейшая разработка современной технологии. Наносят такой покрытие двумя способами: с одной стороны дверцы или с обеих сторон.',
        image: 'innovative-plastic'
      },
      { 
        title: 'HPL фасады', 
        text: 'HPL панели — один из новых отделочных материалов на российском рынке, который стал востребованным, не успев ещё даже появиться. Они могут быть моноколорными, а могут имитировать любую породу натуральной древесины или камня.',
        image: 'hpl'
      },
      { 
        title: 'Стеклоламинат', 
        text: 'Акриловый пластик — это новейшая разработка современной технологии. Наносят такой покрытие двумя способами: с одной стороны дверцы или с обеих сторон.',
        image: 'glass'
      },
      { 
        title: 'Крашеные фасады', 
        text: 'Пленочные фасады изготавливаются по современным технологиям на основе плит МДФ (древесноволокнистая плита средней плотности).',
        image: 'painted'
      },
      { 
        title: 'Камень', 
        text: 'Пленочные фасады изготавливаются по современным технологиям на основе плит МДФ (древесноволокнистая плита средней плотности).',
        image: 'stone'
      },
    ])

    return { facades }
  },
  components: { AppButton, FacadesCard, QuestionForm }
}
</script>

<style lang="scss">
.facades-intro {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(6, 1fr);

  height: calc(90vh - $header-desktop);

  @include tablet {
    height: calc(80vh - $header-tablet);
  }

  @include mobile {
    height: calc(100vh - $header-tablet);
    grid-template-rows: repeat(6, 1fr) 85px;

  }

  &__image {
    &--1 {
      grid-area: 1 / 1 / 7 / 7; 

      @include mobile {
        grid-area: 1 / 1 / 5 / 14;
      }
    }
    &--2 {
      grid-area: 3 / 19 / 7 / 25; 

      @include mobile {
        grid-area: 5 / 14 / 7 / 25;
      }
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
    padding: 32px 80px;
    grid-area: 1 / 7 / 3 / 19;

    border-right: $light-gray-line;
    border-bottom: $light-gray-line;

    @include tablet {
      padding: 23px;
    }

    @include mobile {
      grid-area: 1 / 14 / 5 / 25;
    }
  }

  &__text {
    display: flex;
    justify-content: center;
    padding-top: 60px;
    grid-area: 3 / 7 / 6 / 19;

    @include mobile {
      grid-area: 5 / 1 / 7 / 14;
      padding: 23px; 
    }

    p {
      width: 60%;

      @include mobile {
        width: 100%;
      }
    }
  }

  .button {
    grid-area: 6 / 7 / 7 / 19;

    @include mobile {
      grid-area: 7 / 1 / 8 / 25; 
    }
  }
}

.facades {
  &__title {
    padding: 82px;

    border-bottom: $light-gray-line;

    @include small-tablet {
      padding: 44px 65px;
    }

    @include mobile {
      padding: 25px 30px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @include mobile {
      display: block;
    }
  }
}
</style>