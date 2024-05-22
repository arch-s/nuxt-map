<script setup lang="ts">
import { floorNumber } from '~/utils/utils';
import type { MapLocation } from '~/types/mapLocation';

interface LocationDetailsProps {
  mapLocation: MapLocation;
  onDelete: () => void;
}

const { mapLocation, onDelete } = defineProps<LocationDetailsProps>();
</script>

<template>
  <div class="my-4">
    <div class="flex flex-row justify-between content-center">
      <h3>{{ mapLocation.name }}</h3>
      <button class="rounded-3xl border border-red-500 p-2" @click="onDelete">x</button>
    </div>
    <p>
      Lat: {{ floorNumber(mapLocation.coordinates.latitude, 3) }}, Long:
      {{ floorNumber(mapLocation.coordinates.longitude, 3) }}
    </p>
    <p>{{ mapLocation.description }}</p>
    <p>Rating: {{ mapLocation.rating }}</p>
  </div>
</template>

<style scoped></style>
