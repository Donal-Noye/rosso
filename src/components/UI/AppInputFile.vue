<template>
  <label class="input-file">
    <p class="input-file__label">Прикрепить файл</p>
    <input type="file" @change="previewFiles" multiple>
    <p class="input-file__name" v-if="fileName && fileSize">
      {{ fileName }} 
      ({{ fileSize.toString().slice(0, 4) }} КБ)
    </p>
  </label>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  setup() {
    const fileName = ref(null)
    const fileSize = ref(null)

    const previewFiles = (event) => {
      fileName.value = event.target.files[0].name

      const fullFileSize = event.target.files[0].size
      
      fileSize.value = fullFileSize * 0.001
    }

    return { fileName, previewFiles, fileSize }
  }
}
</script>

<style lang="scss">
.input-file {
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;

  &__label {
    padding-left: 42px;

    font-size: 1.8rem;
    text-decoration: underline;
    cursor: pointer;

    background-image: url("../../assets/img/icon/attach.svg");
    background-repeat: no-repeat;
    background-position: left center;

    @include laptop {
      font-size: 1.4rem;
    }

    @include small-tablet {
      padding-left: 32px;
      font-size: 1.2rem;

      background-size: 18px;
    }
  }

  input {
    display: none;
  }

  &__name {
    font-size: 1.8rem;
    color: $gray;

    @include small-tablet {
      font-size: 1.2rem;
    }
  }
}
</style>