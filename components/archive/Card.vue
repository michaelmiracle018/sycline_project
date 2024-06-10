<script lang="ts" setup>
const path = useRoute();
console.log(path.fullPath);
const showDropDown = ref(false);
const toggleShowDropDown = () => {
  console.log(showDropDown.value);
  showDropDown.value = !showDropDown.value;
};
interface Props {
  path?: string;
  title?: string;
  date?: string;
  description?: string;
  image?: string;
  alt?: string;
  ogImage?: string;
  tags?: Array<string>;
  published?: boolean;
}

withDefaults(defineProps<Props>(), {
  path: "/",
  title: "no-title",
  date: "no-date",
  description: "no-description",
  image: "/blogs-img/blog.jpg",
  alt: "no-alt",
  ogImage: "/blogs-img/blog.jpg",
  tags: () => [],
  published: false,
});
</script>

<template>
  <article
    class="group z-1 relative border bg-base-100 dark:border-gray-800 m-2 rounded-2xl overflow-hidden shadow-sm text-zinc-700 dark:text-zinc-300"
  >
    <div class="grid grid-cols-1 sm:grid-cols-10 gap-1">
      <div class="sm:col-span-3">
        <NuxtImg
          class="h-full w-full object-cover object-center rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none shadow-lg group-hover:scale-[1.02] transition-all duration-500"
          width="300"
          :src="image"
          :alt="alt"
        />
      </div>

      <div class="sm:col-span-7 p-5">
        <!-- ! DISPLAY DROPDOWN -->
        <div class="flex justify-end px-4 pt-0 relative z-10">
          <button
            @click="toggleShowDropDown"
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            class="inline-block text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
            type="button"
          >
            <span class="sr-only">Open dropdown</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path
                d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
              />
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div
            v-if="showDropDown"
            class="z-10 absolute  bottom-[-11] right-12 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44"
          >
            <ul class="py-2" aria-labelledby="dropdownButton">
              <li
                class="px-4 py-2 flex flex-row gap-2 items-center hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>

                <a href="#" class="text-sm text-gray-700"> Edit </a>
              </li>
              <li
                class="px-4 py-2 flex flex-row gap-2 items-center hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>

                <a href="#" class="text-sm text-gray-700">Comment</a>
              </li>
             
              <li
                class="px-4 py-2 flex flex-row gap-2 items-center hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4 text-red-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>

                <a href="#" class="text-sm text-red-600">Delete</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- ! DISPLAY DROPDOWN -->
        <h2
          class="text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"
        >
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-2">
          {{ description }}
        </p>
        <div
          class="text-black dark:text-zinc-300 text-sm mt-2 mb-1 md:flex md:space-x-6"
        >
          <div class="flex items-center">
            <LogoDate />
            <p>{{ date }}</p>
          </div>
          <div class="flex items-center gap-1 flex-wrap">
            <LogoTag />
            <p v-for="tag in tags" :key="tag">
              {{ tag }}
            </p>
          </div>
        </div>
        <div
          class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center pt-2"
        >
          <p>Read More</p>
          <LogoArrow />
        </div>
      </div>
    </div>
  </article>
</template>
