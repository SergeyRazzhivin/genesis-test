<script setup lang="ts">
  import AmoEntityList from './components/AmoEntityList.vue'
  import CreateEntityButton from './components/CreateEntityButton.vue'
  import EntityViewer from './components/EntityViewer.vue'
</script>

<template>
  <div class="amo-service">
    <div class="left-bar">
      <AmoEntityList />
      <CreateEntityButton />
    </div>
    <EntityViewer />
  </div>
</template>

<style scoped lang="scss">
  .amo-service {
    display: flex;
    gap: 1rem;
    .left-bar {
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
      justify-content: start;
      align-items: start;
    }
  }
</style>
