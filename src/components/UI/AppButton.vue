<template>
  <button class="button" :class="type">
    <div class="button__inner">
      <p>{{ text }}</p>
      <app-icon v-if="icon" class="button__icon" name="arrow" />
    </div>
  </button>
</template>

<script>

export default {
  props: {
    text: String,
    type: String,
    icon: Boolean
  }
}
</script>

<style lang="scss">
.button {
  position: relative;
  z-index: 1;

  transition: color .3s $ease;

  @include tablet {
    font-size: 1.2rem;
  }

  &:active {
    transition: none;
  }

  &__inner {
    display: flex;
    align-items: center;
    gap: 24px;

    position: relative;
    z-index: 2;

    @include laptop {
      gap: 16px;
    }
  }

  &__icon {
    transform: translateY(2px);

    @include laptop {
      width: 13px;
      height: 11px;
      transform: translateY(0);
    }
  }
  
  &.lg {
    p {
      font-size: 2.4rem;

      @include laptop {
        font-size: 1.8rem;
      }

      @include mobile {
        font-size: 1.6rem;
      }
    }
  }

  &.md {
    padding: 36px 50px;

    @include laptop {
      padding: 25px 40px;
    }
  }

  &.l {
    .button__inner {
      justify-content: flex-start;
    }
  }

  &.c {
    .button__inner {
      justify-content: center;
    }
  }

  &.r {
    .button__inner {
      justify-content: flex-end;
    }
  }

  &.primary {
    color: $white;
    background-color: $black;

    &:after {
      content: '';
      width: 0%;
      height: 100%;

      background-color: $gray;

      position: absolute;
      left: 0;
      top: 0;

      transition: width .5s $ease;
    }

    &.lg {
      width: 100%;
      padding: 45px 80px;

      @include laptop {
        padding: 35px 60px;
      }

      @include small-tablet {
        padding: 23px 60px;
      }

      &.c {
        padding-left: 0;
        padding-right: 0;
      }
    }

    &:hover {
      &:after {
        width: 100%;
      }
    }

    &:active {
      color: $light-gray;
    }
  }

  &.secondary {
    color: $black;
    background-color: $white;
    border: $light-gray-line;

    &:after {
      content: '';
      width: 0%;
      height: 100%;

      background-color: $black;

      position: absolute;
      left: 0;
      top: 0;

      transition: width .5s $ease;
    }

    &:hover {
      color: $white;

      &:after {
        width: 100%;
      }
    }

    &:active {
      color: $light-gray;
    }

    &.lg {
      width: 100%;
      padding: 45px 100px;

      transition-delay: 120ms;

      @include small-tablet {
        padding: 23px 80px;
      }

      &.c {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
}
</style>