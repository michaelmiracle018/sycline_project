<template>
  <div class="px-6 container max-w-7xl mx-auto sm:grid grid-cols-12 gap-x-12">
    <div class="col-span-12 lg:col-span-9">
      <BlogHeader />

      <div
        class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
      >
        <ContentRenderer>
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </div>
    </div>
    <BlogComments />
  </div>
  <div class="flex mt-10 flex-row gap-2 items-center justify-center">
    <SocialShare
      v-for="network in ['facebook', 'twitter', 'linkedin', 'email']"
      :key="network"
      aria-label="Share with {network}"
      :network="network"
      :styled="true"
      :label="true"
      class="p-1 text-white"
    />
  </div>
</template>

<script setup>
const data = computed(() => {
  return {
    title: "no-title available",
    description: "no-description available",
    image: "/not-found.jpg",
    alt: "no alter data available",
    ogImage: "/not-found.jpg",
    date: "not-date-available",
    tags: [],
    published: false,
  };
});
</script>
