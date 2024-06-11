<script setup lang="ts">
import type { MapLocation } from '~/types/mapLocation';

interface LocationPopupProps {
  location: MapLocation;
}

const { location } = defineProps<LocationPopupProps>();
</script>

<template>
  <MapboxDefaultPopup
    :popup-id="getCoordinateId(location.coordinates)"
    :lnglat="getCoordinateAsArray(location.coordinates)"
  >
    <h3 class="font-bold">yoohoo</h3>
  </MapboxDefaultPopup>
</template>
