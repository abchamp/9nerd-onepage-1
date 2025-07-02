<template>
  <div class="tw-mb-1">
    <q-input
      v-bind="$attrs"
      :model-value="modelValue"
      :label="label"
      :placeholder="placeholder"
      :type="type"
      :required="required"
      :rows="rows"
      :dense="dense"
      outlined
      class="modern-input"
      hide-bottom-space
      @update:model-value="$emit('update:modelValue', $event)"
    >
      <template v-if="$slots.prepend" v-slot:prepend>
        <slot name="prepend" />
      </template>
      <template v-if="$slots.append" v-slot:append>
        <slot name="append" />
      </template>
    </q-input>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  required: {
    type: Boolean,
    default: false,
  },
  dense: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: Number,
    default: undefined,
  },
});

defineEmits(["update:modelValue"]);

// Inherit all other attributes
defineOptions({
  inheritAttrs: false,
});
</script>

<style scoped>
/* Modern input styling */
.modern-input :deep(.q-field__control) {
  border-radius: 12px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  transition: all 0.2s ease;
}

.modern-input :deep(.q-field__control):hover {
  border-color: #667eea;
  background: #fff;
}

.modern-input :deep(.q-field--focused .q-field__control) {
  border-color: #667eea;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.modern-input :deep(.q-field__label) {
  color: #666;
  font-weight: 500;
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .modern-input {
    @apply tw-text-sm;
  }
}
</style>
