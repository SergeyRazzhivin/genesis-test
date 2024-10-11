<script setup lang="ts">
  import { ref } from 'vue'

  import useAmoService from '../useAmoService.ts'

  const { entityActions, selectedAction } = useAmoService()
  const isExpanded = ref(false)
  function openList() {
    isExpanded.value = true
  }
  document.addEventListener('click', function (event) {
    const elem = document.elementsFromPoint(event.clientX, event.clientY)[0]
    const dropdown = elem.closest('.custom-select')
    if (!dropdown) {
      isExpanded.value = false
    }
  })
  function setEntityAction(actionName) {
    selectedAction.value = actionName
    isExpanded.value = false
  }
</script>

<template>
  <div class="amo-entity-list">
    <div class="custom-select">
      <div
        class="custom-select-header"
        @click="openList"
      >
        <div>{{ selectedAction }}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-dasharray="10"
            stroke-dashoffset="10"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 15l-5 -5M12 15l5 -5"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.3s"
              values="10;0"
            />
          </path>
        </svg>
      </div>
      <div
        v-if="isExpanded"
        class="custom-select-dropdown"
      >
        <div
          v-for="(item, _, key) in entityActions"
          :key="key"
          :class="[
            'custom-select-dropdown-item',
            { active: item === selectedAction },
          ]"
          @click="setEntityAction(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .amo-entity-list {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0;
    font-size: 12px;
    .custom-select {
      position: relative;
      .custom-select-header {
        border: 1px solid #cccccc;
        padding: 0.3rem 0.5rem;
        min-width: 200px;
        border-radius: 3px;
        margin-bottom: 1px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        svg {
          height: 15px;
          width: 15px;
        }
      }
      .custom-select-dropdown {
        border-radius: 3px;
        border: 1px solid #cccccc;
        position: absolute;
        z-index: 99999;
        background-color: white;
        left: 0;
        right: 0;
        .custom-select-dropdown-item {
          padding: 0.3rem 0.5rem;
          cursor: pointer;
          &.active {
            background-color: #f3f3f3;
          }
          &:hover {
            background-color: #f3f3f3;
          }
        }
      }
    }
  }
</style>
