<script setup lang="ts">
interface markerData {
  latitude: number;
  longitude: number;
  name: string;
  description: string;
  rating: number;
}

const savedMarkers = ref([]);
</script>

<template>
  <div class="w-full h-full">
    <h2 class="mb-6">My first map, no hate pls xox</h2>
    <div class="flex flex-row justify-between">
      <div class="flex flex-col">
        <span> This is the input now </span>
      </div>
      <div class="relative w-full">
        <MapboxMap
          style="width: 100%; height: 1000px; position: relative"
          map-id="yes"
          :options="{
            center: [-2.58791, 51.454514],
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: 15,
          }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
