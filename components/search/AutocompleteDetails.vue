<script setup lang="ts">
import Luigi from '~/assets/luigi.svg';

interface AutocompleteDetailsProps {
  countryName: string;
  onSubmit: () => void;
}
const { countryName, onSubmit } = defineProps<AutocompleteDetailsProps>();
</script>

<template>
  <div
    class="w-full flex flex-row justify-between p-2 select-none cursor-pointer hover:bg-gray-200 focus:bg-gray-200"
    @click="onSubmit"
  >
    <Luigi class="w-8" />
    <div class="flex flex-col">
      <p>{{ countryName }}</p>
    </div>
  </div>
</template>
