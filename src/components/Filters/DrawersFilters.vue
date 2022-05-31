<template>
  <Filters>
    <template v-slot:default>
      <FilterItem>
        <template v-slot:default>
          <FiltersDropdown title="Категория" :colors="colors" filterColors />
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
      <FilterItem>
        <template v-slot:default>
          <FiltersDropdown title="Материал" :items="types" filterDefault />
        </template>
      </FilterItem>
      <FilterItem>
        <template v-slot:default>
          <FiltersDropdown title="Размер модуля" :items="btnBoxes" filterBtnBoxes />
        </template>
      </FilterItem>
      <FilterItem>
        <template v-slot:default>
          <FiltersDropdown title="Высота" :items="heights" filterBtnBoxes />
        </template>
      </FilterItem>
      <FilterItem>
        <template v-slot:default>
          <FiltersDropdown title="Глубина" :items="depths" filterBtnBoxes />
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
    const colors = ref([
      { icon: 'white', name: 'Белый', value: 98 },
      { icon: 'metallic', name: 'Металлик', value: 123 },
      { icon: 'gray', name: 'Серый', value: 60 },
      { icon: 'champagne', name: 'Шампанское', value: 11 },
    ])

    const manufacturers = ref([
      { name: 'FGV', value: 123 },
      { name: 'Rejs', value: 98 },
    ])

    const materials = ref([
      { name: 'Металл', value: 123 },
      { name: 'Металл / пластик', value: 98 },
      { name: 'Пластик', value: 34 },
    ])

    const types = ref([
      { name: 'Рейлинговая', value: 123 },
      { name: 'Кронштейн', value: 98 },
    ])

    const btnBoxes = ref([450, 500])
    const heights = ref([53, 85, 90, 150])
    const depths = ref([270, 350, 400, 450, 500, 550])

    return { colors, manufacturers, materials, types, btnBoxes, heights, depths };
  },
  components: { Filters, FilterItem, FiltersDropdown }
}
</script>

<style lang="scss">
</style>