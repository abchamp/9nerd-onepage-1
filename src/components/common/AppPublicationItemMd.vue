<template>
  <article
    class="tw-flex tw-gap-6 tw-cursor-pointer tw-group"
    @click="handleReadPaper(paper.id)"
  >
    <div class="tw-flex-shrink-0">
      <img
        :src="paper.image || 'https://placehold.co/400x250/3a3a3a/3a3a3a/'"
        :alt="paper.title"
        class="tw-w-48 tw-h-32 tw-object-cover tw-rounded"
      />
    </div>
    <div class="tw-flex-1">
      <div class="tw-mb-2">
        <span
          class="tw-text-sm tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wide"
        >
          {{ paper.type }}
        </span>
        <span class="tw-text-gray-400 tw-mx-2">|</span>
        <span class="tw-text-sm tw-text-gray-500">
          {{ paper.publishedDate || paper.date }}
        </span>
      </div>
      <h3
        class="tw-text-xl tw-font-bold tw-text-gray-900 tw-mb-3 tw-leading-tight group-hover:tw-text-primary tw-transition-colors"
      >
        {{ paper.title }}
      </h3>
      <p class="tw-text-gray-600 tw-leading-relaxed">
        {{ paper.description }}
      </p>
    </div>
  </article>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

// Props
defineProps({
  paper: {
    type: Object,
    required: true,
  },
});

// Methods
const handleReadPaper = (paperId) => {
  router.push(`/paper/${paperId}`);
};
</script>
