<template>
  <q-header
    class="tw-bg-transparent tw-backdrop-blur-md tw-border-b tw-border-white/10 tw-absolute tw-px-4 sm:tw-px-6 tw-top-0 tw-left-0 tw-right-0 tw-z-50"
  >
    <q-toolbar
      class="tw-px-4 sm:tw-px-6 tw-py-3 sm:tw-py-4 tw-bg-white/5 tw-backdrop-blur-xl tw-border tw-border-white/10 tw-rounded-2xl tw-mt-2 sm:tw-mt-4 tw-shadow-2xl tw-shadow-black/10"
    >
      <!-- Logo -->
      <div class="tw-flex tw-items-center tw-space-x-2 sm:tw-space-x-3">
        <div
          class="tw-w-8 tw-h-8 sm:tw-w-10 sm:tw-h-10 tw-bg-gradient-to-r tw-from-cyan-400 tw-to-blue-500 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-shadow-lg tw-shadow-blue-500/25"
        >
          <span class="tw-text-white tw-font-black tw-text-base sm:tw-text-lg"
            >9</span
          >
        </div>
        <span
          class="tw-text-lg sm:tw-text-2xl tw-font-black tw-bg-gradient-to-r tw-from-white tw-to-blue-100 tw-bg-clip-text tw-text-transparent"
          >9nerd.ai</span
        >
      </div>

      <q-space />

      <!-- Navigation - Desktop -->
      <div
        class="tw-hidden lg:tw-flex tw-items-center tw-space-x-6 xl:tw-space-x-8 tw-mr-6 xl:tw-mr-8"
      >
        <span
          @click="scrollToSection('hero')"
          class="tw-text-white/90 tw-cursor-pointer tw-font-medium tw-transition-all tw-duration-300 hover:tw-text-cyan-300 hover:tw-scale-105 tw-text-sm xl:tw-text-base"
          >หน้าแรก</span
        >
        <!-- <span
          @click="scrollToSection('testimonials')"
          class="tw-text-white/90 tw-cursor-pointer tw-font-medium tw-transition-all tw-duration-300 hover:tw-text-cyan-300 hover:tw-scale-105 tw-text-sm xl:tw-text-base"
          >รีวิว</span
        > -->
        <span
          @click="scrollToSection('features')"
          class="tw-text-white/90 tw-cursor-pointer tw-font-medium tw-transition-all tw-duration-300 hover:tw-text-cyan-300 hover:tw-scale-105 tw-text-sm xl:tw-text-base"
          >ฟีเจอร์</span
        >
        <span
          @click="scrollToSection('comparison')"
          class="tw-text-white/90 tw-cursor-pointer tw-font-medium tw-transition-all tw-duration-300 hover:tw-text-cyan-300 hover:tw-scale-105 tw-text-sm xl:tw-text-base"
          >เปรียบเทียบ</span
        >
        <span
          @click="scrollToSection('steps')"
          class="tw-text-white/90 tw-cursor-pointer tw-font-medium tw-transition-all tw-duration-300 hover:tw-text-cyan-300 hover:tw-scale-105 tw-text-sm xl:tw-text-base"
          >วิธีใช้งาน</span
        >
        <span
          @click="scrollToSection('faq')"
          class="tw-text-white/90 tw-cursor-pointer tw-font-medium tw-transition-all tw-duration-300 hover:tw-text-cyan-300 hover:tw-scale-105 tw-text-sm xl:tw-text-base"
          >คำถามยอดนิยม</span
        >
        <span
          @click="scrollToSection('pricing')"
          class="tw-bg-gradient-to-r tw-from-yellow-400 tw-to-orange-400 tw-bg-clip-text tw-text-transparent tw-cursor-pointer tw-font-medium tw-transition-all tw-duration-300 hover:tw-text-cyan-300 hover:tw-scale-105 tw-text-sm xl:tw-text-base"
          >แพ็กเกจ</span
        >
      </div>

      <!-- Auth Buttons - Desktop -->
      <div
        class="tw-hidden sm:tw-flex tw-items-center tw-space-x-3 sm:tw-space-x-4"
      >
        <q-btn
          flat
          no-caps
          @click="openMakeUrl"
          class="tw-text-white/90 tw-font-semibold tw-px-4 sm:tw-px-6 tw-py-2 tw-rounded-xl tw-border tw-border-white/20 tw-backdrop-blur-sm hover:tw-bg-white/10 tw-transition-all tw-duration-300 hover:tw-scale-105 hover:tw-border-white/40 tw-text-xs sm:tw-text-sm"
        >
          <span class="tw-text-white tw-font-bold">เข้าสู่ระบบ</span>
        </q-btn>
        <q-btn
          no-caps
          @click="openMakeUrl"
          class="tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 tw-text-white tw-font-bold tw-px-4 sm:tw-px-8 tw-py-2 sm:tw-py-3 tw-rounded-xl tw-shadow-xl tw-shadow-cyan-500/25 hover:tw-shadow-cyan-500/40 tw-transition-all tw-duration-300 hover:tw-scale-105 hover:tw--translate-y-1 tw-text-xs sm:tw-text-sm"
        >
          <q-icon
            name="rocket_launch"
            class="tw-mr-1 sm:tw-mr-2 tw-text-white tw-text-sm"
          />
          <span class="tw-text-white tw-font-bold">ทดลองใช้ฟรี</span>
        </q-btn>
      </div>

      <!-- Mobile Menu Button -->
      <q-btn
        flat
        dense
        round
        icon="menu"
        class="lg:tw-hidden tw-ml-2 sm:tw-ml-3 tw-text-white/90 tw-w-8 tw-h-8 sm:tw-w-10 sm:tw-h-10 tw-border tw-border-white/20 tw-backdrop-blur-sm hover:tw-bg-white/10 tw-transition-all tw-duration-300"
        @click="mobileMenuOpen = true"
      />
    </q-toolbar>
  </q-header>

  <!-- Mobile Menu Drawer -->
  <q-drawer
    v-model="mobileMenuOpen"
    side="right"
    overlay
    behavior="mobile"
    class="tw-bg-slate-900/95 tw-backdrop-blur-xl"
    :width="280"
  >
    <div class="tw-flex tw-flex-col tw-h-full tw-text-white">
      <!-- Header -->
      <div
        class="tw-flex tw-items-center tw-justify-between tw-p-6 tw-border-b tw-border-white/10"
      >
        <div class="tw-flex tw-items-center tw-space-x-3">
          <div
            class="tw-w-8 tw-h-8 tw-bg-gradient-to-r tw-from-cyan-400 tw-to-blue-500 tw-rounded-xl tw-flex tw-items-center tw-justify-center"
          >
            <span class="tw-text-white tw-font-black tw-text-lg">9</span>
          </div>
          <span class="tw-text-xl tw-font-black tw-text-white">9nerd.ai</span>
        </div>
        <q-btn
          flat
          dense
          round
          icon="close"
          class="tw-text-white/90 tw-w-8 tw-h-8"
          @click="mobileMenuOpen = false"
        />
      </div>

      <!-- Navigation Links -->
      <div class="tw-flex-1 tw-p-6">
        <div class="tw-space-y-4">
          <div
            @click="scrollToSectionMobile('hero')"
            class="tw-flex tw-items-center tw-space-x-3 tw-p-3 tw-rounded-xl tw-cursor-pointer hover:tw-bg-white/10 tw-transition-all tw-duration-300"
          >
            <q-icon name="home" class="tw-text-cyan-400 tw-text-lg" />
            <span class="tw-text-white tw-font-medium">หน้าแรก</span>
          </div>
          <div
            @click="scrollToSectionMobile('testimonials')"
            class="tw-flex tw-items-center tw-space-x-3 tw-p-3 tw-rounded-xl tw-cursor-pointer hover:tw-bg-white/10 tw-transition-all tw-duration-300"
          >
            <q-icon name="reviews" class="tw-text-cyan-400 tw-text-lg" />
            <span class="tw-text-white tw-font-medium">รีวิว</span>
          </div>
          <div
            @click="scrollToSectionMobile('features')"
            class="tw-flex tw-items-center tw-space-x-3 tw-p-3 tw-rounded-xl tw-cursor-pointer hover:tw-bg-white/10 tw-transition-all tw-duration-300"
          >
            <q-icon name="auto_awesome" class="tw-text-cyan-400 tw-text-lg" />
            <span class="tw-text-white tw-font-medium">ฟีเจอร์</span>
          </div>
          <div
            @click="scrollToSectionMobile('comparison')"
            class="tw-flex tw-items-center tw-space-x-3 tw-p-3 tw-rounded-xl tw-cursor-pointer hover:tw-bg-white/10 tw-transition-all tw-duration-300"
          >
            <q-icon name="compare" class="tw-text-cyan-400 tw-text-lg" />
            <span class="tw-text-white tw-font-medium">เปรียบเทียบ</span>
          </div>
          <div
            @click="scrollToSectionMobile('steps')"
            class="tw-flex tw-items-center tw-space-x-3 tw-p-3 tw-rounded-xl tw-cursor-pointer hover:tw-bg-white/10 tw-transition-all tw-duration-300"
          >
            <q-icon name="timeline" class="tw-text-cyan-400 tw-text-lg" />
            <span class="tw-text-white tw-font-medium">วิธีใช้งาน</span>
          </div>
          <div
            @click="scrollToSectionMobile('faq')"
            class="tw-flex tw-items-center tw-space-x-3 tw-p-3 tw-rounded-xl tw-cursor-pointer hover:tw-bg-white/10 tw-transition-all tw-duration-300"
          >
            <q-icon name="help" class="tw-text-cyan-400 tw-text-lg" />
            <span class="tw-text-white tw-font-medium">คำถามยอดนิยม</span>
          </div>
          <div
            @click="scrollToSectionMobile('pricing')"
            class="tw-flex tw-items-center tw-space-x-3 tw-p-3 tw-rounded-xl tw-cursor-pointer hover:tw-bg-white/10 tw-transition-all tw-duration-300"
          >
            <q-icon name="payments" class="tw-text-yellow-400 tw-text-lg" />
            <span class="tw-text-yellow-400 tw-font-medium">แพ็กเกจ</span>
          </div>
        </div>
      </div>

      <!-- Mobile Auth Buttons -->
      <div class="tw-p-6 tw-space-y-3 tw-border-t tw-border-white/10">
        <q-btn
          flat
          no-caps
          @click="openMakeUrl"
          class="tw-w-full tw-text-white/90 tw-font-semibold tw-px-6 tw-py-3 tw-rounded-xl tw-border tw-border-white/20 tw-backdrop-blur-sm hover:tw-bg-white/10 tw-transition-all tw-duration-300"
        >
          <span class="tw-text-white tw-font-bold">เข้าสู่ระบบ</span>
        </q-btn>
        <q-btn
          no-caps
          @click="openMakeUrl"
          class="tw-w-full tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 tw-text-white tw-font-bold tw-px-6 tw-py-3 tw-rounded-xl tw-shadow-xl tw-shadow-cyan-500/25"
        >
          <q-icon name="rocket_launch" class="tw-mr-2 tw-text-white" />
          <span class="tw-text-white tw-font-bold">ทดลองใช้ฟรี</span>
        </q-btn>
      </div>
    </div>
  </q-drawer>
</template>

<script setup>
import { ref } from "vue";

// Mobile menu state
const mobileMenuOpen = ref(false);

// Modern floating header component with glassmorphism design - positioned relative to hero section

const scrollToSection = (sectionId) => {
  const sectionMap = {
    hero: 0, // Top of page
    testimonials: 1,
    features: 2,
    comparison: 3,
    steps: 4,
    faq: 5,
    pricing: 6,
    cta: 7,
  };

  // Get all sections in order
  const sections = document.querySelectorAll("section");
  const targetSection = sections[sectionMap[sectionId]];

  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const scrollToSectionMobile = (sectionId) => {
  mobileMenuOpen.value = false;
  setTimeout(() => {
    scrollToSection(sectionId);
  }, 300);
};

const openMakeUrl = () => {
  window.open("https://make.9nerd.ai/", "_blank");
};
</script>

<style scoped>
/* Enhanced glassmorphism and floating effects */
.q-header {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Smooth hover animations */
.tw-transition-all {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom gradient animation */
.tw-bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Enhanced shadow for floating effect */
.tw-shadow-2xl {
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}

/* Custom backdrop blur for better browser support */
.tw-backdrop-blur-xl {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}
</style>
