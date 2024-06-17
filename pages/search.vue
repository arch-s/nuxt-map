<script setup lang="ts">
import AutoCompleteDetails from '~/components/search/AutoCompleteDetails.vue';

const searchString = ref('');
</script>

<template>
  <label class="mr-8" for="search-box">Search:</label>
  <div class="w-96">
    <input
      id="search-box"
      v-model="searchString"
      class="border-2 rounded-md p-2 w-full"
      placeholder="just search already"
    />
    <ul v-if="searchString.length >= 3" class="mt-2 border-2 rounded-md">
      <li v-for="i in 10" :key="i">
        <AutoCompleteDetails />
      </li>
    </ul>
  </div>
  <p>{{ searchString }}</p>
</template>
