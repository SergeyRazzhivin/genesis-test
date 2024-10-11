<script setup lang="ts">
  import { computed } from 'vue'

  import useAmoService from '../useAmoService.ts'

  const { selectedAction } = useAmoService()
  const { createEntity, isPreloader } = useAmoService()
  const isButtonActive = computed(() => {
    return selectedAction.value !== 'Не выбрано'
  })
</script>

<template>
  <button
    :class="['create-entity-button', { active: isButtonActive }]"
    @click="createEntity(selectedAction)"
  >
    <span>Создать</span>
    <svg
      v-if="isPreloader"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
      >
        <animateTransform
          attributeName="transform"
          dur="0.75s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        />
      </path>
    </svg>
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
