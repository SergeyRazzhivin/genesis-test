<script setup lang="ts">
  import { ACTION_TYPES } from '../amoServiceTypes.ts'
  import useAmoService from '../useAmoService.ts'

  const { deals, companies, contacts } = useAmoService()
</script>

<template>
  <!--  <div class="entity-viewer">-->
  <!--    <div class="entity-viewer-column">-->
  <!--      <h4>Сделка</h4>-->
  <!--      <div-->
  <!--        v-for="(deal, _, key) in deals"-->
  <!--        :key="key"-->
  <!--        class="card"-->
  <!--      >-->
  <!--        <div>{{ deal.id }}</div>-->
  <!--        <div>{{ deal.name }}</div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <div class="entity-viewer-column">-->
  <!--      <h4>Контакт</h4>-->
  <!--      <div-->
  <!--        v-for="(contact, _, key) in contacts"-->
  <!--        :key="key"-->
  <!--        class="card"-->
  <!--      >-->
  <!--        <div>{{ contact.id }}</div>-->
  <!--        <div>{{ contact.name }}</div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <div class="entity-viewer-column">-->
  <!--      <h4>Компания</h4>-->
  <!--      <div-->
  <!--        v-for="(deal, _, key) in companies"-->
  <!--        :key="key"-->
  <!--        class="card"-->
  <!--      >-->
  <!--        <div>{{ deal.id }}</div>-->
  <!--        <div>{{ deal.name }}</div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <table class="entity-table">
    <thead>
      <tr>
        <th>{{ ACTION_TYPES.DEAL }}</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(deal, _, key) in deals"
        :key="key"
      >
        <th>
          <div class="card">
            <div>{{ deal.id }}</div>
          </div>
        </th>
      </tr>
    </tbody>
  </table>
  <table class="entity-table">
    <thead>
      <tr>
        <th>{{ ACTION_TYPES.CONTACT }}</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(contact, _, key) in contacts"
        :key="key"
      >
        <th>
          <div class="card">
            <div>{{ contact.id }}</div>
          </div>
        </th>
      </tr>
    </tbody>
  </table>
  <table class="entity-table">
    <thead>
      <tr>
        <th>{{ ACTION_TYPES.COMPANY }}</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(company, _, key) in companies"
        :key="key"
      >
        <th>
          <div class="card">
            <div>{{ company.id }}</div>
          </div>
        </th>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
  .entity-table {
    width: 100px;
  }
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
        font-weight: 500;
      }
    }
  }
  .card {
    //border: 1px solid #cccccc;
    background-color: #4b8af5;
    color: white;
    padding: 0.3rem 1rem;
    border-radius: 3px;
    text-align: center;
    font-size: 12px;
  }
</style>
