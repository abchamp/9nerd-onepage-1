<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Main Content -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
// Main layout - header is now positioned within hero section
</script>

<style scoped>
/* Clean, minimal layout styles */
/* Remove default Quasar padding-top from page container */
:deep(.q-page-container) {
  padding-top: 0 !important;
}
</style>
