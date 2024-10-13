<script setup lang="ts">
  import AmoService from './components/amo-service/AmoService.vue'
  import useAuth from './useAuth.ts'

  const { auth } = useAuth()
  auth()
</script>

<template>
  <AmoService />
</template>
