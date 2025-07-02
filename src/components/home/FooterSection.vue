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
        <div class="sm:tw-col-span-2 lg:tw-col-span-2">
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
            The world's most advanced AI platform for education. Trusted by
            millions of educators to create exceptional learning experiences.
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
        <div>
          <h3
            class="tw-font-bold tw-text-xs sm:tw-text-sm md:tw-text-base tw-mb-3 sm:tw-mb-4 tw-text-white"
          >
            เมนูหลัก
          </h3>
          <div class="tw-space-y-1.5 sm:tw-space-y-2">
            <span
              @click="scrollToSection('hero')"
              class="tw-block tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm md:tw-text-base tw-cursor-pointer"
              >หน้าแรก</span
            >
            <span
              @click="scrollToSection('testimonials')"
              class="tw-block tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm md:tw-text-base tw-cursor-pointer"
              >รีวิว</span
            >
            <span
              @click="scrollToSection('features')"
              class="tw-block tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm md:tw-text-base tw-cursor-pointer"
              >ฟีเจอร์</span
            >
            <span
              @click="scrollToSection('comparison')"
              class="tw-block tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm md:tw-text-base tw-cursor-pointer"
              >เปรียบเทียบ</span
            >
          </div>
        </div>

        <!-- Sections -->
        <div>
          <h3
            class="tw-font-bold tw-text-xs sm:tw-text-sm md:tw-text-base tw-mb-3 sm:tw-mb-4 tw-text-white"
          >
            หมวดหมู่
          </h3>
          <div class="tw-space-y-1.5 sm:tw-space-y-2">
            <span
              @click="scrollToSection('steps')"
              class="tw-block tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm md:tw-text-base tw-cursor-pointer"
              >วิธีใช้งาน</span
            >
            <span
              @click="scrollToSection('faq')"
              class="tw-block tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm md:tw-text-base tw-cursor-pointer"
              >คำถามยอดนิยม</span
            >
            <span
              @click="scrollToSection('pricing')"
              class="tw-block tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm md:tw-text-base tw-cursor-pointer"
              >แพ็กเกจ</span
            >
            <a
              href="#"
              class="tw-block tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm md:tw-text-base"
              >ติดต่อเรา</a
            >
          </div>
        </div>

        <!-- Legal -->
        <div>
          <h3
            class="tw-font-bold tw-text-xs sm:tw-text-sm md:tw-text-base tw-mb-3 sm:tw-mb-4 tw-text-white"
          >
            กฎหมาย
          </h3>
          <div class="tw-space-y-1.5 sm:tw-space-y-2">
            <a
              href="#"
              class="tw-block tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm md:tw-text-base"
              >นโยบายความเป็นส่วนตัว</a
            >
            <a
              href="#"
              class="tw-block tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm md:tw-text-base"
              >ข้อกำหนดการใช้งาน</a
            >
            <a
              href="#"
              class="tw-block tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm md:tw-text-base"
              >ความปลอดภัย</a
            >
            <a
              href="#"
              class="tw-block tw-text-slate-400 hover:tw-text-white tw-transition-colors tw-text-xs sm:tw-text-sm md:tw-text-base"
              >การเข้าถึง</a
            >
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        class="tw-border-t tw-border-slate-700 tw-mt-6 sm:tw-mt-8 md:tw-mt-10 tw-pt-4 sm:tw-pt-6 tw-flex tw-flex-col sm:tw-flex-row tw-justify-between tw-items-center tw-space-y-3 sm:tw-space-y-0"
      >
        <p
          class="tw-text-slate-400 tw-text-xs sm:tw-text-sm md:tw-text-base tw-text-center sm:tw-text-left"
        >
          © 2024 9nerd.ai. All rights reserved.
        </p>
        <div
          class="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-space-y-2 sm:tw-space-y-0 sm:tw-space-x-3 md:tw-space-x-4"
        >
          <div class="tw-flex tw-items-center tw-space-x-1.5 sm:tw-space-x-2">
            <q-icon
              name="security"
              class="tw-text-green-400 tw-text-xs sm:tw-text-sm md:tw-text-base"
            />
            <span class="tw-text-slate-400 tw-text-xs sm:tw-text-sm"
              >SOC 2 Compliant</span
            >
          </div>
          <div class="tw-flex tw-items-center tw-space-x-1.5 sm:tw-space-x-2">
            <q-icon
              name="verified_user"
              class="tw-text-blue-400 tw-text-xs sm:tw-text-sm md:tw-text-base"
            />
            <span class="tw-text-slate-400 tw-text-xs sm:tw-text-sm"
              >FERPA Compliant</span
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
