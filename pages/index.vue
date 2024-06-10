<script  >
export default {

  setup() {
    const isModalVisible = ref(false);
    
    function toggleModal() {
      isModalVisible.value = !isModalVisible.value;
    }
    
    return {
      isModalVisible,
      toggleModal,
    };
  },
}



</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <button @click="toggleModal">Open Modal</button>
    <Modal :show="isModalVisible" @update:show="isModalVisible = $event"></Modal>
      <MainHero />
      <MainRecent />
      <MainTrending /> 
  </main>
</template>
