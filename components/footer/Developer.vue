<script setup lang="ts">
</script>

<template>
  <div>
    <p class="text-black dark:text-zinc-300   text-2xl py-1 font-semibold">
      {{ 'Miracle Michael' }}
    </p>
    <p class="py-2 dark:text-zinc-300  ">
      {{ 'Hi! I am Miracle, a Tech enthusiast, problem solver and software engineer. Currently working at Appscode Inc.' }}
    </p>
    <div class="my-3 space-x-3 pb-3">
      <NuxtLink
        to="https://github.com/nurMiracle"
        target="_blank"
        class="p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]"
        aria-label="Github"
      >
        <Icon name="fa:github" size="1em" />
      </NuxtLink>
      <NuxtLink
        to="https://www.linkedin.com/in/nur-Miracle/"
        target="_blank"
        class="p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]"
        aria-label="LinkedIn"
      >
        <Icon name="fa:linkedin-square" size="1em" />
      </NuxtLink>
      <NuxtLink
        to="https://twitter.com/qdnvubp"
        target="_blank"
        class="p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]"
        aria-label="Twitter"
      >
        <Icon name="fa:twitter-square" size="1em" />
      </NuxtLink>
      <NuxtLink
        to="https://stackoverflow.com/users/16781395/nur-Miracle"
        target="_blank"
        class="p-2 bg-gray-300 text-gray-800 rounded-md dark:bg-sky-700 dark:text-[#F1F2F4]"
        aria-label="StackOverflow"
      >
        <Icon name="fa:stack-overflow" size="1em" />
      </NuxtLink>
    </div>
  </div>
</template>
