<script setup lang="ts">
import type { MapLocation } from '~/types/mapLocation';
import type { Coordinate } from '~/types/coordinate';
import { getCoordinateAsArray, getCoordinateId } from '~/composables/coordinates';
import LocationPopup from '~/components/home/LocationPopup.vue';

const mapId = 'mapId';
const savedLocations = ref<Array<MapLocation>>([]);
const lastClickedCoordinate = ref<Coordinate | null>(null);

function saveLocation(): void {
  if (!lastClickedCoordinate.value) return;

  savedLocations.value.push({
    coordinates: lastClickedCoordinate.value,
    name: 'ooh la la',
    description: 'nice',
    rating: 69,
  });

  lastClickedCoordinate.value = null;
}

function deleteLocation(location: MapLocation): void {
  savedLocations.value = savedLocations.value.filter(
    l =>
      l.coordinates.latitude !== location.coordinates.latitude &&
      l.coordinates.longitude !== location.coordinates.longitude
  );
}

useMapbox(mapId, map => {
  map.on('click', e => {
    lastClickedCoordinate.value = {
      latitude: e.lngLat.lat,
      longitude: e.lngLat.lng,
    };
  });
});
</script>

<template>
  <div class="w-full h-full">
    <div class="flex flex-row justify-between mb-6">
      <h2>My first map, no hate pls xox</h2>
      <h2 v-if="lastClickedCoordinate !== null">
        Currently selected - Lat: {{ lastClickedCoordinate?.latitude }}, Long:
        {{ lastClickedCoordinate?.longitude }}
      </h2>
    </div>
    <div class="flex flex-row justify-between">
      <div class="flex flex-col w-64 m-8">
        <button class="bg-blue-600 text-white h-16 rounded-2xl" @click="saveLocation">
          Save location
        </button>
        <span class="my-4">You have {{ savedLocations.length }} locations saved</span>
        <div class="overflow-y-auto">
          <HomeLocationDetails
            v-for="location in savedLocations"
            :key="getCoordinateId(location.coordinates)"
            :map-location="location"
            :on-delete="deleteLocation"
          />
        </div>
      </div>
      <div class="relative w-full">
        <MapboxMap
          style="width: 100%; height: 1000px; position: relative"
          :map-id="mapId"
          :options="{
            center: [-2.58791, 51.454514],
            style: 'mapbox://styles/mapbox/light-v11?optimize=true',
            zoom: 15,
          }"
        >
          <MapboxDefaultMarker
            v-for="location in savedLocations"
            :key="location.coordinates.latitude"
            :marker-id="getCoordinateId(location.coordinates)"
            :lnglat="getCoordinateAsArray(location.coordinates)"
          >
            <LocationPopup :location="location" />
          </MapboxDefaultMarker>
          <MapboxDefaultMarker
            v-if="lastClickedCoordinate !== null"
            marker-id="temporary marker"
            :options="{ color: '#B13FCE' }"
            :lnglat="getCoordinateAsArray(lastClickedCoordinate)"
          />
        </MapboxMap>
      </div>
    </div>
  </div>
</template>
