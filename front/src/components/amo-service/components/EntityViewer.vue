<script setup lang="ts">
  import useAmoService from '../useAmoService.ts'

  const { deals, companies, contacts } = useAmoService()
</script>

<template>
  <div class="entity-viewer">
    <div class="entity-viewer-column">
      <h4>Сделка</h4>
      <div
        v-for="(deal, _, key) in deals"
        :key="key"
        class="card"
      >
        <div>{{ deal.id }}</div>
        <div>{{ deal.name }}</div>
      </div>
    </div>
    <div class="entity-viewer-column">
      <h4>Контакт</h4>
      <div
        v-for="(contact, _, key) in contacts"
        :key="key"
        class="card"
      >
        <div>{{ contact.id }}</div>
        <div>{{ contact.name }}</div>
      </div>
    </div>
    <div class="entity-viewer-column">
      <h4>Компания</h4>
      <div
        v-for="(deal, _, key) in companies"
        :key="key"
        class="card"
      >
        <div>{{ deal.id }}</div>
        <div>{{ deal.name }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .entity-viewer {
    border: 1px solid #cccccc;
    padding: 1rem;
    border-radius: 3px;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    .entity-viewer-column {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      flex-grow: 1;
      width: 100px;
      h4 {
        margin: 0;
        margin-bottom: 0.5rem;
        text-align: center;
      }
    }
    .card {
      border: 1px solid #cccccc;
      padding: 0.3rem 1rem;
      border-radius: 3px;
      text-align: center;
      font-size: 12px;
    }
  }
</style>
