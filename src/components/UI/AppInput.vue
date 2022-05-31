<template>
  <label class="input__group">
    <p class="body-1">{{ title }}</p>
    <input class="input" :placeholder="placeholder" type="text" :name="name">
  </label>
</template>

<script>
export default {
  props: {
    title: String,
    placeholder: String,
    name: String
  } 
}
</script>

<style lang="scss">
.input__group {
  input {
    margin-top: 16px;
    padding-bottom: 10px;

    width: 100%;

    font-size: 1.8rem;
    line-height: 150%;
    border: none;
    border-bottom: 1px solid $black;
    background-color: transparent;

    @include laptop {
      font-size: 1.4rem;
    }

    @include small-tablet {
      font-size: 1.2rem;
    }

    &::placeholder {
      color: $light-gray;
    }
  }
}

</style>