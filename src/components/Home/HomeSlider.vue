<template>
  <div class="home-slider">
    <div class="home-slider__header">
      <h3 class="title">Универсальная алюминевая каркасная система</h3>
    </div>
    <div class="home-slider__text">
      <p class="body-1">В нашем интернет-магазине предлагается под заказ алюминиевая система полок различной геометрии, которая позволит создать легкие, невесомые, но в тоже время прочные конструкции, способные сэкономить пространство, придать помещению эффектный дизайнерский вид.</p>
    </div>
    <div class="home-slider__images">
      <div class="home-slider__inner" :style="{ 'margin-left': '-' + (100 * currentSlide) + '%', 'width': + (slides.length) + '00%' }">
        <div 
          
          class="home-slider__slide" 
          v-for="(slide) in slides" 
          :key="slide"
        >
          <img :src="require(`@/assets/img/aluminum-frame-system-${slide}.jpg`)" alt="">
        </div>
      </div>
    </div>
    <div class="home-slider__nav">
      <button class="home-slider__btn left" @click="prevSlide">
        <app-icon name="slider-arrow" />
      </button>
      <button class="home-slider__btn right" @click="nextSlide">
        <app-icon name="slider-arrow" />
      </button>
    </div>
    <p class="home-slider__count">{{ currentSlide + 1 }} / {{ slides.length }}</p>
    <AppButton @click="$router.push({ name: 'Catalog' })" text="В каталог" type="secondary lg c" icon />
  </div>
</template>

<script>
import AppButton from "../UI/AppButton.vue";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";

import "swiper/swiper-bundle.css";
import { ref } from '@vue/reactivity';

export default {
  setup() {
    const slides = ref(['0', '1', '2'])
    const currentSlide = ref(0)

    const prevSlide = () => {
      if (currentSlide.value > 0) {
        currentSlide.value--
      } else {
        currentSlide.value = slides.value.length -1
      }
    }
    
    const nextSlide = () => {
      if (currentSlide.value >= slides.value.length - 1) {
        currentSlide.value = -1
      }
      currentSlide.value++
    }

    return { currentSlide, prevSlide, nextSlide, slides }
  },
  components: { AppButton, Swiper, SwiperSlide }
}
</script>

<style lang="scss">
.home-slider {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);

  height: calc(100vh - $header-desktop);

  color: $white;
  background-color: $black;

  @include small-tablet {
    grid-template-rows: repeat(14, 1fr);
    height: calc(100vh - $header-tablet);
  }

  @include mobile {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(12, 1fr);
  }

  &__header {
    display: flex;
    align-items: flex-end;
    padding: 50px 84px;
    grid-area: 1 / 1 / 3 / 13;

    border-bottom: 1px solid $gray;

    @include small-tablet {
      padding: 36px 44px;
      grid-area: 1 / 1 / 4 / 13;
    }

    @include mobile {
      padding: 17px 30px;
      grid-area: 1 / 1 / 3 / 5;
    }

    .title {
      width: 480px;

      @include small-tablet {
        width: 50%;
      }

      @include mobile {
        width: 100%;
      }
    }
  }

  &__text {
    padding: 84px;
    grid-area: 3 / 1 / 9 / 5;

    border-right: 1px solid $gray;

    @include tablet {
      padding: 44px;
    }

    @include small-tablet {
      grid-area: 10 / 1 / 15 / 13;
    }

    @include mobile {
      grid-area: 8 / 1 / 13 / 5;
    }

    @include mobile {
      padding: 30px;
    }

    p {
      width: 80%;

      @include laptop {
        width: auto;
      }

      @include tablet {
        font-size: 1.4rem;
      }

      @include small-tablet {
        font-size: 1.2rem;
        width: 50%;
      }

      @include mobile {
        width: 100%;
      }
    }
  }

  &__images {
    overflow: hidden;
    grid-area: 3 / 5 / 7 / 13;

    @include small-tablet {
      grid-area: 4 / 1 / 9 / 13;
    }

    @include mobile {
      grid-area: 3 / 1 / 7 / 5;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__inner {
    display: flex;
    
    height: 100%;

    transition: margin-left .5s $ease;
  }

  &__slide {
    width: 100%;
    height: 100%;
  }

  &__count {
    display: grid;
    grid-area: 7 / 5 / 8 / 9; 
    align-items: center;
    padding-right: 80px;

    font-size: 2.4rem;
    text-align: right;

    border-bottom: 1px solid $gray;

    @include laptop {
      font-size: 1.8rem;
      padding-right: 40px;
    }

    @include small-tablet {
      grid-area: 9 / 1 / 10 / 8;
    }

    @include mobile {
      justify-content: center;
      padding: 0;
      grid-area: 7 / 1 / 8 / 2;
    }
  }

  &__nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-area: 7 / 9 / 8 / 10; 

    border-bottom: 1px solid $gray;
    border-left: 1px solid $gray;

    @include small-tablet {
      grid-area: 9 / 8 / 10 / 10;
    }

    @include mobile {
      grid-area: 7 / 2 / 8 / 3;
    }
  }

  &__btn {
    transition: background-color .3s $ease;

    &.left {
      padding-left: 20px;
    }

    &.right {
      padding-right: 20px;

      svg {
        transform: rotate(180deg);
      }
    }

    &:hover {
      background-color: $gray;
    }
  }

  .button {
    grid-area: 7 / 10 / 8 / 13;

    @include small-tablet {
      grid-area: 9 / 10 / 10 / 13;
    }

    @include mobile {
      grid-area: 7 / 3 / 8 / 5;
    }

    p {
      font-size: 2.4rem;

      @include laptop {
        font-size: 1.8rem;
      }
    }
  }
}
</style>