<template>
  <div class="dropdown">
    <button class="dropdown__btn" @click="dropdown = !dropdown">
      <h5 class="dropdown__title title">{{ title }}</h5>
      <div class="dropdown__arrow" :class="{ active: !dropdown }">
        <app-icon name="dropdown-arrow" />
      </div>
    </button>
    <transition name="dropdown">
      <div class="dropdown__menu" v-show="dropdown">
        <ul class="dropdown-colors" v-if="filterColors">
          <li class="dropdown__item" v-for="color in colors" :key="color">
            <img class="dropdown__icon" :src="require(`@/assets/img/filter-colors/${color.icon}.jpg`)" alt="">
            <p class="dropdown__name body-2">{{ color.name }}</p>
            <p class="dropdown__value body-2">{{ color.value }}</p>
          </li>
        </ul>
        <ul class="dropdown__btn-boxes" v-else-if="filterBtnBoxes">
          <button 
            class="dropdown__btn--box" 
            v-for="(item, i) in items" 
            :key="i"
            :class="{ active: i === isActive }"
            @click="toggleClass(i)"
          >
            <p class="dropdown__value body-2">{{ item }}</p>
          </button>
        </ul>
        <ul class="dropdown" v-else-if="filterDefault">
          <label class="dropdown__item" v-for="item in items" :key="item">
            <AppRadioButton class="dropdown__icon" />
            <p class="dropdown__name body-2">{{ item.name }}</p>
            <p class="dropdown__value body-2">{{ item.value }}</p>
          </label>
        </ul>
        <ul class="dropdown" v-else>
          <slot />
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import AppRadioButton from './AppRadioButton.vue'

export default {
  props: {
    title: String,
    filterColors: Boolean,
    colors: Object,
    filterDefault: Boolean,
    items: Object,
    filterBtnBoxes: Boolean,
    filterDefault: Boolean,
  },
  setup() {
    const dropdown = ref(true)
    const isActive = ref(null)

    const toggleClass = (i) => {
      isActive.value = i
    }

    return { dropdown, isActive, toggleClass }
  },
  components: { AppRadioButton }
}
</script>

<style lang="scss">
.dropdown {
  &__btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;

    width: 100%;
  }

  &__btn-boxes {
    display: flex;
    flex-wrap: wrap;
    gap: 27px;

    @include laptop {
      gap: 18px;
    }
  }

  &__btn--box {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 55px;
    height: 55px;

    border: $light-gray-line;
    position: relative;
    overflow: hidden;

    transition: color .2s $ease 150ms;

    p {
      position: relative;
      z-index: 1;
    }

    @include laptop {
      width: 40px;
      height: 40px;
    }

    &:after {
      content: '';
      width: 100%;
      height: 100%;

      background-color: $black;

      position: absolute;
      bottom: 0;
      left: 0;

      transform: translateY(100%);
      transition: transform .4s $ease;
    }

    &.active {
      color: $white;

      &:after {
        transform: translateY(0%);
      }
    }
  }

  &__menu {
    margin-top: 24px;

    @include laptop {
      margin-top: 15px;
    }
  }

  &__item {
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;

    cursor: pointer;

    &:not(:last-child) {
      margin-bottom: 10px;

      @include laptop {
        margin-bottom: 6px;
      }
    }
  }

  &__icon {
    margin-right: 27px;

    @include laptop {
      margin-right: 23px;

      width: 17px;
      height: 17px;
    }
  }

  &__name {
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__arrow {
    display: flex;

    transform: rotateX(-180deg);
    transition: transform .4s $ease;

    &.active {
      transform: rotateX(0);
    }

    svg {
      @include small-tablet {
        width: 15px;
        height: 15px;
      }
    }
  }
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all .4s $ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(5px);
}
</style>