<template>
  <section class="bg-gray-100">
    <NuxtLink
    class="font-medium text-blue-600 text-md "
    to="/"
    >
    <div class="d-flex flex-row justify-between gap-4 pl-10 pt-5">
      
        Back home

    </div>
    </NuxtLink
  >




    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900"
      >
        MiracleBlog
      </a>
    <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign up to our platform</h5>
        
            <CustomInput
              type="text"
              id="username"
              name="username"
              label="Username"
              placeholder="Enter your username"
              :required="true"
              v-model="username"
              :errorMessages="{ required: 'Username is required.' }"
            />
            <CustomInput
              type="email"
              id="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              :required="true"
              v-model="username"
              :errorMessages="{ required: 'Email is required.' }"
            />

            <CustomInput
              type="password"
              id="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              :required="true"
              v-model="username"
              :errorMessages="{ required: 'Password is required.' }"
            />
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-600"
                    >Remember me</label
                  >
                </div>
              </div>
            
            </div>
          <button
              class="h-10 w-20 text-white rounded-lg bg-blue-500 hover:bg-blue-600 w-full"
            >
              Sign up
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Have an account?
              <NuxtLink
                class="font-medium text-blue-600 hover:underline"
                to="/auth/login"
                >Login</NuxtLink
              >
            </p>
          </form>
      </div>
    </div>
  </section>
</template>

<script>
definePageMeta({
   layout: 'custom'
 })
const formData = reactive({
  email: "",
  password: "",
  userName: "",
  keepLoggedIn: false,
});
</script>

<style lang="scss" scoped></style>
