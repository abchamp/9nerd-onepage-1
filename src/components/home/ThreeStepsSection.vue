<template>
  <!-- 3 Simple Steps Section -->
  <section
    class="tw-py-8 sm:tw-py-10 tw-bg-slate-900 tw-text-white tw-relative tw-overflow-hidden"
  >
    <!-- Background Elements -->
    <div class="tw-absolute tw-inset-0">
      <div
        class="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-48 tw-h-48 sm:tw-w-56 sm:tw-h-56 lg:tw-w-64 lg:tw-h-64 tw-bg-blue-500/15 tw-rounded-full tw-blur-3xl tw-animate-pulse"
      ></div>
      <div
        class="tw-absolute tw-bottom-1/4 tw-right-1/4 tw-w-32 tw-h-32 sm:tw-w-40 sm:tw-h-40 lg:tw-w-48 lg:tw-h-48 tw-bg-purple-500/15 tw-rounded-full tw-blur-3xl tw-animate-pulse tw-animation-delay-1000"
      ></div>
    </div>

    <div
      class="tw-container tw-max-w-5xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-relative tw-z-10"
    >
      <div class="tw-text-center tw-mb-6 sm:tw-mb-8 md:tw-mb-10">
        <h2
          class="tw-text-xl sm:tw-text-2xl md:tw-text-3xl lg:tw-text-4xl xl:tw-text-5xl tw-text-white tw-font-black tw-mb-4 tw-leading-tight tw-px-2 sm:tw-px-4"
        >
          เริ่มต้นใช้งานง่ายๆ ใน
          <span
            class="tw-bg-gradient-to-r tw-from-green-400 tw-to-blue-400 tw-bg-clip-text tw-text-transparent tw-block sm:tw-inline tw-mt-2 sm:tw-mt-0"
          >
            3 ขั้นตอน
          </span>
        </h2>
      </div>

      <!-- Steps Grid -->
      <div
        class="tw-grid grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4 sm:tw-gap-6 md:tw-gap-8 tw-mb-8 sm:tw-mb-12"
      >
        <!-- Step 1 -->
        <div
          class="tw-group tw-relative tw-bg-white/5 tw-backdrop-blur-xl tw-border tw-border-white/10 tw-rounded-2xl tw-p-4 sm:tw-p-6 md:tw-p-8 tw-text-center tw-shadow-xl tw-shadow-green-500/10 hover:tw-shadow-green-500/20 tw-transition-all tw-duration-500 hover:tw--translate-y-2 tw-overflow-hidden hover:tw-bg-white/10 hover:tw-border-white/20"
        >
          <!-- Background gradient -->
          <div
            class="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-green-500/10 tw-to-blue-500/10 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-500"
          ></div>

          <!-- Step Number -->
          <div
            class="tw-relative tw-z-10 tw-w-6 tw-h-6 sm:tw-w-7 sm:tw-h-7 md:tw-w-8 md:tw-h-8 lg:tw-w-10 lg:tw-h-10 tw-bg-gradient-to-r tw-from-green-500 tw-to-green-600 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-3 sm:tw-mb-4 md:tw-mb-6 tw-text-white tw-font-black tw-text-sm sm:tw-text-base md:tw-text-lg lg:tw-text-xl tw-shadow-lg group-hover:tw-scale-110 tw-transition-transform tw-duration-300"
          >
            1
          </div>

          <!-- Content -->
          <div class="tw-relative tw-z-10">
            <h3
              class="tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl tw-font-black tw-text-white tw-mb-2 sm:tw-mb-3"
            >
              สมัครใช้งาน
            </h3>
            <p
              class="tw-text-xs sm:tw-text-sm md:tw-text-base lg:tw-text-lg tw-text-slate-300 tw-leading-relaxed"
            >
              สร้างบัญชีฟรีง่ายๆ ไม่กี่นาที
            </p>
          </div>

          <!-- Decorative element -->
          <div
            class="tw-absolute tw--top-1 tw--right-1 sm:tw--top-2 sm:tw--right-2 md:tw--top-3 md:tw--right-3 tw-w-4 tw-h-4 sm:tw-w-6 sm:tw-h-6 md:tw-w-8 md:tw-h-8 tw-bg-green-500/20 tw-rounded-full tw-animate-pulse"
          ></div>
        </div>

        <!-- Step 2 -->
        <div
          class="tw-group tw-relative tw-bg-white/5 tw-backdrop-blur-xl tw-border tw-border-white/10 tw-rounded-2xl tw-p-4 sm:tw-p-6 md:tw-p-8 tw-text-center tw-shadow-xl tw-shadow-blue-500/10 hover:tw-shadow-blue-500/20 tw-transition-all tw-duration-500 hover:tw--translate-y-2 tw-overflow-hidden hover:tw-bg-white/10 hover:tw-border-white/20"
        >
          <!-- Background gradient -->
          <div
            class="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-500/10 tw-to-purple-500/10 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-500"
          ></div>

          <!-- Step Number -->
          <div
            class="tw-relative tw-z-10 tw-w-6 tw-h-6 sm:tw-w-7 sm:tw-h-7 md:tw-w-8 md:tw-h-8 lg:tw-w-10 lg:tw-h-10 tw-bg-gradient-to-r tw-from-blue-500 tw-to-blue-600 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-3 sm:tw-mb-4 md:tw-mb-6 tw-text-white tw-font-black tw-text-sm sm:tw-text-base md:tw-text-lg lg:tw-text-xl tw-shadow-lg group-hover:tw-scale-110 tw-transition-transform tw-duration-300"
          >
            2
          </div>

          <!-- Content -->
          <div class="tw-relative tw-z-10">
            <h3
              class="tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl tw-font-black tw-text-white tw-mb-2 sm:tw-mb-3"
            >
              เลือกบทเรียน
            </h3>
            <p
              class="tw-text-xs sm:tw-text-sm md:tw-text-base lg:tw-text-lg tw-text-slate-300 tw-leading-relaxed"
            >
              ป้อนหัวข้อที่คุณสนใจเรียนรู้
            </p>
          </div>

          <!-- Decorative element -->
          <div
            class="tw-absolute tw--top-1 tw--right-1 sm:tw--top-2 sm:tw--right-2 md:tw--top-3 md:tw--right-3 tw-w-4 tw-h-4 sm:tw-w-6 sm:tw-h-6 md:tw-w-8 md:tw-h-8 tw-bg-blue-500/20 tw-rounded-full tw-animate-pulse tw-animation-delay-500"
          ></div>
        </div>

        <!-- Step 3 -->
        <div
          class="tw-group tw-relative tw-bg-white/5 tw-backdrop-blur-xl tw-border tw-border-white/10 tw-rounded-2xl tw-p-4 sm:tw-p-6 md:tw-p-8 tw-text-center tw-shadow-xl tw-shadow-purple-500/10 hover:tw-shadow-purple-500/20 tw-transition-all tw-duration-500 hover:tw--translate-y-2 tw-overflow-hidden hover:tw-bg-white/10 hover:tw-border-white/20 md:tw-col-span-2 lg:tw-col-span-1"
        >
          <!-- Background gradient -->
          <div
            class="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-purple-500/10 tw-to-pink-500/10 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-500"
          ></div>

          <!-- Step Number -->
          <div
            class="tw-relative tw-z-10 tw-w-6 tw-h-6 sm:tw-w-7 sm:tw-h-7 md:tw-w-8 md:tw-h-8 lg:tw-w-10 lg:tw-h-10 tw-bg-gradient-to-r tw-from-purple-500 tw-to-purple-600 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-3 sm:tw-mb-4 md:tw-mb-6 tw-text-white tw-font-black tw-text-sm sm:tw-text-base md:tw-text-lg lg:tw-text-xl tw-shadow-lg group-hover:tw-scale-110 tw-transition-transform tw-duration-300"
          >
            3
          </div>
          <!-- Content -->
          <div class="tw-relative tw-z-10">
            <h3
              class="tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl tw-font-black tw-text-white tw-mb-2 sm:tw-mb-3"
            >
              เริ่มเรียนรู้!
            </h3>
            <p
              class="tw-text-xs sm:tw-text-sm md:tw-text-base lg:tw-text-lg tw-text-slate-300 tw-leading-relaxed"
            >
              รับ Roadmap และเริ่มเรียนได้ทันที
            </p>
          </div>

          <!-- Decorative element -->
          <div
            class="tw-absolute tw--top-1 tw--right-1 sm:tw--top-2 sm:tw--right-2 md:tw--top-3 md:tw--right-3 tw-w-4 tw-h-4 sm:tw-w-6 sm:tw-h-6 md:tw-w-8 md:tw-h-8 tw-bg-purple-500/20 tw-rounded-full tw-animate-pulse tw-animation-delay-1000"
          ></div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="tw-text-center tw-px-4 sm:tw-px-0">
        <q-btn
          no-caps
          size="lg"
          @click="openMakeUrl"
          class="tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 tw-text-white tw-font-bold tw-px-6 sm:tw-px-8 md:tw-px-10 lg:tw-px-12 tw-py-3 sm:tw-py-4 tw-rounded-xl tw-shadow-xl tw-shadow-cyan-500/25 hover:tw-shadow-cyan-500/40 tw-transform hover:tw-scale-105 tw-transition-all tw-duration-300 tw-w-full sm:tw-w-auto"
        >
          <q-icon
            name="rocket_launch"
            class="tw-mr-2 tw-text-white tw-text-sm sm:tw-text-base"
          />
          <span
            class="tw-text-white tw-font-bold tw-text-sm sm:tw-text-base md:tw-text-lg"
            >เริ่มต้นใช้งานฟรี</span
          >
        </q-btn>
      </div>
    </div>
  </section>
</template>

<script setup>
const openMakeUrl = () => {
  window.open("https://devmake.9nerd.ai/", "_blank");
};
</script>

<style scoped>
.tw-animation-delay-500 {
  animation-delay: 0.5s;
}

.tw-animation-delay-1000 {
  animation-delay: 1s;
}
</style>
