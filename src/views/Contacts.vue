<template>
  <div class="contacts-view">
    <Contacts />
    <div class="contacts-view__route contacts">
      <div class="contacts-view__title">
        <h3 class="title">Как добраться до нас</h3>
      </div>
      <div class="contacts-view__text contacts__row body-1">
        <p>От ст. метро "Лесная" и от площади Калинина: автобус 33, маршрутное такси 17 - до остановки Чугунная улица. Здание нашего бизнес-центра прямо на остановке, вход с торца здания с улицы Чугунная, на 3 этаж.</p>
        <p>Также Вы можете забрать товар в любой из точек самовывоза ТК СДЭК.</p>
      </div>
    </div>
    <div class="contacts-view__geo">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167459.2168443798!2d30.08053208087271!3d59.94366750174803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LM!5e0!3m2!1sru!2sru!4v1653292057338!5m2!1sru!2sru" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <QuestionForm />
  </div>
</template>

<script>
import Contacts from '@/components/Contacts.vue';
import QuestionForm from '@/components/QuestionForm.vue';

export default {
  components: { Contacts, QuestionForm }
}
</script>

<style lang="scss">
.contacts-view {
  &__route {
    height: 480px;

    @include small-tablet {
      height: auto;
    }
  }

  &__title {
    display: flex;
    justify-content: center;
    padding-top: 100px;

    border-right: $light-gray-line;

    @include tablet {
      padding: 50px 20px;
      justify-content: flex-start;
    }

    @include small-tablet {
      padding: 60px 60px 20px;

      border-right: none;
      border-bottom: $light-gray-line;
    }

    @include mobile {
      padding: 50px 32px 20px;
    } 
  }

  &__text {
    gap: 30px;
    flex-direction: column;

    @include small-tablet {
      padding-top: 40px;
      align-items: center;
    }

    @include mobile {
      padding-top: 30px;
    } 

    p {
      width: 53%;

      @include small-tablet {
        width: 80%;
      }

      @include mobile {
        width: 100%;
      } 
    }
  }

  &__geo {
    iframe {
      width: 100%;
      height: 680px;

      @include small-tablet {
        height: 270px;
      }
    }
  }
}
</style>