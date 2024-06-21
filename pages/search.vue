<script setup lang="ts">
import { useDebounce } from '@vueuse/shared';
import AutocompleteDetails from '~/components/search/AutocompleteDetails.vue';
import type { CountryResponse } from '~/types/countryResponse';
import type { AutocompleteResponse } from '~/types/autocompleteResponse';
import CountryDetails from '~/components/search/CountryDetails.vue';

const autocompleteLimit = 10;
const baseUrl = 'http://geodb-free-service.wirefreethought.com/v1/geo/countries';

const searchString = ref('');
const debouncedSearchString = useDebounce(searchString, 750);

const searchResults = ref<CountryResponse | null>(null);

const {
  pending,
  data: autocompleteResults,
  execute: fetchAutocompleteResults,
  error,
} = useFetch<AutocompleteResponse>(baseUrl, {
  query: { limit: autocompleteLimit, namePrefix: searchString },
  timeout: 3000,
  immediate: false,
  watch: false,
});

watch(debouncedSearchString, newSearchString => {
  if (newSearchString.length >= 3) fetchAutocompleteResults();
});

async function onSubmit(countryCode: string) {
  const { data: countryDetails } = await useFetch<CountryResponse>(`${baseUrl}/${countryCode}`);
  searchResults.value = countryDetails.value ?? null;
}
</script>

<template>
  <label class="mr-8" for="search-box">Search:</label>
  <div class="w-96">
    <input
      id="search-box"
      v-model="searchString"
      class="border-2 rounded-md p-2 w-full"
      placeholder="search for a country"
      aria-controls="autocomplete-results"
      aria-autocomplete="list"
    />
    <ul v-if="searchString.length >= 3" id="autocomplete-results" class="mt-2 border-2 rounded-md">
      <li v-if="pending">Loading...</li>
      <li v-else-if="autocompleteResults?.data.length === 0 || error">No results found</li>
      <template v-if="autocompleteResults && !pending">
        <li
          v-for="autoCompleteResult in autocompleteResults.data"
          :key="autoCompleteResult.name"
          class="focus:bg-gray-200"
        >
          <AutocompleteDetails
            :country-name="autoCompleteResult.name"
            :on-submit="() => onSubmit(autoCompleteResult.code)"
          />
        </li>
      </template>
    </ul>
    <div v-if="searchResults">
      <CountryDetails :country-details="searchResults" />
    </div>
  </div>
</template>
