<script setup lang="ts">
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div class="px-6">
        <h1 class="text-black dark:text-zinc-300   font-semibold leading-tight text-4xl md:text-5xl my-5">
          {{ 'Welcome To My Blog Site' }}
        </h1>
        <p class="dark:text-zinc-300  ">
          {{ 'Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more.' }}
        </p>
      </div>
      <div class="px-6 justify-self-center">
        <img src="~/assets/images/blog-img.png" alt="blog" class="w-60 sm:my-0 py-6 ">
      </div>
    </div>
  </div>
</template>
