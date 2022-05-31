<template>
  <Filters>
    <template v-slot:default>
      <FilterItem>
        <template v-slot:default>
          <FiltersDropdown title="Категория" :items="categories" filterDefault />
        </template>
      </FilterItem>
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
          <FiltersDropdown title="Материал" :items="materials" filterDefault />
        </template>
      </FilterItem>
    </template>
  </Filters>
</template>

<script>
import Filters from './Filters.vue'
import FilterItem from './FilterItem.vue';
import FiltersDropdown from '../UI/AppDropdown.vue';
import { ref } from '@vue/reactivity';

export default {
  setup() {
    const categories = ref([
      { name: 'Ручка-скоба', value: 95 },
      { name: 'Ручка-кнопка', value: 67 },
      { name: 'Угловое соединение', value: 23 },
      { name: 'Цоколь', value: 17 },
    ])

    const colors = ref([
      { icon: 'white', name: 'Белый', value: 98 },
      { icon: 'metallic', name: 'Металлик', value: 123 },
      { icon: 'gray', name: 'Серый', value: 60 },
      { icon: 'champagne', name: 'Шампанское', value: 11 },
    ])

    const manufacturers = ref([
      { name: 'FGV', value: 123 },
      { name: 'Rejs', value: 98 },
      { name: 'STABILUS', value: 123 },
      { name: 'Transformica', value: 98 },
    ])

    const materials = ref([
      { name: 'Металл', value: 123 },
      { name: 'Металл / пластик', value: 98 },
      { name: 'Пластик', value: 34 },
    ])

    return { categories, colors, manufacturers, materials };
  },
  components: { Filters, FilterItem, FiltersDropdown }
}
</script>

<style lang="scss" scoped>

</style>