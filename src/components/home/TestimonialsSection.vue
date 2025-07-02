<template>
  <!-- Testimonials Section -->
  <section
    class="tw-pb-8 sm:tw-pb-12 tw-pt-6 sm:tw-pt-8 tw-bg-white tw-relative tw-overflow-hidden"
  >
    <!-- Background Pattern -->
    <div class="tw-absolute tw-inset-0 tw-opacity-5">
      <div
        class="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-48 tw-h-48 sm:tw-w-56 sm:tw-h-56 lg:tw-w-64 lg:tw-h-64 tw-bg-gradient-to-r tw-from-blue-600 tw-to-purple-600 tw-rounded-full tw-blur-3xl"
      ></div>
      <div
        class="tw-absolute tw-bottom-1/4 tw-right-1/4 tw-w-48 tw-h-48 sm:tw-w-56 sm:tw-h-56 lg:tw-w-64 lg:tw-h-64 tw-bg-gradient-to-r tw-from-purple-600 tw-to-pink-600 tw-rounded-full tw-blur-3xl"
      ></div>
    </div>

    <!-- Section Header -->
    <!-- <div
      class="tw-container tw-max-w-6xl tw-mx-auto tw-px-4 tw-relative tw-z-10"
    >
      <div class="tw-text-center tw-mb-8">
        <div
          class="tw-inline-flex tw-items-center tw-px-4 tw-py-2 tw-bg-gradient-to-r tw-from-blue-50 tw-to-purple-50 tw-border tw-border-blue-200 tw-rounded-full tw-text-sm tw-font-semibold tw-text-blue-600 tw-mb-4"
        >
          <q-icon name="favorite" class="tw-text-red-500 tw-mr-2" />
          ครูและนักศึกษาไทยให้ความไว้วางใจ
        </div>

        <h2
          class="tw-text-3xl lg:tw-text-4xl tw-font-black tw-text-slate-900 tw-mb-4 tw-leading-tight"
        >
          เปลี่ยนแปลงการศึกษาไทย
          <span
            class="tw-bg-gradient-to-r tw-from-blue-600 tw-to-purple-600 tw-bg-clip-text tw-text-transparent"
          >
            ด้วยเทคโนโลยี AI
          </span>
        </h2>

        <p
          class="tw-text-lg tw-text-slate-600 tw-max-w-3xl tw-mx-auto tw-leading-relaxed"
        >
          9nerd.ai ช่วยให้การเรียนการสอนในประเทศไทยมีประสิทธิภาพมากขึ้น
          ด้วยเครื่องมือ AI ที่ออกแบบมาเพื่อการศึกษาโดยเฉพาะ
        </p>
      </div>
    </div> -->

    <!-- Auto-scrolling Testimonial Cards - Full Width -->
    <div class="tw-relative tw-overflow-hidden tw-w-full tw-z-10">
      <div class="testimonial-scroll-container">
        <div class="testimonial-track tw-py-2 sm:tw-py-4">
          <!-- Card 1 -->
          <div class="testimonial-card">
            <div class="tw-flex tw-items-start tw-mb-3 sm:tw-mb-4 md:tw-mb-5">
              <div
                class="tw-w-8 tw-h-8 sm:tw-w-10 sm:tw-h-10 md:tw-w-12 md:tw-h-12 tw-bg-gradient-to-r tw-from-blue-500 tw-to-purple-600 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold tw-text-sm sm:tw-text-base md:tw-text-lg tw-mr-2 sm:tw-mr-3 tw-flex-shrink-0"
              >
                ส
              </div>
              <div class="tw-flex-1 tw-min-w-0">
                <p
                  class="tw-font-bold tw-mb-0 tw-text-slate-900 tw-text-xs sm:tw-text-sm md:tw-text-base tw-truncate"
                >
                  สุนิสา เพชรรัตน์
                </p>
                <p
                  class="tw-text-xs sm:tw-text-sm md:tw-text-base tw-mb-0 tw-text-slate-500 tw-font-medium tw-truncate"
                >
                  ครูคณิตศาสตร์ ม.ปลาย
                </p>
                <div class="tw-flex tw-mt-1">
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm md:tw-text-base"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm md:tw-text-base"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm md:tw-text-base"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm md:tw-text-base"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm md:tw-text-base"
                  />
                </div>
              </div>
            </div>
            <p
              class="tw-text-slate-600 tw-leading-relaxed tw-text-xs sm:tw-text-sm"
            >
              "9nerd.ai ทำให้การสอนคณิตศาสตรมีความสนุกและเข้าใจง่ายขึ้น
              นักเรียนมีความกระตือรือร้นในการเรียนมากขึ้น
              และผลการเรียนดีขึ้นอย่างเห็นได้ชัด"
            </p>
          </div>

          <!-- Card 2 -->
          <div class="testimonial-card">
            <div class="tw-flex tw-items-start tw-mb-3 sm:tw-mb-4">
              <div
                class="tw-w-10 tw-h-10 sm:tw-w-12 sm:tw-h-12 tw-bg-gradient-to-r tw-from-purple-500 tw-to-pink-600 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold tw-text-base sm:tw-text-lg tw-mr-3 tw-flex-shrink-0"
              >
                น
              </div>
              <div class="tw-flex-1 tw-min-w-0">
                <p
                  class="tw-font-bold tw-mb-0 tw-text-slate-900 tw-text-sm sm:tw-text-base tw-truncate"
                >
                  นายก วิทยากุล
                </p>
                <p
                  class="tw-text-xs sm:tw-text-sm tw-mb-0 tw-text-slate-500 tw-font-medium tw-truncate"
                >
                  ผู้อำนวยการโรงเรียน
                </p>
                <div class="tw-flex tw-mt-1">
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                </div>
              </div>
            </div>
            <p
              class="tw-text-slate-600 tw-leading-relaxed tw-text-xs sm:tw-text-sm"
            >
              "ระบบการจัดการโรงเรียนของ 9nerd.ai
              ช่วยให้การบริหารงานมีประสิทธิภาพมากขึ้น
              สามารถติดตามผลการเรียนของนักเรียนได้แบบเรียลไทม์"
            </p>
          </div>

          <!-- Card 3 -->
          <div class="testimonial-card">
            <div class="tw-flex tw-items-start tw-mb-3 sm:tw-mb-4">
              <div
                class="tw-w-10 tw-h-10 sm:tw-w-12 sm:tw-h-12 tw-bg-gradient-to-r tw-from-green-500 tw-to-emerald-600 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold tw-text-base sm:tw-text-lg tw-mr-3 tw-flex-shrink-0"
              >
                อ
              </div>
              <div class="tw-flex-1 tw-min-w-0">
                <p
                  class="tw-font-bold tw-mb-0 tw-text-slate-900 tw-text-sm sm:tw-text-base tw-truncate"
                >
                  อ.ดร.ปรียา สุขสำราญ
                </p>
                <p
                  class="tw-text-xs sm:tw-text-sm tw-mb-0 tw-text-slate-500 tw-font-medium tw-truncate"
                >
                  อาจารย์มหาวิทยาลัย
                </p>
                <div class="tw-flex tw-mt-1">
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                </div>
              </div>
            </div>
            <p
              class="tw-text-slate-600 tw-leading-relaxed tw-text-xs sm:tw-text-sm"
            >
              "เป็น AI ที่มีพื้นฐานทางวิชาการที่แข็งแกร่ง
              สามารถปรับเปลี่ยนรูปแบบการเรียนรู้
              ให้เหมาะสมกับนักศึกษาแต่ละคนได้อย่างมีประสิทธิภาพ"
            </p>
          </div>

          <!-- Card 4 -->
          <div class="testimonial-card">
            <div class="tw-flex tw-items-start tw-mb-3 sm:tw-mb-4">
              <div
                class="tw-w-10 tw-h-10 sm:tw-w-12 sm:tw-h-12 tw-bg-gradient-to-r tw-from-orange-500 tw-to-amber-600 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold tw-text-base sm:tw-text-lg tw-mr-3 tw-flex-shrink-0"
              >
                ว
              </div>
              <div class="tw-flex-1 tw-min-w-0">
                <p
                  class="tw-font-bold tw-mb-0 tw-text-slate-900 tw-text-sm sm:tw-text-base tw-truncate"
                >
                  วัชรพล ใจดี
                </p>
                <p
                  class="tw-text-xs sm:tw-text-sm tw-mb-0 tw-text-slate-500 tw-font-medium tw-truncate"
                >
                  ครูวิทยาศาสตร์ ม.ต้น
                </p>
                <div class="tw-flex tw-mt-1">
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                </div>
              </div>
            </div>
            <p
              class="tw-text-slate-600 tw-leading-relaxed tw-text-xs sm:tw-text-sm"
            >
              "การจำลองการทดลองวิทยาศาสตร์ทำให้นักเรียนเข้าใจแนวคิดที่ซับซ้อนได้ง่ายขึ้น
              ชั้นเรียนมีความมีชีวิตชีวามากขึ้น"
            </p>
          </div>

          <!-- Card 5 -->
          <div class="testimonial-card">
            <div class="tw-flex tw-items-start tw-mb-3 sm:tw-mb-4">
              <div
                class="tw-w-10 tw-h-10 sm:tw-w-12 sm:tw-h-12 tw-bg-gradient-to-r tw-from-cyan-500 tw-to-teal-600 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold tw-text-base sm:tw-text-lg tw-mr-3 tw-flex-shrink-0"
              >
                ม
              </div>
              <div class="tw-flex-1 tw-min-w-0">
                <p
                  class="tw-font-bold tw-mb-0 tw-text-slate-900 tw-text-sm sm:tw-text-base tw-truncate"
                >
                  มาลี จิตรดี
                </p>
                <p
                  class="tw-text-xs sm:tw-text-sm tw-mb-0 tw-text-slate-500 tw-font-medium tw-truncate"
                >
                  หัวหน้าแผนกเทคโนโลยี
                </p>
                <div class="tw-flex tw-mt-1">
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                </div>
              </div>
            </div>
            <p
              class="tw-text-slate-600 tw-leading-relaxed tw-text-xs sm:tw-text-sm"
            >
              "การติดตั้งและใช้งาน 9nerd.ai ในโรงเรียนทั้ง 30 แห่ง
              ทำได้อย่างราบรื่น ทีมสนับสนุนให้ความช่วยเหลือได้อย่างรวดเร็ว"
            </p>
          </div>

          <!-- Card 6 -->
          <div class="testimonial-card">
            <div class="tw-flex tw-items-center tw-mb-4">
              <div
                class="tw-w-12 tw-h-12 tw-bg-gradient-to-r tw-from-indigo-500 tw-to-blue-600 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold tw-text-lg tw-mr-3"
              >
                ก
              </div>
              <div>
                <p class="tw-font-bold tw-mb-0 tw-text-slate-900 tw-text-base">
                  กมลพร ศิลปกุล
                </p>
                <p class="tw-text-sm tw-mb-0 tw-text-slate-500 tw-font-medium">
                  ครูการศึกษาพิเศษ
                </p>
                <div class="tw-flex tw-mt-1">
                  <q-icon name="star" class="tw-text-yellow-400 tw-text-sm" />
                  <q-icon name="star" class="tw-text-yellow-400 tw-text-sm" />
                  <q-icon name="star" class="tw-text-yellow-400 tw-text-sm" />
                  <q-icon name="star" class="tw-text-yellow-400 tw-text-sm" />
                  <q-icon name="star" class="tw-text-yellow-400 tw-text-sm" />
                </div>
              </div>
            </div>
            <p class="tw-text-slate-600 tw-leading-relaxed tw-text-sm">
              "AI ที่เข้าใจความต้องการพิเศษของนักเรียน
              สร้างเนื้อหาเรียนรู้ที่เหมาะสม ทำให้การเรียนรวมมีประสิทธิภาพจริง"
            </p>
          </div>

          <!-- Card 7 -->
          <div class="testimonial-card">
            <div class="tw-flex tw-items-center tw-mb-4">
              <div
                class="tw-w-12 tw-h-12 tw-bg-gradient-to-r tw-from-rose-500 tw-to-pink-600 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold tw-text-lg tw-mr-3"
              >
                จ
              </div>
              <div>
                <p class="tw-font-bold tw-mb-0 tw-text-slate-900 tw-text-base">
                  จิราพร นักเรียน
                </p>
                <p class="tw-text-sm tw-mb-0 tw-text-slate-500 tw-font-medium">
                  ครูภาษาอังกฤษ ป.6
                </p>
                <div class="tw-flex tw-mt-1">
                  <q-icon name="star" class="tw-text-yellow-400 tw-text-sm" />
                  <q-icon name="star" class="tw-text-yellow-400 tw-text-sm" />
                  <q-icon name="star" class="tw-text-yellow-400 tw-text-sm" />
                  <q-icon name="star" class="tw-text-yellow-400 tw-text-sm" />
                  <q-icon name="star" class="tw-text-yellow-400 tw-text-sm" />
                </div>
              </div>
            </div>
            <p class="tw-text-slate-600 tw-leading-relaxed tw-text-sm">
              "การสอนภาษาอังกฤษด้วย 9nerd.ai ทำให้เด็กๆ กล้าพูด กล้าแสดงออก
              เกมการเรียนรู้ทำให้บรรยากาศในชั้นเรียนสนุกสนาน"
            </p>
          </div>

          <!-- Card 8 -->
          <div class="testimonial-card">
            <div class="tw-flex tw-items-center tw-mb-4">
              <div
                class="tw-w-12 tw-h-12 tw-bg-gradient-to-r tw-from-violet-500 tw-to-purple-600 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold tw-text-lg tw-mr-3"
              >
                ร
              </div>
              <div>
                <p class="tw-font-bold tw-mb-0 tw-text-slate-900 tw-text-base">
                  รัชนี สร้างสรรค์
                </p>
                <p class="tw-text-sm tw-mb-0 tw-text-slate-500 tw-font-medium">
                  นักศึกษาปริญญาโท
                </p>
                <div class="tw-flex tw-mt-1">
                  <q-icon name="star" class="tw-text-yellow-400 tw-text-sm" />
                  <q-icon name="star" class="tw-text-yellow-400 tw-text-sm" />
                  <q-icon name="star" class="tw-text-yellow-400 tw-text-sm" />
                  <q-icon name="star" class="tw-text-yellow-400 tw-text-sm" />
                  <q-icon name="star" class="tw-text-yellow-400 tw-text-sm" />
                </div>
              </div>
            </div>
            <p class="tw-text-slate-600 tw-leading-relaxed tw-text-sm">
              "ใช้ 9nerd.ai ช่วยในการทำวิจัย ค้นคว้าข้อมูล และเขียนรายงาน
              ประหยัดเวลาได้มากและได้ผลลัพธ์ที่มีคุณภาพ"
            </p>
          </div>

          <!-- Duplicate cards for seamless loop -->
          <div class="testimonial-card">
            <div class="tw-flex tw-items-start tw-mb-3 sm:tw-mb-4">
              <div
                class="tw-w-10 tw-h-10 sm:tw-w-12 sm:tw-h-12 tw-bg-gradient-to-r tw-from-blue-500 tw-to-purple-600 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold tw-text-base sm:tw-text-lg tw-mr-3 tw-flex-shrink-0"
              >
                ส
              </div>
              <div class="tw-flex-1 tw-min-w-0">
                <p
                  class="tw-font-bold tw-mb-0 tw-text-slate-900 tw-text-sm sm:tw-text-base tw-truncate"
                >
                  สุนิสา เพชรรัตน์
                </p>
                <p
                  class="tw-text-xs sm:tw-text-sm tw-mb-0 tw-text-slate-500 tw-font-medium tw-truncate"
                >
                  ครูคณิตศาสตร์ ม.ปลาย
                </p>
                <div class="tw-flex tw-mt-1">
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                </div>
              </div>
            </div>
            <p
              class="tw-text-slate-600 tw-leading-relaxed tw-text-xs sm:tw-text-sm"
            >
              "9nerd.ai ทำให้การสอนคณิตศาสตรมีความสนุกและเข้าใจง่ายขึ้น
              นักเรียนมีความกระตือรือร้นในการเรียนมากขึ้น
              และผลการเรียนดีขึ้นอย่างเห็นได้ชัด"
            </p>
          </div>

          <div class="testimonial-card">
            <div class="tw-flex tw-items-start tw-mb-3 sm:tw-mb-4">
              <div
                class="tw-w-10 tw-h-10 sm:tw-w-12 sm:tw-h-12 tw-bg-gradient-to-r tw-from-purple-500 tw-to-pink-600 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-text-white tw-font-bold tw-text-base sm:tw-text-lg tw-mr-3 tw-flex-shrink-0"
              >
                น
              </div>
              <div class="tw-flex-1 tw-min-w-0">
                <p
                  class="tw-font-bold tw-mb-0 tw-text-slate-900 tw-text-sm sm:tw-text-base tw-truncate"
                >
                  นายก วิทยากุล
                </p>
                <p
                  class="tw-text-xs sm:tw-text-sm tw-mb-0 tw-text-slate-500 tw-font-medium tw-truncate"
                >
                  ผู้อำนวยการโรงเรียน
                </p>
                <div class="tw-flex tw-mt-1">
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                  <q-icon
                    name="star"
                    class="tw-text-yellow-400 tw-text-xs sm:tw-text-sm"
                  />
                </div>
              </div>
            </div>
            <p
              class="tw-text-slate-600 tw-leading-relaxed tw-text-xs sm:tw-text-sm"
            >
              "ระบบการจัดการโรงเรียนของ 9nerd.ai
              ช่วยให้การบริหารงานมีประสิทธิภาพมากขึ้น
              สามารถติดตามผลการเรียนของนักเรียนได้แบบเรียลไทม์"
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Testimonials Section Component for 9nerd.ai landing page with Thai content and auto-scroll
</script>

<style scoped>
.testimonial-scroll-container {
  overflow: hidden;
  width: 100%;
}

.testimonial-track {
  display: flex;
  gap: 1.5rem;
  animation: scroll-right-to-left 40s linear infinite;
  width: calc(10 * (320px + 1.5rem)); /* 10 cards width + gaps */
}

.testimonial-card {
  min-width: 320px;
  max-width: 320px;
  background: white;
  border: 2px solid rgb(241 245 249);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-color: rgb(59 130 246);
}

@keyframes scroll-right-to-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(
      calc(-5 * (320px + 1.5rem))
    ); /* Move by 5 cards width */
  }
}

/* Pause animation on hover */
.testimonial-scroll-container:hover .testimonial-track {
  animation-play-state: paused;
}

/* Custom transition effects */
.tw-transition-all {
  transition: all 0.3s ease;
}
</style>
