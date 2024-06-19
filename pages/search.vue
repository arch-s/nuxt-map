<script setup lang="ts">
import AutocompleteDetails from '~/components/search/AutocompleteDetails.vue';

const searchString = ref('');

const autocompleteLimit = 10;
const baseUrl = 'http://geodb-free-service.wirefreethought.com/v1/geo/countries';

const {
  pending,
  data: autocompleteResults,
  execute,
  error,
} = useFetch<AutocompleteResponse>(baseUrl, {
  query: { limit: autocompleteLimit, namePrefix: searchString },
  timeout: 3000,
  immediate: false,
  watch: false,
});

watch(searchString, newSearchString => {
  if (newSearchString.length >= 3) execute();
});
</script>

<template>
  <label class="mr-8" for="search-box">Search:</label>
  <div class="w-96">
    <input
      id="search-box"
      v-model="searchString"
      class="border-2 rounded-md p-2 w-full"
      placeholder="search for a country"
    />
    <ul v-if="searchString.length >= 3" class="mt-2 border-2 rounded-md">
      <li v-if="pending">Loading...</li>
      <li v-else-if="autocompleteResults?.data.length === 0 || error">No results found</li>
      <template v-if="autocompleteResults && !pending">
        <li v-for="autoCompleteResult in autocompleteResults.data" :key="autoCompleteResult.name">
          <AutocompleteDetails :country="autoCompleteResult.name" />
        </li>
      </template>
    </ul>
  </div>
</template>
