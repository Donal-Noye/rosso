<template>
  <div class="form-control">
    <input class="input" type="checkbox" name="checkbox" />
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.form-control {
  display: flex;
  align-items: center;
}

.input {
  width: 20px;
  height: 20px;

  appearance: none;
  background-color: transparent;
  border: 1px solid $black;
  color: currentColor;
  display: grid;
  place-content: center;

  @include laptop {
    width: 17px;
    height: 17px;
  }

  &:before {
    content: "";
    width: 10px;
    height: 10px;

    background-color: $black;

    transform: scale(0);
    transition: transform 120ms $ease;

    @include laptop {
      width: 7px;
      height: 7px;
    }
  }

  &:checked:before {
    transform: scale(1);
  }
}
</style>