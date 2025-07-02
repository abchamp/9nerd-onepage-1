<template>
  <!-- FAQ Section -->
  <section
    class="tw-py-8 sm:tw-py-12 tw-bg-gradient-to-br tw-from-slate-50 tw-to-blue-50 tw-relative tw-overflow-hidden"
  >
    <!-- Background Elements -->
    <div class="tw-absolute tw-inset-0">
      <div
        class="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-32 tw-h-32 sm:tw-w-40 sm:tw-h-40 lg:tw-w-48 lg:tw-h-48 tw-bg-blue-400/10 tw-rounded-full tw-blur-3xl tw-animate-pulse"
      ></div>
      <div
        class="tw-absolute tw-bottom-1/3 tw-right-1/4 tw-w-48 tw-h-48 sm:tw-w-56 sm:tw-h-56 lg:tw-w-64 lg:tw-h-64 tw-bg-purple-400/10 tw-rounded-full tw-blur-3xl tw-animate-pulse tw-animation-delay-1000"
      ></div>
    </div>

    <div
      class="tw-container tw-max-w-6xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-relative tw-z-10"
    >
      <div class="tw-text-center tw-mb-8 sm:tw-mb-10 md:tw-mb-12">
        <h2
          class="tw-text-xl sm:tw-text-2xl md:tw-text-3xl lg:tw-text-4xl xl:tw-text-5xl tw-font-black tw-text-slate-900 tw-mb-3 sm:tw-mb-4 tw-leading-tight tw-px-2 sm:tw-px-4"
        >
          คำถามที่พบบ่อย
        </h2>

        <p
          class="tw-text-sm sm:tw-text-base md:tw-text-lg lg:tw-text-xl tw-text-slate-600 tw-max-w-2xl tw-mx-auto tw-leading-relaxed tw-px-2 sm:tw-px-4"
        >
          คำตอบสำหรับข้อสงสัยเกี่ยวกับการใช้ AI เพื่อการศึกษา
        </p>
      </div>

      <div class="tw-max-w-3xl tw-mx-auto tw-px-2 sm:tw-px-4">
        <div class="tw-space-y-2 sm:tw-space-y-3 md:tw-space-y-4">
          <!-- FAQ Item 1 -->
          <div
            class="tw-group tw-bg-white/80 tw-backdrop-blur-xl tw-border tw-border-white/20 tw-rounded-xl tw-shadow-lg tw-shadow-slate-100/50 hover:tw-shadow-xl hover:tw-shadow-blue-500/10 tw-transition-all tw-duration-300 tw-overflow-hidden"
          >
            <q-expansion-item
              class="faq-item"
              expand-separator
              header-class="tw-px-3 sm:tw-px-4 md:tw-px-5 tw-text-left"
              dense-toggle
            >
              <template v-slot:header>
                <div class="tw-flex tw-items-center tw-w-full">
                  <div
                    class="tw-w-6 tw-h-6 sm:tw-w-7 sm:tw-h-7 md:tw-w-8 md:tw-h-8 tw-bg-gradient-to-r tw-from-blue-500 tw-to-blue-600 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mr-2 sm:tw-mr-3 tw-flex-shrink-0"
                  >
                    <q-icon
                      name="quiz"
                      class="tw-text-white tw-text-xs sm:tw-text-sm md:tw-text-base"
                    />
                  </div>
                  <h3
                    class="tw-text-sm sm:tw-text-base md:tw-text-lg lg:tw-text-xl tw-my-2 tw-font-bold tw-text-slate-900 tw-leading-relaxed"
                  >
                    นักเรียนจะใช้ AI เพื่อขอเฉลยโจทย์โดยตรงหรือไม่?
                  </h3>
                </div>
              </template>
              <div
                class="tw-px-3 sm:tw-px-4 md:tw-px-5 tw-pt-2 tw-pb-3 sm:tw-pb-4"
              >
                <div class="">
                  <p
                    class="tw-text-slate-600 tw-leading-relaxed tw-text-xs sm:tw-text-sm md:tw-text-base lg:tw-text-lg"
                  >
                    ไม่ต้องกังวล 9nerd.ai ของเราถูกออกแบบให้สอนก่อนจะตอบเสมอ โดย
                    AI ของเราจะแนะนำวิธีคิด ขั้นตอนการแก้ปัญหา
                    และความรู้พื้นฐานที่จำเป็น ไม่ใช่แค่ให้คำตอบสำเร็จรูป
                    เรามุ่งเน้นให้นักเรียนเข้าใจกระบวนการเรียนรู้มากกว่าผลลัพธ์
                  </p>
                </div>
              </div>
            </q-expansion-item>
          </div>

          <!-- FAQ Item 2 -->
          <div
            class="tw-group tw-bg-white/80 tw-backdrop-blur-xl tw-border tw-border-white/20 tw-rounded-xl tw-shadow-lg tw-shadow-slate-100/50 hover:tw-shadow-xl hover:tw-shadow-purple-500/10 tw-transition-all tw-duration-300 tw-overflow-hidden"
          >
            <q-expansion-item
              class="faq-item"
              expand-separator
              header-class="tw-px-3 sm:tw-px-4 md:tw-px-5 tw-text-left"
              dense-toggle
            >
              <template v-slot:header>
                <div class="tw-flex tw-items-center tw-w-full">
                  <div
                    class="tw-w-6 tw-h-6 sm:tw-w-7 sm:tw-h-7 md:tw-w-8 md:tw-h-8 tw-bg-gradient-to-r tw-from-purple-500 tw-to-purple-600 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mr-2 sm:tw-mr-3 tw-flex-shrink-0"
                  >
                    <q-icon
                      name="psychology"
                      class="tw-text-white tw-text-xs sm:tw-text-sm md:tw-text-base"
                    />
                  </div>
                  <h3
                    class="tw-text-sm sm:tw-text-base md:tw-text-lg lg:tw-text-xl tw-my-2 tw-font-bold tw-text-slate-900 tw-leading-relaxed"
                  >
                    การใช้ AI จะทำให้เด็กฉลาดน้อยลงหรือไม่?
                  </h3>
                </div>
              </template>
              <div
                class="tw-px-3 sm:tw-px-4 md:tw-px-5 tw-pt-2 tw-pb-3 sm:tw-pb-4"
              >
                <div class="">
                  <p
                    class="tw-text-slate-600 tw-leading-relaxed tw-text-xs sm:tw-text-sm md:tw-text-base lg:tw-text-lg"
                  >
                    ตรงกันข้าม การใช้ AI
                    อย่างเหมาะสมจะช่วยพัฒนาทักษะการคิดวิเคราะห์ได้ดียิ่งขึ้น
                    เปรียบเสมือนมีครูส่วนตัวที่ปรับการสอนตามความเข้าใจของผู้เรียน
                    ซึ่งช่วยให้เข้าใจเนื้อหาได้ลึกซึ้งกว่าการท่องจำ AI
                    ไม่ได้มาแทนที่การเรียนรู้
                    แต่เป็นเครื่องมือที่ช่วยให้การเรียนรู้มีประสิทธิภาพมากขึ้น
                  </p>
                </div>
              </div>
            </q-expansion-item>
          </div>

          <!-- FAQ Item 3 -->
          <div
            class="tw-group tw-bg-white/80 tw-backdrop-blur-xl tw-border tw-border-white/20 tw-rounded-xl tw-shadow-lg tw-shadow-slate-100/50 hover:tw-shadow-xl hover:tw-shadow-orange-500/10 tw-transition-all tw-duration-300 tw-overflow-hidden"
          >
            <q-expansion-item
              class="faq-item"
              expand-separator
              header-class="tw-px-3 sm:tw-px-4 md:tw-px-5 tw-text-left"
              dense-toggle
            >
              <template v-slot:header>
                <div class="tw-flex tw-items-center tw-w-full">
                  <div
                    class="tw-w-6 tw-h-6 sm:tw-w-7 sm:tw-h-7 md:tw-w-8 md:tw-h-8 tw-bg-gradient-to-r tw-from-orange-500 tw-to-orange-600 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mr-2 sm:tw-mr-3 tw-flex-shrink-0"
                  >
                    <q-icon
                      name="trending_down"
                      class="tw-text-white tw-text-xs sm:tw-text-sm md:tw-text-base"
                    />
                  </div>
                  <h3
                    class="tw-text-sm sm:tw-text-base md:tw-text-lg lg:tw-text-xl tw-my-2 tw-font-bold tw-text-slate-900 tw-leading-relaxed"
                  >
                    เด็กที่ไม่ใช้ AI จะเสียเปรียบอย่างไร?
                  </h3>
                </div>
              </template>
              <div
                class="tw-px-3 sm:tw-px-4 md:tw-px-5 tw-pt-2 tw-pb-3 sm:tw-pb-4"
              >
                <div class="">
                  <p
                    class="tw-text-slate-600 tw-leading-relaxed tw-text-xs sm:tw-text-sm md:tw-text-base lg:tw-text-lg"
                  >
                    ในยุคที่เทคโนโลยี AI กำลังเปลี่ยนแปลงทุกวงการ
                    เด็กที่ไม่คุ้นเคยกับการใช้ AI
                    จะเสียโอกาสในการพัฒนาทักษะสำคัญสำหรับอนาคต
                    เช่นเดียวกับที่คอมพิวเตอร์และอินเทอร์เน็ตเคยเป็นในอดีต
                    นอกจากนี้ ยังเสียโอกาสในการเรียนรู้แบบปรับเฉพาะบุคคล
                    และความสามารถในการเข้าถึงความรู้ได้ทุกที่ทุกเวลา
                  </p>
                </div>
              </div>
            </q-expansion-item>
          </div>

          <!-- FAQ Item 4 -->
          <div
            class="tw-group tw-bg-white/80 tw-backdrop-blur-xl tw-border tw-border-white/20 tw-rounded-xl tw-shadow-lg tw-shadow-slate-100/50 hover:tw-shadow-xl hover:tw-shadow-green-500/10 tw-transition-all tw-duration-300 tw-overflow-hidden"
          >
            <q-expansion-item
              class="faq-item"
              expand-separator
              header-class="tw-px-3 sm:tw-px-4 md:tw-px-5 tw-text-left"
              dense-toggle
            >
              <template v-slot:header>
                <div class="tw-flex tw-items-center tw-w-full">
                  <div
                    class="tw-w-6 tw-h-6 sm:tw-w-7 sm:tw-h-7 md:tw-w-8 md:tw-h-8 tw-bg-gradient-to-r tw-from-green-500 tw-to-green-600 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-mr-2 sm:tw-mr-3 tw-flex-shrink-0"
                  >
                    <q-icon
                      name="trending_up"
                      class="tw-text-white tw-text-xs sm:tw-text-sm md:tw-text-base"
                    />
                  </div>
                  <h3
                    class="tw-text-sm sm:tw-text-base md:tw-text-lg lg:tw-text-xl tw-my-2 tw-font-bold tw-text-slate-900 tw-leading-relaxed"
                  >
                    AI จะช่วยพัฒนาผลการเรียนได้จริงหรือไม่?
                  </h3>
                </div>
              </template>
              <div
                class="tw-px-3 sm:tw-px-4 md:tw-px-5 tw-pt-2 tw-pb-3 sm:tw-pb-4"
              >
                <div class="">
                  <p
                    class="tw-text-slate-600 tw-leading-relaxed tw-text-xs sm:tw-text-sm md:tw-text-base lg:tw-text-lg"
                  >
                    มีผลการศึกษาพบว่านักเรียนที่ใช้ AI
                    เป็นผู้ช่วยในการเรียนมีผลการเรียนที่ดีขึ้นถึง 30% เนื่องจาก
                    AI สามารถระบุจุดอ่อนของผู้เรียน
                    และช่วยอธิบายเนื้อหาที่ซับซ้อนให้เข้าใจง่ายขึ้น
                    พร้อมทั้งให้คำแนะนำแบบเฉพาะเจาะจงตามความต้องการของแต่ละคน
                  </p>
                </div>
              </div>
            </q-expansion-item>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// FAQ Section Component for 9nerd.ai landing page
</script>

<style scoped>
/* FAQ Section Styles */
.faq-item {
  border: none;
  border-radius: 0;
}

.faq-item .q-item {
  padding: 0;
  min-height: auto;
}

.faq-item .q-item__section {
  padding: 0;
}

.faq-item .q-expansion-item__content {
  padding: 0;
}

.faq-item .q-expansion-item__toggle {
  color: #64748b;
  transition: all 0.3s ease;
}

.faq-item .q-expansion-item__toggle:hover {
  color: #3b82f6;
}
</style>
