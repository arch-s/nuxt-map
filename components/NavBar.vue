<script setup lang="ts">
import Luigi from '~/assets/luigi.svg';
import { routes } from '~/composables/routes';
</script>

<template>
  <div class="w-full flex h-24 p-8 bg-amber-500">
    <NuxtLink to="/">
      <Luigi class="w-8" :font-controlled="false" />
    </NuxtLink>
    <NavLink
      v-for="route in routes"
      :key="route.path"
      class="mx-6"
      :path="route.path"
      :display-name="route.displayName"
      :hide-if-logged-out="route.hideIfLoggedOut"
    />
  </div>
</template>

<style scoped></style>
