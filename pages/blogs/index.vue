<script  setup>
import { reloadNuxtApp } from "nuxt/app";

reloadNuxtApp({
  path: "/blogs"
});


const elementPerPage = ref(5);
const pageNumber = ref(1);
const searchTest = ref("");

const formattedData = computed(() => {
  const allPost = {
    path: "",
    title: "no-title available",
    description: "no-description available",
    image: "/not-found.jpg",
    alt: "no alter data available",
    ogImage: "/not-found.jpg",
    date: "not-date-available",
    tags: "nuxt",
    published: false,
  };
  return allPost;
});

console.log(formattedData);

useHead({
  title: "Archive",
  meta: [
    {
      name: "description",
      content:
        "Here you will find all the blog posts I have written & published on this site.",
    },
  ],
  titleTemplate: "Miracle's Blog - %s",
});

// Generate OG Image
const siteData = useSiteConfig();
defineOgImage({
  props: {
    title: "Archive",
    description:
      "Here you will find all the blog posts I have written & published on this site.",
    siteName: siteData.url,
  },
});
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <ArchiveHero />

    <div class="px-6">
      <div class="w-full">
        <div class="relative">
          <div class="absolute top-4 left-3">
            <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
          </div>
          <input
            type="text"
            class="h-14 w-full pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
            placeholder="Search anything..."
          />
          <div class="absolute top-2 right-2">
            <button
              class="h-10 w-20 text-white rounded-lg bg-blue-500 hover:bg-blue-600"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>

    <ClientOnly>
      <div v-auto-animate class="space-y-5 my-5 px-4">
        <template v-for="post in formattedData" :key="post.title">
          <ArchiveCard
            :path="post.path"
            :title="post.title"
            :date="post.date"
            :description="post.description"
            :image="post.image"
            :alt="post.alt"
            :og-image="post.ogImage"
            :tags="post.tags"
            :published="post.published"
          />
        </template>

        <!-- <ArchiveCard
          v-if="[].length <= 0"
          title="No Post Found"
          image="/not-found.jpg"
        /> -->
      </div>

      <template #fallback>
        <!-- this will be rendered on server side -->
        <BlogLoader />
        <BlogLoader />
      </template>
    </ClientOnly>
    <div class="flex justify-center items-center">
      <div class="fixed bottom-10">
        <NuxtLink to="/createBlog">
        <div
          class="w-20 h-20 flex justify-center items-center max-w-sm bg-white border border-gray-200 rounded-full shadow dark:bg-gray-800 dark:border-gray-700"
        >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-10 text-blue-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
