<template>
  <section class="bg-gray-50">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="h1-font leading-tight tracking-tight">Login</h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label for="email" class="block mb-2 h2-font">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                class="h2-font border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                placeholder="test@gmail.com"
                required=""
              />
            </div>
            <div>
              <label for="password" class="block mb-2 h2-font">Password</label>
              <input
                :type="showPassword ? 'text' : 'password'"
                name="password"
                id="password"
                placeholder="••••••••"
                class="h2-font border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                required=""
              />
            </div>
            <button
              @click="login"
              type="submit"
              class="w-full h2-font text-white-200 bg-lime-100 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-iris-100 rounded-lg px-5 py-2.5 text-center"
            >
              Sign in
            </button>
            <div class="flex justify-center">
              <a href="#" class="h3-font text-lime-100 hover:underline"
                >Forget your password?</a
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useNuxtApp } from "#app"

definePageMeta({
  middleware: ["adminAuth"]   // testing purpose
  // or middleware: 'auth'
})

const nuxtApp = useNuxtApp();
const api = nuxtApp.$api;

const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
  console.log(showPassword.value);
};

const login = async () => {
  try {
    console.log(api)
    const user = await api.user.login();
    console.log(user);
  } catch(e) {
    console.error(e)
  }
}

// const fetchUser = async () => {
//   try {
//     const user = await api.user.getUser();
//     console.log(user);
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchUser();
</script>

<style lang="scss" scoped></style>
