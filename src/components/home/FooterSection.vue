<template>
  <!-- Footer -->
  <footer class="tw-bg-slate-900 tw-text-white tw-py-8 sm:tw-py-10">
    <div
      class="tw-container tw-max-w-6xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8"
    >
      <div
        class="tw-grid grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-5 tw-gap-6 sm:tw-gap-8 md:tw-gap-10"
      >
        <!-- Brand -->
        <div class="sm:tw-col-span-1 lg:tw-col-span-2 tw-order-1">
          <div
            class="tw-flex tw-items-center tw-space-x-2 sm:tw-space-x-3 tw-mb-3 sm:tw-mb-4"
          >
            <div
              class="tw-w-6 tw-h-6 sm:tw-w-8 sm:tw-h-8 md:tw-w-10 md:tw-h-10 tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 tw-rounded-xl tw-flex tw-items-center tw-justify-center"
            >
              <span
                class="tw-text-white tw-font-black tw-text-sm sm:tw-text-base md:tw-text-lg"
                >9</span
              >
            </div>
            <span
              class="tw-text-base sm:tw-text-lg md:tw-text-xl tw-text-white tw-font-black"
              >9nerd.ai</span
            >
          </div>
          <p
            class="tw-text-slate-400 tw-leading-relaxed tw-mb-3 sm:tw-mb-4 tw-max-w-md tw-text-xs sm:tw-text-sm md:tw-text-base"
          >
            The AI platform for modern education.
          </p>
          <div class="tw-flex tw-space-x-2 sm:tw-space-x-3">
            <q-btn
              flat
              round
              icon="fab fa-twitter"
              class="tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm"
              size="sm"
            />
            <q-btn
              flat
              round
              icon="fab fa-linkedin"
              class="tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm"
              size="sm"
            />
            <q-btn
              flat
              round
              icon="fab fa-youtube"
              class="tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm"
              size="sm"
            />
            <q-btn
              flat
              round
              icon="fab fa-facebook"
              class="tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm"
              size="sm"
            />
          </div>
        </div>

        <!-- Navigation -->
        <div
          class="sm:tw-col-span-1 lg:tw-col-span-3 tw-order-2 sm:tw-text-right"
        >
          <h3
            class="tw-font-bold tw-text-xs sm:tw-text-sm md:tw-text-base tw-mb-3 sm:tw-mb-4 tw-text-white"
          >
            เมนูหลัก
          </h3>
          <div
            class="tw-flex tw-flex-wrap tw-gap-x-4 tw-gap-y-2 sm:tw-justify-end"
          >
            <span
              @click="scrollToSection('hero')"
              class="tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm md:tw-text-base tw-cursor-pointer tw-whitespace-nowrap"
              >หน้าแรก</span
            >
            <span
              @click="scrollToSection('features')"
              class="tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm md:tw-text-base tw-cursor-pointer tw-whitespace-nowrap"
              >ฟีเจอร์</span
            >
            <span
              @click="scrollToSection('comparison')"
              class="tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm md:tw-text-base tw-cursor-pointer tw-whitespace-nowrap"
              >เปรียบเทียบ</span
            >
            <span
              @click="scrollToSection('steps')"
              class="tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm md:tw-text-base tw-cursor-pointer tw-whitespace-nowrap"
              >วิธีใช้งาน</span
            >
            <span
              @click="scrollToSection('faq')"
              class="tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm md:tw-text-base tw-cursor-pointer tw-whitespace-nowrap"
              >คำถามยอดนิยม</span
            >
            <span
              @click="scrollToSection('pricing')"
              class="tw-bg-gradient-to-r tw-from-yellow-400 tw-to-orange-400 tw-bg-clip-text tw-text-transparent hover:tw-text-cyan-300 tw-transition-colors tw-text-xs sm:tw-text-sm md:tw-text-base tw-cursor-pointer tw-whitespace-nowrap"
              >แพ็กเกจ</span
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer Section Component for 9nerd.ai landing page

const scrollToSection = (sectionId) => {
  const sectionMap = {
    hero: 0, // Top of page
    // testimonials: 1,
    features: 1,
    comparison: 2,
    steps: 3,
    faq: 4,
    pricing: 5,
    cta: 6,
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
</script>

<style scoped>
/* Footer specific styles */
footer {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
}

.tw-transition-colors {
  transition: color 0.3s ease;
}
</style>
