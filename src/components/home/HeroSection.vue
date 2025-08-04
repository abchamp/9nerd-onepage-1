<template>
  <!-- Hero Section -->
  <section
    class="tw-relative tw-min-h-[90vh] sm:tw-min-h-[85vh] md:tw-min-h-[80vh] lg:tw-min-h-[75vh] xl:tw-min-h-[70vh] tw-bg-gradient-to-br tw-from-slate-900 tw-via-purple-900 tw-to-slate-900 tw-text-white tw-overflow-hidden tw-flex tw-items-center"
  >
    <!-- Header Section -->
    <HeaderSection />
    <!-- Animated background elements -->
    <div class="tw-absolute tw-inset-0 tw-overflow-hidden">
      <div
        class="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-24 tw-h-24 sm:tw-w-32 sm:tw-h-32 md:tw-w-40 md:tw-h-40 lg:tw-w-48 lg:tw-h-48 xl:tw-w-56 xl:tw-h-56 tw-bg-gradient-to-r tw-from-blue-400 tw-to-purple-500 tw-rounded-full tw-mix-blend-multiply tw-filter tw-blur-xl tw-opacity-70 tw-animate-pulse"
      ></div>
      <div
        class="tw-absolute tw-top-1/3 tw-right-1/4 tw-w-32 tw-h-32 sm:tw-w-40 sm:tw-h-40 md:tw-w-48 md:tw-h-48 lg:tw-w-56 lg:tw-h-56 xl:tw-w-64 xl:tw-h-64 tw-bg-gradient-to-r tw-from-purple-400 tw-to-pink-500 tw-rounded-full tw-mix-blend-multiply tw-filter tw-blur-xl tw-opacity-70 tw-animate-pulse tw-animation-delay-1000"
      ></div>
      <div
        class="tw-absolute tw-bottom-1/4 tw-left-1/3 tw-w-40 tw-h-40 sm:tw-w-48 sm:tw-h-48 md:tw-w-56 md:tw-h-56 lg:tw-w-64 lg:tw-h-64 xl:tw-w-72 xl:tw-h-72 tw-bg-gradient-to-r tw-from-indigo-400 tw-to-blue-500 tw-rounded-full tw-mix-blend-multiply tw-filter tw-blur-xl tw-opacity-70 tw-animate-pulse tw-animation-delay-2000"
      ></div>
    </div>

    <div
      class="tw-container tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-relative tw-z-10 tw-py-32"
    >
      <div
        class="tw-grid lg:tw-grid-cols-2 tw-gap-6 sm:tw-gap-8 md:tw-gap-10 lg:tw-gap-12 xl:tw-gap-16 tw-items-center"
      >
        <div
          class="tw-space-y-4 sm:tw-space-y-6 md:tw-space-y-8 tw-text-center lg:tw-text-left tw-order-2 lg:tw-order-1"
        >
          <!-- Badge -->
          <div
            class="tw-inline-flex tw-items-center tw-px-3 tw-py-1.5 sm:tw-px-4 sm:tw-py-2 tw-bg-white/10 tw-backdrop-blur-md tw-border tw-border-white/20 tw-rounded-full tw-text-xs sm:tw-text-sm md:tw-text-base tw-font-medium"
          >
            <q-icon
              name="auto_awesome"
              class="tw-text-yellow-400 tw-mr-1.5 tw-text-sm sm:tw-text-base"
            />
            <span
              class="tw-bg-gradient-to-r tw-from-yellow-400 tw-to-orange-400 tw-bg-clip-text tw-text-transparent"
            >
              #1 AI Platform for Education
            </span>
          </div>

          <div class="tw-font-black tw-leading-tight tw-tracking-tight">
            <span
              class="tw-text-2xl sm:tw-text-3xl md:tw-text-4xl lg:tw-text-5xl xl:tw-text-6xl tw-block tw-pb-2 sm:tw-pb-4 tw-bg-gradient-to-r tw-from-cyan-400 tw-via-blue-400 tw-to-purple-400 tw-bg-clip-text tw-text-transparent"
            >
              ปฏิวัติการเรียนรู้
            </span>
            <span
              class="tw-text-xl sm:tw-text-2xl md:tw-text-3xl lg:tw-text-4xl xl:tw-text-5xl tw-block tw-pb-2 tw-text-slate-100"
            >
              ที่ทำให้คุณเหนือกว่าใคร
            </span>
            <span
              class="tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl tw-block tw-mt-2 tw-font-normal tw-text-slate-300"
            >
              All in One for Education
            </span>
          </div>

          <!-- <p
            class="tw-text-xl tw-text-slate-300 tw-leading-relaxed tw-max-w-lg"
          >
            เรียนรู้ได้ทุกที่ทุกเวลา Zero to Hero พลิกโฉมการศึกษาด้วยแพลตฟอร์ม
            AI ที่ทรงพลัง เสริมพลังครู สร้างแรงบันดาลใจให้นักเรียน
          </p> -->

          <div
            class="tw-flex tw-flex-col sm:tw-flex-row tw-gap-3 sm:tw-gap-4 tw-justify-center lg:tw-justify-start tw-px-4 sm:tw-px-0"
          >
            <q-btn
              no-caps
              size="lg"
              class="tw-bg-gradient-to-r tw-from-blue-500 tw-to-purple-600 tw-text-white tw-font-bold tw-px-6 sm:tw-px-8 md:tw-px-10 tw-py-3 sm:tw-py-4 tw-rounded-xl tw-shadow-xl tw-shadow-blue-500/25 hover:tw-shadow-blue-500/40 tw-transform hover:tw-scale-105 tw-transition-all tw-duration-300 tw-w-full sm:tw-w-auto"
            >
              <q-icon
                name="rocket_launch"
                class="tw-mr-2 tw-text-white tw-text-sm sm:tw-text-base"
              />
              <span
                class="tw-text-white tw-font-bold tw-text-sm sm:tw-text-base md:tw-text-lg"
                >เริ่มใช้งานฟรีวันนี้</span
              >
            </q-btn>
          </div>

          <!-- Trust indicators -->
          <div
            class="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-justify-center lg:tw-justify-start tw-space-y-3 sm:tw-space-y-0 sm:tw-space-x-6 tw-pt-4 tw-px-4 sm:tw-px-0"
          >
            <div class="tw-flex tw-items-center tw-space-x-2">
              <div class="tw-flex tw-items-center tw-space-x-1">
                <q-icon
                  name="star"
                  class="tw-text-yellow-400 tw-text-sm md:tw-text-base"
                />
                <q-icon
                  name="star"
                  class="tw-text-yellow-400 tw-text-sm md:tw-text-base"
                />
                <q-icon
                  name="star"
                  class="tw-text-yellow-400 tw-text-sm md:tw-text-base"
                />
                <q-icon
                  name="star"
                  class="tw-text-yellow-400 tw-text-sm md:tw-text-base"
                />
                <q-icon
                  name="star"
                  class="tw-text-yellow-400 tw-text-sm md:tw-text-base"
                />
              </div>
              <span
                class="tw-text-xs sm:tw-text-sm md:tw-text-base tw-text-slate-300"
                >5.0 from 10k+ reviews</span
              >
            </div>
          </div>
        </div>

        <!-- Dashboard Preview -->
        <div
          class="tw-relative tw-mt-6 sm:tw-mt-8 lg:tw-mt-0 tw-order-1 lg:tw-order-2"
        >
          <div
            class="tw-relative tw-transform tw-perspective-1000 lg:tw-rotate-y-12"
          >
            <!-- Main dashboard mockup -->
            <div
              class="tw-bg-white/10 tw-backdrop-blur-xl tw-border tw-border-white/20 tw-rounded-2xl tw-p-4 sm:tw-p-6 md:tw-p-8 tw-shadow-2xl"
            >
              <!-- Header -->
              <div
                class="tw-flex tw-items-center tw-justify-between tw-mb-4 sm:tw-mb-6"
              >
                <div
                  class="tw-flex tw-items-center tw-space-x-2 sm:tw-space-x-3"
                >
                  <div
                    class="tw-w-2 tw-h-2 sm:tw-w-2.5 sm:tw-h-2.5 md:tw-w-3 md:tw-h-3 tw-bg-red-400 tw-rounded-full"
                  ></div>
                  <div
                    class="tw-w-2 tw-h-2 sm:tw-w-2.5 sm:tw-h-2.5 md:tw-w-3 md:tw-h-3 tw-bg-yellow-400 tw-rounded-full"
                  ></div>
                  <div
                    class="tw-w-2 tw-h-2 sm:tw-w-2.5 sm:tw-h-2.5 md:tw-w-3 md:tw-h-3 tw-bg-green-400 tw-rounded-full"
                  ></div>
                </div>
                <div class="tw-text-xs sm:tw-text-sm tw-text-white/60">
                  9nerd.ai Dashboard
                </div>
              </div>

              <!-- Dashboard content -->
              <div class="tw-space-y-3 sm:tw-space-y-4">
                <div
                  class="tw-h-6 sm:tw-h-8 md:tw-h-10 lg:tw-h-12 tw-bg-gradient-to-r tw-from-blue-500/20 tw-to-purple-500/20 tw-rounded-lg tw-border tw-border-white/10"
                ></div>
                <div class="tw-grid tw-grid-cols-2 tw-gap-2 sm:tw-gap-3">
                  <div
                    class="tw-h-8 sm:tw-h-12 md:tw-h-14 lg:tw-h-16 tw-bg-white/5 tw-rounded-lg tw-border tw-border-white/10"
                  ></div>
                  <div
                    class="tw-h-8 sm:tw-h-12 md:tw-h-14 lg:tw-h-16 tw-bg-white/5 tw-rounded-lg tw-border tw-border-white/10"
                  ></div>
                </div>
                <div
                  class="tw-h-12 sm:tw-h-16 md:tw-h-20 lg:tw-h-24 tw-bg-gradient-to-br tw-from-cyan-500/10 tw-to-blue-500/10 tw-rounded-lg tw-border tw-border-white/10"
                ></div>
              </div>
            </div>

            <!-- Floating elements -->
            <div
              class="tw-absolute tw--top-2 tw--right-2 sm:tw--top-3 sm:tw--right-3 md:tw--top-4 md:tw--right-4 tw-w-8 tw-h-8 sm:tw-w-10 sm:tw-h-10 md:tw-w-12 md:tw-h-12 lg:tw-w-14 lg:tw-h-14 tw-bg-gradient-to-r tw-from-pink-500 tw-to-rose-500 tw-rounded-xl tw-shadow-lg tw-flex tw-items-center tw-justify-center tw-animate-bounce"
            >
              <q-icon
                name="psychology"
                class="tw-text-white tw-text-sm sm:tw-text-base md:tw-text-lg lg:tw-text-xl"
              />
            </div>
            <div
              class="tw-absolute tw--bottom-2 tw--left-2 sm:tw--bottom-3 sm:tw--left-3 md:tw--bottom-4 md:tw--left-4 tw-w-8 tw-h-8 sm:tw-w-10 sm:tw-h-10 md:tw-w-12 md:tw-h-12 lg:tw-w-14 lg:tw-h-14 tw-bg-gradient-to-r tw-from-emerald-500 tw-to-teal-500 tw-rounded-xl tw-shadow-lg tw-flex tw-items-center tw-justify-center tw-animate-pulse"
            >
              <q-icon
                name="school"
                class="tw-text-white tw-text-sm sm:tw-text-base md:tw-text-lg lg:tw-text-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeaderSection from "./HeaderSection.vue";
</script>

<style scoped>
/* Custom animation delays */
.tw-animation-delay-1000 {
  animation-delay: 1s;
}

.tw-animation-delay-2000 {
  animation-delay: 2s;
}

/* Custom perspective for 3D effects */
.tw-perspective-1000 {
  perspective: 1000px;
}

.tw-rotate-y-12 {
  transform: rotateY(12deg);
}
</style>
