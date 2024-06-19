<script setup lang="ts">
import type { CountryResponse } from '~/types/countryResponse';

interface CountryDetailsProps {
  countryDetails: CountryResponse;
}

const { countryDetails } = defineProps<CountryDetailsProps>();
</script>

<template>
  <h2 class="text-xl">
    {{ countryDetails.data.name }}
  </h2>
  <p>Capital: {{ countryDetails.data.capital }}</p>
  <p>Calling Code: {{ countryDetails.data.callingCode }}</p>
  <p>Number of Regions: {{ countryDetails.data.numRegions }}</p>
</template>
