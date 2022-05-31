<template>
  <div class="page">
    <TheHeader />
    <main class="main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  setup () {
  },
  components: { TheHeader, TheFooter }
}
</script>

<style lang="scss">
.main {
  margin-top: $header-desktop;

  @include tablet {
    margin-top: $header-tablet;
  }
}

.page {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s $ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
