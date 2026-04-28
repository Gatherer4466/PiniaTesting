<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore'

const store = useTaskStore()
</script>

<template>
  <div>
    <p>Total: {{ store.totalTasks }}</p>
    <p>Done: {{ store.completedTasks.length }}</p>
    <p>Pending: {{ store.pendingTasks.length }}</p>
  </div>
</template>
