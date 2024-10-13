<script setup lang="ts">
  import { ref } from 'vue'

  import ChevronDownSvg from '../../shared/svg/ChevronDownSvg.vue'
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
        <ChevronDownSvg />
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
          <div class="check">✔</div>
          <div>{{ item }}</div>
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
          display: flex;
          align-items: center;
          gap: 0.3rem;
          transition: 0.1s linear;
          .check {
            opacity: 0;
          }
          &.active {
            background-color: #f1f1f1;
            .check {
              opacity: 1;
            }
          }
          &:hover {
            background-color: #f3f3f3;
          }
        }
      }
    }
  }
</style>
