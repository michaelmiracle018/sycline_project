<script setup>
const title = ref("no-title");
const image = "no-image";
const alt = "no-image";
const description = "no-description";
const date = "no-image";
const tags = () => [];
</script>

<template>
  <header>
    <h1
      class="text-xl text-zinc-600 h-full md:text-3xl lg:text-4xl mx-7 py-10 font-bold text-center"
    >
      {{ "No title or image" }}
    </h1>
    <NuxtImg
      src="/blogs-img/blog.jpg"
      :alt="alt || ''"
      width="600"
      class="m-auto rounded-2xl shadow-lg h-32 md:h-72 w-4/6 md:w-4/5 content-center object-cover"
    />
    <p
      class="text-xs sm:text-sm my-3 max-w-xl mx-auto text-center text-zinc-600"
    >
      {{ "description" }}
    </p>
    <div class="flex w-full justify-center text-xs md:text-base my-8">
      <div class="md:flex text-black content-center gap-8 text-xs sm:text-sm">
        <div class="flex items-center justify-center font-semibold">
          <LogoDate />
          <p class="text-black text-center dark:text-white">{{ "26th Jan 2023" }}</p>
        </div>
        <div class="flex items-center gap-2 flex-wrap my-5">
          <LogoTag />

          <span
            class="bg-gray-200 rounded-md px-2 py-1 font-semibold text-black"
            >{{ "tag" }}</span
          >
        </div>
      </div>
    </div>
  </header>
</template>
