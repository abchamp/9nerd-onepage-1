<template>
  <article class="tw-group tw-pb-8">
    <div
      class="tw-flex tw-gap-6 tw-cursor-pointer"
      @click="$emit('click', publication)"
    >
      <!-- Publication Image -->
      <div class="tw-flex-shrink-0">
        <img
          :src="
            publication.image || 'https://placehold.co/400x250/3a3a3a/3a3a3a/'
          "
          :alt="publication.title"
          class="tw-w-48 tw-h-32 tw-object-cover tw-rounded-lg tw-shadow-sm group-hover:tw-shadow-md tw-transition-shadow tw-duration-300"
        />
      </div>

      <!-- Publication Content -->
      <div class="tw-flex-1">
        <!-- Publication Type and Date -->
        <div class="tw-mb-2">
          <span
            class="tw-text-sm tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wide"
          >
            {{ publication.type }}
          </span>
          <span class="tw-text-gray-400 tw-mx-2">|</span>
          <span class="tw-text-sm tw-text-gray-500">
            {{ publication.date }}
          </span>
        </div>

        <!-- Title -->
        <h2
          class="tw-text-xl tw-font-bold tw-text-gray-900 tw-mb-3 group-hover:tw-text-primary tw-transition-colors tw-duration-300"
        >
          {{ publication.title }}
        </h2>

        <!-- Description -->
        <p class="tw-text-gray-600 tw-leading-relaxed tw-mb-4">
          {{ publication.description }}
        </p>

        <!-- Tags (if any) -->
        <div v-if="publication.tags" class="tw-flex tw-flex-wrap tw-gap-2">
          <span
            v-for="tag in publication.tags"
            :key="tag"
            class="tw-px-2 tw-py-1 tw-bg-gray-100 tw-text-gray-700 tw-text-xs tw-rounded"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  publication: {
    type: Object,
    required: true,
  },
});

defineEmits(["click"]);
</script>
