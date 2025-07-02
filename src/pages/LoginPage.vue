<template>
  <q-page
    class="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-bg-gradient-to-br tw-from-gray-200 tw-to-gray-50"
  >
    <div class="tw-w-full tw-max-w-lg tw-px-6">
      <!-- Login Card -->
      <q-card
        class="login-card tw-bg-white/95 tw-backdrop-blur-xl tw-rounded-2xl tw-border tw-border-white/20 tw-shadow-2xl tw-p-8"
      >
        <!-- Header -->
        <div class="tw-text-center tw-mb-8">
          <h1
            class="tw-text-3xl tw-font-bold tw-text-gray-900 tw-mb-2 tw-tracking-tight"
          >
            9nerd.ai
          </h1>
          <p class="tw-text-sm tw-text-gray-600 tw-font-normal">
            AI Platform for Education
          </p>
        </div>

        <!-- Form -->
        <q-form @submit="onSubmit" class="tw-flex tw-flex-col tw-gap-5">
          <!-- Email Field -->
          <AppFormInput
            v-model="email"
            type="email"
            label="Email"
            :rules="[(val) => (val && val.length > 0) || 'Email is required']"
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

          <!-- Remember Me & Forgot Password -->
          <div class="tw-flex tw-justify-between tw-items-center tw-my-2">
            <q-checkbox
              v-model="rememberMe"
              label="Remember me"
              size="sm"
              class="remember-checkbox"
            />
            <AppFormButton
              label="Forgot password?"
              variant="flat"
              size="small"
              dense
              @click="forgotPassword"
            />
          </div>

          <!-- Login Button -->
          <AppFormButton
            type="submit"
            label="Sign In"
            variant="primary"
            size="large"
            full-width
            :loading="loading"
            class="tw-mt-2"
          />

          <!-- Admin Login Button -->
          <AppFormButton
            label="Login as Admin"
            variant="outline"
            size="medium"
            full-width
            icon="admin_panel_settings"
            :loading="adminLoading"
            class="tw-mt-3"
            @click="loginAsAdmin"
          />
        </q-form>

        <!-- Sign Up Link -->
        <div
          class="tw-text-center tw-mt-6 tw-pt-6 tw-border-t tw-border-gray-200"
        >
          <span class="tw-text-sm tw-text-gray-600">
            Don't have an account?
            <router-link
              to="/auth/register"
              class="tw-text-indigo-500 tw-no-underline tw-font-semibold tw-ml-1 hover:tw-underline hover:tw-text-indigo-600"
            >
              <span class="tw-text-primary">Sign up</span>
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
import AppFormButton from "../components/common/AppFormButton.vue";

const router = useRouter();
const $q = useQuasar();

// Form data
const email = ref("");
const password = ref("");
const rememberMe = ref(false);
const isPwd = ref(true);
const loading = ref(false);
const adminLoading = ref(false);

// Form submission
const onSubmit = async () => {
  loading.value = true;

  try {
    // TODO: Implement actual login logic here
    console.log("Login attempt:", {
      email: email.value,
      password: password.value,
    });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    $q.notify({
      type: "positive",
      message: "Login successful!",
      position: "top",
    });

    // Redirect to home page
    router.push("/");
  } catch {
    $q.notify({
      type: "negative",
      message: "Login failed. Please try again.",
      position: "top",
    });
  } finally {
    loading.value = false;
  }
};

// Forgot password
const forgotPassword = () => {
  $q.notify({
    type: "info",
    message: "Forgot password functionality coming soon!",
    position: "top",
  });
};

// Admin login
const loginAsAdmin = async () => {
  adminLoading.value = true;

  try {
    // TODO: Implement admin login logic here
    console.log("Admin login attempt");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    $q.notify({
      type: "positive",
      message: "Admin login successful!",
      position: "top",
    });

    // Redirect to admin dashboard or home page
    router.push("/");
  } catch {
    $q.notify({
      type: "negative",
      message: "Admin login failed. Please try again.",
      position: "top",
    });
  } finally {
    adminLoading.value = false;
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
