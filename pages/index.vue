<script setup>
import { reloadNuxtApp } from "nuxt/app";

reloadNuxtApp({
  path: "/"
});

const { $authStore, $toast } = useNuxtApp()
onMounted(() => {
// console.log($authStore.name);
})
const isModalVisible = ref(false);
  
    function toggleModal() {
      isModalVisible.value = !isModalVisible.value;
    }


const notify = () => {
  $toast.info('toastify success');
  // or
  // toast.info('toastify success');
};
  
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <button @click="notify">Open Modal</button>
    <Modal :show="isModalVisible" @update:show="isModalVisible = $event"></Modal>
      <MainHero />
      <MainRecent />
      <MainTrending /> 
  </main>
</template>
