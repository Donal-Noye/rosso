<template>
  <div class="home">
    <!-- Intro -->
    <Intro />
    <!-- Popular Categories -->
    <PopCat />
    <!-- Slider -->
    <HomeSlider />
    <!-- Brands -->
    <Brands />
    <!-- Contacts -->
    <Contacts class="dark" />
  </div>
</template>

<script>
import Intro from "../components/Home/Intro.vue";
import PopCat from "../components/Home/PopCat.vue";
import HomeSlider from "../components/Home/HomeSlider.vue";
import Brands from "../components/Home/HomeBrands.vue";
import Contacts from "../components/Contacts.vue";

export default {
  components: { Intro, PopCat, HomeSlider, Brands, Contacts }
}
</script>

<style lang="scss">
sup {
  font-size: small;
  vertical-align: super;
}
</style>