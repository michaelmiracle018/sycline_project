<script setup lang="ts">
const { path } = useRoute();
</script>

<template>
  <div
    class="lg:col-span-3 sticky w-full top-28 h-96 hidden lg:block justify-self-end"
  >
    <div
      class="border dark:border-gray-800 p-3 rounded-md min-w-[200px] dark:bg-slate-900"
    >
      <h1 class="text-sm font-bold mb-3 text-center border-b dark:border-gray-800 pb-2">
        Comments
      </h1>

      <div class="flex gap-2 items-start justify-start mt-4 mb-10">
        <div
        class="relative flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600"
        >
          <span class="font-medium text-gray-600 text-[.7rem] dark:text-gray-300">BG</span>
        </div>
        <div
          class="flex flex-col w-full max-w-[320px] leading-1.5 px-2 pb-2 border-gray-200 bg-gray-200 rounded-e-xl rounded-es-xl dark:bg-gray-700"
        >
          <div class="flex items-center pt-2 space-x-2 rtl:space-x-reverse">
            <span class="text-sm font-semibold text-gray-900 dark:text-white"
              >Bonnie Green</span
            >
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400"
              >11:46</span
            >
          </div>
          <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            That's awesome. I think our users will really appreciate the
            improvements.
          </p>
        </div>
      </div>
      <div>
        <div>
          <div class="w-full">
            <!-- <div class="relative"> 
                <div class="absolute top-4 left-3">
                     <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                </div>
              <input type="text" class="h-14 w-full pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Search anything...">
                <div class="absolute top-2 right-2"> -->

            <button
              class="h-10 text-white rounded-lg bg-blue-500 hover:bg-blue-600 w-full"
            >
              Comment
            </button>

            <!-- </div> -->
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
