<script setup lang="ts">
import Luigi from '~/assets/luigi.svg';

interface AutocompleteDetailsProps {
  country: string;
}
const { country } = defineProps<AutocompleteDetailsProps>();
</script>

<template>
  <div
    class="w-full flex flex-row justify-between p-2 select-none cursor-pointer hover:bg-gray-200"
  >
    <Luigi class="w-8" />
    <div class="flex flex-col">
      <p>{{ country }}</p>
    </div>
  </div>
</template>
