<template>
  <div class="delivery">
    <div class="delivery__title">
      <h1 class="title">Условия доставки и адреса пунктов выдачи</h1>
    </div>
    <DeliveryMsg />
    <div class="delivery__geo">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167459.2168443798!2d30.08053208087271!3d59.94366750174803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LM!5e0!3m2!1sru!2sru!4v1653292057338!5m2!1sru!2sru" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
import DeliveryMsg from '../components/DeliveryMsg.vue';
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore();
    
    const products = computed(() => store.state.products)
    const getProducts = computed(() => store.getters.getProducts)

    onMounted(() => store.dispatch("fetchProducts"))

    return {
      getProducts, products 
    }
  },
  components: { DeliveryMsg }
}
</script>

<style lang="scss">
.delivery {
  &__title {
    padding: 200px 160px 40px;
    border-bottom: $light-gray-line;

    @include tablet {
      padding: 142px 113px 35px;
    }

    @include small-tablet {
      padding: 83px 66px 18px;
    }

    @include mobile {
      padding: 58px 32px 18px;
    }
  }

  &__geo {
    display: flex;
    justify-content: center;
    padding: 100px 0 150px;

    border-top: $light-gray-line;

    @include mobile {
      padding: 40px 32px 80px;
    }

    iframe {
      width: 85%;
      height: 503px;

      @include tablet {
        height: 357px;
      }

      @include small-tablet {
        width: 90%;
        height: 268px;
      }

      @include mobile {
        width: 100%;
        height: 489px;
      }
    }
  }
}
</style>