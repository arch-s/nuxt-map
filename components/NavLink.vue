<script setup lang="ts">
interface NavLinkProps {
  hideIfLoggedOut: boolean;
  path: string;
  displayName: string;
}

const { hideIfLoggedOut, path, displayName } = defineProps<NavLinkProps>();
</script>

<template>
  <NuxtLink v-if="hideIfLoggedOut" :to="path">
    {{ displayName }}
  </NuxtLink>
</template>

<style scoped></style>
