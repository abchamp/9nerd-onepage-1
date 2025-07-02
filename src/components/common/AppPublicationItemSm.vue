<template>
  <div
    class="tw-border tw-border-gray-200 tw-rounded-lg tw-p-4 tw-bg-gray-50 hover:tw-bg-gray-100 tw-transition-colors"
  >
    <div class="tw-mb-1">
      <span
        class="tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wide"
      >
        {{ paper.type }}
      </span>
      <span class="tw-text-gray-400 tw-mx-2">|</span>
      <span class="tw-text-xs tw-text-gray-500">
        {{ paper.publishedDate || paper.date }}
      </span>
    </div>
    <h3
      class="tw-text-sm tw-mt-0 tw-font-semibold tw-text-gray-900 tw-mb-2 tw-line-clamp-2"
    >
      {{ paper.title }}
    </h3>
    <p class="tw-text-xs tw-text-gray-600 tw-mb-3 tw-line-clamp-2">
      {{ paper.description }}
    </p>
    <div
      class="tw-flex tw-items-center tw-justify-between tw-text-xs tw-text-gray-500"
    >
      <span>{{ paper.authors.join(", ") }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  paper: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.tw-line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
