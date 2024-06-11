<script setup lang="ts">
</script>

<template>
  <div class="container mx-auto mb-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div class="px-6">
        <h1 class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5">
          {{ 'All Blogs' }}
        </h1>
        <p class="dark:text-zinc-300">
          {{ 'Here you will find all the blog posted.'}}
        </p>
      </div>
      <div class="px-6 justify-self-center">
        <!-- <LogoDogpow /> -->
        <!-- <h1>IMAGE HERE</h1> -->
        <div>
          <button
          class="h-10 text-white rounded-lg bg-blue-500 hover:bg-blue-600 w-40 flex justify-center items-center gap-2"
          >
          <span class="text-md">
            Logout
          </span> 
          <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="46" stroke-dashoffset="46" d="M16 5V4C16 3.44772 15.5523 3 15 3H6C5.44771 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H15C15.5523 21 16 20.5523 16 20V19"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="46;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M10 12h11" opacity="0"><set attributeName="opacity" begin="0.6s" to="1"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="12;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M21 12l-3.5 -3.5M21 12l-3.5 3.5" opacity="0"><set attributeName="opacity" begin="0.8s" to="1"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"/></path></g></svg></span>
        
        </button>
          
        </div>

      </div>
    </div>
  </div>
</template>
