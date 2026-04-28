<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore'
import TaskItem from './TaskItem.vue'

const store = useTaskStore()
</script>

<template>
  <TaskItem v-for="task in store.tasks" :key="task.id" :task="task" />
</template>
