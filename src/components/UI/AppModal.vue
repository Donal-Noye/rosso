<template>
  <transition name="modal">
    <div v-show="modalActive" class="modal" @click="close">
      <div class="modal__inner" @click.stop>
        <div class="modal__right" v-if="right">
          <div class="modal__header">
            <h3 class="modal__title title">{{ title }}</h3>
            <button class="modal__close" @click="close">
              <app-icon name="close" />
            </button>
          </div>
          <div class="modal__content">
            <slot />
          </div>
        </div> 
        <div class="modal__center" v-else-if="center">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    right: Boolean,
    center: Boolean,
    title: String,
    modalActive: Boolean
  },
  setup(_, { emit }) {
    const close = () => {
      emit('close')
    }

    return {close}
  }
}
</script>

<style lang="scss">
.modal {
  width: 100%;
  height: calc(100% - $header-desktop);

  background-color: rgba($black, .9);

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;

  @include tablet {
    height: calc(100% - $header-tablet);
  }

  &__right {
    padding: 54px 80px;

    position: absolute;
    right: 0;
    top: 0;

    width: 720px;
    height: 100%;

    background-color: $white;

    @include small-tablet {
      width: 80%;
    }
  }

  &__center {
    width: 85%;
    height: 85%;

    background-color: $white;
    overflow: hidden;
    overflow-y: auto;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    @include small-tablet {
      height: auto;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;

    border-bottom: $light-gray-line;
  }

  &__close {
    display: flex;
    padding: 10px;
    margin: -10px;
  }

  &__content {
    padding-top: 25px;
  }
}

.modal-enter-active, 
.modal-leave-active {
	transition: opacity 0.5s $ease;
}

.modal-leave-active {
  transition-delay: 0.25s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal__right,
.modal-leave-active .modal__right { 
  transition: transform .5s $ease;
}

.modal-enter-from .modal__right,
.modal-leave-to .modal__right {
  transform: translateX(100%);
}
</style>