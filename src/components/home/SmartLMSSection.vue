<template>
  <!-- Smart LMS Section -->
  <section
    class="tw-py-24 tw-bg-gradient-to-br tw-from-white tw-to-slate-50 tw-relative tw-overflow-hidden"
  >
    <!-- Background Elements -->
    <div class="tw-absolute tw-inset-0">
      <div
        class="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-72 tw-h-72 tw-bg-gradient-to-r tw-from-blue-400/10 tw-to-purple-400/10 tw-rounded-full tw-blur-3xl tw-animate-pulse"
      ></div>
      <div
        class="tw-absolute tw-bottom-1/3 tw-right-1/4 tw-w-96 tw-h-96 tw-bg-gradient-to-r tw-from-purple-400/10 tw-to-indigo-400/10 tw-rounded-full tw-blur-3xl tw-animate-pulse tw-animation-delay-1000"
      ></div>
    </div>

    <div class="tw-container tw-mx-auto tw-px-6 tw-relative tw-z-10">
      <div class="tw-grid lg:tw-grid-cols-2 tw-gap-16 tw-items-center">
        <!-- Left Side - Content -->
        <div>
          <div
            class="tw-inline-flex tw-items-center tw-px-4 tw-py-2 tw-bg-gradient-to-r tw-from-blue-50 tw-to-indigo-50 tw-border tw-border-blue-200 tw-rounded-full tw-text-sm tw-font-semibold tw-text-blue-700 tw-mb-6"
          >
            <q-icon name="auto_awesome" class="tw-text-blue-600 tw-mr-2" />
            ระบบการจัดการเรียนรู้อัจฉริยะ
          </div>

          <h2
            class="tw-text-4xl lg:tw-text-5xl tw-font-black tw-text-slate-900 tw-mb-0 tw-leading-tight"
          >
            เหนือกว่า
            <span
              class="tw-bg-gradient-to-r tw-from-blue-600 tw-to-indigo-600 tw-bg-clip-text tw-text-transparent"
            >
              LMS ทั่วไป
            </span>
          </h2>

          <p class="tw-text-xl tw-text-slate-600 tw-leading-relaxed tw-mb-10">
            9nerd.ai ไม่ใช่แค่เครื่องมือช่วยเรียน แต่เป็นระบบ LMS
            อัจฉริยะที่ครบครัน
          </p>

          <!-- Features List -->
          <div class="tw-space-y-8">
            <!-- Feature 1 -->
            <div class="tw-flex tw-items-start tw-space-x-4">
              <div
                class="tw-w-12 tw-h-12 tw-bg-gradient-to-r tw-from-blue-500 tw-to-blue-600 tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-flex-shrink-0"
              >
                <q-icon name="quiz" class="tw-text-white tw-text-xl" />
              </div>
              <div>
                <h3
                  class="tw-mt-0 tw-text-2xl tw-font-bold tw-text-slate-900 tw-mb-0"
                >
                  สร้างข้อสอบด้วย AI หรือสร้างเองได้
                </h3>
                <p class="tw-text-slate-600 tw-text-lg tw-leading-relaxed">
                  AI
                  จะสร้างข้อสอบที่ตรงกับระดับความสามารถของผู้เรียนโดยอัตโนมัติ
                </p>
              </div>
            </div>

            <!-- Feature 2 -->
            <div class="tw-flex tw-items-start tw-space-x-4">
              <div
                class="tw-w-12 tw-h-12 tw-bg-gradient-to-r tw-from-purple-500 tw-to-purple-600 tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-flex-shrink-0"
              >
                <q-icon name="groups" class="tw-text-white tw-text-xl" />
              </div>
              <div>
                <h3
                  class="tw-mt-0 tw-text-2xl tw-font-bold tw-text-slate-900 tw-mb-0"
                >
                  เชิญสมาชิกเข้าร่วมเรียนและทำข้อสอบ
                </h3>
                <p class="tw-text-slate-600 tw-text-lg tw-leading-relaxed">
                  สร้างห้องเรียนออนไลน์ เพิ่มผู้เรียนได้ไม่จำกัด
                  และติดตามความก้าวหน้า
                </p>
              </div>
            </div>

            <!-- Feature 3 -->
            <div class="tw-flex tw-items-start tw-space-x-4">
              <div
                class="tw-w-12 tw-h-12 tw-bg-gradient-to-r tw-from-emerald-500 tw-to-emerald-600 tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-flex-shrink-0"
              >
                <q-icon name="timeline" class="tw-text-white tw-text-xl" />
              </div>
              <div>
                <h3
                  class="tw-mt-0 tw-text-2xl tw-font-bold tw-text-slate-900 tw-mb-0"
                >
                  ติดตามผลการเรียนและการสอบแบบเรียลไทม์
                </h3>
                <p class="tw-text-slate-600 tw-text-lg tw-leading-relaxed">
                  ดูความก้าวหน้าของผู้เรียนแต่ละคนหรือทั้งห้องเรียนได้แบบทันที
                </p>
              </div>
            </div>

            <!-- Feature 4 -->
            <div class="tw-flex tw-items-start tw-space-x-4">
              <div
                class="tw-w-12 tw-h-12 tw-bg-gradient-to-r tw-from-orange-500 tw-to-orange-600 tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-flex-shrink-0"
              >
                <q-icon name="psychology" class="tw-text-white tw-text-xl" />
              </div>
              <div>
                <h3
                  class="tw-mt-0 tw-text-2xl tw-font-bold tw-text-slate-900 tw-mb-0"
                >
                  วิเคราะห์จุดแข็งและจุดอ่อนของผู้เรียนด้วย AI
                </h3>
                <p class="tw-text-slate-600 tw-text-lg tw-leading-relaxed">
                  AI
                  จะวิเคราะห์ผลการเรียนและให้คำแนะนำเฉพาะบุคคลเพื่อพัฒนาจุดอ่อน
                </p>
              </div>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="tw-mt-10">
            <q-btn
              no-caps
              size="lg"
              class="tw-bg-gradient-to-r tw-from-blue-500 tw-to-indigo-600 tw-text-white tw-font-bold tw-px-8 tw-py-4 tw-rounded-2xl tw-shadow-xl tw-shadow-blue-500/25 hover:tw-shadow-blue-500/40 tw-transform hover:tw-scale-105 tw-transition-all tw-duration-300"
            >
              <q-icon name="school" class="tw-mr-2 tw-text-white" />
              <span class="tw-text-white tw-font-bold">ทดลองใช้ LMS ฟรี</span>
            </q-btn>
          </div>
        </div>

        <!-- Right Side - Preview -->
        <div class="tw-relative">
          <!-- Main LMS Dashboard Preview -->
          <div
            class="tw-bg-gradient-to-br tw-from-white tw-to-slate-50 tw-rounded-3xl tw-p-8 tw-shadow-2xl tw-shadow-slate-900/10 tw-border tw-border-slate-200/50 tw-relative tw-overflow-hidden"
          >
            <!-- Header Bar -->
            <div class="tw-flex tw-items-center tw-justify-between tw-mb-6">
              <div class="tw-flex tw-items-center tw-space-x-3">
                <div
                  class="tw-w-8 tw-h-8 tw-bg-gradient-to-r tw-from-blue-500 tw-to-indigo-600 tw-rounded-lg tw-flex tw-items-center tw-justify-center"
                >
                  <q-icon name="school" class="tw-text-white tw-text-sm" />
                </div>
                <div>
                  <div class="tw-text-sm tw-font-bold tw-text-slate-900">
                    ห้องเรียน คณิตศาสตร์ ม.3
                  </div>
                  <div class="tw-text-xs tw-text-slate-500">
                    24 นักเรียน • กำลังออนไลน์ 18 คน
                  </div>
                </div>
              </div>
              <div
                class="tw-w-2 tw-h-2 tw-bg-green-400 tw-rounded-full tw-animate-pulse"
              ></div>
            </div>

            <!-- Stats Cards -->
            <div class="tw-grid tw-grid-cols-3 tw-gap-4 tw-mb-6">
              <div
                class="tw-bg-blue-50 tw-rounded-xl tw-p-4 tw-text-center tw-border tw-border-blue-100"
              >
                <div class="tw-text-lg tw-font-black tw-text-blue-600">85%</div>
                <div class="tw-text-xs tw-text-slate-600">คะแนนเฉลี่ย</div>
              </div>
              <div
                class="tw-bg-emerald-50 tw-rounded-xl tw-p-4 tw-text-center tw-border tw-border-emerald-100"
              >
                <div class="tw-text-lg tw-font-black tw-text-emerald-600">
                  12
                </div>
                <div class="tw-text-xs tw-text-slate-600">ข้อสอบใหม่</div>
              </div>
              <div
                class="tw-bg-purple-50 tw-rounded-xl tw-p-4 tw-text-center tw-border tw-border-purple-100"
              >
                <div class="tw-text-lg tw-font-black tw-text-purple-600">
                  96%
                </div>
                <div class="tw-text-xs tw-text-slate-600">เข้าร่วม</div>
              </div>
            </div>

            <!-- Quiz Section -->
            <div class="tw-bg-slate-50 tw-rounded-2xl tw-p-6 tw-mb-4">
              <div class="tw-flex tw-items-center tw-justify-between tw-mb-4">
                <h4 class="tw-text-sm tw-font-bold tw-text-slate-900">
                  ข้อสอบล่าสุด
                </h4>
                <span
                  class="tw-px-2 tw-py-1 tw-bg-blue-100 tw-text-blue-700 tw-text-xs tw-font-medium tw-rounded-full"
                >
                  AI Generated
                </span>
              </div>
              <div class="tw-space-y-3">
                <div
                  class="tw-bg-white tw-rounded-lg tw-p-3 tw-border tw-border-slate-200"
                >
                  <div class="tw-text-xs tw-text-slate-900 tw-font-medium">
                    สมการเชิงเส้น: ระดับกลาง
                  </div>
                  <div class="tw-text-xs tw-text-slate-500 tw-mt-1">
                    15 ข้อ • 30 นาที
                  </div>
                </div>
                <div
                  class="tw-bg-white tw-rounded-lg tw-p-3 tw-border tw-border-slate-200"
                >
                  <div class="tw-text-xs tw-text-slate-900 tw-font-medium">
                    เรขาคณิต: ระดับยาก
                  </div>
                  <div class="tw-text-xs tw-text-slate-500 tw-mt-1">
                    20 ข้อ • 45 นาที
                  </div>
                </div>
              </div>
            </div>

            <!-- Progress Chart Area -->
            <div
              class="tw-bg-gradient-to-r tw-from-blue-50 tw-to-indigo-50 tw-rounded-2xl tw-p-4"
            >
              <div class="tw-text-xs tw-font-bold tw-text-slate-900 tw-mb-3">
                ความก้าวหน้าแบบเรียลไทม์
              </div>
              <div class="tw-space-y-2">
                <div
                  class="tw-h-2 tw-bg-blue-200 tw-rounded-full tw-overflow-hidden"
                >
                  <div
                    class="tw-h-full tw-bg-blue-500 tw-rounded-full tw-w-3/4"
                  ></div>
                </div>
                <div
                  class="tw-h-2 tw-bg-emerald-200 tw-rounded-full tw-overflow-hidden"
                >
                  <div
                    class="tw-h-full tw-bg-emerald-500 tw-rounded-full tw-w-5/6"
                  ></div>
                </div>
                <div
                  class="tw-h-2 tw-bg-purple-200 tw-rounded-full tw-overflow-hidden"
                >
                  <div
                    class="tw-h-full tw-bg-purple-500 tw-rounded-full tw-w-2/3"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating AI Analysis Card -->
          <div
            class="tw-absolute tw--top-4 tw--right-4 tw-bg-gradient-to-r tw-from-orange-500 tw-to-red-500 tw-text-white tw-rounded-2xl tw-p-4 tw-shadow-xl tw-shadow-orange-500/25 tw-animate-pulse"
          >
            <div class="tw-flex tw-items-center tw-space-x-2 tw-mb-2">
              <q-icon name="psychology" class="tw-text-white tw-text-lg" />
              <span class="tw-text-xs tw-font-bold">AI Analysis</span>
            </div>
            <div class="tw-text-xs tw-text-orange-100">
              จุดอ่อน: สมการกำลังสอง
            </div>
            <div class="tw-text-xs tw-text-orange-100">
              แนะนำ: เพิ่มแบบฝึกหัด
            </div>
          </div>

          <!-- Floating Students Online Card -->
          <div
            class="tw-absolute tw--bottom-4 tw--left-4 tw-bg-gradient-to-r tw-from-emerald-500 tw-to-teal-500 tw-text-white tw-rounded-2xl tw-p-4 tw-shadow-xl tw-shadow-emerald-500/25 tw-animate-bounce"
          >
            <div class="tw-flex tw-items-center tw-space-x-2">
              <div
                class="tw-w-2 tw-h-2 tw-bg-green-300 tw-rounded-full tw-animate-pulse"
              ></div>
              <span class="tw-text-xs tw-font-bold">18 คนออนไลน์</span>
            </div>
            <div class="tw-text-xs tw-text-emerald-100 tw-mt-1">
              กำลังทำข้อสอบ 12 คน
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tw-animation-delay-1000 {
  animation-delay: 1s;
}
</style>
