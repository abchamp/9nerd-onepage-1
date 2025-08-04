<template>
  <q-page>
    <!-- Hero Section -->
    <HeroSection />

    <!-- Testimonials Section -->
    <!-- <TestimonialsSection /> -->

    <!-- Features Section -->
    <FeaturesSection />

    <!-- Why Choose Section -->
    <!-- <WhyChooseSection /> -->

    <!-- Comparison Section -->
    <ComparisonSection />

    <!-- Three Steps Section -->
    <ThreeStepsSection />

    <!-- Smart LMS Section -->
    <!-- <SmartLMSSection /> -->

    <!-- FAQ Section -->
    <FAQSection />

    <!-- Pricing Section -->
    <PricingSection />

    <!-- Final CTA Section -->
    <FinalCTASection />

    <!-- Footer -->
    <FooterSection />

    <!-- <BackupSections /> -->
  </q-page>
</template>

<script setup>
import HeroSection from "../components/home/HeroSection.vue";
import ComparisonSection from "../components/home/ComparisonSection.vue";
import FeaturesSection from "../components/home/FeaturesSection.vue";
import ThreeStepsSection from "../components/home/ThreeStepsSection.vue";
// import WhyChooseSection from "../components/home/WhyChooseSection.vue";
// import SmartLMSSection from "../components/home/SmartLMSSection.vue";
import FAQSection from "../components/home/FAQSection.vue";
import PricingSection from "../components/home/PricingSection.vue";
// import TestimonialsSection from "../components/home/TestimonialsSection.vue";
import FinalCTASection from "../components/home/FinalCTASection.vue";
import FooterSection from "../components/home/FooterSection.vue";
// import BackupSections from "../components/home/BackupSections.vue";

// 9nerd.ai - Advanced AI Platform for Education
// Modern, Premium Landing Page
</script>

<style scoped>
/* Enhanced custom styles for premium design */
.q-page {
  min-height: 100vh;
}

/* Custom animation delays */
.tw-animation-delay-500 {
  animation-delay: 0.5s;
}

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

/* Glassmorphism enhancements */
.tw-backdrop-blur-xl {
  backdrop-filter: blur(20px);
}

/* Custom gradient backgrounds */
.tw-bg-blue-150 {
  background-color: #dbeafe;
}

.tw-bg-purple-150 {
  background-color: #e9d5ff;
}

.tw-bg-emerald-150 {
  background-color: #d1fae5;
}

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
