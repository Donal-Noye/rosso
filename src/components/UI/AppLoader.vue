<template>
  <div class="loader-container" :class="pos">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  props: {
    pos: String
  }
}
</script>

<style lang="scss">
.loader-container {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  @include tablet {
    margin: 0;
    align-items: center;
    height: 30vh;
  }

  &.center {
    height: calc(100vh - $header-desktop);

    @include tablet {
      height: calc(100vh - $header-tablet);
    }
  }
}

.loader {
  border: 4px solid rgba($light-gray, .5);
  border-top: 4px solid $black;
  border-left: 4px solid $black;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 1s $ease infinite;
}

@keyframes spin {
  0% { 
    transform: rotate(0deg) scale(0.75); 
  }
  100% { 
    transform: rotate(360deg) scale(0.75); 
  }
}
</style>