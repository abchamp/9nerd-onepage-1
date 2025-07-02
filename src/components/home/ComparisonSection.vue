<template>
  <!-- Comparison Section - การเรียนแบบเดิม vs การเรียนยุค AI -->
  <section
    class="tw-py-8 sm:tw-py-10 tw-bg-gradient-to-br tw-from-slate-900 tw-via-purple-900 tw-to-indigo-900 tw-relative tw-overflow-hidden"
  >
    <!-- Background Elements -->
    <div class="tw-absolute tw-inset-0">
      <div
        class="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-32 tw-h-32 sm:tw-w-40 sm:tw-h-40 lg:tw-w-48 lg:tw-h-48 tw-bg-blue-500/15 tw-rounded-full tw-blur-3xl tw-animate-pulse"
      ></div>
      <div
        class="tw-absolute tw-bottom-1/4 tw-right-1/4 tw-w-32 tw-h-32 sm:tw-w-40 sm:tw-h-40 lg:tw-w-48 lg:tw-h-48 tw-bg-purple-500/15 tw-rounded-full tw-blur-3xl tw-animate-pulse tw-animation-delay-1000"
      ></div>
    </div>

    <div
      class="tw-container tw-max-w-5xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-relative tw-z-10"
    >
      <!-- Section Header -->
      <div class="tw-text-center tw-mb-6 sm:tw-mb-8 md:tw-mb-10">
        <h2
          class="tw-text-xl sm:tw-text-2xl md:tw-text-3xl lg:tw-text-4xl xl:tw-text-5xl tw-font-black tw-text-white tw-mb-4 tw-leading-tight tw-px-2 sm:tw-px-4"
        >
          การเรียนแบบเดิม
          <span class="tw-text-red-400 tw-mx-2">VS</span>
          <span
            class="tw-bg-gradient-to-r tw-from-cyan-400 tw-to-blue-400 tw-bg-clip-text tw-text-transparent tw-block sm:tw-inline tw-mt-2 sm:tw-mt-0"
          >
            การเรียนยุค AI
          </span>
        </h2>
      </div>

      <!-- Comparison Cards -->
      <div class="tw-grid lg:tw-grid-cols-2 tw-gap-4 sm:tw-gap-6 md:tw-gap-8">
        <!-- Traditional Learning Card -->
        <div
          class="tw-group tw-bg-white/5 tw-backdrop-blur-xl tw-border tw-border-white/10 tw-rounded-xl tw-p-4 sm:tw-p-5 md:tw-p-6 tw-shadow-xl tw-relative tw-overflow-hidden"
        >
          <!-- Red overlay for traditional learning -->
          <div
            class="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-red-500/10 tw-to-orange-500/10 tw-opacity-70"
          ></div>

          <div class="tw-relative tw-z-10">
            <!-- Header -->
            <div class="tw-flex tw-items-center tw-mb-3 sm:tw-mb-4 md:tw-mb-5">
              <div
                class="tw-w-8 tw-h-8 sm:tw-w-10 sm:tw-h-10 md:tw-w-12 md:tw-h-12 tw-bg-gradient-to-r tw-from-red-500 tw-to-red-600 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mr-2 sm:tw-mr-3 tw-shadow-lg tw-flex-shrink-0"
              >
                <q-icon
                  name="menu_book"
                  class="tw-text-white tw-text-sm sm:tw-text-base md:tw-text-lg"
                />
              </div>
              <div>
                <h3
                  class="tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl tw-font-black tw-text-white tw-mb-1"
                >
                  การเรียนแบบเดิม
                </h3>
                <p
                  class="tw-text-white tw-text-xs sm:tw-text-sm md:tw-text-base"
                >
                  วิธีการดั้งเดิม
                </p>
              </div>
            </div>

            <!-- Problems List -->
            <div
              class="tw-space-y-2 sm:tw-space-y-3 md:tw-space-y-4 tw-mb-4 sm:tw-mb-5 md:tw-mb-6"
            >
              <div class="tw-flex tw-items-start tw-space-x-2 sm:tw-space-x-3">
                <q-icon
                  name="close"
                  class="tw-text-red-400 tw-text-sm sm:tw-text-base md:tw-text-lg tw-flex-shrink-0 tw-mt-0.5"
                />
                <div>
                  <span
                    class="tw-text-white tw-text-xs sm:tw-text-sm md:tw-text-base tw-font-medium tw-block"
                  >
                    เรียนแบบจำ ไม่เข้าใจ
                  </span>
                  <div
                    class="tw-text-white tw-text-xs sm:tw-text-sm tw-ml-0 tw-opacity-75"
                  >
                    เหมือนหลงอยู่ในห้องสมุดใหญ่
                  </div>
                </div>
              </div>

              <div class="tw-flex tw-items-start tw-space-x-2 sm:tw-space-x-3">
                <q-icon
                  name="close"
                  class="tw-text-red-400 tw-text-sm sm:tw-text-base md:tw-text-lg tw-flex-shrink-0 tw-mt-0.5"
                />
                <div>
                  <span
                    class="tw-text-white tw-text-xs sm:tw-text-sm md:tw-text-base tw-font-medium tw-block"
                  >
                    เรียนช้า เสียเวลา
                  </span>
                  <div
                    class="tw-text-white tw-text-xs sm:tw-text-sm tw-ml-0 tw-opacity-75"
                  >
                    เหมือนใช้เครื่องคิดเลข
                  </div>
                </div>
              </div>

              <div class="tw-flex tw-items-start tw-space-x-2 sm:tw-space-x-3">
                <q-icon
                  name="close"
                  class="tw-text-red-400 tw-text-sm sm:tw-text-base md:tw-text-lg tw-flex-shrink-0 tw-mt-0.5"
                />
                <div>
                  <span
                    class="tw-text-white tw-text-xs sm:tw-text-sm md:tw-text-base tw-font-medium tw-block"
                  >
                    ต้องให้ผู้อื่นสอน
                  </span>
                  <div
                    class="tw-text-white tw-text-xs sm:tw-text-sm tw-ml-0 tw-opacity-75"
                  >
                    ยากต่อการก้าวข้ามขีดจำกัด
                  </div>
                </div>
              </div>
            </div>

            <!-- Traditional Learning Icon -->
            <div class="tw-text-center tw-opacity-30">
              <q-icon
                name="school"
                class="tw-text-xl sm:tw-text-2xl md:tw-text-3xl tw-text-red-300"
              />
            </div>
          </div>
        </div>

        <!-- AI Era Students Card -->
        <div
          class="tw-group tw-bg-white/10 tw-backdrop-blur-xl tw-border tw-border-white/20 tw-rounded-xl tw-p-4 sm:tw-p-5 md:tw-p-6 tw-shadow-xl tw-relative tw-overflow-hidden tw-transform hover:tw-scale-105 tw-transition-all tw-duration-300 tw-mt-4 lg:tw-mt-0"
        >
          <!-- Blue/Green overlay for AI learning -->
          <div
            class="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-500/20 tw-to-cyan-500/20"
          ></div>

          <div class="tw-relative tw-z-10">
            <!-- Header -->
            <div class="tw-flex tw-items-center tw-mb-3 sm:tw-mb-4 md:tw-mb-5">
              <div
                class="tw-w-8 tw-h-8 sm:tw-w-10 sm:tw-h-10 md:tw-w-12 md:tw-h-12 tw-bg-gradient-to-r tw-from-blue-500 tw-to-cyan-500 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mr-2 sm:tw-mr-3 tw-shadow-lg tw-flex-shrink-0"
              >
                <q-icon
                  name="psychology"
                  class="tw-text-white tw-text-sm sm:tw-text-base md:tw-text-lg"
                />
              </div>
              <div>
                <h3
                  class="tw-text-base sm:tw-text-lg md:tw-text-xl lg:tw-text-2xl tw-font-black tw-text-white tw-mb-1"
                >
                  การเรียนยุค AI
                </h3>
                <p
                  class="tw-text-white tw-text-xs sm:tw-text-sm md:tw-text-base"
                >
                  พลังของอนาคต
                </p>
              </div>
            </div>

            <!-- Benefits List -->
            <div
              class="tw-space-y-2 sm:tw-space-y-3 md:tw-space-y-4 tw-mb-4 sm:tw-mb-5 md:tw-mb-6"
            >
              <div class="tw-flex tw-items-start tw-space-x-2 sm:tw-space-x-3">
                <q-icon
                  name="check"
                  class="tw-text-green-400 tw-text-sm sm:tw-text-base md:tw-text-lg tw-flex-shrink-0 tw-mt-0.5"
                />
                <div>
                  <span
                    class="tw-text-white tw-text-xs sm:tw-text-sm md:tw-text-base tw-font-medium tw-block"
                  >
                    เรียนรู้แบบเข้าใจลึก
                  </span>
                  <div
                    class="tw-text-white tw-text-xs sm:tw-text-sm tw-ml-0 tw-opacity-90"
                  >
                    เหมือนมีติวเตอร์ส่วนตัวคอยอธิบายทุกเรื่องให้เข้าใจง่าย
                  </div>
                </div>
              </div>

              <div class="tw-flex tw-items-start tw-space-x-2 sm:tw-space-x-3">
                <q-icon
                  name="check"
                  class="tw-text-green-400 tw-text-sm sm:tw-text-base md:tw-text-lg tw-flex-shrink-0 tw-mt-0.5"
                />
                <div>
                  <span
                    class="tw-text-white tw-text-xs sm:tw-text-sm md:tw-text-base tw-font-medium tw-block"
                  >
                    เรียนเร็วขึ้น 10 เท่า
                  </span>
                  <div
                    class="tw-text-white tw-text-xs sm:tw-text-sm tw-ml-0 tw-opacity-90"
                  >
                    ในขณะที่เพื่อนใช้ซูเปอร์คอมพิวเตอร์
                  </div>
                </div>
              </div>

              <div class="tw-flex tw-items-start tw-space-x-2 sm:tw-space-x-3">
                <q-icon
                  name="check"
                  class="tw-text-green-400 tw-text-sm sm:tw-text-base md:tw-text-lg tw-flex-shrink-0 tw-mt-0.5"
                />
                <div>
                  <span
                    class="tw-text-white tw-text-xs sm:tw-text-sm md:tw-text-base tw-font-medium tw-block"
                  >
                    เรียนด้วยตัวเอง ไม่พึ่งใคร
                  </span>
                  <div
                    class="tw-text-white tw-text-xs sm:tw-text-sm tw-ml-0 tw-opacity-90"
                  >
                    แบบมีซูเปอร์ฮีโร่คอยช่วยเหลือทุกเวลา
                  </div>
                </div>
              </div>
            </div>

            <!-- CTA for AI Learning -->
            <div class="tw-text-center">
              <q-btn
                no-caps
                size="sm"
                class="tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 tw-text-white tw-font-bold tw-px-4 sm:tw-px-6 md:tw-px-8 tw-py-2 sm:tw-py-3 tw-rounded-lg tw-shadow-lg tw-shadow-cyan-500/25 hover:tw-shadow-cyan-500/40 tw-transform hover:tw-scale-105 tw-transition-all tw-duration-300 tw-w-full sm:tw-w-auto"
              >
                <q-icon
                  name="rocket_launch"
                  class="tw-mr-1 sm:tw-mr-2 tw-text-white tw-text-xs sm:tw-text-sm"
                />
                <span
                  class="tw-text-white tw-font-bold tw-text-xs sm:tw-text-sm md:tw-text-base"
                  >ลองใช้ AI ฟรี</span
                >
              </q-btn>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="tw-text-center tw-mt-6 sm:tw-mt-8">
        <h3
          class="tw-text-lg sm:tw-text-xl lg:tw-text-2xl tw-font-bold tw-text-white tw-mb-3 tw-px-4"
        >
          เลือกได้แล้วว่าคุณจะเป็น
          <span class="tw-text-cyan-400 tw-block sm:tw-inline"
            >นักเรียนยุคไหน?</span
          >
        </h3>
        <p
          class="tw-text-base sm:tw-text-lg tw-text-slate-300 tw-mb-4 sm:tw-mb-6 tw-px-4"
        >
          เริ่มต้นการเรียนรู้แบบใหม่กับ 9nerd.ai วันนี้
        </p>

        <div
          class="tw-flex tw-flex-col sm:tw-flex-row tw-gap-3 tw-justify-center tw-px-4"
        >
          <q-btn
            no-caps
            size="lg"
            class="tw-bg-gradient-to-r tw-from-cyan-500 tw-to-blue-500 tw-text-white tw-font-bold tw-px-6 sm:tw-px-10 tw-py-3 sm:tw-py-4 tw-rounded-xl tw-shadow-xl tw-shadow-cyan-500/25 hover:tw-shadow-cyan-500/40 tw-transform hover:tw-scale-105 tw-transition-all tw-duration-300 tw-w-full sm:tw-w-auto"
          >
            <q-icon name="rocket_launch" class="tw-mr-2 tw-text-white" />
            <span class="tw-text-white tw-font-bold tw-text-sm sm:tw-text-base"
              >เริ่มใช้ฟรีตอนนี้</span
            >
          </q-btn>
          <q-btn
            no-caps
            size="lg"
            flat
            class="tw-border-2 tw-border-white/30 tw-text-white tw-font-bold tw-px-6 sm:tw-px-10 tw-py-3 sm:tw-py-4 tw-rounded-xl tw-backdrop-blur-sm hover:tw-bg-white/10 tw-transition-all tw-duration-300 tw-w-full sm:tw-w-auto"
          >
            <q-icon name="play_circle" class="tw-mr-2 tw-text-white" />
            <span class="tw-text-white tw-font-bold tw-text-sm sm:tw-text-base"
              >ดูตัวอย่าง</span
            >
          </q-btn>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed for this comparison section
</script>

<style scoped>
/* Custom animation delays */
.tw-animation-delay-1000 {
  animation-delay: 1s;
}

/* Hover effects for cards */
.tw-group:hover .tw-bg-white\/5 {
  background-color: rgba(255, 255, 255, 0.1);
}

.tw-group:hover .tw-bg-white\/10 {
  background-color: rgba(255, 255, 255, 0.15);
}
</style>
