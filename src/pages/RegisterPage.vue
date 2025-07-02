<template>
  <q-page
    class="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-bg-gradient-to-br tw-from-gray-200 tw-to-gray-50"
  >
    <div class="tw-w-full tw-max-w-lg tw-px-6">
      <!-- Registration Card -->
      <q-card
        class="login-card tw-bg-white/95 tw-backdrop-blur-xl tw-rounded-2xl tw-border tw-border-white/20 tw-shadow-2xl tw-p-8"
      >
        <!-- Header -->
        <div class="tw-text-center tw-mb-8">
          <h1
            class="tw-text-3xl tw-font-bold tw-text-gray-900 tw-mb-2 tw-tracking-tight"
          >
            Join 9nerd.ai
          </h1>
          <p class="tw-text-sm tw-text-gray-600 tw-font-normal">
            Create your educational account
          </p>
        </div>

        <!-- Form -->
        <q-form @submit="onSubmit" class="tw-flex tw-flex-col tw-gap-5">
          <!-- Full Name Field -->
          <AppFormInput
            v-model="fullName"
            type="text"
            label="Full Name"
            :rules="[
              (val) => (val && val.length > 0) || 'Full name is required',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="person_outline" size="20px" />
            </template>
          </AppFormInput>

          <!-- Email Field -->
          <AppFormInput
            v-model="email"
            type="email"
            label="Email"
            :rules="[
              (val) => (val && val.length > 0) || 'Email is required',
              (val) => /.+@.+\..+/.test(val) || 'Please enter a valid email',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="alternate_email" size="20px" />
            </template>
          </AppFormInput>

          <!-- Password Field -->
          <AppFormInput
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
            label="Password"
            :rules="[
              (val) => (val && val.length > 0) || 'Password is required',
              (val) =>
                val.length >= 8 || 'Password must be at least 8 characters',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="lock_outline" size="20px" />
            </template>
            <template v-slot:append>
              <q-btn
                flat
                dense
                round
                :icon="isPwd ? 'visibility_off' : 'visibility'"
                @click="isPwd = !isPwd"
                size="sm"
                class="tw-text-gray-400 hover:tw-text-indigo-500"
              />
            </template>
          </AppFormInput>

          <!-- Confirm Password Field -->
          <AppFormInput
            v-model="confirmPassword"
            :type="isConfirmPwd ? 'password' : 'text'"
            label="Confirm Password"
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Please confirm your password',
              (val) => val === password || 'Passwords do not match',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="lock_outline" size="20px" />
            </template>
            <template v-slot:append>
              <q-btn
                flat
                dense
                round
                :icon="isConfirmPwd ? 'visibility_off' : 'visibility'"
                @click="isConfirmPwd = !isConfirmPwd"
                size="sm"
                class="tw-text-gray-400 hover:tw-text-indigo-500"
              />
            </template>
          </AppFormInput>

          <!-- Organization/Institution (Optional) -->
          <AppFormInput
            v-model="organization"
            type="text"
            label="Organization/Institution (Optional)"
          >
            <template v-slot:prepend>
              <q-icon name="business_center" size="20px" />
            </template>
          </AppFormInput>

          <!-- Terms and Privacy -->
          <div class="tw-mb-0">
            <q-checkbox v-model="acceptTerms" class="remember-checkbox">
              <div class="tw-text-sm tw-text-gray-600">
                I agree to the
                <a href="#" class="tw-text-indigo-500 hover:tw-underline"
                  >Terms of Service</a
                >
                and
                <a href="#" class="tw-text-indigo-500 hover:tw-underline"
                  >Privacy Policy</a
                >
              </div>
            </q-checkbox>
            <q-checkbox
              v-model="subscribeNewsletter"
              label="Subscribe to our educational newsletter"
              class="remember-checkbox"
            />
          </div>

          <!-- Register Button -->
          <q-btn
            type="submit"
            color="primary"
            class="tw-w-full tw-h-12 tw-rounded-xl tw-text-base tw-font-semibold tw-bg-gradient-to-r tw-from-indigo-500 tw-to-purple-600 tw-text-white tw-mt-2 hover:tw-shadow-lg"
            :loading="loading"
            :disable="!acceptTerms"
            unelevated
            no-caps
          >
            <span class="tw-text-white">Create Account</span>
          </q-btn>
        </q-form>

        <!-- Sign In Link -->
        <div
          class="tw-text-center tw-mt-6 tw-pt-6 tw-border-t tw-border-gray-200"
        >
          <span class="tw-text-sm tw-text-gray-600">
            Already have an account?
            <router-link
              to="/auth/login"
              class="tw-text-indigo-500 tw-no-underline tw-font-semibold tw-ml-1 hover:tw-underline hover:tw-text-indigo-600"
            >
              <span class="tw-text-primary">Sign in</span>
            </router-link>
          </span>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import AppFormInput from "../components/common/AppFormInput.vue";

const router = useRouter();
const $q = useQuasar();

// Form data
const fullName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const organization = ref("");
const acceptTerms = ref(false);
const subscribeNewsletter = ref(false);
const isPwd = ref(true);
const isConfirmPwd = ref(true);
const loading = ref(false);

// Form submission
const onSubmit = async () => {
  if (!acceptTerms.value) {
    $q.notify({
      type: "negative",
      message: "Please accept the terms and conditions",
      position: "top",
    });
    return;
  }

  loading.value = true;

  try {
    // TODO: Implement actual registration logic here
    console.log("Registration attempt:", {
      fullName: fullName.value,
      email: email.value,
      password: password.value,
      organization: organization.value,
      subscribeNewsletter: subscribeNewsletter.value,
    });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    $q.notify({
      type: "positive",
      message:
        "Account created successfully! Please check your email for verification.",
      position: "top",
      timeout: 5000,
    });

    // Redirect to login page
    router.push("/auth/login");
  } catch {
    $q.notify({
      type: "negative",
      message: "Registration failed. Please try again.",
      position: "top",
    });
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.remember-checkbox :deep(.q-checkbox__label) {
  font-size: 14px;
  color: #666;
  font-weight: 500;
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .login-card {
    @apply tw-p-6;
  }
}
</style>
