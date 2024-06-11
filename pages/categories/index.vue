<script  setup>

import { makeFirstCharUpper } from "@/utils/helper";

const { data } = await useAsyncData("all-blog-post-for-category", () =>
  queryContent("/blogs").sort({ _id: -1 }).find()
);


const allTags = new Map();

data.value?.forEach((blog) => {
  const tags = blog.tags || [];
  tags.forEach((tag) => {
    if (allTags.has(tag)) {
      const cnt = allTags.get(tag);
      allTags.set(tag, cnt + 1);
    } else {
      allTags.set(tag, 1);
    }
  });
});

useHead({
  title: "Home",
  meta: [
    {
      name: "description",
    },
  ],
  titleTemplate: "Miracle's Blog - %s",
});

// Generate OG Image
defineOgImageComponent("About", {
  headline: "Greetings 👋",
  title: "Miracle's Blog",
  link: "/Miracle.jpg",
});
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <CategoryHero />
    <div class="flex flex-wrap px-6 mt-12 gap-3">
      <CategoryCard
        v-for="topic in allTags"
        :key="topic[0]"
        :title="makeFirstCharUpper(topic[0])"
        :count="topic[1]"
      />
    </div>
  </main>
</template>
