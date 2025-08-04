<template>
  <!-- Pricing Section -->
  <section
    class="tw-py-12 tw-bg-gradient-to-br tw-from-slate-900 tw-via-blue-900 tw-to-purple-900 tw-text-white tw-relative tw-overflow-hidden"
  >
    <!-- Background Elements -->
    <div class="tw-absolute tw-inset-0">
      <div
        class="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-64 tw-h-64 tw-bg-cyan-500/20 tw-rounded-full tw-blur-3xl tw-animate-pulse"
      ></div>
      <div
        class="tw-absolute tw-bottom-1/4 tw-right-1/4 tw-w-48 tw-h-48 tw-bg-purple-500/20 tw-rounded-full tw-blur-3xl tw-animate-pulse tw-animation-delay-1000"
      ></div>
      <div
        class="tw-absolute tw-top-1/2 tw-left-1/2 tw-transform tw--translate-x-1/2 tw--translate-y-1/2 tw-w-56 tw-h-56 tw-bg-blue-500/15 tw-rounded-full tw-blur-3xl tw-animate-pulse tw-animation-delay-500"
      ></div>
    </div>

    <div
      class="tw-container tw-max-w-6xl tw-mx-auto tw-px-4 tw-relative tw-z-10"
    >
      <div class="tw-text-center tw-mb-8 sm:tw-mb-10 md:tw-mb-12">
        <h2
          class="tw-text-2xl sm:tw-text-3xl md:tw-text-4xl lg:tw-text-5xl xl:tw-text-6xl tw-text-white tw-font-black tw-mb-3 sm:tw-mb-4 tw-leading-tight tw-px-2 sm:tw-px-4"
        >
          เลือกแพ็กเกจที่
          <span
            class="tw-bg-gradient-to-r tw-from-cyan-400 tw-to-blue-400 tw-bg-clip-text tw-text-transparent tw-block sm:tw-inline tw-mt-2 sm:tw-mt-0"
          >
            เหมาะกับคุณ
          </span>
        </h2>

        <p
          class="tw-text-base sm:tw-text-lg md:tw-text-xl tw-text-cyan-300 tw-font-semibold"
        >
          เริ่มต้นเพียงวันละไม่กี่บาท
        </p>
      </div>

      <!-- Pricing Cards -->
      <div
        class="tw-grid grid-cols-1 lg:tw-grid-cols-2 tw-gap-4 sm:tw-gap-6 md:tw-gap-8 tw-max-w-4xl tw-mx-auto tw-px-4 sm:tw-px-0"
      >
        <!-- Free Package -->
        <div
          class="tw-group tw-relative tw-bg-white/10 tw-backdrop-blur-xl tw-border tw-border-white/20 tw-rounded-xl tw-p-4 sm:tw-p-5 md:tw-p-6 tw-shadow-xl tw-shadow-white/10 hover:tw-shadow-white/20 tw-transition-all tw-duration-500 hover:tw--translate-y-1 tw-overflow-hidden"
        >
          <!-- Background gradient -->
          <div
            class="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-slate-500/10 tw-to-gray-500/10 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-500"
          ></div>

          <div class="tw-relative tw-z-10">
            <!-- Package Header -->
            <div class="tw-text-center tw-mb-4 sm:tw-mb-5 md:tw-mb-6">
              <h3
                class="tw-text-lg sm:tw-text-xl md:tw-text-2xl tw-font-black tw-text-white tw-mb-1"
              >
                Free
              </h3>
              <div class="tw-flex tw-items-baseline tw-justify-center tw-mb-2">
                <span
                  class="tw-text-2xl sm:tw-text-3xl md:tw-text-4xl tw-font-black tw-text-white"
                  >฿0</span
                >
                <span
                  class="tw-text-xs sm:tw-text-sm md:tw-text-base tw-text-slate-300 tw-ml-1"
                  >/เดือน</span
                >
              </div>
              <p
                class="tw-text-slate-400 tw-text-xs sm:tw-text-sm md:tw-text-base tw-leading-relaxed tw-px-2"
              >
                ทดลองใช้งานฟรี จำกัดการสร้างเนื้อหา
              </p>
            </div>

            <!-- Features -->
            <div
              class="tw-space-y-2 sm:tw-space-y-3 tw-mb-4 sm:tw-mb-5 md:tw-mb-6"
            >
              <div class="tw-flex tw-items-center tw-space-x-2 sm:tw-space-x-3">
                <div
                  class="tw-w-3 tw-h-3 sm:tw-w-4 tw-h-4 md:tw-w-5 md:tw-h-5 tw-bg-slate-500 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-flex-shrink-0"
                >
                  <q-icon
                    name="check"
                    class="tw-text-white tw-text-xs sm:tw-text-sm"
                  />
                </div>
                <div>
                  <span
                    class="tw-text-white tw-text-xs sm:tw-text-sm md:tw-text-base tw-font-semibold"
                    >ฟรี 200K tokens</span
                  >
                </div>
              </div>
              <div class="tw-flex tw-items-center tw-space-x-2 sm:tw-space-x-3">
                <div
                  class="tw-w-3 tw-h-3 sm:tw-w-4 sm:tw-h-4 md:tw-w-5 md:tw-h-5 tw-bg-red-500 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-flex-shrink-0"
                >
                  <q-icon
                    name="close"
                    class="tw-text-white tw-text-xs sm:tw-text-sm"
                  />
                </div>
                <div>
                  <span
                    class="tw-text-slate-400 tw-text-xs sm:tw-text-sm md:tw-text-base tw-line-through"
                    >ไม่จำกัด Roadmaps</span
                  >
                </div>
              </div>
              <div class="tw-flex tw-items-center tw-space-x-2 sm:tw-space-x-3">
                <div
                  class="tw-w-3 tw-h-3 sm:tw-w-4 sm:tw-h-4 md:tw-w-5 md:tw-h-5 tw-bg-red-500 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-flex-shrink-0"
                >
                  <q-icon
                    name="close"
                    class="tw-text-white tw-text-xs sm:tw-text-sm"
                  />
                </div>
                <div>
                  <span
                    class="tw-text-slate-400 tw-text-xs sm:tw-text-sm md:tw-text-base tw-line-through"
                    >ไม่จำกัด การแชทกับเนื้อหา</span
                  >
                </div>
              </div>
              <div class="tw-flex tw-items-center tw-space-x-2 sm:tw-space-x-3">
                <div
                  class="tw-w-3 tw-h-3 sm:tw-w-4 sm:tw-h-4 md:tw-w-5 md:tw-h-5 tw-bg-red-500 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-flex-shrink-0"
                >
                  <q-icon
                    name="close"
                    class="tw-text-white tw-text-xs sm:tw-text-sm"
                  />
                </div>
                <div>
                  <span
                    class="tw-text-slate-400 tw-text-xs sm:tw-text-sm md:tw-text-base tw-line-through"
                    >ไม่จำกัด สรุปเนื้อหาจากไฟล์</span
                  >
                </div>
              </div>
              <div class="tw-flex tw-items-center tw-space-x-2 sm:tw-space-x-3">
                <div
                  class="tw-w-3 tw-h-3 sm:tw-w-4 sm:tw-h-4 md:tw-w-5 md:tw-h-5 tw-bg-red-500 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-flex-shrink-0"
                >
                  <q-icon
                    name="close"
                    class="tw-text-white tw-text-xs sm:tw-text-sm"
                  />
                </div>
                <div>
                  <span
                    class="tw-text-slate-400 tw-text-xs sm:tw-text-sm md:tw-text-base tw-line-through"
                    >สร้างห้องเรียนได้</span
                  >
                </div>
              </div>
            </div>

            <!-- Coming Soon Text -->
            <div class="tw-text-center tw-mt-8 tw-py-3">
              <span
                class="tw-text-slate-400 tw-font-bold tw-text-xs sm:tw-text-sm md:tw-text-base"
                >Coming Soon</span
              >
            </div>
          </div>
        </div>

        <!-- Premium Package -->
        <div
          class="tw-group tw-relative tw-bg-gradient-to-br tw-from-cyan-500/20 tw-to-blue-500/20 tw-backdrop-blur-xl tw-border-2 tw-border-cyan-400/50 tw-rounded-xl tw-p-4 sm:tw-p-5 md:tw-p-6 tw-shadow-xl tw-shadow-cyan-500/25 hover:tw-shadow-cyan-500/40 tw-transition-all tw-duration-500 hover:tw--translate-y-1"
        >
          <!-- Popular Badge -->
          <div
            class="tw-absolute tw--top-2 sm:tw--top-2.5 tw-left-1/2 tw-transform tw--translate-x-1/2 tw-bg-gradient-to-r tw-from-yellow-400 tw-to-orange-500 tw-text-slate-900 tw-px-3 sm:tw-px-4 tw-py-1 tw-rounded-full tw-text-xs sm:tw-text-sm tw-font-bold tw-shadow-lg"
          >
            ถูกกว่าแชท AI อื่นๆ 50%
          </div>

          <!-- Background gradient -->
          <div
            class="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-cyan-500/10 tw-to-blue-500/10 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-500"
          ></div>

          <div class="tw-relative tw-z-10 tw-pt-1 sm:tw-pt-2">
            <!-- Package Header -->
            <div class="tw-text-center tw-mb-4 sm:tw-mb-5 md:tw-mb-6">
              <h3
                class="tw-text-lg sm:tw-text-xl md:tw-text-2xl tw-font-black tw-bg-gradient-to-r tw-from-cyan-400 tw-to-blue-400 tw-bg-clip-text tw-text-transparent tw-mb-1"
              >
                Premium
              </h3>
              <div class="tw-flex tw-items-baseline tw-justify-center tw-mb-2">
                <span
                  class="tw-text-2xl sm:tw-text-3xl md:tw-text-4xl tw-font-black tw-bg-gradient-to-r tw-from-cyan-400 tw-to-blue-400 tw-bg-clip-text tw-text-transparent"
                  >฿399</span
                >
                <span
                  class="tw-text-xs sm:tw-text-sm md:tw-text-base tw-text-slate-300 tw-ml-1"
                  >/เดือน</span
                >
              </div>
              <p
                class="tw-text-cyan-300 tw-text-xs sm:tw-text-sm md:tw-text-base tw-leading-relaxed tw-font-semibold tw-px-2"
              >
                เพียงวันละ 10 บาท กับเครื่องมือที่ครบครันกว่า
              </p>
            </div>

            <!-- Features -->
            <div
              class="tw-space-y-2 sm:tw-space-y-3 tw-mb-4 sm:tw-mb-5 md:tw-mb-6"
            >
              <div class="tw-flex tw-items-center tw-space-x-2 sm:tw-space-x-3">
                <div
                  class="tw-w-3 tw-h-3 sm:tw-w-4 sm:tw-h-4 md:tw-w-5 md:tw-h-5 tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-flex-shrink-0"
                >
                  <q-icon
                    name="all_inclusive"
                    class="tw-text-white tw-text-xs sm:tw-text-sm"
                  />
                </div>
                <div>
                  <span
                    class="tw-text-white tw-text-xs sm:tw-text-sm md:tw-text-base tw-font-semibold"
                    >ไม่จำกัดจำนวน tokens</span
                  >
                </div>
              </div>
              <div class="tw-flex tw-items-center tw-space-x-2 sm:tw-space-x-3">
                <div
                  class="tw-w-3 tw-h-3 sm:tw-w-4 sm:tw-h-4 md:tw-w-5 md:tw-h-5 tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-flex-shrink-0"
                >
                  <q-icon
                    name="all_inclusive"
                    class="tw-text-white tw-text-xs sm:tw-text-sm"
                  />
                </div>
                <div>
                  <span
                    class="tw-text-white tw-text-xs sm:tw-text-sm md:tw-text-base tw-font-semibold"
                    >ไม่จำกัด Roadmaps</span
                  >
                </div>
              </div>
              <div class="tw-flex tw-items-center tw-space-x-2 sm:tw-space-x-3">
                <div
                  class="tw-w-3 tw-h-3 sm:tw-w-4 sm:tw-h-4 md:tw-w-5 md:tw-h-5 tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-flex-shrink-0"
                >
                  <q-icon
                    name="all_inclusive"
                    class="tw-text-white tw-text-xs sm:tw-text-sm"
                  />
                </div>
                <div>
                  <span
                    class="tw-text-white tw-text-xs sm:tw-text-sm md:tw-text-base tw-font-semibold"
                    >ไม่จำกัด การแชทกับเนื้อหา</span
                  >
                </div>
              </div>
              <div class="tw-flex tw-items-center tw-space-x-2 sm:tw-space-x-3">
                <div
                  class="tw-w-3 tw-h-3 sm:tw-w-4 sm:tw-h-4 md:tw-w-5 md:tw-h-5 tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-flex-shrink-0"
                >
                  <q-icon
                    name="all_inclusive"
                    class="tw-text-white tw-text-xs sm:tw-text-sm"
                  />
                </div>
                <div>
                  <span
                    class="tw-text-white tw-text-xs sm:tw-text-sm md:tw-text-base tw-font-semibold"
                    >ไม่จำกัด สรุปเนื้อหาจากไฟล์</span
                  >
                </div>
              </div>
              <div class="tw-flex tw-items-center tw-space-x-2 sm:tw-space-x-3">
                <div
                  class="tw-w-3 tw-h-3 sm:tw-w-4 sm:tw-h-4 md:tw-w-5 md:tw-h-5 tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-flex-shrink-0"
                >
                  <q-icon
                    name="check"
                    class="tw-text-white tw-text-xs sm:tw-text-sm"
                  />
                </div>
                <div>
                  <span
                    class="tw-text-white tw-text-xs sm:tw-text-sm md:tw-text-base tw-font-semibold"
                    >สร้างห้องเรียนได้</span
                  >
                </div>
              </div>
            </div>

            <!-- Coming Soon Text -->
            <div class="tw-text-center tw-py-3">
              <span
                class="tw-text-cyan-300 tw-font-bold tw-text-xs sm:tw-text-sm md:tw-text-base"
                >Coming Soon</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Pricing Section Component for 9nerd.ai landing page

// const openMakeUrl = () => {
//   window.open("https://make.9nerd.ai/", "_blank");
// };
</script>

<style scoped>
/* Custom animation delays */
.tw-animation-delay-500 {
  animation-delay: 0.5s;
}

.tw-animation-delay-1000 {
  animation-delay: 1s;
}
</style>
