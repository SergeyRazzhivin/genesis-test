<script setup lang="ts">
  import { computed } from 'vue'

  import PreloaderSvg from '../../shared/svg/PreloaderSvg.vue'
  import { ACTION_TYPES } from '../amoServiceTypes.ts'
  import useAmoService from '../useAmoService.ts'

  const { selectedAction } = useAmoService()
  const { createEntity, isPreloader } = useAmoService()
  const isButtonActive = computed(() => {
    return selectedAction.value !== ACTION_TYPES.NOT_SELECTED
  })
</script>

<template>
  <button
    :class="['create-entity-button', { active: isButtonActive }]"
    @click="createEntity(selectedAction)"
  >
    <span>Создать</span>
    <PreloaderSvg v-if="isPreloader" />
  </button>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  html {
    font-family: 'Roboto', serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-size: 14px;
    border: 1px solid rgba(0, 0, 0, 0);
  }
  .create-entity-button {
    border-radius: 3px;
    cursor: pointer;
    background-color: white;
    border: 1px solid #cccccc;
    display: flex;
    align-items: center;
    justify-content: start;

    padding: 0.4rem 1.3rem;
    svg {
      width: 20px;
      height: 15px;
    }
    &.active {
      border: none;
      color: white;
      background-color: #4b8af5;
    }
  }
</style>
