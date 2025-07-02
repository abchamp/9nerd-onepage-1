<template>
  <div :class="containerClasses">
    <div :class="cardClasses">
      <div :class="imageContainerClasses">
        <img
          :src="image"
          :alt="imageAlt"
          class="tw-w-full tw-h-full tw-object-cover"
        />
        <!-- <div :class="tagContainerClasses">
          <span :class="tagClasses">
            {{ category }}
          </span>
        </div> -->
      </div>
      <div :class="contentClasses">
        <!-- Tags Section -->
        <div v-if="tags && tags.length > 0" :class="tagsContainerClasses">
          <span v-for="tag in tags" :key="tag" :class="tagClasses">
            {{ tag }}
          </span>
        </div>

        <h3 :class="titleClasses">
          {{ title }}
        </h3>
        <p
          v-if="description && variant === 'large'"
          :class="descriptionClasses"
        >
          {{ description }}
        </p>
        <div v-if="relatedText && variant === 'large'" :class="relatedClasses">
          <span class="tw-font-medium">Related:</span>
          <span class="tw-ml-2">{{ relatedText }}</span>
        </div>

        <!-- Author Section -->
        <div v-if="author" :class="authorSectionClasses">
          <div class="tw-flex tw-items-center tw-gap-3">
            <div :class="authorAvatarClasses">
              <span class="tw-text-white tw-text-xs tw-font-bold">{{
                author.charAt(0)
              }}</span>
            </div>
            <div>
              <span :class="authorNameClasses">{{ author }}</span>
            </div>
          </div>
          <div :class="dateClasses">
            {{ date }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

// Props
const props = defineProps({
  variant: {
    type: String,
    default: "small",
    validator: (value) => ["large", "small"].includes(value),
  },
  image: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  categoryColor: {
    type: String,
    default: "blue",
    validator: (value) =>
      ["blue", "green", "purple", "orange", "teal"].includes(value),
  },
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  relatedText: {
    type: String,
    default: "",
  },
  tags: {
    type: Array,
    default: () => [],
  },
  author: {
    type: String,
    default: "",
  },
});

// Computed classes
const containerClasses = computed(() => {
  const base = "tw-group tw-cursor-pointer";
  return props.variant === "large" ? base : `${base} tw-h-full`;
});

const cardClasses = computed(() => {
  const base =
    "tw-bg-white tw-rounded-lg tw-overflow-hidden tw-transition-all tw-duration-300 hover:tw-transform hover:tw-scale-[1.02]";
  return props.variant === "large"
    ? `${base} tw-h-full`
    : `${base} tw-h-full tw-flex tw-flex-col`;
});

const imageContainerClasses = computed(() => {
  const base = "tw-relative";
  const height = props.variant === "large" ? "tw-h-80" : "tw-h-40";
  const flex = props.variant === "small" ? "tw-flex-shrink-0" : "";
  return `${base} ${height} ${flex}`.trim();
});

// const tagContainerClasses = computed(() => {
//   return props.variant === "large"
//     ? "tw-absolute tw-top-4 tw-left-4"
//     : "tw-absolute tw-top-3 tw-left-3";
// });

// const tagClasses = computed(() => {
//   const colorMap = {
//     blue: "tw-bg-blue-600",
//     green: "tw-bg-green-600",
//     purple: "tw-bg-purple-600",
//     orange: "tw-bg-orange-600",
//     teal: "tw-bg-teal-600",
//   };

//   const baseClasses = "tw-text-white tw-rounded-full tw-font-semibold";
//   const sizeClasses =
//     props.variant === "large"
//       ? "tw-px-3 tw-py-1 tw-text-sm"
//       : "tw-px-2 tw-py-1 tw-text-xs";

//   return `${colorMap[props.categoryColor]} ${baseClasses} ${sizeClasses}`;
// });

const contentClasses = computed(() => {
  const base = props.variant === "large" ? "tw-p-6" : "tw-p-3";
  const flex =
    props.variant === "small" ? "tw-flex-grow tw-flex tw-flex-col" : "";
  return `${base} ${flex}`.trim();
});

const dateClasses = computed(() => {
  const base = "tw-text-gray-500";
  return props.variant === "large"
    ? `${base} tw-text-sm tw-font-medium`
    : `${base} tw-text-xs tw-font-medium`;
});

const titleClasses = computed(() => {
  const base = "tw-font-bold tw-text-gray-900 tw-leading-tight";
  const size = props.variant === "large" ? "tw-text-2xl tw-mb-3" : "tw-text-sm";
  const flex = props.variant === "small" ? "tw-flex-grow" : "";
  return `${base} ${size} ${flex}`.trim();
});

const descriptionClasses = "tw-text-gray-600 tw-mb-4 tw-leading-relaxed";

const relatedClasses = "tw-flex tw-items-center tw-text-sm tw-text-gray-500";

const tagsContainerClasses = computed(() => {
  const base = "tw-flex tw-gap-2 tw-overflow-x-auto hide-scrollbar";
  return props.variant === "large" ? `${base} tw-mb-4` : `${base} tw-mb-2`;
});

const tagClasses = computed(() => {
  const baseClasses =
    "tw-bg-primary/10 tw-text-primary tw-text-xs tw-font-semibold tw-rounded-full tw-whitespace-nowrap tw-flex-shrink-0";
  return props.variant === "large"
    ? `tw-px-3 tw-py-1 ${baseClasses}`
    : `tw-px-2 tw-py-1 ${baseClasses}`;
});

const authorSectionClasses = computed(() => {
  const base = "tw-flex tw-justify-between tw-items-center tw-mt-auto";
  return props.variant === "large" ? `${base} tw-pt-4` : `${base} tw-pt-2`;
});

const authorAvatarClasses = computed(() => {
  const base =
    "tw-bg-gradient-to-br tw-from-primary tw-to-secondary tw-rounded-full tw-flex tw-items-center tw-justify-center";
  return props.variant === "large"
    ? `${base} tw-w-8 tw-h-8`
    : `${base} tw-w-6 tw-h-6`;
});

const authorNameClasses = computed(() => {
  return props.variant === "large"
    ? "tw-text-sm tw-font-semibold tw-text-gray-800"
    : "tw-text-xs tw-font-semibold tw-text-gray-800";
});
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
