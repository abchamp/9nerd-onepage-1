<template>
  <q-btn
    :type="type"
    :color="buttonColor"
    :class="buttonClasses"
    :loading="loading"
    :disabled="disabled"
    :unelevated="variant === 'primary' || variant === 'secondary'"
    :outline="variant === 'outline'"
    :flat="variant === 'flat' || variant === 'flat-primary'"
    :dense="dense"
    no-caps
    @click="handleClick"
  >
    <q-icon v-if="icon" :name="icon" :size="iconSize" :class="iconClasses" />
    <span :class="textClasses">
      {{ label }}
    </span>
  </q-btn>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "primary",
    validator: (value) =>
      ["primary", "secondary", "outline", "flat", "flat-primary"].includes(
        value
      ),
  },
  size: {
    type: String,
    default: "medium",
    validator: (value) => ["small", "medium", "large"].includes(value),
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "button",
  },
  icon: {
    type: String,
    default: null,
  },
  iconPosition: {
    type: String,
    default: "left",
    validator: (value) => ["left", "right"].includes(value),
  },
  dense: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit("click", event);
  }
};

const buttonColor = computed(() => {
  switch (props.variant) {
    case "primary":
      return "primary";
    case "secondary":
      return "grey-4";
    case "outline":
      return "grey-7";
    case "flat":
      return "primary";
    case "flat-primary":
      return "primary";
    default:
      return "primary";
  }
});

const buttonClasses = computed(() => {
  const baseClasses = ["tw-font-semibold", "tw-rounded-xl"];

  // Width classes
  if (props.fullWidth) {
    baseClasses.push("tw-w-full");
  }

  // Size classes
  switch (props.size) {
    case "small":
      baseClasses.push("tw-h-8", "tw-text-sm", "tw-px-3");
      break;
    case "medium":
      baseClasses.push("tw-h-10", "tw-text-sm", "tw-px-4");
      break;
    case "large":
      baseClasses.push("tw-h-12", "tw-text-base", "tw-px-6");
      break;
  }

  // Variant-specific classes
  switch (props.variant) {
    case "primary":
      baseClasses.push(
        "tw-bg-gradient-to-r",
        "tw-from-gray-500",
        "tw-to-purple-600",
        "tw-text-white",
        "hover:tw-shadow-lg",
        "tw-transition-shadow"
      );
      break;
    case "secondary":
      baseClasses.push(
        "tw-bg-gray-100",
        "tw-text-gray-800",
        "hover:tw-bg-gray-200",
        "tw-transition-colors"
      );
      break;
    case "outline":
      baseClasses.push(
        "tw-border",
        "tw-border-gray-300",
        "tw-bg-white",
        "tw-text-gray-700",
        "hover:tw-bg-gray-50",
        "hover:tw-border-gray-400",
        "tw-transition-colors"
      );
      break;
    case "flat":
      baseClasses.push(
        "tw-text-gray-500",
        "hover:tw-bg-gray-50",
        "tw-transition-colors"
      );
      if (props.dense) {
        baseClasses.push("tw-px-2", "tw-py-1", "tw-min-h-0");
      }
      break;
    case "flat-primary":
      baseClasses.push(
        "tw-text-white",
        "hover:tw-bg-primary/10",
        "tw-transition-colors"
      );
      if (props.dense) {
        baseClasses.push("tw-px-2", "tw-py-1", "tw-min-h-0");
      }
      break;
  }

  return baseClasses.join(" ");
});

const textClasses = computed(() => {
  const classes = [];

  switch (props.variant) {
    case "primary":
      classes.push("tw-text-white");
      break;
    case "secondary":
      classes.push("tw-text-gray-800");
      break;
    case "outline":
      classes.push("tw-text-gray-700");
      break;
    case "flat":
      classes.push("tw-text-gray-500");
      break;
    case "flat-primary":
      classes.push("tw-text-primary");
      break;
  }

  return classes.join(" ");
});

const iconClasses = computed(() => {
  const classes = [];

  // Position classes
  if (props.iconPosition === "left" && props.label) {
    classes.push("tw-mr-2");
  } else if (props.iconPosition === "right" && props.label) {
    classes.push("tw-ml-2");
  }

  // Color classes based on variant
  switch (props.variant) {
    case "primary":
      classes.push("tw-text-white");
      break;
    case "secondary":
      classes.push("tw-text-gray-800");
      break;
    case "outline":
      classes.push("tw-text-gray-700");
      break;
    case "flat":
      classes.push("tw-text-gray-500");
      break;
    case "flat-primary":
      classes.push("tw-text-primary");
      break;
  }

  return classes.join(" ");
});

const iconSize = computed(() => {
  switch (props.size) {
    case "small":
      return "16px";
    case "medium":
      return "18px";
    case "large":
      return "20px";
    default:
      return "18px";
  }
});
</script>
