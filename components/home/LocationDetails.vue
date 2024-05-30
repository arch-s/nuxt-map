<script setup lang="ts">
import { floorToDecimalPlaces } from '~/utils/utils';
import type { MapLocation } from '~/types/mapLocation';

interface LocationDetailsProps {
  mapLocation: MapLocation;
  onDelete: (location: MapLocation) => void;
}

const { mapLocation, onDelete } = defineProps<LocationDetailsProps>();
</script>

<template>
  <div class="my-4">
    <div class="flex flex-row justify-between content-center">
      <h3>{{ mapLocation.name }}</h3>
      <button class="rounded-3xl border border-red-500 p-2" @click="onDelete(mapLocation)">
        x
      </button>
    </div>
    <p>
      Lat:
      {{ floorToDecimalPlaces({ number: mapLocation.coordinates.latitude, numberOfDecimals: 3 }) }},
      Long:
      {{ floorToDecimalPlaces({ number: mapLocation.coordinates.longitude, numberOfDecimals: 3 }) }}
    </p>
    <p>{{ mapLocation.description }}</p>
    <p>Rating: {{ mapLocation.rating }}</p>
  </div>
</template>
