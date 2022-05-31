<template>
  <transition name="filters">
    <div class="filters" v-show="filtersActive">
      <div class="filters__header">
        <h5 class="title" v-if="!mobileFilters">Фильтры</h5>
        <h5 class="title filters__close" v-else @click="close">Закрыть</h5>
        <button class="filters__btn--clear body-2">Очистить все</button>
      </div>
      <div class="filters__content">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    filtersActive: {
      type: Boolean,
      default: true
    },
    mobileFilters: {
      type: Boolean,
      default: false
    }
  },
  setup(_, {emit}) {
    const close = () => {
      emit('close')
    }

    return {
      close
    }
  },
}
</script>

<style lang="scss">
.filters {
  padding: 44px 100px 80px 80px;

  grid-column: 1 / 7;

  border-bottom: $light-gray-line;

  @media (max-width: 1530px) {
    padding: 32px 70px 54px 58px;
  }

  @include tablet {
    grid-column: none;

    width: 320px;
    height: calc(100vh - ($header-tablet + 43px));

    background-color: $white;
    border-right: $light-gray-line;
    border-bottom: none;

    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 100;
  }

  @include mobile {
    width: 80%;
  }

  &__mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 33px;

    height: 43px;

    border-bottom: $light-gray-line;

    &.fixed {
      background-color: $white;

      position: fixed;
      top: $header-tablet;
      left: 0;
      z-index: 100;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    margin-bottom: 20px;

    border-bottom: $light-gray-line;
  }

  &__close {
    color: rgb(216, 18, 18);
  }

  &__btn--clear {
    color: $gray;

    @include laptop {
      font-size: 1.2rem;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 40px;

    @include laptop {
      gap: 30px;
    }
  }
}

.filters-enter-active,
.filters-leave-active {
  transition: transform 0.5s $ease;
}

.filters-enter-from,
.filters-leave-to {
  transform: translateX(-100%);
}
</style>