<template>
  <Filters>
    <template v-slot:default>
      <FilterItem>
        <template v-slot:default>
          <FiltersDropdown title="Цвет" :colors="colors" filterColors />
        </template>
      </FilterItem>
      <FilterItem>
        <template v-slot:default>
          <FiltersDropdown title="Производитель" :items="manufacturers" filterDefault />
        </template>
      </FilterItem>
      <FilterItem>
        <template v-slot:default>
          <FiltersDropdown title="Тип" :items="types" filterDefault />
        </template>
      </FilterItem>
      <FilterItem>
        <template v-slot:default>
          <FiltersDropdown title="Присадочный размер" :items="sizes" filterBtnBoxes />
        </template>
      </FilterItem>
    </template>
  </Filters>
</template>

<script>
import { ref } from '@vue/reactivity';
import Filters from './Filters.vue'
import FilterItem from './FilterItem.vue'
import FiltersDropdown from '../UI/AppDropdown.vue';
import AppRadioButton from '../UI/AppRadioButton.vue';

export default {
  setup() {
    const colors = ref([
      { icon: 'aluminum', name: 'Алюминий', value: 123 },
      { icon: 'white', name: 'Белый', value: 98 },
      { icon: 'white-matt', name: 'Белый матовый', value: 60 },
      { icon: 'bronze', name: 'Бронза', value: 11 },
    ])

    const manufacturers = ref([
      { name: 'Gamet', value: 123 },
      { name: 'Guisti', value: 98 },
      { name: 'Metakor', value: 64 },
      { name: 'Nomet', value: 12 },
    ])

    const types = ref([
      { name: 'Кнопка', value: 123 },
      { name: 'Ракушка', value: 98 },
      { name: 'Скоба', value: 64 },
      { name: 'Врезная', value: 12 },
    ])

    const sizes = ref([ 32, 64, 96, 128 ])

    return { colors, manufacturers, types, sizes };
  },
  components: { Filters, FilterItem, FiltersDropdown, AppRadioButton }
}
</script>

<style lang="scss" scoped>

</style>