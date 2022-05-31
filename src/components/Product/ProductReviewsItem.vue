<template>
  <li class="product-review" v-for="review in reviews" :key="review">
    <div class="product-review__info">
      <div class="product-review__left">
        <div class="product-review__avatar">
          <img src="https://via.placeholder.com/60" alt="">
        </div>
        <p class="product-review__name subtitle-lg">{{ review.name }}</p>
      </div>
      <div class="product-review__rating">
        <app-icon class="product-review__star" name="star-fill" />
        <app-icon class="product-review__star" name="star-fill" />
        <app-icon class="product-review__star" name="star-fill" />
        <app-icon class="product-review__star" name="star-fill" />
        <app-icon class="product-review__star" name="star-outline" />
      </div>
    </div>
    <div class="product-review__content">
      <p class="product-review__text body-2">{{ review.text }}</p>
      <p class="product-review__date body-3">{{ review.date }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    reviews: Object
  }
}
</script>

<style lang="scss">
.product-review {
  padding-bottom: 25px;

  @include mobile {
    padding-bottom: 7px;
  }

  &:not(:last-child) {
    border-bottom: $light-gray-line;
  }

  &__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  &__left {
    display: flex;
    align-items: center;
    gap: 35px;

    @include mobile {
      gap: 20px;
    }
  }

  &__avatar {
    width: 60px;
    height: 60px;

    border-radius: 50%;
    overflow: hidden;

    border: 1px solid $black;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @include small-tablet {
      width: 40px;
      height: 40px;
    }
  }

  &__rating {
    display: flex;
    gap: 9px;

    @include mobile {
      gap: 4px;
    }

    svg {
      width: 15px;
      height: 15px;
    }
  }

  &__content {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    @include mobile {
      display: block;
    }
  }

  &__text {
    width: 75%;

    @include mobile {
      width: 100%;
    }
  }

  &__date {
    color: $gray;
    text-align: right;

    @include small-tablet {
      font-size: 1.2rem;
    }
  }
}
</style>